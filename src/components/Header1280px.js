import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ScreenshotImg from "./screenshot@2x.png";

const Header1280px = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-center py-[77px] px-5 box-border max-w-full text-left text-41xl text-white font-body-18 ${className}`}
    >
      <div className="w-[1080px] flex flex-row items-start justify-start relative gap-[115px] max-w-full lg:gap-[57px] mq750:flex-col mq750:gap-[29px] mq750:px-0">
        {/* Background and content container */}
        <div className="h-full w-[500px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-xl bg-darkslategray z-[0] mq750:hidden" />

        {/* Text Content */}
        <div className="w-[465px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[465px] max-w-full mq750:min-w-full mq750:px-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-[72px] mq450:gap-[36px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[90px] font-semibold font-inherit mq450:text-[32px] mq450:leading-[40px] mq750:text-[36px] mq750:leading-[48px]">
                Track your job applications
              </h1>
              <div className="self-stretch relative text-lg leading-[32px] text-gray-500 mq750:text-base mq750:leading-[28px]">
                Organise all your job applications effortlessly. Track statuses,
                manage deadlines, and stay top of your career with ApplyLog
              </div>
            </div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="cursor-pointer [border:none] py-[9px] pr-7 pl-9 bg-yellow rounded-mini flex flex-row items-start justify-start relative gap-[10px] whitespace-nowrap hover:bg-darkkhaki mq750:py-[6px] mq750:px-[12px]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-yellow" />
                <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray whitespace-pre-wrap text-center inline-block min-w-[111px] z-[1] mq750:text-base mq750:leading-[28px]">
                  Get started
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <img
          className="h-[446px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[325px] z-[1] mq750:h-[300px]"
          loading="lazy"
          alt=""
          src={ScreenshotImg}
        />
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 750px) {
          section {
            padding: 50px 20px;
          }
          h1 {
            font-size: 24px;
            line-height: 40px;
          }
          .mq750\\:flex-col {
            flex-direction: column;
          }
          .mq750\\:px-5 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          .mq750\\:h-[300px] {
            height: 300px;
          }
          img {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

Header1280px.propTypes = {
  className: PropTypes.string,
};

export default Header1280px;
