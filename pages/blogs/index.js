import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import BlogCard from "@/components/BlogCard";
import { client } from "@/libs/client";
import { formatDate } from "@/utility/dateformat";

export default function Blogs({ blogs }) {
  return (
    <div className="pg_editorial">
      <Head>
        <title>Blogs</title>
      </Head>
      <Header />
      <main className="pg_editorial_main">
        <section className="pg_editorial_section pg_editorial_section__blogs">
          <p className="pg_editorial_index">03 / Journal</p>
          <div className="pg_editorial_panel">
            <Heading sectionId="blog" />
            <div className="bl_blog_card bl_cardUnit bl_cardUnit__col4">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blogId={blog.id}
                  blogImg={blog.eyecatch?.url}
                  blogDate={formatDate(blog.date)}
                  blogTitle={blog.title}
                  blogDescription={blog.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
