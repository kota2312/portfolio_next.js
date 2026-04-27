import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TabNavigation from "@/components/TabNavigation";
import MovieBg from "@/components/MovieBg";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function Works() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div>
      <Head>
        <title>Works</title>
      </Head>
      <Header />
      <MovieBg />
      <section id="works" className="bl_works hp_bgBase hp_spikes">
        <div className="ly_cont">
          <Heading sectionId="works" />
          <TabNavigation sectionId="works" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
