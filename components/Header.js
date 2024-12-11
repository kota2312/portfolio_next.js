import React from "react";
import Link from "next/link";
import Image from 'next/image';


export default function Header() {
    const headerLinks = [
        { name: "ホーム", href: "." },
        { name: "メッセージ", href: "message.html" },
        { name: "会社概要", href: "company.html" }
    ];

    return (
        <header className="ly_header">
            <div className="ly_header_inner">
                <p className="bl_header_logo">
                    <Link href="." className="bl_header_logo_link">
                        <img src="img/TKlogo.png" alt="START" />
                    </Link>
                </p>
                <nav className="bl_header_nav">
                    <ul className="bl_header_nav_list_txt">
                        {headerLinks.map((link, index) => (
                            <li className="bl_header_nav_item" key={index}>
                                <Link href={link.href} className="bl_header_nav_link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="bl_header_nav_list_btn">
                        <li className="bl_header_nav_item">
                            <Link href="." className="bl_header_nav_link">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}