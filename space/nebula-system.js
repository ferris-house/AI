// ========================================
// 🌌 程序化星云系统 - Procedural Nebula
// ========================================
// 使用噪声函数生成逼真的星云效果

class NebulaSystem {
    constructor(scene) {
        this.scene = scene;
        this.nebulae = [];
        this.init();
    }

    init() {
        // 创建多层星云
        this.createNebulaLayer(0xff00ff, 0.3, 200, -500);  // 紫色星云
        this.createNebulaLayer(0x00ffff, 0.25, 180, -450); // 青色星云
        this.createNebulaLayer(0xff0099, 0.2, 220, -550);  // 粉色星云

        console.log('🌌 程序化星云系统已创建');
    }

    createNebulaLayer(color, opacity, size, zPosition) {
        // 创建云雾粒子
        const particleCount = 3000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const colorObj = new THREE.Color(color);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // 使用高斯分布创建更自然的聚集
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * Math.random() * size; // 平方分布
            const height = (Math.random() - 0.5) * size * 0.5;

            positions[i3] = Math.cos(angle) * radius;
            positions[i3 + 1] = height;
            positions[i3 + 2] = Math.sin(angle) * radius + zPosition;

            // 颜色变化
            const variation = 0.7 + Math.random() * 0.3;
            colors[i3] = colorObj.r * variation;
            colors[i3 + 1] = colorObj.g * variation;
            colors[i3 + 2] = colorObj.b * variation;

            // 大小变化
            sizes[i] = 2 + Math.random() * 8;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // 星云材质（使用着色器）
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                opacity: { value: opacity }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                varying float vAlpha;
                uniform float time;

                // 简化的噪声函数
                float noise(vec3 p) {
                    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
                }

                void main() {
                    vColor = color;

                    // 添加缓慢飘动
                    vec3 pos = position;
                    pos.x += sin(time * 0.1 + position.y * 0.01) * 5.0;
                    pos.y += cos(time * 0.15 + position.x * 0.01) * 3.0;

                    // 基于深度的透明度
                    float depth = (modelViewMatrix * vec4(pos, 1.0)).z;
                    vAlpha = smoothstep(-600.0, -300.0, depth);

                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform float opacity;
                varying vec3 vColor;
                varying float vAlpha;

                void main() {
                    // 圆形粒子
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);

                    if (dist > 0.5) discard;

                    // 柔和边缘
                    float alpha = smoothstep(0.5, 0.0, dist);
                    alpha *= opacity * vAlpha;

                    // 添加轻微发光
                    vec3 glow = vColor * (1.0 - dist * 0.5);

                    gl_FragColor = vec4(glow, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        const nebula = new THREE.Points(geometry, material);
        this.scene.add(nebula);
        this.nebulae.push({ mesh: nebula, material: material, speed: 0.3 + Math.random() * 0.2 });

        return nebula;
    }

    // 更新动画
    update(time) {
        this.nebulae.forEach(nebula => {
            nebula.material.uniforms.time.value = time * nebula.speed;
            nebula.mesh.rotation.z += 0.00005;
        });
    }

    // 设置可见性
    setVisible(visible) {
        this.nebulae.forEach(nebula => {
            nebula.mesh.visible = visible;
        });
    }
}

// ========================================
// 🌟 3D体积星云（更高级）
// ========================================

class VolumetricNebula {
    constructor(scene) {
        this.scene = scene;
        this.mesh = null;
        this.init();
    }

    init() {
        // 使用立方体网格创建体积效果
        const size = 300;
        const geometry = new THREE.BoxGeometry(size, size, size);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: new THREE.Color(0x00ffff) },
                color2: { value: new THREE.Color(0xff00ff) },
                color3: { value: new THREE.Color(0xff0099) }
            },
            vertexShader: `
                varying vec3 vPosition;
                varying vec3 vNormal;

                void main() {
                    vPosition = position;
                    vNormal = normal;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color1;
                uniform vec3 color2;
                uniform vec3 color3;
                varying vec3 vPosition;
                varying vec3 vNormal;

                // 3D噪声函数
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

                float snoise(vec3 v) {
                    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

                    vec3 i  = floor(v + dot(v, C.yyy));
                    vec3 x0 = v - i + dot(i, C.xxx);

                    vec3 g = step(x0.yzx, x0.xyz);
                    vec3 l = 1.0 - g;
                    vec3 i1 = min(g.xyz, l.zxy);
                    vec3 i2 = max(g.xyz, l.zxy);

                    vec3 x1 = x0 - i1 + C.xxx;
                    vec3 x2 = x0 - i2 + C.yyy;
                    vec3 x3 = x0 - D.yyy;

                    i = mod289(i);
                    vec4 p = permute(permute(permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0))
                        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0));

                    float n_ = 0.142857142857;
                    vec3 ns = n_ * D.wyz - D.xzx;

                    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

                    vec4 x_ = floor(j * ns.z);
                    vec4 y_ = floor(j - 7.0 * x_);

                    vec4 x = x_ *ns.x + ns.yyyy;
                    vec4 y = y_ *ns.x + ns.yyyy;
                    vec4 h = 1.0 - abs(x) - abs(y);

                    vec4 b0 = vec4(x.xy, y.xy);
                    vec4 b1 = vec4(x.zw, y.zw);

                    vec4 s0 = floor(b0)*2.0 + 1.0;
                    vec4 s1 = floor(b1)*2.0 + 1.0;
                    vec4 sh = -step(h, vec4(0.0));

                    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

                    vec3 p0 = vec3(a0.xy, h.x);
                    vec3 p1 = vec3(a0.zw, h.y);
                    vec3 p2 = vec3(a1.xy, h.z);
                    vec3 p3 = vec3(a1.zw, h.w);

                    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                    p0 *= norm.x;
                    p1 *= norm.y;
                    p2 *= norm.z;
                    p3 *= norm.w;

                    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                    m = m * m;
                    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
                }

                void main() {
                    // 多层噪声
                    float n = 0.0;
                    vec3 pos = vPosition * 0.005 + vec3(time * 0.05);

                    // 多个octave叠加
                    n += snoise(pos) * 0.5;
                    n += snoise(pos * 2.0) * 0.25;
                    n += snoise(pos * 4.0) * 0.125;
                    n += snoise(pos * 8.0) * 0.0625;

                    // 归一化
                    n = (n + 1.0) * 0.5;

                    // 颜色混合
                    vec3 color;
                    if (n < 0.33) {
                        color = mix(color1, color2, n * 3.0);
                    } else if (n < 0.66) {
                        color = mix(color2, color3, (n - 0.33) * 3.0);
                    } else {
                        color = mix(color3, color1, (n - 0.66) * 3.0);
                    }

                    // 边缘淡出
                    vec3 viewDir = normalize(cameraPosition - vPosition);
                    float edge = abs(dot(vNormal, viewDir));
                    float alpha = (1.0 - edge) * n * 0.3;

                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            depthWrite: false
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = -500;
        this.scene.add(this.mesh);

        console.log('🌟 3D体积星云已创建');
    }

    update(time) {
        if (this.mesh) {
            this.mesh.material.uniforms.time.value = time;
            this.mesh.rotation.x = time * 0.01;
            this.mesh.rotation.y = time * 0.015;
        }
    }

    setVisible(visible) {
        if (this.mesh) {
            this.mesh.visible = visible;
        }
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NebulaSystem, VolumetricNebula };
}
