// ========================================
// 🎭 全息投影UI系统 - Holographic UI
// ========================================
// 在3D场景中创建全息投影效果的UI元素

class HologramUI {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.elements = [];
        this.textTextures = new Map();

        console.log('🎭 全息UI系统初始化');
    }

    // 创建全息文本面板
    createTextPanel(text, position, options = {}) {
        const {
            width = 20,
            height = 5,
            color = 0x00ffff,
            fontSize = 48,
            opacity = 0.8
        } = options;

        // 创建canvas纹理
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 1024;
        canvas.height = 256;

        // 绘制文本
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = `bold ${fontSize}px Arial, Microsoft YaHei`;
        context.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);

        // 添加扫描线效果
        context.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        context.lineWidth = 1;
        for (let i = 0; i < canvas.height; i += 4) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(canvas.width, i);
            context.stroke();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;

        // 创建全息材质
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                map: { value: texture },
                time: { value: 0 },
                color: { value: new THREE.Color(color) },
                opacity: { value: opacity },
                scanlineSpeed: { value: 2.0 },
                glitchIntensity: { value: 0.05 }
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                uniform float time;

                void main() {
                    vUv = uv;
                    vPosition = position;

                    // 轻微飘动
                    vec3 pos = position;
                    pos.y += sin(time + position.x * 2.0) * 0.05;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D map;
                uniform float time;
                uniform vec3 color;
                uniform float opacity;
                uniform float scanlineSpeed;
                uniform float glitchIntensity;

                varying vec2 vUv;
                varying vec3 vPosition;

                // 噪声函数
                float rand(vec2 co) {
                    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = vUv;

                    // 故障效果
                    float glitch = rand(vec2(time * 0.1, floor(vUv.y * 20.0)));
                    if (glitch < glitchIntensity) {
                        uv.x += (rand(vec2(time, vUv.y)) - 0.5) * 0.1;
                    }

                    // 读取纹理
                    vec4 texColor = texture2D(map, uv);

                    // 扫描线
                    float scanline = sin(vPosition.y * 50.0 - time * scanlineSpeed) * 0.5 + 0.5;
                    scanline = smoothstep(0.3, 0.7, scanline);

                    // 边缘发光
                    float edge = 1.0 - abs(vUv.x * 2.0 - 1.0);
                    edge *= 1.0 - abs(vUv.y * 2.0 - 1.0);
                    edge = pow(edge, 2.0);

                    // 合成颜色
                    vec3 finalColor = texColor.rgb * color;
                    finalColor += color * scanline * 0.3;
                    finalColor += color * edge * 0.5;

                    // 透明度
                    float alpha = texColor.a * opacity;
                    alpha += edge * 0.3;
                    alpha += scanline * 0.1;

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);

        // 始终面向相机
        mesh.userData.lookAtCamera = true;

        this.scene.add(mesh);
        this.elements.push({ mesh, material, canvas, texture });

        return mesh;
    }

    // 创建全息数据框
    createDataBox(label, value, position, options = {}) {
        const {
            color = 0x00ffff,
            size = 3
        } = options;

        // 创建边框
        const boxGeometry = new THREE.BoxGeometry(size, size, 0.1);
        const edges = new THREE.EdgesGeometry(boxGeometry);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.8
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);

        // 创建发光背景
        const bgMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color(color) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color;
                varying vec2 vUv;

                void main() {
                    // 六边形网格
                    vec2 hexUv = vUv * 10.0;
                    float hex = abs(sin(hexUv.x) * sin(hexUv.y));
                    hex = smoothstep(0.3, 0.7, hex);

                    // 脉冲效果
                    float pulse = sin(time * 2.0) * 0.3 + 0.7;

                    vec3 finalColor = color * (hex * 0.5 + 0.2) * pulse;
                    float alpha = 0.3;

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        });

        const background = new THREE.Mesh(boxGeometry, bgMaterial);

        // 组合
        const group = new THREE.Group();
        group.add(background);
        group.add(wireframe);

        // 添加文本
        const textPanel = this.createTextPanel(`${label}\n${value}`,
            new THREE.Vector3(0, 0, 0.06),
            { width: size * 0.9, height: size * 0.9, color, fontSize: 32 }
        );
        textPanel.userData.lookAtCamera = false; // 文本随父对象旋转
        group.add(textPanel);

        group.position.copy(position);
        group.userData.lookAtCamera = true;

        this.scene.add(group);
        this.elements.push({ mesh: group, material: bgMaterial });

        return group;
    }

    // 创建全息圆环指示器
    createRingIndicator(position, radius = 2, options = {}) {
        const {
            color = 0x00ffff,
            segments = 64
        } = options;

        const geometry = new THREE.RingGeometry(radius * 0.9, radius, segments);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color(color) }
            },
            vertexShader: `
                varying vec2 vUv;
                uniform float time;

                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    pos.z += sin(time * 2.0 + atan(pos.y, pos.x) * 8.0) * 0.1;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color;
                varying vec2 vUv;

                void main() {
                    // 旋转扫描效果
                    vec2 center = vUv - vec2(0.5);
                    float angle = atan(center.y, center.x);
                    float sweep = mod(angle + time * 2.0, 6.28318530718) / 6.28318530718;

                    // 脉冲
                    float pulse = sin(time * 3.0) * 0.3 + 0.7;

                    vec3 finalColor = color * (sweep * 0.5 + 0.5) * pulse;
                    float alpha = 0.6 + sweep * 0.4;

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        });

        const ring = new THREE.Mesh(geometry, material);
        ring.position.copy(position);
        ring.rotation.x = -Math.PI / 2; // 水平放置

        this.scene.add(ring);
        this.elements.push({ mesh: ring, material });

        return ring;
    }

    // 更新所有元素
    update(time) {
        this.elements.forEach(element => {
            if (element.material.uniforms && element.material.uniforms.time) {
                element.material.uniforms.time.value = time;
            }

            // 让元素面向相机
            if (element.mesh.userData.lookAtCamera) {
                element.mesh.lookAt(this.camera.position);
            }
        });
    }

    // 更新文本面板内容
    updateTextPanel(mesh, newText) {
        const element = this.elements.find(e => e.mesh === mesh);
        if (element && element.canvas) {
            const context = element.canvas.getContext('2d');
            const canvas = element.canvas;

            // 清空画布
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 重新绘制
            context.font = 'bold 48px Arial, Microsoft YaHei';
            context.fillStyle = '#00ffff';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(newText, canvas.width / 2, canvas.height / 2);

            element.texture.needsUpdate = true;
        }
    }

    // 移除元素
    removeElement(mesh) {
        const index = this.elements.findIndex(e => e.mesh === mesh);
        if (index !== -1) {
            this.scene.remove(mesh);
            this.elements.splice(index, 1);
        }
    }

    // 清除所有元素
    clear() {
        this.elements.forEach(element => {
            this.scene.remove(element.mesh);
            if (element.material) {
                element.material.dispose();
            }
            if (element.texture) {
                element.texture.dispose();
            }
        });
        this.elements = [];
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HologramUI };
}
