import React from "react";
import Link from "next/link";

const BlogCard = (props) => {
    let blogId = props.blogId;
    let blogImg = props.blogImg;
    let blogDate = props.blogDate;
    let blogTitle = props.blogTitle;
    let blogDescription = props.blogDescription;
    const articleCode = String(blogId).slice(0, 6).toUpperCase();
    return (
        <article key={blogId} className="bl_blog_card_item">
            <Link className="bl_blog_card_link" href={`/blogs/${blogId}`}>
                <figure className="bl_blog_card_imgWrapper">
                    {blogImg && <img src={blogImg} alt={blogTitle}></img>}
                </figure>
                <div className="bl_blog_card_body">
                    <div className="bl_blog_card_meta">
                        <span>Archive / Mercury</span>
                        <span>{articleCode}</span>
                    </div>
                    <p className="bl_blog_card_date">{blogDate}</p>
                    <h3 className="bl_blog_card_title">{blogTitle}</h3>
                    <div className="bl_blog_card_text">
                        <p>{blogDescription}</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogCard
