import React from "react";
import Link from "next/link";

export default function CardList({ sectionId }) {
    const contentMap = {
        certification: [
            {
                img: "/img/top/certification/lv1.png",
                ttl: "HTML5プロフェッショナル認定 レベル1",
                url: "https://html5exam.jp/",
            },
            {
                img: "/img/top/certification/sa-csm-600.png",
                ttl: "Certified ScrumMaster®（CSM®）",
                url: "https://abi-agile.com/lp/csm/",
            },
        ],
        hoge: [
            {
                img: "/img/top/hoge1.png",
                ttl: "Hoge1 Title",
                txt: "Hoge1 Text",
                url: "/hoge1",
            },
            {
                img: "/img/top/hoge2.png",
                ttl: "Hoge2 Title",
                txt: "Hoge2 Text",
                url: "https://example.com/hoge2",
            },
        ],
    };

    const defaultContent = [
        {
            img: "/img/top/tk.png",
            ttl: "Default Card",
            txt: "Default Text",
        },
    ];

    const contentList = contentMap[sectionId] || defaultContent;

    return (
        <div className="bl_cardUnit bl_cardUnit__col4">
            {contentList.map((content, index) => (
                <div className="bl_card" key={index}>
                    <figure className="bl_card_imgWrapper">
                        <img src={content.img} alt={content.ttl} />
                    </figure>
                    <div className="bl_card_body">
                        {/* タイトル部分のみリンク化 */}
                        {content.url ? (
                            content.url.startsWith("http") ? (
                                <a
                                    href={content.url}
                                    className="bl_card_ttlLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h3 className="bl_card_ttl">{content.ttl}</h3>
                                </a>
                            ) : (
                                <Link href={content.url} className="bl_card_ttlLink">
                                    <h3 className="bl_card_ttl">{content.ttl}</h3>
                                </Link>
                            )
                        ) : (
                            <h3 className="bl_card_ttl">{content.ttl}</h3>
                        )}
                        {/* テキストがあれば表示 */}
                        {content.txt ? <p className="bl_card_txt">{content.txt}</p> : null}
                    </div>
                </div>
            ))}
        </div>
    );
}
