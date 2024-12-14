import Link from "next/link";
import fs from "fs";
import path from "path";
import { client } from "../libs/client";
import parse from 'html-react-parser';
import { formatDate } from "@/utility/dateformat";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import Heading from "@/components/Heading";
import Media from "@/components/Media";
import TabNavigation from "@/components/TabNavigation";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Cta from "@/components/Cta";
import Head from 'next/head';
import ContactForm from "@/components/ContactForm";
import BasicSlider from "@/components/BasicSlider";
import MovieBg from "@/components/MovieBg";

export default function Home({ images, blogs }) {
  return (
    <div>
      <Head />
      <Header />
      <MovieBg />
      {/* メインビジュアルセクション */}
      <section id="mainVisual" className="bl_mainVisual">
        <Jumbotron images={images} />
      </section>
      
      {/* 私たちについて */}
      <section id="aboutUs" className="bl_aboutUs">
        <div className="ly_cont">
          <Heading sectionId="aboutUs" /> {/* sectionIdで見出しを指定 */}
          <Media sectionId="aboutUs" />
        </div>
      </section>
      {/* ブログセクション */}
      <section id="blog" className="bl_blog">
        <div className="ly_cont">
          <Heading sectionId="blog" /> {/* sectionIdで見出しを指定 */}
          <div className="bl_blog_card">
            <BasicSlider blogs={blogs} /> {/* BasicSliderにデータを渡す */}
          </div>
        </div>
      </section>
      {/* 仕事内容 */}
      <section id="works" className="bl_works hp_bgBase hp_spikes">
        <div className="ly_cont">
          <Heading sectionId="works" /> {/* sectionIdで見出しを指定 */}
          <TabNavigation sectionId="works" />
        </div>
      </section>
      {/* 資格 */}
      <section id="certification" className="bl_certification">
        <div className="ly_cont">
          <Heading sectionId="certification" /> {/* sectionIdで見出しを指定 */}
          <Card sectionId="certification" />
        </div>
      </section>
      {/* skill */}
      <section id="skill" className="bl_skill hp_bgBase hp_spikes">
        <div className="ly_cont">
          <Heading sectionId="skill" /> {/* sectionIdで見出しを指定 */}
          <Chart sectionId="skill" />
        </div>
      </section>
      {/* skill */}
      <section id="contact" className="bl_contact">
        <div className="ly_cont">
          <Heading sectionId="contact" /> {/* sectionIdで見出しを指定 */}
          <ContactForm />
        </div>
      </section>
      {/* CTA */}
      <section id="cta" className="bl_cta-wrap hp_bgCta">
        <div className="ly_cont ly_cont__cta">
          <Cta />
        </div>
      </section>
      {/* フッター */}
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // public/img フォルダ内の画像を取得
  const imgDir = path.join(process.cwd(), "public", "img", "top", "slider");
  const files = fs.readdirSync(imgDir).filter(file => /\.(png|jpe?g|gif)$/i.test(file));
  
  // blogデータの取得
  const data = await client.get({ endpoint: "blogs" });


  return {
    props: {
      blogs: data.contents,
      images: files,
    },
    
  };
};
