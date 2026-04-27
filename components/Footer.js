import Link from "next/link";

export default function Footer() {
    return (
        <footer className="ly_footer bl_footer">
            <div className="bl_footer_cont">
                <Link href="/" className="bl_footer_info_logo">
                    <img
                        alt="Kota Takahashi"
                        src="/img/tk_footer_logo.png"
                        data-src="/img/tk_footer_logo.png"
                        className="ls-is-cached lazyloaded"
                    />
                </Link>
            </div>
        </footer>
    );
}
