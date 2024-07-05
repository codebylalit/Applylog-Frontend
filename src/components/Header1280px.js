import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Updated import
import ScreenshotImg from "./screenshot@2x.png"

const Header1280px = ({ className = "" }) => {

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-center py-[77px] px-5 box-border max-w-full text-left text-41xl text-white font-body-18 mq750:pt-[50px] mq750:pb-[50px] mq750:box-border ${className}`}
    >
      <div className="w-[1080px] flex flex-row items-start justify-start relative gap-[115px] max-w-full lg:gap-[57px] mq750:gap-[29px] mq1050:flex-wrap">
        <div className="h-full w-[500px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-xl bg-darkslategray" />
        <div className="w-[465px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[465px] max-w-full mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[72px] mq450:gap-[36px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[90px] font-semibold font-inherit mq450:text-17xl mq450:leading-[54px] mq1050:text-29xl mq1050:leading-[72px]">
                Track your job applications
              </h1>
              <div className="self-stretch relative text-lg leading-[32px] text-gray-500">
                Organise all your job applications effortlessly. Track statuses,
                manage deadlines, and stay top of your career with ApplyLog
              </div>
            </div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="cursor-pointer [border:none] py-[9px] pr-7 pl-9 bg-yellow rounded-mini flex flex-row items-start justify-start relative gap-[10px] whitespace-nowrap hover:bg-darkkhaki">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-yellow" />
                <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray whitespace-pre-wrap text-center inline-block min-w-[111px] z-[1]">
                  Get started
                </div>
              </button>
            </Link>
          </div>
        </div>
        <img
          className="h-[446px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[325px] z-[1]"
          loading="lazy"
          alt=""
          src={ScreenshotImg}
        />
      </div>
    </section>
  );
};

Header1280px.propTypes = {
  className: PropTypes.string,
};

export default Header1280px;
