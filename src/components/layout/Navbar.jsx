import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Container from "../common/Container";
import GooeyNav from "../ui/GooeyNav";
import { navigationItems } from "../../data/navigation";

const PARTICLE_DISTANCES = [45, 6];
const PARTICLE_COLORS = [2, 3, 4, 3, 2, 3];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let animationFrameId = null;

    const updateActiveSection = () => {
      /*
       * Titik pendeteksian berada sekitar 35% dari atas layar.
       * Section yang melewati titik ini dianggap aktif.
       */
      const detectionPoint =
        window.scrollY +
        Math.min(window.innerHeight * 0.35, 300);

      let nextActiveIndex = 0;

      navigationItems.forEach((item, index) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (detectionPoint >= sectionTop) {
          nextActiveIndex = index;
        }
      });

      setActiveIndex((currentIndex) => {
        return currentIndex === nextActiveIndex
          ? currentIndex
          : nextActiveIndex;
      });
    };

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId = null;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleLogoClick = () => {
    setActiveIndex(0);
    setIsOpen(false);
  };

  const handleMobileNavigation = (index) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#242424]/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
          onClick={handleLogoClick}
        >
          RizkiPorto
          <span className="text-[#b85cff]">.</span>
        </a>

        {/* Navigasi desktop */}
        <div className="hidden md:block">
          <GooeyNav
            items={navigationItems}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
            animationTime={400}
            particleCount={6}
            particleDistances={PARTICLE_DISTANCES}
            particleR={50}
            timeVariance={120}
            colors={PARTICLE_COLORS}
          />
        </div>

        {/* Tombol mobile */}
        <button
          type="button"
          aria-label={
            isOpen
              ? "Tutup navigasi"
              : "Buka navigasi"
          }
          aria-expanded={isOpen}
          onClick={() =>
            setIsOpen((current) => !current)
          }
          className="text-3xl md:hidden"
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </Container>

      {/* Navigasi mobile */}
      {isOpen && (
        <nav className="border-t border-white/10 bg-[#242424] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigationItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  onClick={() =>
                    handleMobileNavigation(index)
                  }
                  className={`rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-[#a946f4]/15 text-[#cf85ff]"
                      : "text-white/80 hover:bg-white/5 hover:text-[#c05cff]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;