import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
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
            <div className="bl_aboutProfile">
              <figure className="bl_aboutProfile_visual">
                <img
                  src="/img/about/kt-portfolio.png"
                  alt="K.T Portfolio profile illustration"
                  className="bl_aboutProfile_image"
                />
                <figcaption className="bl_aboutProfile_visualMeta">
                  Identity / Operator 01
                </figcaption>
              </figure>
              <div className="bl_aboutProfile_body">
                <div className="bl_aboutProfile_intro">
                  <p className="bl_aboutProfile_kicker">Profile transmission</p>
                  <h3 className="bl_aboutProfile_name">Kota Takahashi</h3>
                  <p className="bl_aboutProfile_text">
                    Web制作、フロントエンド実装、運用改善までを横断して進める制作者です。
                    デザイン意図を汲みつつ、実装と更新しやすさの両方を意識したサイト設計を得意としています。
                  </p>
                </div>
                <dl className="bl_aboutProfile_specs">
                  <div className="bl_aboutProfile_specsRow">
                    <dt>Field</dt>
                    <dd>Frontend / Direction / Operation</dd>
                  </div>
                  <div className="bl_aboutProfile_specsRow">
                    <dt>Focus</dt>
                    <dd>Landing pages, corporate sites, content systems</dd>
                  </div>
                  <div className="bl_aboutProfile_specsRow">
                    <dt>Stack</dt>
                    <dd>HTML, CSS, JavaScript, React, Next.js, WordPress</dd>
                  </div>
                  <div className="bl_aboutProfile_specsRow">
                    <dt>Style</dt>
                    <dd>Clean UI, scalable markup, practical visual design</dd>
                  </div>
                </dl>
                <div className="bl_aboutProfile_note">
                  <span className="bl_aboutProfile_noteLabel">Mission</span>
                  <p className="bl_aboutProfile_noteText">
                    作って終わりではなく、更新しやすく、伝わりやすく、運用しやすい状態まで整えることを大切にしています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
