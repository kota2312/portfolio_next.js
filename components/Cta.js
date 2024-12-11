import React from "react";
import Link from "next/link";

export default function Cta() {
    return(
        <div className="bl_cta">
            <h2 className="bl_cta_ttl">
                お気軽にお問合せください
            </h2>
            <p className="bl_cta_txt">紹介しているサービスや私のことで気になることがございましたら、お気軽にお問合せください。転職/案件などご紹介ください。</p>
            <Link href="#contact" className="el_btn el_btn__cta">お問い合わせはこちら</Link>
         </div>
    )

}