import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Updated import

const TopBar1280px = ({ className = "" }) => {

  return (
    <header
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-between py-[25px] px-[50px] top-[0] z-[99] sticky gap-[20px] text-left text-5xl text-white font-body-18 mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <div className="flex flex-row items-start justify-start p-[5px] relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-400" />
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[79px] whitespace-nowrap z-[1]">
            ApplyLog
          </a>
        </div>
      </div>
      <div className="w-[273px] flex flex-row items-start justify-start gap-[30px] text-right text-lg">
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <Link
            to="/register"
            className="[text-decoration:none] relative leading-[32px] text-[inherit] inline-block min-w-[68px] whitespace-nowrap"
          >
            Sign up
          </Link>
        </div>
        <Link
          to="/login"
          className=" [text-decoration:none] cursor-pointer [border:none] py-[9px] px-[61px] bg-plum flex-1 rounded-mini flex flex-row items-start justify-start relative gap-[10px] whitespace-nowrap hover:bg-cornflowerblue"
        >
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-plum" />
          <span className=" relative text-lg leading-[32px] font-body-18 text-darkslategray text-center inline-block min-w-[53px] z-[1]">
            Log in
          </span>
        </Link>
      </div>
    </header>
  );
};

TopBar1280px.propTypes = {
  className: PropTypes.string,
};

export default TopBar1280px;
