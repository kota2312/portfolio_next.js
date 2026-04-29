import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TabNavigation from "@/components/TabNavigation";
import { initScrollReveal } from "@/utility/scrollReveal";

export default function Works() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="pg_editorial">
      <Head>
        <title>Works</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__works">
          <p className="pg_editorial_index">02 / Works</p>
          <div className="pg_editorial_panel pg_editorial_panel__tabbed">
            <Heading sectionId="works" />
            <TabNavigation sectionId="works" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
