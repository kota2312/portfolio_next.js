import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import BlogCard from "@/components/BlogCard";
import MovieBg from "@/components/MovieBg";
import { client } from "@/libs/client";
import { formatDate } from "@/utility/dateformat";

export default function Blogs({ blogs }) {
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <Header />
      <MovieBg />
      <section id="blog" className="bl_blog">
        <div className="ly_cont">
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
