import React from "react";
import Link from "next/link";
import { client } from "../../libs/client";
import parse from 'html-react-parser';
import Head from 'next/head';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDate } from "../../utility/dateformat";

export default function BlogId({ blogs }) {
    return(
        <div>
            <Header />
            <section id="blog-detail">
                <div className="ly_cont">
                    <div className="bl_blog_detail">
                        <div className="bl_blog_detail_date">
                            <p>{formatDate(blogs.date)}</p>
                        </div>                        
                        <div className="bl_blog_detail_ttl">
                            <h1>{blogs.title}</h1>
                        </div>
                        <div className="bl_blog_detail_img">
                            <img src={blogs.eyecatch.url} alt={blogs.title}></img>
                        </div>
                        <div className="bl_blog_detail_txt"
                            dangerouslySetInnerHTML={{
                                __html: `${blogs.content}`,
                            }}                            
                        />
                        <div className="bl_blog_detail_btn">
                            <Link className="el_btn el_btn__blogs" href="/">記事一覧ページへ</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

//静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" });
  
    const paths = data.contents.map((content) => `/blogs/${content.id}`);
    return { paths, fallback: "blocking" };
  };
  
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blogs", contentId: id });

    return {
        props: {
        blogs: data,
        },
    };
};