import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Media from "@/components/Media";
import MovieBg from "@/components/MovieBg";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function About() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>
      <Header />
      <MovieBg />
      <section id="aboutUs" className="bl_aboutUs">
        <div className="ly_cont">
          <Heading sectionId="aboutUs" />
          <Media sectionId="aboutUs" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
