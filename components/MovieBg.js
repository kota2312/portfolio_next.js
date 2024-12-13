import React from "react";

export default function MovieBg() {
    return (
        <div className="video-wrap">
            <video
                autoPlay
                muted  // 自動再生を許可するために音声をミュート
                playsInline
                loop
            >
                <source 
                    data-src-sp="movie/body_bg_triangle.mp4"
                    data-src-pc="movie/body_bg_triangle.mp4"
                    src="movie/body_bg_triangle.mp4"
                />
            </video>
        </div>
    );
}
