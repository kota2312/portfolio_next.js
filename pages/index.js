import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { client } from "../libs/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { initScrollReveal } from "@/utility/scrollReveal";
import { formatDate } from "@/utility/dateformat";

export default function Home({ latestBlog }) {
  const horizontalRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    initScrollReveal();
  }, []);

  const panels = [
    {
      accent: "96, 132, 255",
      orbit: "Orbit 001",
      signal: "Atmos / Primary",
      label: "Top / Earth",
      title: "Earth",
      text: "Portfolio gateway for direction, design, frontend development, and systems.",
      image: "/img/top/showcase/earth.png",
      href: "/about",
      linkLabel: "View profile",
    },
    {
      accent: "255, 116, 68",
      orbit: "Orbit 002",
      signal: "Archive / Case",
      label: "Works / Mars",
      title: "Mars",
      text: "Selected production cases across websites, landing pages, and digital operations.",
      image: "/img/top/showcase/mars.png",
      href: "/works",
      linkLabel: "View works",
    },
    {
      accent: "214, 220, 232",
      orbit: "Orbit 003",
      signal: "Signal / Journal",
      label: "Blog / Mercury",
      title: "Mercury",
      text: latestBlog?.date
        ? `${formatDate(latestBlog.date)} / ${latestBlog.description || "Latest article"}`
        : "Notes, updates, and records from recent work.",
      image: "/img/top/showcase/mercury.png",
      href: "/blogs",
      linkLabel: "View journal",
    },
    {
      accent: "214, 168, 112",
      orbit: "Orbit 004",
      signal: "Proof / Record",
      label: "Certification / Jupiter",
      title: "Jupiter",
      text: "Qualifications and learning records behind delivery quality.",
      image: "/img/top/showcase/jupiter.png",
      href: "/certification",
      linkLabel: "View certification",
    },
    {
      accent: "242, 180, 132",
      orbit: "Orbit 005",
      signal: "System / Skill",
      label: "Skill / Venus",
      title: "Venus",
      text: "A compact view of tools, skills, and production strengths.",
      image: "/img/top/showcase/venus.png",
      href: "/skill",
      linkLabel: "View skills",
    },
    {
      accent: "130, 238, 222",
      orbit: "Orbit 006",
      signal: "Open / Contact",
      label: "Contact / Beyond",
      title: "Beyond",
      text: "For production, operation, direction, or front-end development work.",
      image: "/img/top/showcase/eclipse.png",
      href: "/contact",
      linkLabel: "Contact",
    },
  ];

  const handleHorizontalWheel = (event) => {
    if (window.innerWidth <= 768 || !horizontalRef.current) {
      return;
    }

    event.preventDefault();
    horizontalRef.current.scrollLeft += event.deltaY + event.deltaX;
  };

  useEffect(() => {
    const container = horizontalRef.current;

    if (!container) {
      return undefined;
    }

    const updatePanelIndex = () => {
      const panelWidth = container.clientWidth || window.innerWidth || 1;
      const nextProgress = container.scrollLeft / panelWidth;
      const nextIndex = Math.round(nextProgress);
      const fractional = nextProgress - Math.floor(nextProgress);

      setScrollProgress(nextProgress);
      setActivePanel(Math.max(0, Math.min(nextIndex, panels.length - 1)));

      document.documentElement.style.setProperty(
        "--space-react-x",
        `${22 + nextProgress * 13}%`
      );
      document.documentElement.style.setProperty(
        "--space-react-y",
        `${18 + fractional * 46}%`
      );
      document.documentElement.style.setProperty(
        "--space-react-alpha",
        `${0.16 + Math.min(Math.abs(fractional - 0.5) * 0.22, 0.18)}`
      );
      document.documentElement.style.setProperty(
        "--space-react-scale",
        `${1 + Math.abs(fractional - 0.5) * 0.24}`
      );
    };

    updatePanelIndex();
    container.addEventListener("scroll", updatePanelIndex, { passive: true });
    window.addEventListener("resize", updatePanelIndex);

    return () => {
      container.removeEventListener("scroll", updatePanelIndex);
      window.removeEventListener("resize", updatePanelIndex);
    };
  }, [panels.length]);

  const handleGuideClick = (direction) => {
    if (!horizontalRef.current) {
      return;
    }

    const nextIndex = Math.max(
      0,
      Math.min(activePanel + direction, panels.length - 1)
    );

    horizontalRef.current.scrollTo({
      left: horizontalRef.current.clientWidth * nextIndex,
      behavior: "smooth",
    });
  };

  const getPanelDistance = (index) => index - scrollProgress;

  const getBodyStyle = (index) => {
    const distance = getPanelDistance(index);
    const depth = Math.min(Math.abs(distance), 1.2);

    return {
      opacity: 1 - depth * 0.5,
      transform: `translate3d(${distance * -56}px, ${depth * 18}px, 0)`,
    };
  };

  const getTitleStyle = (index) => {
    const distance = getPanelDistance(index);
    const depth = Math.min(Math.abs(distance), 1.1);

    return {
      opacity: 1 - depth * 0.46,
      transform: `translate3d(${distance * -82}px, ${depth * 26}px, 0) scale(${1 -
        depth * 0.04})`,
      filter: `blur(${depth * 3.2}px)`,
    };
  };

  const getVisualStyle = (index) => {
    const distance = getPanelDistance(index);
    const depth = Math.min(Math.abs(distance), 1.4);

    return {
      transform: `translate3d(${distance * 48}px, ${depth * -16}px, 0) scale(${1.06 -
        depth * 0.03})`,
    };
  };

  return (
    <div className="hp_horizontalSite">
      <Head>
        <title>Kota Takahashi Portfolio</title>
      </Head>
      <Header />
      <div className="hp_scrollGuides" aria-label="Page navigation">
        {activePanel > 0 && (
          <button
            type="button"
            className="hp_scrollGuide is_reverse"
            onClick={() => handleGuideClick(-1)}
            aria-label="Scroll back to the left"
          >
            <span className="hp_scrollGuide_label">Back</span>
            <span className="hp_scrollGuide_arrow" aria-hidden="true"></span>
          </button>
        )}
        {activePanel < panels.length - 1 && (
          <button
            type="button"
            className="hp_scrollGuide"
            onClick={() => handleGuideClick(1)}
            aria-label="Scroll to the right"
          >
            <span className="hp_scrollGuide_label">Next</span>
            <span className="hp_scrollGuide_arrow" aria-hidden="true"></span>
          </button>
        )}
      </div>
      {activePanel === 0 && (
        <button
          type="button"
          className="hp_mobileIntroGuide"
          onClick={() => handleGuideClick(1)}
          aria-label="Scroll to the next panel"
        >
          <span className="hp_mobileIntroGuide_arrow" aria-hidden="true"></span>
        </button>
      )}
      <main
        ref={horizontalRef}
        className="hp_horizontalPage hp_showcase"
        onWheel={handleHorizontalWheel}
      >
        {panels.map((panel, index) => (
          <section
            className="hp_panel hp_showcase_panel"
            key={panel.label}
            style={{ "--panel-accent": panel.accent }}
          >
            <div className="hp_showcase_count">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(panels.length).padStart(2, "0")}</span>
            </div>
            <figure className="hp_showcase_visual">
              <span className="hp_showcase_visual_scan" aria-hidden="true"></span>
              <span className="hp_showcase_visual_meta hp_showcase_visual_meta__top">
                {panel.orbit}
              </span>
              <span className="hp_showcase_visual_meta hp_showcase_visual_meta__bottom">
                {panel.signal}
              </span>
              <img src={panel.image} alt="" style={getVisualStyle(index)} />
            </figure>
            <div className="hp_showcase_body" style={getBodyStyle(index)}>
              <p className="hp_showcase_label">{panel.label}</p>
              <h1 className="hp_showcase_title" style={getTitleStyle(index)}>
                {panel.title}
              </h1>
              <p className="hp_showcase_text">{panel.text}</p>
              <Link href={panel.href} className="hp_showcase_link">
                {panel.linkLabel}
              </Link>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      latestBlog: data.contents?.[0] || null,
    },
  };
};
