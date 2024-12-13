import { Swiper, SwiperSlide } from "swiper/react";
import { formatDate } from "@/utility/dateformat";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";  // BlogCardをインポート

export default function BasicSlider({ blogs }) {
  const slideSettings = {
    0: {
      slidesPerView: 1,  // 小さい画面では1つずつ表示
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,  // 中くらいの画面では2つ表示
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,  // 1024px以上では3つ表示
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings} // ブレイクポイントに基づく設定
      slidesPerView={3}  // デフォルトで3つ表示
      centeredSlides={true} // スライドを中央に配置
      loop={true} // ループさせる
      speed={1000} // スライド切り替え速度
      autoplay={{
        delay: 2500, // 自動再生の間隔
        disableOnInteraction: false, // ユーザーが操作した後でも自動再生を続ける
      }}
      navigation
      pagination={{
        clickable: true, // ページネーションクリック可能
      }}
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog.id}>
          <BlogCard
            blogId={blog.id}
            blogImg={blog.eyecatch.url}
            blogDate={formatDate(blog.date)}
            blogTitle={blog.title}
            blogDescription={blog.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
