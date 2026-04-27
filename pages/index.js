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
      label: "Portfolio",
      title: "Kota Takahashi",
      text: "Web direction, design, frontend development, and operational systems.",
      image: "/img/top/slider/mv01.png",
      href: "/about",
      linkLabel: "View profile",
    },
    {
      label: "Works",
      title: "Selected Cases",
      text: "Production cases across websites, landing pages, systems, and digital operations.",
      image: "/img/top/works/studio_nika.png",
      href: "/works",
      linkLabel: "View works",
    },
    {
      label: "Journal",
      title: latestBlog?.title || "Blogs",
      text: latestBlog?.date
        ? `${formatDate(latestBlog.date)} / ${latestBlog.description || "Latest article"}`
        : "Notes, updates, and records from recent work.",
      image: latestBlog?.eyecatch?.url || "/img/top/slider/mv02.png",
      href: latestBlog?.id ? `/blogs/${latestBlog.id}` : "/blogs",
      linkLabel: "Read latest",
    },
    {
      label: "Certification",
      title: "Proof of Practice",
      text: "Qualifications and learning records behind delivery quality.",
      image: "/img/top/certification/certification_bg.png",
      href: "/certification",
      linkLabel: "View certification",
    },
    {
      label: "Skill",
      title: "Capabilities",
      text: "A compact view of tools, skills, and production strengths.",
      image: "/img/top/works/dawnefo.png",
      href: "/skill",
      linkLabel: "View skills",
    },
    {
      label: "Contact",
      title: "Start a Project",
      text: "For production, operation, direction, or front-end development work.",
      image: "/img/top/works/megumi.png",
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
