import rightImg from "@/images/hero-right1.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/components/SectionPromo3";

const PageAbout = ({}) => {
  //https://admin.raovatlamdong.vn/api/cms-kit-public/pages/by-slug?slug=ve-chung-toi

  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Về Chúng tôi."
          btnText=""
          subHeading=" 👋 Mua bán Lâm Đồng  là  Chợ online cho phép người mua và người bán kết nối và giao dịch an toàn, dễ dàng trong một môi trường tiện lợi và rõ ràng.

Tất cả các dang  mục mục đều có trên trang của chúng tôi, cho dù nó là dành cho mua, bán, tìm kiếm nhà cửa, xe ô tô, tuyển dụng, đồ điện tử đã qua sử dụng, vật nuôi, và cả dịch vụ gia đình. Đội ngũ của chúng tôi mong muốn cung cấp cho người dùng trong Lâm Đồng, Đà Lạt, Bảo Lộc một nền tảng trực tuyến để sử dụng một cách đơn giản, tiện lợi, không rắc rối phức tạp. 
👋 
"
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionStatistic />

        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
