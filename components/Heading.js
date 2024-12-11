import React from "react";

export default function Heading({ sectionId }) {
    // 動的な文章を定義
    const contentMap = {
        aboutUs: {
            subTitle: "About us",
            mainText: "私について<br />簡単に<span class='hp_color_gradient'>自己紹介</span>をいたします。",
        },
        blog: {
            subTitle: "Blogs",
            mainText: "ニュース・ブログ・趣味など記事に関する<br />情報を<span class='hp_color_gradient'>掲載</span>いたします。",
        },
        works: {
            subTitle: "Works",
            mainText: "仕事として関わらせていただいた案件<br />運営中のサービスなどを<span class='hp_color_gradient'>掲載</span>いたします。",
        },
        certification: {
            subTitle: "certification",
            mainText: "取得した<br />資格を<span class='hp_color_gradient'>掲載</span>いたします。",

        },
        skill: {
            subTitle: "skill",
            mainText: "過去経験/習得した<br />技術を<span class='hp_color_gradient'>掲載</span>いたします。",

        },
        contact: {
            subTitle: "contact",
            mainText: "気になることがございましたら<br />お気軽に<span class='hp_color_gradient'>お問い合わせ</span>お願いいたします。",

        }
    };

    // デフォルト値（該当がない場合）
    const defaultContent = {
        subTitle: "Welcome",
        mainText: "ここではさまざまな情報を<br />共有しています。",
    };

    // sectionIdに基づく内容を取得
    const content = contentMap[sectionId] || defaultContent;

    return (
        <div className="bl_heading">
            <hgroup className="el_hgroup">
                <p className="el_hgroup_sub">{content.subTitle}</p>
                <h2
                    className="el_lv2Heading"
                    dangerouslySetInnerHTML={{ __html: content.mainText }}
                ></h2>
            </hgroup>
        </div>
    );
}