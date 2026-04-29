import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
          <div className="pg_editorial_panel pg_editorial_panel__worksSplit">
            <div className="bl_editorialLead bl_editorialLead__works">
              <div className="bl_heading">
                <hgroup className="el_hgroup">
                  <p className="el_hgroup_sub">Works</p>
                  <h2 className="el_lv2Heading">
                    実績とサービスを
                    <br />
                    <span className="hp_color_gradient">掲載</span>します。
                  </h2>
                </hgroup>
              </div>
              <div className="bl_editorialHero bl_editorialHero__works">
                <div className="bl_editorialHero_main">
                  <p className="bl_editorialHero_kicker">Case archive</p>
                  <p className="bl_editorialHero_text">
                    コーポレートサイト、LP、運用中サービス、音楽まわりまで、
                    実際に関わってきた制作物を目的別に整理しています。
                  </p>
                </div>
                <dl className="bl_editorialInfo">
                  <div className="bl_editorialInfo_row">
                    <dt>Focus</dt>
                    <dd>Case / Service / Music</dd>
                  </div>
                  <div className="bl_editorialInfo_row">
                    <dt>Method</dt>
                    <dd>Design, coding, operation support, landing page build</dd>
                  </div>
                  <div className="bl_editorialInfo_row">
                    <dt>Output</dt>
                    <dd>Archive style project index with external links</dd>
                  </div>
                </dl>
              </div>
            </div>
            <TabNavigation sectionId="works" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
