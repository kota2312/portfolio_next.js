import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pg_editorial">
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__contact">
          <p className="pg_editorial_index">06 / Contact</p>
          <div className="pg_editorial_panel">
            <Heading sectionId="contact" />
            <div className="bl_contactEditorial">
              <div className="bl_contactEditorial_intro">
                <h3 className="bl_contactEditorial_title">Let&apos;s build something clear and useful.</h3>
                <p className="bl_contactEditorial_text">
                  Web制作、運用改善、フロントエンド実装のご相談を受け付けています。
                  ご依頼前のざっくりした相談段階でも大丈夫です。
                </p>
                <dl className="bl_editorialInfo bl_editorialInfo__contact">
                  <div className="bl_editorialInfo_row">
                    <dt>Topics</dt>
                    <dd>Corporate site, LP, renewal, frontend support</dd>
                  </div>
                  <div className="bl_editorialInfo_row">
                    <dt>Flow</dt>
                    <dd>Contact / Review / Reply</dd>
                  </div>
                  <div className="bl_editorialInfo_row">
                    <dt>Status</dt>
                    <dd>Transmission available</dd>
                  </div>
                </dl>
              </div>
              <div className="bl_contactEditorial_form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
