import React from "react";
import Link from "next/link";

export default function TabContentCards({ sectionId, tabId }) {
    const contentData = {
        works: {
            tab01: [
                {
                    img: "/img/top/works/strawberry_site.png",
                    ttl: "制作事例01",
                    url: "https://dev02.ko-kun.com/",
                    txt: "苺農園を意識してダミーサイト作成<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/america.png",
                    ttl: "制作事例02",
                    url: "http://dev03.ko-kun.com/",
                    txt: "アメリカンを意識したダミーサイト作成<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/rc.png",
                    ttl: "合同会社RC様",
                    url: "https://rc-0711.com/",
                    txt: "地域の便利屋様のサイト制作をさせていただきました。<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/studio_nika.png",
                    ttl: "(有)STUDIO NIKA様",
                    url: "https://studionika.co.jp/",
                    txt: "ウェブ制作事業者様のサイト制作をさせていただきました。<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/kishikawa.png",
                    ttl: "岸川ともき様",
                    url: "https://t-kishikawa.info/",
                    txt: "現市議会委員様の応援サイトを制作をさせていただきました。<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/inoue.png",
                    ttl: "(有)井上商店様",
                    url: "https://inoue-shoten-yame.com/",
                    txt: "地域のリフォーム業者様のサイトを制作をさせていただきました。<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
                {
                    img: "/img/top/works/dawnefo.png",
                    ttl: "(有)STUDIO NIKA様",
                    url: "https://studionika.co.jp/service/dawnefo/",
                    txt: "入力補助システムのLLPを制作をさせていただきました。<br>担当：デザイン～コーディング<br>言語：HTML,CSS,Javascript",
                },
            ],
            tab02: [
                {
                    img: "/img/top/works/dawnefo.png",
                    ttl: "DAWNEFO",
                    url: "https://studionika.co.jp/dawnefo-contact/",
                    txt: "入力補助システムを開発しました。タグ一つ挿入するだけで既存フォームをステップフォームへ変更したり、各種入力補助オプションをつける事ができます。気になる方はぜひリンクからお問い合わせ画面を触ってみてください。",
                },
            ],
            tab03: [
                {
                    img: "/img/top/works/kimilove.png",
                    ttl: "二人（キミ）と始める打算的なラブコメ",
                    url: "https://www.youtube.com/watch?v=Y6Isq6Lq3s0",
                    txt: "主題歌を制作させていただきました。",
                },
                {
                    img: "/img/top/works/noise.png",
                    ttl: "映画「NOISE」",
                    url: "https://noise-movie.com/nmwp/",
                    txt: "監督：松本優作<br>主演：篠崎こころ<br>劇中歌を制作させていただきました。",
                },
                {
                    img: "/img/top/works/penpen.png",
                    ttl: "Animalbeast様",
                    url: "https://music.apple.com/jp/album/%E3%83%9A%E3%83%B3-%E3%83%9A%E3%83%B3%E3%81%8E%E3%82%93/1227331514?i=1227331538",
                    txt: "カップリング曲「ペン★ペンぎん」を提供させていただきました。",
                },
            ],
        },
        services: {
            tab01: [
                {
                    img: "/img/top/services/top1.png",
                    ttl: "Top 1",
                    url: "/services/top1",
                },
                {
                    img: "/img/top/services/top2.png",
                    ttl: "Top 2",
                    url: "/services/top2",
                },
            ],
            tab02: [
                {
                    img: "/img/top/services/test1.png",
                    ttl: "Test 1",
                    url: "/services/test1",
                },
                {
                    img: "/img/top/services/test2.png",
                    ttl: "Test 2",
                    url: "/services/test2",
                },
            ],
            tab03: [
                {
                    img: "/img/top/services/aaa1.png",
                    ttl: "AAA 1",
                    url: "/services/aaa1",
                },
                {
                    img: "/img/top/services/aaa2.png",
                    ttl: "AAA 2",
                    url: "/services/aaa2",
                },
            ],
        },
    };

    const defaultCards = [
        {
            img: "/img/top/tk.png",
            ttl: "Default Card",
            txt: "Default Text",
        },
    ];

    const cardsToDisplay = contentData[sectionId]?.[tabId] || defaultCards;

    return (
        <div className="bl_cardUnit bl_cardUnit__col4">
            {cardsToDisplay.map((card, index) => (
                <div className="bl_card" key={index}>
                    <figure className="bl_card_imgWrapper">
                        <img src={card.img} alt={card.ttl} />
                    </figure>
                    <div className="bl_card_body">
                        {card.url ? (
                            card.url.startsWith("http") ? (
                                <a
                                    href={card.url}
                                    className="bl_card_ttlLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h3 className="bl_card_ttl">{card.ttl}</h3>
                                </a>
                            ) : (
                                <Link href={card.url} className="bl_card_ttlLink">
                                    <h3 className="bl_card_ttl">{card.ttl}</h3>
                                </Link>
                            )
                        ) : (
                            <h3 className="bl_card_ttl">{card.ttl}</h3>
                        )}
                        {card.txt && (
                            <div
                                className="bl_card_txt"
                                dangerouslySetInnerHTML={{ __html: card.txt }}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
