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
            <div className="bl_editorialHero bl_editorialHero__skill">
              <div className="bl_editorialHero_main">
                <p className="bl_editorialHero_kicker">System overview</p>
                <p className="bl_editorialHero_text">
                  フロントエンドを軸にしつつ、更新運用やバックエンド連携を見据えた実装バランスを意識しています。
                  得意領域と補助領域が一目で伝わるよう、グラフとして整理しています。
                </p>
              </div>
              <dl className="bl_editorialInfo">
                <div className="bl_editorialInfo_row">
                  <dt>Core</dt>
                  <dd>HTML, CSS, JavaScript, React, Next.js</dd>
                </div>
                <div className="bl_editorialInfo_row">
                  <dt>Support</dt>
                  <dd>PHP, SQL, Node.js, Git</dd>
                </div>
                <div className="bl_editorialInfo_row">
                  <dt>View</dt>
                  <dd>Frontend / Backend / Other split chart</dd>
                </div>
              </dl>
            </div>
            <Chart sectionId="skill" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
