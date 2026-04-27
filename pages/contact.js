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
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
