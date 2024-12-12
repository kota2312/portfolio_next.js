import React from "react";
import index from "../pages/index";
import Link from "next/link";

const BlogCard = (props) => {
    let blogId = props.blogId;
    let blogImg = props.blogImg;
    let blogDate = props.blogDate;
    let blogTitle = props.blogTitle;
    let blogDescription = props.blogDescription;
    //console.log(blogId);
    return (
        <li key={blogId} className="bl_blog_card_item">      
            <figure className="bl_blog_card_imgWrapper">
                <img src={blogImg}></img>
            </figure>
            <div className="bl_blog_card_body">
                <p className="bl_blog_card_date">{blogDate}</p>
                <Link className="bl_blog_card_title" href={`/blogs/${blogId}`}>{blogTitle}</Link>
                <div className="bl_blog_card_description">
                    <p>{blogDescription}</p>
                </div>
            </div>
        </li>
    )
}

export default BlogCard