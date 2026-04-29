import Link from "next/link";

export default function Footer() {
    return (
        <footer className="ly_footer bl_footer">
            <div className="bl_footer_cont">
                <Link href="/" className="bl_footer_info_logo">
                    <img
                        alt="K.T PORTFOLIO"
                        src="/img/branding/kt_portfolio_mark.png"
                        data-src="/img/branding/kt_portfolio_mark.png"
                        className="ls-is-cached lazyloaded"
                    />
                </Link>
            </div>
        </footer>
    );
}
