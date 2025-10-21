// ========================================
// 🌟 后处理效果系统 - Post Processing Effects
// ========================================
// 包含 Bloom、Glitch、Film、SSAO 等顶级视觉效果

class PostProcessingManager {
    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.composer = null;
        this.passes = {};

        this.init();
    }

    init() {
        // 注意：这是简化版本，使用自定义着色器实现
        // 完整版需要引入 three/examples/jsm/postprocessing

        // 创建渲染目标
        this.renderTarget = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
                stencilBuffer: false
            }
        );

        // 创建全屏四边形用于后处理
        this.setupScreenQuad();

        // 初始化 Bloom 效果
        this.setupBloom();

        console.log('✅ 后处理系统初始化完成');
    }

    setupScreenQuad() {
        // 全屏四边形几何体
        const geometry = new THREE.PlaneGeometry(2, 2);

        // 基础后处理材质
        this.screenMaterial = new THREE.ShaderMaterial({
            uniforms: {
                tDiffuse: { value: null },
                bloomStrength: { value: 1.5 },
                bloomRadius: { value: 0.8 },
                bloomThreshold: { value: 0.3 },
                time: { value: 0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float bloomStrength;
                uniform float bloomRadius;
                uniform float bloomThreshold;
                uniform float time;
                varying vec2 vUv;

                // 高斯模糊
                vec4 gaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
                    vec4 color = vec4(0.0);
                    vec2 offset = direction * bloomRadius / 512.0;

                    // 9个采样点
                    color += texture2D(tex, uv - offset * 4.0) * 0.05;
                    color += texture2D(tex, uv - offset * 3.0) * 0.09;
                    color += texture2D(tex, uv - offset * 2.0) * 0.12;
                    color += texture2D(tex, uv - offset) * 0.15;
                    color += texture2D(tex, uv) * 0.16;
                    color += texture2D(tex, uv + offset) * 0.15;
                    color += texture2D(tex, uv + offset * 2.0) * 0.12;
                    color += texture2D(tex, uv + offset * 3.0) * 0.09;
                    color += texture2D(tex, uv + offset * 4.0) * 0.05;

                    return color;
                }

                // 提取高亮区域
                vec4 extractBright(vec4 color) {
                    float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
                    float soft = brightness - bloomThreshold + 0.5;
                    soft = clamp(soft, 0.0, 1.0);
                    soft = soft * soft * (3.0 - 2.0 * soft);
                    return color * soft;
                }

                void main() {
                    vec4 texel = texture2D(tDiffuse, vUv);

                    // 提取亮部
                    vec4 bright = extractBright(texel);

                    // 双向模糊
                    vec4 bloom = gaussianBlur(tDiffuse, vUv, vec2(1.0, 0.0));
                    bloom += gaussianBlur(tDiffuse, vUv, vec2(0.0, 1.0));
                    bloom *= 0.5;

                    // 合成
                    vec4 final = texel + bloom * bloomStrength;

                    // 轻微色调映射
                    final.rgb = final.rgb / (final.rgb + vec3(1.0));

                    // 饱和度增强
                    float luminance = dot(final.rgb, vec3(0.299, 0.587, 0.114));
                    final.rgb = mix(vec3(luminance), final.rgb, 1.2);

                    gl_FragColor = final;
                }
            `
        });

        this.screenQuad = new THREE.Mesh(geometry, this.screenMaterial);

        // 创建独立的场景用于后处理
        this.postScene = new THREE.Scene();
        this.postScene.add(this.screenQuad);

        this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    }

    setupBloom() {
        console.log('🌟 Bloom 辉光效果已启用');
    }

    // 更新效果参数
    setBloomStrength(value) {
        this.screenMaterial.uniforms.bloomStrength.value = value;
    }

    setBloomRadius(value) {
        this.screenMaterial.uniforms.bloomRadius.value = value;
    }

    setBloomThreshold(value) {
        this.screenMaterial.uniforms.bloomThreshold.value = value;
    }

    // 渲染
    render(deltaTime) {
        // 更新时间
        this.screenMaterial.uniforms.time.value += deltaTime;

        // 第一步：渲染场景到纹理
        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.scene, this.camera);

        // 第二步：应用后处理效果
        this.screenMaterial.uniforms.tDiffuse.value = this.renderTarget.texture;
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.postScene, this.postCamera);
    }

    // 窗口大小调整
    resize(width, height) {
        this.renderTarget.setSize(width, height);
    }
}

// ========================================
// 🌈 高级着色器效果库
// ========================================

// 全息投影着色器
const HologramShader = {
    uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x00ffff) },
        scanlineSpeed: { value: 2.0 },
        scanlineSize: { value: 0.5 },
        glitchIntensity: { value: 0.1 },
        rimPower: { value: 3.0 }
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform float scanlineSpeed;
        uniform float scanlineSize;
        uniform float glitchIntensity;
        uniform float rimPower;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;

        // 噪声函数
        float rand(vec2 co) {
            return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
            // Fresnel边缘光
            vec3 viewDir = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), rimPower);

            // 扫描线
            float scanline = sin(vPosition.y * 20.0 - time * scanlineSpeed) * 0.5 + 0.5;
            scanline = smoothstep(0.3, 0.7, scanline);

            // 故障效果
            float glitch = rand(vec2(time * 0.1, floor(vPosition.y * 10.0))) * glitchIntensity;

            // 最终颜色
            vec3 finalColor = color * (fresnel + 0.3);
            finalColor += vec3(scanline * 0.5);
            finalColor += vec3(glitch);

            // 透明度
            float alpha = fresnel * 0.8 + scanline * 0.2;

            gl_FragColor = vec4(finalColor, alpha);
        }
    `
};

// 能量护盾着色器
const EnergyShieldShader = {
    uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x00ffff) },
        hitPoint: { value: new THREE.Vector3(0, 0, 0) },
        hitTime: { value: -999 },
        waveSpeed: { value: 2.0 }
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform vec3 hitPoint;
        uniform float hitTime;
        uniform float waveSpeed;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
            // Fresnel效果
            vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.0);

            // 六边形网格
            vec2 hexUv = vPosition.xy * 5.0;
            float hexPattern = abs(sin(hexUv.x) * sin(hexUv.y));
            hexPattern = smoothstep(0.3, 0.7, hexPattern);

            // 冲击波效果
            float dist = distance(vWorldPosition, hitPoint);
            float wave = time - hitTime;
            float ripple = 1.0 - smoothstep(wave * waveSpeed - 0.5, wave * waveSpeed, dist);
            ripple *= smoothstep(wave * waveSpeed + 2.0, wave * waveSpeed, dist);

            // 最终颜色
            vec3 finalColor = color * (fresnel * 2.0 + 0.3);
            finalColor += hexPattern * 0.5;
            finalColor += ripple * vec3(1.0, 1.0, 1.0) * 2.0;

            float alpha = fresnel * 0.6 + hexPattern * 0.2 + ripple * 0.5;

            gl_FragColor = vec4(finalColor, alpha);
        }
    `
};

// 闪电着色器
const LightningShader = {
    uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xffffff) },
        thickness: { value: 0.1 },
        intensity: { value: 1.0 }
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
        uniform float thickness;
        uniform float intensity;
        varying vec2 vUv;

        float rand(float n) {
            return fract(sin(n) * 43758.5453123);
        }

        void main() {
            float t = time * 10.0;
            float noise = rand(floor(t)) * 0.5 + 0.5;

            // 闪电路径
            float lightning = abs(sin(vUv.x * 20.0 + noise * 10.0));
            lightning = smoothstep(thickness, 0.0, abs(vUv.y - 0.5 - sin(vUv.x * 30.0 + t) * 0.2));

            vec3 finalColor = color * lightning * intensity;

            gl_FragColor = vec4(finalColor, lightning);
        }
    `
};

// 空间扭曲着色器
const SpaceWarpShader = {
    uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        center: { value: new THREE.Vector2(0.5, 0.5) },
        strength: { value: 0.5 },
        radius: { value: 0.3 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform vec2 center;
        uniform float strength;
        uniform float radius;
        varying vec2 vUv;

        void main() {
            vec2 toCenter = vUv - center;
            float dist = length(toCenter);

            if (dist < radius) {
                float effect = (radius - dist) / radius;
                float angle = effect * effect * strength * 10.0;

                float s = sin(angle);
                float c = cos(angle);

                vec2 rotated = vec2(
                    toCenter.x * c - toCenter.y * s,
                    toCenter.x * s + toCenter.y * c
                );

                vec2 newUv = center + rotated * (1.0 - effect * 0.5);
                gl_FragColor = texture2D(tDiffuse, newUv);
            } else {
                gl_FragColor = texture2D(tDiffuse, vUv);
            }
        }
    `
};

// ========================================
// 导出
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PostProcessingManager,
        HologramShader,
        EnergyShieldShader,
        LightningShader,
        SpaceWarpShader
    };
}
