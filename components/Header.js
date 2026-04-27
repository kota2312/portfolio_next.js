import React, { useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const menuLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Works", href: "/works" },
        { name: "Certification", href: "/certification" },
        { name: "Skill", href: "/skill" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const button = document.querySelector(".js_headerMenuBtn");
        const menu = document.querySelector(".ly_header_inner");
        const overlay = document.querySelector(".js_menuOverlay");
        const body = document.body;

        const toggleMenu = () => {
            button.classList.toggle("is_open");
            overlay.classList.toggle("is_show");
            menu.classList.toggle("is_show");
            body.classList.toggle("is_menuOpen");
        };

        button.addEventListener("click", toggleMenu);

        return () => {
            button.removeEventListener("click", toggleMenu);
            body.classList.remove("is_menuOpen");
        };
    }, []);

    const closeMenu = () => {
        const button = document.querySelector(".js_headerMenuBtn");
        const menu = document.querySelector(".ly_header_inner");
        const overlay = document.querySelector(".js_menuOverlay");

        button.classList.remove("is_open");
        menu.classList.remove("is_show");
        overlay.classList.remove("is_show");
        document.body.classList.remove("is_menuOpen");
    };

    return (
        <header className="ly_header">
            <p className="bl_header_logo">
                <Link href="/" className="bl_header_logo_link" onClick={closeMenu}>
                    <img src="/img/tk_header_logo.png" alt="Kota Takahashi" />
                </Link>
            </p>
            <div className="ly_header_inner">
                <nav className="bl_header_nav" aria-label="Global menu">
                    <p className="bl_header_nav_label">Menu</p>
                    <ul className="bl_header_nav_list_txt">
                        {menuLinks.map((link) => (
                            <li className="bl_header_nav_item" key={link.href}>
                                <Link
                                    href={link.href}
                                    className="bl_header_nav_link"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <button className="bl_headerSpBtn js_headerMenuBtn" type="button" aria-label="Open menu">
                <span className="bl_headerSpBtn_line"></span>
                <span className="bl_headerSpBtn_line"></span>
                <span className="bl_headerSpBtn_line"></span>
            </button>
            <div className="js_menuOverlay"></div>
        </header>
    );
}
