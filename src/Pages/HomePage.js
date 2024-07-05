import TopBar1280px from "../components/TopBar1280px";
import Header1280px from "../components/Header1280px";
import CTA1280px from "../components/CTA1280px";
import Footer1280px from "../components/Footer1280px";
import HomeScreen from "./ScreenshotHome.png"
const Home = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <TopBar1280px />
      <Header1280px />
      <section className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-0 px-5 box-border gap-[66.5px] max-w-full lg:gap-[33px] mq750:gap-[17px]">
      </section>
      <section className="self-stretch h-[700px] relative bg-gray-100 overflow-hidden shrink-0">
        <div className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_540px)] rounded-xl bg-cornsilk w-[1080px] h-[500px]" />
        <img
          className="absolute top-[100px] left-[calc(50%_-_540px)] w-[1080px] h-[500px] object-contain z-[1]"
          alt=""
          src= {HomeScreen}
        />
      </section>
      <CTA1280px />
      <Footer1280px />
    </div>
  );
};

export default Home;
