import { useEffect, useRef } from "react";
import { initScrollReveal } from "@/utility/scrollReveal";
import fs from "fs";
import path from "path";
import { client } from "../libs/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import Heading from "@/components/Heading";
import Media from "@/components/Media";
import TabNavigation from "@/components/TabNavigation";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Cta from "@/components/Cta";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import BasicSlider from "@/components/BasicSlider";
import MovieBg from "@/components/MovieBg";

export default function Home({ images, blogs }) {
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

  return (
    <div className="hp_horizontalSite">
      <Head />
      <Header />
      <MovieBg />
      <main
        ref={horizontalRef}
        className="hp_horizontalPage"
        onWheel={handleHorizontalWheel}
      >
        <section id="mainVisual" className="bl_mainVisual hp_panel hp_panel__hero">
          <Jumbotron images={images} />
        </section>
        <section id="aboutUs" className="bl_aboutUs hp_panel hp_panel__about">
          <div className="ly_cont">
            <Heading sectionId="aboutUs" />
            <Media sectionId="aboutUs" />
          </div>
        </section>
        <section id="blog" className="bl_blog hp_panel hp_panel__blog">
          <div className="ly_cont">
            <Heading sectionId="blog" />
            <div className="bl_blog_card">
              <BasicSlider blogs={blogs} />
            </div>
          </div>
        </section>
        <section id="works" className="bl_works hp_bgBase hp_spikes hp_panel hp_panel__works">
          <div className="ly_cont">
            <Heading sectionId="works" />
            <TabNavigation sectionId="works" />
          </div>
        </section>
        <section id="certification" className="bl_certification hp_panel hp_panel__certification">
          <div className="ly_cont">
            <Heading sectionId="certification" />
            <Card sectionId="certification" />
          </div>
        </section>
        <section id="skill" className="bl_skill hp_bgBase hp_spikes hp_panel hp_panel__skill">
          <div className="ly_cont">
            <Heading sectionId="skill" />
            <Chart sectionId="skill" />
          </div>
        </section>
        <section id="contact" className="bl_contact hp_panel hp_panel__contact">
          <div className="ly_cont">
            <Heading sectionId="contact" />
            <ContactForm />
          </div>
        </section>
        <section id="cta" className="bl_cta-wrap hp_bgCta hp_panel hp_panel__cta">
          <div className="ly_cont ly_cont__cta">
            <Cta />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const imgDir = path.join(process.cwd(), "public", "img", "top", "slider");
  const files = fs.readdirSync(imgDir).filter((file) => /\.(png|jpe?g|gif)$/i.test(file));

  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
      images: files,
    },
  };
};
