// scrollReveal.js
export const initScrollReveal = async (config = {}) => {
    if (typeof window === "undefined") {
      // SSR環境では何もしない
      return;
    }
  
    // ScrollReveal を動的にインポート
    const ScrollReveal = (await import("scrollreveal")).default;
  
    const defaultConfig = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    };
  
    const sr = ScrollReveal({ ...defaultConfig, ...config });
  
    // 各セクションにアニメーションを適用
    sr.reveal(".bl_mainVisual", { delay: 200 });
    sr.reveal(".bl_aboutUs", { delay: 300 });
    sr.reveal(".bl_blog", { delay: 400 });
    sr.reveal(".bl_works", { delay: 500 });
    sr.reveal(".bl_certification", { delay: 600 });
    sr.reveal(".bl_skill", { delay: 700 });
    sr.reveal(".bl_contact", { delay: 800 });
    sr.reveal(".bl_cta-wrap", { delay: 900 });
  };
  