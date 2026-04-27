import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Chart from "@/components/Chart";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function Skill() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="pg_editorial">
      <Head>
        <title>Skill</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__skill">
          <p className="pg_editorial_index">05 / Skill</p>
          <div className="pg_editorial_panel">
            <Heading sectionId="skill" />
            <Chart sectionId="skill" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
