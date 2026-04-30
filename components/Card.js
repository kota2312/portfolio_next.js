import React from "react";
import Link from "next/link";

export default function CardList({ sectionId }) {
    const contentMap = {
        certification: [
            {
                img: "/img/top/certification/lv1.png",
                ttl: "HTML5プロフェッショナル認定レベル1",
                txt: "HTML/CSS/JavaScriptの基礎理解を前提に、Web標準を意識したマークアップや実装を進められます。",
                url: "https://html5exam.jp/",
            },
            {
                img: "/img/top/certification/sa-csm-600.png",
                ttl: "Certified ScrumMaster",
                txt: "チーム進行や対話設計を意識しながら、要件整理・開発フロー改善・継続的な進行支援に活かせます。",
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
    const labelMap = {
        certification: "Record / Jupiter",
    };
    const cardLabel = labelMap[sectionId] || "Archive";

    return (
        <div className="bl_cardUnit bl_cardUnit__col4">
            {contentList.map((content, index) => (
                <div className="bl_card" key={index}>
                    <figure className="bl_card_imgWrapper">
                        <img src={content.img} alt={content.ttl} />
                    </figure>
                    <div className="bl_card_body">
                        <div className="bl_card_meta">
                            <span>{cardLabel}</span>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        {content.url ? (
                            content.url.startsWith("http") ? (
                                <Link
                                    href={content.url}
                                    className="bl_card_ttlLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h3 className="bl_card_ttl">{content.ttl}</h3>
                                </Link>
                            ) : (
                                <Link href={content.url} className="bl_card_ttlLink">
                                    <h3 className="bl_card_ttl">{content.ttl}</h3>
                                </Link>
                            )
                        ) : (
                            <h3 className="bl_card_ttl">{content.ttl}</h3>
                        )}
                        {content.txt ? <p className="bl_card_txt">{content.txt}</p> : null}
                    </div>
                </div>
            ))}
        </div>
    );
}
