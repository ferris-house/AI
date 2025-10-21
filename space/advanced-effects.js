// ========================================
// 高级视觉特效系统
// ========================================

// 光晕后处理效果
class BloomEffect {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.enabled = true;
    }

    // 创建发光材质
    createGlowMaterial(color, intensity = 1.0) {
        return new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
    }

    // 为对象添加光晕
    addGlow(object, color, scale = 1.2) {
        const geometry = object.geometry.clone();
        const material = this.createGlowMaterial(color);
        const glow = new THREE.Mesh(geometry, material);
        glow.scale.multiplyScalar(scale);
        object.add(glow);
        return glow;
    }
}

// 激光射线效果
class LaserEffect {
    constructor(scene) {
        this.scene = scene;
        this.lasers = [];
    }

    // 发射激光
    fire(startPos, targetPos, color = 0x00ffff) {
        const direction = new THREE.Vector3().subVectors(targetPos, startPos);
        const distance = direction.length();

        // 创建激光几何体
        const geometry = new THREE.CylinderGeometry(0.1, 0.1, distance, 8);
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.8
        });

        const laser = new THREE.Mesh(geometry, material);

        // 位置和旋转
        laser.position.copy(startPos).add(direction.multiplyScalar(0.5));
        laser.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction.normalize()
        );

        // 添加光晕
        const glowGeometry = new THREE.CylinderGeometry(0.3, 0.3, distance, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        laser.add(glow);

        this.scene.add(laser);
        this.lasers.push({ mesh: laser, life: 1.0 });

        return laser;
    }

    // 更新激光效果
    update() {
        for (let i = this.lasers.length - 1; i >= 0; i--) {
            const laser = this.lasers[i];
            laser.life -= 0.05;
            laser.mesh.material.opacity = laser.life * 0.8;

            if (laser.life <= 0) {
                this.scene.remove(laser.mesh);
                this.lasers.splice(i, 1);
            }
        }
    }
}

// 星尘拖尾效果
class TrailEffect {
    constructor(scene) {
        this.scene = scene;
        this.trails = [];
    }

    // 添加拖尾
    addTrail(position, color = 0x00ffff, count = 5) {
        for (let i = 0; i < count; i++) {
            const geometry = new THREE.SphereGeometry(0.2, 8, 8);
            const material = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.6
            });
            const trail = new THREE.Mesh(geometry, material);
            trail.position.copy(position);
            trail.position.x += (Math.random() - 0.5) * 2;
            trail.position.y += (Math.random() - 0.5) * 2;

            this.scene.add(trail);
            this.trails.push({
                mesh: trail,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1,
                    Math.random() * 0.2
                ),
                life: 1.0
            });
        }
    }

    // 更新拖尾
    update() {
        for (let i = this.trails.length - 1; i >= 0; i--) {
            const trail = this.trails[i];
            trail.mesh.position.add(trail.velocity);
            trail.life -= 0.02;
            trail.mesh.material.opacity = trail.life * 0.6;
            trail.mesh.scale.multiplyScalar(0.95);

            if (trail.life <= 0) {
                this.scene.remove(trail.mesh);
                this.trails.splice(i, 1);
            }
        }
    }
}

// 屏幕震动效果
class ScreenShake {
    constructor(camera) {
        this.camera = camera;
        this.originalPosition = camera.position.clone();
        this.isShaking = false;
        this.intensity = 0;
        this.duration = 0;
    }

    // 开始震动
    shake(intensity = 0.5, duration = 0.3) {
        this.isShaking = true;
        this.intensity = intensity;
        this.duration = duration;
        this.originalPosition.copy(this.camera.position);
    }

    // 更新震动
    update(deltaTime) {
        if (!this.isShaking) return;

        this.duration -= deltaTime;

        if (this.duration <= 0) {
            this.isShaking = false;
            this.camera.position.copy(this.originalPosition);
        } else {
            const shake = this.intensity * (this.duration / 0.3);
            this.camera.position.x = this.originalPosition.x + (Math.random() - 0.5) * shake;
            this.camera.position.y = this.originalPosition.y + (Math.random() - 0.5) * shake;
        }
    }
}

// 文字飘动效果
class FloatingText {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.texts = [];
    }

    // 创建飘动文字
    create(text, position, color = '#00ffff', size = 32) {
        // 创建Canvas纹理
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = color;
        ctx.font = `bold ${size}px Orbitron, Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(text, 128, 45);

        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({
            map: texture,
            transparent: true
        });

        const sprite = new THREE.Sprite(material);
        sprite.position.copy(position);
        sprite.scale.set(5, 1.25, 1);

        this.scene.add(sprite);
        this.texts.push({
            mesh: sprite,
            velocity: new THREE.Vector3(0, 0.5, 0),
            life: 1.0
        });
    }

    // 更新飘动文字
    update() {
        for (let i = this.texts.length - 1; i >= 0; i--) {
            const text = this.texts[i];
            text.mesh.position.add(text.velocity);
            text.life -= 0.02;
            text.mesh.material.opacity = text.life;

            if (text.life <= 0) {
                this.scene.remove(text.mesh);
                this.texts.splice(i, 1);
            }
        }
    }
}

// 能量波纹效果
class RippleEffect {
    constructor(scene) {
        this.scene = scene;
        this.ripples = [];
    }

    // 创建波纹
    create(position, color = 0x00ffff) {
        const geometry = new THREE.RingGeometry(0.1, 0.5, 32);
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });

        const ripple = new THREE.Mesh(geometry, material);
        ripple.position.copy(position);
        ripple.rotation.x = Math.PI / 2;

        this.scene.add(ripple);
        this.ripples.push({
            mesh: ripple,
            scale: 1,
            life: 1.0
        });
    }

    // 更新波纹
    update() {
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const ripple = this.ripples[i];
            ripple.scale += 0.5;
            ripple.mesh.scale.set(ripple.scale, ripple.scale, 1);
            ripple.life -= 0.05;
            ripple.mesh.material.opacity = ripple.life * 0.8;

            if (ripple.life <= 0) {
                this.scene.remove(ripple.mesh);
                this.ripples.splice(i, 1);
            }
        }
    }
}

// 星环爆发效果
class StarBurstEffect {
    constructor(scene) {
        this.scene = scene;
        this.bursts = [];
    }

    // 创建星环爆发
    create(position, color = 0x00ffff, count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const geometry = new THREE.BoxGeometry(0.5, 0.1, 0.1);
            const material = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 1
            });

            const burst = new THREE.Mesh(geometry, material);
            burst.position.copy(position);

            const velocity = new THREE.Vector3(
                Math.cos(angle) * 2,
                Math.sin(angle) * 2,
                0
            );

            this.scene.add(burst);
            this.bursts.push({
                mesh: burst,
                velocity: velocity,
                rotation: Math.random() * 0.2,
                life: 1.0
            });
        }
    }

    // 更新星环爆发
    update() {
        for (let i = this.bursts.length - 1; i >= 0; i--) {
            const burst = this.bursts[i];
            burst.mesh.position.add(burst.velocity);
            burst.mesh.rotation.z += burst.rotation;
            burst.life -= 0.03;
            burst.mesh.material.opacity = burst.life;

            if (burst.life <= 0) {
                this.scene.remove(burst.mesh);
                this.bursts.splice(i, 1);
            }
        }
    }
}

// 环境动态光效
class DynamicLighting {
    constructor(scene) {
        this.scene = scene;
        this.lights = [];
        this.time = 0;
    }

    // 添加脉冲光
    addPulsingLight(position, color, intensity = 2) {
        const light = new THREE.PointLight(color, intensity, 100);
        light.position.copy(position);
        this.scene.add(light);

        this.lights.push({
            light: light,
            baseIntensity: intensity,
            pulseSpeed: 2 + Math.random() * 2
        });

        return light;
    }

    // 更新光效
    update(deltaTime) {
        this.time += deltaTime;

        this.lights.forEach((lightData, index) => {
            const pulse = Math.sin(this.time * lightData.pulseSpeed + index) * 0.5 + 0.5;
            lightData.light.intensity = lightData.baseIntensity * (0.5 + pulse * 0.5);
        });
    }
}

// 全局特效管理器
class EffectsManager {
    constructor(scene, camera, renderer) {
        this.bloom = new BloomEffect(scene, camera, renderer);
        this.laser = new LaserEffect(scene);
        this.trail = new TrailEffect(scene);
        this.shake = new ScreenShake(camera);
        this.floatingText = new FloatingText(scene, camera);
        this.ripple = new RippleEffect(scene);
        this.starBurst = new StarBurstEffect(scene);
        this.lighting = new DynamicLighting(scene);
    }

    // 更新所有特效
    updateAll(deltaTime) {
        this.laser.update();
        this.trail.update();
        this.shake.update(deltaTime);
        this.floatingText.update();
        this.ripple.update();
        this.starBurst.update();
        this.lighting.update(deltaTime);
    }

    // 触发答对特效组合
    triggerCorrectEffect(position, score) {
        this.starBurst.create(position, 0x00ffff, 16);
        this.ripple.create(position, 0x00ffff);
        this.floatingText.create(`+${score}`, position, '#00ffff', 40);
        this.shake.shake(0.3, 0.2);
    }

    // 触发答错特效组合
    triggerWrongEffect(position) {
        this.starBurst.create(position, 0xff0000, 8);
        this.ripple.create(position, 0xff0000);
        this.floatingText.create('MISS', position, '#ff0000', 40);
        this.shake.shake(0.8, 0.4);
    }

    // 触发Combo特效
    triggerComboEffect(position, combo) {
        this.starBurst.create(position, 0xffff00, 20);
        this.floatingText.create(`${combo}x COMBO!`, position, '#ffff00', 50);
        this.shake.shake(0.2, 0.15);
    }
}

// 导出
if (typeof window !== 'undefined') {
    window.EffectsManager = EffectsManager;
}
