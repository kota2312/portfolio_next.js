import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { client } from "../libs/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { initScrollReveal } from "@/utility/scrollReveal";
import { formatDate } from "@/utility/dateformat";

export default function Home({ latestBlog }) {
  const horizontalRef = useRef(null);

  useEffect(() => {
    initScrollReveal();
  }, []);

  const handleHorizontalWheel = (event) => {
    if (window.innerWidth <= 768 || !horizontalRef.current) {
      return;
    }

    event.preventDefault();
    horizontalRef.current.scrollLeft += event.deltaY + event.deltaX;
  };

  const panels = [
    {
      label: "Top / Earth",
      title: "Earth",
      text: "Portfolio gateway for direction, design, frontend development, and systems.",
      image: "/img/top/showcase/earth.png",
      href: "/about",
      linkLabel: "View profile",
    },
    {
      label: "Works / Mars",
      title: "Mars",
      text: "Selected production cases across websites, landing pages, and digital operations.",
      image: "/img/top/showcase/mars.png",
      href: "/works",
      linkLabel: "View works",
    },
    {
      label: "Blog / Mercury",
      title: "Mercury",
      text: latestBlog?.date
        ? `${formatDate(latestBlog.date)} / ${latestBlog.description || "Latest article"}`
        : "Notes, updates, and records from recent work.",
      image: "/img/top/showcase/mercury.png",
      href: latestBlog?.id ? `/blogs/${latestBlog.id}` : "/blogs",
      linkLabel: "Read latest",
    },
    {
      label: "Certification / Jupiter",
      title: "Jupiter",
      text: "Qualifications and learning records behind delivery quality.",
      image: "/img/top/showcase/jupiter.png",
      href: "/certification",
      linkLabel: "View certification",
    },
    {
      label: "Skill / Venus",
      title: "Venus",
      text: "A compact view of tools, skills, and production strengths.",
      image: "/img/top/showcase/venus.png",
      href: "/skill",
      linkLabel: "View skills",
    },
    {
      label: "Contact / Beyond",
      title: "Beyond",
      text: "For production, operation, direction, or front-end development work.",
      image: "/img/top/showcase/eclipse.png",
      href: "/contact",
      linkLabel: "Contact",
    },
  ];

  return (
    <div className="hp_horizontalSite">
      <Head>
        <title>Kota Takahashi Portfolio</title>
      </Head>
      <Header />
      <main
        ref={horizontalRef}
        className="hp_horizontalPage hp_showcase"
        onWheel={handleHorizontalWheel}
      >
        {panels.map((panel, index) => (
          <section className="hp_panel hp_showcase_panel" key={panel.label}>
            <div className="hp_showcase_count">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(panels.length).padStart(2, "0")}</span>
            </div>
            <figure className="hp_showcase_visual">
              <img src={panel.image} alt="" />
            </figure>
            <div className="hp_showcase_body">
              <p className="hp_showcase_label">{panel.label}</p>
              <h1 className="hp_showcase_title">{panel.title}</h1>
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
