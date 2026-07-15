import { useEffect, useRef } from "react";
import * as THREE from "three";

const convertColorToVector = (hexColor) => {
  const color = new THREE.Color(hexColor);

  return new THREE.Vector3(
    color.r,
    color.g,
    color.b,
  );
};

const LightPillar = ({
  topColor = "#5227ff",
  bottomColor = "#ff9ffc",
  intensity = 1,
  rotationSpeed = 0.3,
  interactive = false,
  className = "",
  glowAmount = 0.005,
  pillarWidth = 3,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  mixBlendMode = "screen",
  pillarRotation = 0,
  quality = "high",
}) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef(
    new THREE.Vector2(0, 0),
  );
  const timeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    const processorCount =
      navigator.hardwareConcurrency ?? 8;

    const isLowEndDevice =
      isMobile || processorCount <= 4;

    let effectiveQuality = quality;

    if (isLowEndDevice && quality === "high") {
      effectiveQuality = "medium";
    }

    if (isMobile && quality !== "low") {
      effectiveQuality = "low";
    }

    const qualitySettings = {
      low: {
        iterations: 24,
        waveIterations: 1,
        pixelRatio: 0.5,
        precision: "mediump",
        stepMultiplier: 1.5,
      },

      medium: {
        iterations: 40,
        waveIterations: 2,
        pixelRatio: 0.65,
        precision: "mediump",
        stepMultiplier: 1.2,
      },

      high: {
        iterations: 80,
        waveIterations: 4,
        pixelRatio: Math.min(
          window.devicePixelRatio || 1,
          1.5,
        ),
        precision: "highp",
        stepMultiplier: 1,
      },
    };

    const settings =
      qualitySettings[effectiveQuality] ??
      qualitySettings.medium;

    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference:
          effectiveQuality === "high"
            ? "high-performance"
            : "low-power",
        precision: settings.precision,
        stencil: false,
        depth: false,
      });
    } catch {
      /*
       * Kalau WebGL tidak tersedia, efek tidak dibuat.
       * Background Hero tetap menjadi fallback.
       */
      return undefined;
    }

    const width = Math.max(
      container.clientWidth,
      1,
    );

    const height = Math.max(
      container.clientHeight,
      1,
    );

    renderer.setPixelRatio(settings.pixelRatio);
    renderer.setSize(width, height, false);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    renderer.domElement.setAttribute(
      "aria-hidden",
      "true",
    );

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      0,
      1,
    );

    const vertexShader = `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision ${settings.precision} float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;

      varying vec2 vUv;

      const float STEP_MULT =
        ${settings.stepMultiplier.toFixed(1)};

      const int MAX_ITER =
        ${settings.iterations};

      const int WAVE_ITER =
        ${settings.waveIterations};

      void main() {
        vec2 uv =
          (vUv * 2.0 - 1.0) *
          vec2(
            uResolution.x / uResolution.y,
            1.0
          );

        uv = vec2(
          uPillarRotCos * uv.x -
          uPillarRotSin * uv.y,

          uPillarRotSin * uv.x +
          uPillarRotCos * uv.y
        );

        vec3 rayOrigin =
          vec3(0.0, 0.0, -10.0);

        vec3 rayDirection =
          normalize(vec3(uv, 1.0));

        float rotationCos = uRotCos;
        float rotationSin = uRotSin;

        if (
          uInteractive &&
          (
            uMouse.x != 0.0 ||
            uMouse.y != 0.0
          )
        ) {
          float angle =
            uMouse.x * 6.283185;

          rotationCos = cos(angle);
          rotationSin = sin(angle);
        }

        vec3 color = vec3(0.0);
        float distanceTravelled = 0.1;

        for (
          int index = 0;
          index < MAX_ITER;
          index++
        ) {
          vec3 position =
            rayOrigin +
            rayDirection *
            distanceTravelled;

          position.xz = vec2(
            rotationCos * position.x -
            rotationSin * position.z,

            rotationSin * position.x +
            rotationCos * position.z
          );

          vec3 wavePosition = position;

          wavePosition.y =
            position.y *
            uPillarHeight +
            uTime;

          float frequency = 1.0;
          float amplitude = 1.0;

          for (
            int waveIndex = 0;
            waveIndex < WAVE_ITER;
            waveIndex++
          ) {
            wavePosition.xz = vec2(
              uWaveCos * wavePosition.x -
              uWaveSin * wavePosition.z,

              uWaveSin * wavePosition.x +
              uWaveCos * wavePosition.z
            );

            wavePosition +=
              cos(
                wavePosition.zxy *
                frequency -
                uTime *
                float(waveIndex) *
                2.0
              ) *
              amplitude;

            frequency *= 2.0;
            amplitude *= 0.5;
          }

          float distanceField =
            length(cos(wavePosition.xz)) -
            0.2;

          float boundary =
            length(position.xz) -
            uPillarWidth;

          float smoothing = 4.0;

          float blend =
            max(
              smoothing -
              abs(
                distanceField -
                boundary
              ),
              0.0
            );

          distanceField =
            max(
              distanceField,
              boundary
            ) +
            blend *
            blend *
            0.0625 /
            smoothing;

          distanceField =
            abs(distanceField) *
            0.15 +
            0.01;

          float gradient =
            clamp(
              (15.0 - position.y) /
              30.0,
              0.0,
              1.0
            );

          color +=
            mix(
              uBottomColor,
              uTopColor,
              gradient
            ) /
            distanceField;

          distanceTravelled +=
            distanceField *
            STEP_MULT;

          if (
            distanceTravelled > 50.0
          ) {
            break;
          }
        }

        float normalizedWidth =
          uPillarWidth / 3.0;

        color =
          tanh(
            color *
            uGlowAmount /
            normalizedWidth
          );

        float noise =
          fract(
            sin(
              dot(
                gl_FragCoord.xy,
                vec2(
                  12.9898,
                  78.233
                )
              )
            ) *
            43758.5453
          );

        color -=
          noise /
          15.0 *
          uNoiseIntensity;

        gl_FragColor =
          vec4(
            color * uIntensity,
            1.0
          );
      }
    `;

    const pillarRotationRadians =
      (pillarRotation * Math.PI) / 180;

    const waveSin = Math.sin(0.4);
    const waveCos = Math.cos(0.4);

    const material =
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,

        uniforms: {
          uTime: {
            value: 0,
          },

          uResolution: {
            value: new THREE.Vector2(
              width,
              height,
            ),
          },

          uMouse: {
            value: mouseRef.current,
          },

          uTopColor: {
            value:
              convertColorToVector(
                topColor,
              ),
          },

          uBottomColor: {
            value:
              convertColorToVector(
                bottomColor,
              ),
          },

          uIntensity: {
            value: intensity,
          },

          uInteractive: {
            value: interactive,
          },

          uGlowAmount: {
            value: glowAmount,
          },

          uPillarWidth: {
            value: pillarWidth,
          },

          uPillarHeight: {
            value: pillarHeight,
          },

          uNoiseIntensity: {
            value: noiseIntensity,
          },

          uRotCos: {
            value: 1,
          },

          uRotSin: {
            value: 0,
          },

          uPillarRotCos: {
            value: Math.cos(
              pillarRotationRadians,
            ),
          },

          uPillarRotSin: {
            value: Math.sin(
              pillarRotationRadians,
            ),
          },

          uWaveSin: {
            value: waveSin,
          },

          uWaveCos: {
            value: waveCos,
          },
        },

        transparent: true,
        depthWrite: false,
        depthTest: false,
      });

    const geometry =
      new THREE.PlaneGeometry(2, 2);

    const mesh =
      new THREE.Mesh(
        geometry,
        material,
      );

    scene.add(mesh);

    const handlePointerMove = (event) => {
      if (!interactive) return;

      const rect =
        container.getBoundingClientRect();

      if (
        rect.width === 0 ||
        rect.height === 0
      ) {
        return;
      }

      const pointerX =
        ((event.clientX - rect.left) /
          rect.width) *
          2 -
        1;

      const pointerY =
        -(
          (event.clientY - rect.top) /
          rect.height
        ) *
          2 +
        1;

      mouseRef.current.set(
        pointerX,
        pointerY,
      );
    };

    if (interactive) {
      container.addEventListener(
        "pointermove",
        handlePointerMove,
        {
          passive: true,
        },
      );
    }

    const resizeRenderer = () => {
      const newWidth = Math.max(
        container.clientWidth,
        1,
      );

      const newHeight = Math.max(
        container.clientHeight,
        1,
      );

      renderer.setSize(
        newWidth,
        newHeight,
        false,
      );

      material.uniforms.uResolution.value.set(
        newWidth,
        newHeight,
      );
    };

    const resizeObserver =
      new ResizeObserver(
        resizeRenderer,
      );

    resizeObserver.observe(container);

    let lastFrameTime =
      performance.now();

    const targetFramesPerSecond =
      effectiveQuality === "low"
        ? 30
        : 60;

    const frameDuration =
      1000 /
      targetFramesPerSecond;

    const animate = (currentTime) => {
      const deltaTime =
        currentTime -
        lastFrameTime;

      if (
        deltaTime >= frameDuration
      ) {
        timeRef.current +=
          0.016 *
          rotationSpeed;

        const animationTime =
          timeRef.current;

        material.uniforms.uTime.value =
          animationTime;

        material.uniforms.uRotCos.value =
          Math.cos(
            animationTime * 0.3,
          );

        material.uniforms.uRotSin.value =
          Math.sin(
            animationTime * 0.3,
          );

        renderer.render(
          scene,
          camera,
        );

        lastFrameTime =
          currentTime -
          (deltaTime %
            frameDuration);
      }

      animationFrameRef.current =
        window.requestAnimationFrame(
          animate,
        );
    };

    animationFrameRef.current =
      window.requestAnimationFrame(
        animate,
      );

    return () => {
      resizeObserver.disconnect();

      if (interactive) {
        container.removeEventListener(
          "pointermove",
          handlePointerMove,
        );
      }

      if (
        animationFrameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          animationFrameRef.current,
        );
      }

      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (
        container.contains(
          renderer.domElement,
        )
      ) {
        container.removeChild(
          renderer.domElement,
        );
      }

      animationFrameRef.current = null;
    };
  }, [
    quality,
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute left-0 top-0 h-full w-full ${className}`}
      style={{
        mixBlendMode,
      }}
    />
  );
};

export default LightPillar;