import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Card from "@/components/Card";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function Certification() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="pg_editorial">
      <Head>
        <title>Certification</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__certification">
          <p className="pg_editorial_index">04 / Certification</p>
          <div className="pg_editorial_panel">
            <Heading sectionId="certification" />
            <Card sectionId="certification" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
