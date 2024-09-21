import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopBar1280px = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-center justify-between py-[25px] px-[50px] top-[0] z-[99] sticky gap-[20px] text-left text-5xl text-white font-body-18 mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      {/* Logo or Site Name */}
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <div className="relative">
          <div className="h-full w-full absolute top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-400" />
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[79px] whitespace-nowrap z-[1]">
            ApplyLog
          </a>
          
        </div>
      </div>

      {/* Sign up and Log in Buttons */}
      <div className="flex flex-row items-center justify-end gap-[15px] text-lg">
        <Link
          to="/register"
          className="[text-decoration:none] relative leading-[32px] text-[inherit] inline-block min-w-[68px] whitespace-nowrap mq750:text-base mq750:leading-[28px] mq750:min-w-[50px]"
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className="[text-decoration:none] cursor-pointer [border:none] py-[9px] px-[50px] bg-plum rounded-mini flex items-center justify-center relative gap-[10px] whitespace-nowrap hover:bg-cornflowerblue mq750:py-[6px] mq750:px-[30px]"
        >
          <span className="relative text-lg leading-[32px] font-body-18 text-darkslategray text-center z-[1] mq750:text-base mq750:leading-[28px]">
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
