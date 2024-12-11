import React, { useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const headerLinks = [
        { name: "Home", href: "#" },
        { name: "About us", href: "#aboutUs" },
        { name: "Blogs", href: "#blog" },
        { name: "Works", href: "#works" },
    ];

    useEffect(() => {
        const button = document.querySelector('.js_headerMenuBtn');
        const menu = document.querySelector('.ly_header_inner');
        const overlay = document.querySelector('.js_menuOverlay');
        const windowEl = window;

        const toggleMenu = () => {
            button.classList.toggle('is_open');
            overlay.classList.toggle('is_show');
            menu.classList.toggle('is_show');
        };

        const initOnResize = () => {
            const winWidth = windowEl.innerWidth;
            if (winWidth > 768) {
                initShowElement();
            }
        };

        const initShowElement = () => {
            button.classList.remove('is_open');
            menu.classList.remove('is_show');
            overlay.classList.remove('is_show');
        };

        button.addEventListener('click', toggleMenu);
        windowEl.addEventListener('resize', initOnResize);
        windowEl.addEventListener('load', initOnResize);

        // Cleanup
        return () => {
            button.removeEventListener('click', toggleMenu);
            windowEl.removeEventListener('resize', initOnResize);
            windowEl.removeEventListener('load', initOnResize);
        };
    }, []);

    // メニューを閉じる関数
    const closeMenu = () => {
        const button = document.querySelector('.js_headerMenuBtn');
        const menu = document.querySelector('.ly_header_inner');
        const overlay = document.querySelector('.js_menuOverlay');
        button.classList.remove('is_open');
        menu.classList.remove('is_show');
        overlay.classList.remove('is_show');
    };

    return (
        <header className="ly_header">
            <p className="bl_header_logo">
                <Link href="." className="bl_header_logo_link">
                    <img src="img/tk_header_logo.png" alt="ロゴ" />
                </Link>
            </p>
            <div className="ly_header_inner">
                <nav className="bl_header_nav">
                    <ul className="bl_header_nav_list_txt">
                        {headerLinks.map((link, index) => (
                            <li className="bl_header_nav_item" key={index}>
                                <Link 
                                    href={link.href} 
                                    className="bl_header_nav_link"
                                    onClick={closeMenu} // リンクがクリックされたときにメニューを閉じる
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="bl_header_nav_list_btn">
                        <li className="bl_header_nav_item">
                            <Link 
                                href="#contact" 
                                className="el_btn"
                                onClick={closeMenu} // お問い合わせボタンも同様にメニューを閉じる
                            >
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="bl_headerSpBtn js_headerMenuBtn">
                <span className="bl_headerSpBtn_line"></span>
                <span className="bl_headerSpBtn_line"></span>
                <span className="bl_headerSpBtn_line"></span>
            </button>
            <div className="js_menuOverlay"></div>
        </header>
    );
}
