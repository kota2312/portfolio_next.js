import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "../../libs/client";
import { formatDate } from "../../utility/dateformat";

export default function BlogId({ blogs }) {
  return (
    <div className="pg_editorial pg_editorial__detail">
      <Head>
        <title>{blogs.title}</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__blogDetail">
          <p className="pg_editorial_index">03 / Article</p>
          <div className="pg_editorial_panel pg_editorial_panel__detail">
            <div className="bl_blog_detail">
              <div className="bl_blog_detail_signal">
                <span>Transmission / Mercury</span>
                <span>Log {String(blogs.id).slice(0, 6).toUpperCase()}</span>
              </div>
              <div className="bl_blog_detail_date">
                <p>{formatDate(blogs.date)}</p>
              </div>
              <div className="bl_blog_detail_ttl">
                <h1>{blogs.title}</h1>
              </div>
              <div className="bl_blog_detail_img">
                <img src={blogs.eyecatch.url} alt={blogs.title}></img>
              </div>
              <div
                className="bl_blog_detail_txt"
                dangerouslySetInnerHTML={{
                  __html: `${blogs.content}`,
                }}
              />
              <div className="bl_blog_detail_btn">
                <Link className="el_btn el_btn__blogs" href="/blogs">
                  Back to journal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};
