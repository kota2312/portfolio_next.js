import React from "react";
import Link from "next/link";

export default function Media({ sectionId }) {
    // 動的な文章を定義(index.jsで持たせているsectionIdに応じて内容を可変)
    const contentMap = {
        aboutUs: {
            url: "/img/top/tk.png",
            subTitle: "顧客を第一に考えてお仕事をする",
            mainText: "埼玉県出身のエンジニア。保育系の大学卒業後、保育士・作曲家を経てどうにか平均年収まで上げるべく29歳でエンジニアへ転職。</br>運用保守・カスタマーサポートからキャリアをスタートし、入力補助システムの/開発に携わる。</br>デザイン～コーディング/PL/ディレクターまで一貫した業務を経験。それをきっかけにWeb制作を初めとしたフロントエンド開発領域をメインに活動中。",
        },
        hoge: {
            subTitle: "",
            mainText: "",
        },
        hoge: {
            subTitle: "",
            mainText: "",
        },
    };

    // デフォルト値（該当がない場合）
    const defaultContent = {
        url: "/img/top/tk.png",
        subTitle: "Welcome",
        mainText: "ここではさまざまな情報を<br />共有しています。",
    };

    // sectionIdに基づく内容を取得
    const content = contentMap[sectionId] || defaultContent;

    return (
        <div className="bl_media">
            <figure className="bl_media_imgWrapper">
                <img src={content.url} className="bl_media_imgWrapper_img"></img>
            </figure>
            <div className="bl_media_body">
                <h3 className="bl_media_ttl">
                    {content.subTitle}
                </h3>
                <p className="bl_media_txt"
                    dangerouslySetInnerHTML={{ __html: content.mainText }}
                ></p>
            </div>
        </div>
    )
}