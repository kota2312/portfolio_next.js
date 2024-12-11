import React from "react";

export default function Jumbotron({ images }) {
    return (
        <div className="ly_mainVisual_inner">
            <div className="bl_mainVisual_left __en">
                <div className="bl_mainVisual_contents">
                    <h1 className="bl_mainVisual_heading">
                        Kota<br />
                        Takahashi<br />
                        <span>Web Portfolio</span>
                        <span>-Welcome-</span>
                    </h1>
                </div>
                <div className="el_mainVisual_scrolldown"><span>Scroll down</span></div>
            </div>
            <div className="bl_mainVisual_right">
                <div className="bl_mainVisual_animate_wrapper">
                    {images.map((image, index) => (
                        <div className="bl_mainVisual_animate_slide" key={index}>
                            <figure>
                                <img src={`/img/top/slider/${image}`} alt={`Image ${index + 1}`} />
                            </figure>
                        </div>
                    ))}
                </div>
                <div className="bl_mainVisual_animate_wrapper">
                    {images.map((image, index) => (
                        <div className="bl_mainVisual_animate_slide" key={index}>
                            <figure>
                                <img src={`/img/top/slider/${image}`} alt={`Image ${index + 1}`} />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
