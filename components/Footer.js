import Link from "next/link";

export default function Footer() {
    // フッターのリンクデータ
    const footerLinks = [
        {
            title: "メインメニュー",
            links: [
                { label: "Home", url: "/" },
                { label: "About us", url: "#aboutUs" },
                { label: "Blogs", url: "#blog" },
                { label: "Works", url: "#works" },
                { label: "Certification", url: "#certification" },
                { label: "Skill", url: "#skill" },
            ],
        },
        /*
        {
            title: "プラン",
            links: [
                { label: "About us", url: "#aboutUs" },
            ],
        },
        {
            title: "会社情報",
            links: [
                { label: "Blogs", url: "#blog" },
            ],
        },
        {
            title: "Works",
            links: [
                { label: "Works", url: "#works" },
            ],
        },
        */
    ];

    return (
        <footer className="ly_footer bl_footer">
            <div className="ly_cont bl_footer_cont">
                <div className="bl_footer_info">
                    <a href="/" className="bl_footer_info_logo">
                        <img
                            alt=""
                            src="img/tk_footer_logo.png"
                            data-src="img/tk_footer_logo.png"
                            className="ls-is-cached lazyloaded"
                        />
                        <noscript>
                            <img alt="" src="img/TKlogo.png" />
                        </noscript>
                    </a>
                </div>

                <div className="bl_footer_nav">
                    {/* フッターリンクを動的に作成 */}
                    {footerLinks.map((section, index) => (
                        <ul className="bl_footer_nav_list" key={index}>
                            <li className="bl_footer_nav_title">{/*section.title*/}</li>
                            {section.links.map((link, index) => (
                                <li className="bl_footer_nav_item" key={index}>
                                    <Link href={link.url}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    );
}