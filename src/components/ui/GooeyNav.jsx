import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "./GooeyNav.css";

const DEFAULT_PARTICLE_DISTANCES = [90, 10];
const DEFAULT_COLORS = [1, 2, 3, 1, 2, 3, 1, 4];

const createNoise = (value = 1) => {
  return value / 2 - Math.random() * value;
};

const calculatePosition = (
  distance,
  pointIndex,
  totalPoints,
) => {
  const angle =
    ((360 + createNoise(8)) / totalPoints) *
    pointIndex *
    (Math.PI / 180);

  return [
    distance * Math.cos(angle),
    distance * Math.sin(angle),
  ];
};

const createParticleData = ({
  index,
  time,
  distances,
  radius,
  particleCount,
  colors,
}) => {
  const rotate = createNoise(radius / 10);

  return {
    start: calculatePosition(
      distances[0],
      particleCount - index,
      particleCount,
    ),

    end: calculatePosition(
      distances[1] + createNoise(7),
      particleCount - index,
      particleCount,
    ),

    time,
    scale: 1 + createNoise(0.2),

    color:
      colors[
        Math.floor(Math.random() * colors.length)
      ],

    rotate:
      rotate > 0
        ? (rotate + radius / 20) * 10
        : (rotate - radius / 20) * 10,
  };
};

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = DEFAULT_PARTICLE_DISTANCES,
  particleR = 100,
  timeVariance = 300,
  colors = DEFAULT_COLORS,
  initialActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onActiveChange,
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);

  const [
  internalActiveIndex,
  setInternalActiveIndex,
] = useState(initialActiveIndex);

const activeIndex =
  controlledActiveIndex ?? internalActiveIndex;

const changeActiveIndex = (index) => {
  if (controlledActiveIndex === undefined) {
    setInternalActiveIndex(index);
  }

  onActiveChange?.(index);
};

  const updateEffectPosition = useCallback((element) => {
    if (
      !element ||
      !containerRef.current ||
      !filterRef.current ||
      !textRef.current
    ) {
      return;
    }

    const containerRect =
      containerRef.current.getBoundingClientRect();

    const elementRect = element.getBoundingClientRect();

    const styles = {
      left: `${elementRect.left - containerRect.left}px`,
      top: `${elementRect.top - containerRect.top}px`,
      width: `${elementRect.width}px`,
      height: `${elementRect.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);

    textRef.current.textContent =
      element.textContent?.trim() ?? "";
  }, []);

  const makeParticles = useCallback(
    (element) => {
      if (!element) return;

      const bubbleTime =
        animationTime * 2 + timeVariance;

      element.style.setProperty(
        "--time",
        `${bubbleTime}ms`,
      );

      for (let index = 0; index < particleCount; index++) {
        const particleTime =
          animationTime * 2 +
          createNoise(timeVariance * 2);

        const particleData = createParticleData({
          index,
          time: particleTime,
          distances: particleDistances,
          radius: particleR,
          particleCount,
          colors,
        });

        element.classList.remove("active");

        window.setTimeout(() => {
          const particle =
            document.createElement("span");

          const point =
            document.createElement("span");

          particle.classList.add("particle");

          particle.style.setProperty(
            "--start-x",
            `${particleData.start[0]}px`,
          );

          particle.style.setProperty(
            "--start-y",
            `${particleData.start[1]}px`,
          );

          particle.style.setProperty(
            "--end-x",
            `${particleData.end[0]}px`,
          );

          particle.style.setProperty(
            "--end-y",
            `${particleData.end[1]}px`,
          );

          particle.style.setProperty(
            "--time",
            `${particleData.time}ms`,
          );

          particle.style.setProperty(
            "--scale",
            `${particleData.scale}`,
          );

          particle.style.setProperty(
            "--color",
            `var(--color-${particleData.color}, white)`,
          );

          particle.style.setProperty(
            "--rotate",
            `${particleData.rotate}deg`,
          );

          point.classList.add("point");
          particle.appendChild(point);
          element.appendChild(particle);

          requestAnimationFrame(() => {
            element.classList.add("active");
          });

          window.setTimeout(() => {
            particle.remove();
          }, particleTime);
        }, 30);
      }
    },
    [
      animationTime,
      colors,
      particleCount,
      particleDistances,
      particleR,
      timeVariance,
    ],
  );

  const handleClick = (event, index) => {
    const listItem =
      event.currentTarget.closest("li");

    if (!listItem || activeIndex === index) {
      return;
    }

    changeActiveIndex(index);
    updateEffectPosition(listItem);

    if (filterRef.current) {
      const existingParticles =
        filterRef.current.querySelectorAll(
          ".particle",
        );

      existingParticles.forEach((particle) => {
        particle.remove();
      });
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");

      void textRef.current.offsetWidth;

      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  useEffect(() => {
    const navigation = navRef.current;
    const container = containerRef.current;

    if (!navigation || !container) {
      return undefined;
    }

    const navigationItems =
      navigation.querySelectorAll("li");

    const activeItem =
      navigationItems[activeIndex];

    if (activeItem) {
      updateEffectPosition(activeItem);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentItems =
        navRef.current?.querySelectorAll("li");

      const currentActiveItem =
        currentItems?.[activeIndex];

      if (currentActiveItem) {
        updateEffectPosition(currentActiveItem);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    activeIndex,
    items,
    updateEffectPosition,
  ]);

  return (
    <div
      ref={containerRef}
      className="gooey-nav-container"
    >
      <nav aria-label="Navigasi utama">
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li
              key={item.id ?? item.href ?? item.label}
              className={
                activeIndex === index ? "active" : ""
              }
            >
              <a
                href={item.href}
                onClick={(event) =>
                  handleClick(event, index)
                }
                onKeyDown={handleKeyDown}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <span
        ref={filterRef}
        className="effect filter"
        aria-hidden="true"
      />

      <span
        ref={textRef}
        className="effect text"
        aria-hidden="true"
      />
    </div>
  );
};

export default GooeyNav;