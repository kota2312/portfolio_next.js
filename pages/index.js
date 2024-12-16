import { useEffect } from "react";
import { initScrollReveal } from "@/utility/scrollReveal";
import Link from "next/link";
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
  useEffect(() => {
    // ScrollRevealの初期化を呼び出す
    initScrollReveal();
  }, []);

  return (
    <div>
      <Head />
      <Header />
      <MovieBg />
      <section id="mainVisual" className="bl_mainVisual">
        <Jumbotron images={images} />
      </section>
      <section id="aboutUs" className="bl_aboutUs">
        <div className="ly_cont">
          <Heading sectionId="aboutUs" />
          <Media sectionId="aboutUs" />
        </div>
      </section>
      <section id="blog" className="bl_blog">
        <div className="ly_cont">
          <Heading sectionId="blog" />
          <div className="bl_blog_card">
            <BasicSlider blogs={blogs} />
          </div>
        </div>
      </section>
      <section id="works" className="bl_works hp_bgBase hp_spikes">
        <div className="ly_cont">
          <Heading sectionId="works" />
          <TabNavigation sectionId="works" />
        </div>
      </section>
      <section id="certification" className="bl_certification">
        <div className="ly_cont">
          <Heading sectionId="certification" />
          <Card sectionId="certification" />
        </div>
      </section>
      <section id="skill" className="bl_skill hp_bgBase hp_spikes">
        <div className="ly_cont">
          <Heading sectionId="skill" />
          <Chart sectionId="skill" />
        </div>
      </section>
      <section id="contact" className="bl_contact">
        <div className="ly_cont">
          <Heading sectionId="contact" />
          <ContactForm />
        </div>
      </section>
      <section id="cta" className="bl_cta-wrap hp_bgCta">
        <div className="ly_cont ly_cont__cta">
          <Cta />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const imgDir = path.join(process.cwd(), "public", "img", "top", "slider");
  const files = fs.readdirSync(imgDir).filter(file => /\.(png|jpe?g|gif)$/i.test(file));

  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
      images: files,
    },
  };
};
