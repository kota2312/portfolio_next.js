import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Media from "@/components/Media";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function About() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="pg_editorial">
      <Head>
        <title>About us</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__about">
          <p className="pg_editorial_index">01 / About</p>
          <div className="pg_editorial_panel">
            <Heading sectionId="aboutUs" />
            <Media sectionId="aboutUs" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
