// ========================================
// 🛡️ 能量护盾系统 - Energy Shield
// ========================================
// 为飞船添加动态能量护盾效果

class EnergyShield {
    constructor(scene, targetObject) {
        this.scene = scene;
        this.target = targetObject;
        this.shield = null;
        this.active = false;
        this.hitPoints = [];
        this.maxHitPoints = 5;

        this.init();
    }

    init() {
        // 创建护盾几何体（球形）
        const geometry = new THREE.SphereGeometry(5, 32, 32);

        // 护盾着色器材质
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color(0x00ffff) },
                opacity: { value: 0 },
                hitPoint1: { value: new THREE.Vector3(999, 999, 999) },
                hitPoint2: { value: new THREE.Vector3(999, 999, 999) },
                hitPoint3: { value: new THREE.Vector3(999, 999, 999) },
                hitTime1: { value: -999 },
                hitTime2: { value: -999 },
                hitTime3: { value: -999 },
                waveSpeed: { value: 3.0 },
                hexSize: { value: 15.0 }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec3 vWorldPosition;
                uniform float time;

                // 简单噪声
                float noise(vec3 p) {
                    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
                }

                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = position;

                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPos.xyz;

                    // 添加轻微脉冲
                    vec3 pos = position;
                    float pulse = sin(time * 2.0) * 0.05 + 1.0;
                    pos *= pulse;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color;
                uniform float opacity;
                uniform vec3 hitPoint1, hitPoint2, hitPoint3;
                uniform float hitTime1, hitTime2, hitTime3;
                uniform float waveSpeed;
                uniform float hexSize;

                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec3 vWorldPosition;

                // 六边形网格函数
                float hexagon(vec2 p) {
                    vec2 q = vec2(p.x * 2.0 * 0.5773, p.y + p.x * 0.5773);
                    vec2 pi = floor(q);
                    vec2 pf = fract(q);

                    float v = mod(pi.x + pi.y, 3.0);
                    float ca = step(1.0, v);
                    float cb = step(2.0, v);
                    vec2 ma = step(pf.xy, pf.yx);

                    return dot(ma, 1.0 - pf.yx + ca * (pf.x + pf.y - 1.0) + cb * (pf.yx - 2.0 * pf.xy));
                }

                // 计算冲击波
                float calculateRipple(vec3 hitPoint, float hitTime) {
                    if (hitTime < -900.0) return 0.0;

                    float dist = distance(vWorldPosition, hitPoint);
                    float wave = time - hitTime;

                    if (wave > 2.0) return 0.0;

                    float ripple = 1.0 - smoothstep(wave * waveSpeed - 0.3, wave * waveSpeed, dist);
                    ripple *= smoothstep(wave * waveSpeed + 1.5, wave * waveSpeed, dist);
                    ripple *= (1.0 - wave / 2.0); // 淡出

                    return ripple;
                }

                void main() {
                    // Fresnel 边缘光
                    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
                    float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);

                    // 六边形网格
                    vec2 hexUv = vPosition.xy * hexSize;
                    float hexPattern = hexagon(hexUv);
                    hexPattern = smoothstep(0.4, 0.6, hexPattern);

                    // 能量流动
                    float flow = sin(vPosition.y * 10.0 + time * 2.0) * 0.5 + 0.5;
                    flow += sin(vPosition.x * 10.0 - time * 1.5) * 0.5 + 0.5;
                    flow *= 0.5;

                    // 计算所有冲击波
                    float ripple = 0.0;
                    ripple += calculateRipple(hitPoint1, hitTime1);
                    ripple += calculateRipple(hitPoint2, hitTime2);
                    ripple += calculateRipple(hitPoint3, hitTime3);
                    ripple = clamp(ripple, 0.0, 1.0);

                    // 最终颜色
                    vec3 finalColor = color * (fresnel * 1.5 + 0.3);
                    finalColor += hexPattern * 0.4;
                    finalColor += flow * 0.2;
                    finalColor += ripple * vec3(1.0, 1.0, 1.0) * 3.0; // 冲击波发光

                    // 透明度
                    float alpha = (fresnel * 0.5 + hexPattern * 0.2 + flow * 0.1 + ripple * 0.8) * opacity;

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            side: THREE.BackSide, // 从内部渲染
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.shield = new THREE.Mesh(geometry, material);
        this.shield.visible = false;

        // 添加到目标对象
        if (this.target) {
            this.target.add(this.shield);
        } else {
            this.scene.add(this.shield);
        }

        console.log('🛡️ 能量护盾系统已创建');
    }

    // 激活护盾
    activate(duration = 2.0, color = 0x00ffff) {
        if (!this.shield) return;

        this.active = true;
        this.shield.visible = true;
        this.shield.material.uniforms.color.value.setHex(color);

        // 淡入动画
        const startTime = Date.now();
        const fadeIn = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            if (elapsed < 0.3) {
                this.shield.material.uniforms.opacity.value = elapsed / 0.3;
                requestAnimationFrame(fadeIn);
            } else {
                this.shield.material.uniforms.opacity.value = 1.0;
                // 设置自动淡出
                setTimeout(() => this.deactivate(), duration * 1000);
            }
        };
        fadeIn();
    }

    // 关闭护盾
    deactivate() {
        if (!this.shield) return;

        const startOpacity = this.shield.material.uniforms.opacity.value;
        const startTime = Date.now();
        const fadeOut = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            if (elapsed < 0.5) {
                this.shield.material.uniforms.opacity.value = startOpacity * (1 - elapsed / 0.5);
                requestAnimationFrame(fadeOut);
            } else {
                this.shield.material.uniforms.opacity.value = 0;
                this.shield.visible = false;
                this.active = false;
            }
        };
        fadeOut();
    }

    // 添加撞击点
    addHit(worldPosition) {
        if (!this.shield || !this.active) return;

        const time = this.shield.material.uniforms.time.value;

        // 循环使用撞击点位置
        if (this.hitPoints.length < this.maxHitPoints) {
            this.hitPoints.push({
                position: worldPosition.clone(),
                time: time
            });
        } else {
            // 替换最老的撞击点
            this.hitPoints.shift();
            this.hitPoints.push({
                position: worldPosition.clone(),
                time: time
            });
        }

        // 更新shader uniforms
        if (this.hitPoints.length > 0) {
            this.shield.material.uniforms.hitPoint1.value.copy(this.hitPoints[this.hitPoints.length - 1].position);
            this.shield.material.uniforms.hitTime1.value = this.hitPoints[this.hitPoints.length - 1].time;
        }
        if (this.hitPoints.length > 1) {
            this.shield.material.uniforms.hitPoint2.value.copy(this.hitPoints[this.hitPoints.length - 2].position);
            this.shield.material.uniforms.hitTime2.value = this.hitPoints[this.hitPoints.length - 2].time;
        }
        if (this.hitPoints.length > 2) {
            this.shield.material.uniforms.hitPoint3.value.copy(this.hitPoints[this.hitPoints.length - 3].position);
            this.shield.material.uniforms.hitTime3.value = this.hitPoints[this.hitPoints.length - 3].time;
        }
    }

    // 更新
    update(time) {
        if (this.shield) {
            this.shield.material.uniforms.time.value = time;
        }
    }

    // 设置颜色
    setColor(color) {
        if (this.shield) {
            this.shield.material.uniforms.color.value.setHex(color);
        }
    }

    // 设置大小
    setSize(radius) {
        if (this.shield) {
            this.shield.scale.set(radius / 5, radius / 5, radius / 5);
        }
    }

    // 销毁
    dispose() {
        if (this.shield) {
            if (this.target) {
                this.target.remove(this.shield);
            } else {
                this.scene.remove(this.shield);
            }
            this.shield.geometry.dispose();
            this.shield.material.dispose();
            this.shield = null;
        }
    }
}

// ========================================
// 🌀 脉冲护盾（简化版，快速展开效果）
// ========================================

class PulseShield {
    constructor(scene) {
        this.scene = scene;
        this.pulses = [];
    }

    // 创建脉冲
    createPulse(position, color = 0x00ffff, maxRadius = 10) {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                progress: { value: 0 },
                color: { value: new THREE.Color(color) }
            },
            vertexShader: `
                uniform float progress;
                void main() {
                    vec3 pos = position * (1.0 + progress * 10.0);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform float progress;
                uniform vec3 color;
                void main() {
                    float alpha = (1.0 - progress) * 0.6;
                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        });

        const pulse = new THREE.Mesh(geometry, material);
        pulse.position.copy(position);
        this.scene.add(pulse);

        const startTime = Date.now();
        const duration = 0.8; // 0.8秒展开

        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);

            material.uniforms.progress.value = progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.scene.remove(pulse);
                geometry.dispose();
                material.dispose();
            }
        };
        animate();

        this.pulses.push(pulse);
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EnergyShield, PulseShield };
}
