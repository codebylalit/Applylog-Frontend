import { useCallback } from "react";
import PropTypes from "prop-types";

const Footer1280px = ({ className = "" }) => {
  const onSecondaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <footer
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-[50px] pb-[50px] box-border gap-[49px] max-w-full text-left text-5xl text-white font-body-18 mq750:gap-[24px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      <div className="self-stretch h-px relative rounded-81xl bg-gray-300" />
      <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[44px] min-w-[389px] max-w-full mq750:gap-[22px] mq750:min-w-full">
          <div className="flex flex-row items-start justify-start p-[5px] relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-400" />
            <div className="relative leading-[24px] font-semibold inline-block min-w-[79px] z-[1] mq450:text-lgi mq450:leading-[19px]">
            ApplyLog
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-lg mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[86px]">
              <div className="relative leading-[32px] font-semibold inline-block min-w-[15px]">
                ©
              </div>
              <div className="relative leading-[32px] font-semibold inline-block min-w-[106px]">
                ApplyLog 2024
              </div>
            </div>
            <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[86px]">
              Privacy policy
            </div>
            <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[86px]">
              Cookies policy
            </div>
            <div className="relative leading-[32px] font-semibold inline-block min-w-[117px]">
              Terms of use
            </div>
          </div>
        </div>
        <div className="w-[501px] flex flex-col items-start justify-start gap-[15px] max-w-full text-lg">
          <div className="relative leading-[32px]">
            Updates right to your Inbox
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap">
            <input
              className="w-full [border:none] [outline:none] bg-darkslategray h-[50px] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start py-[9px] px-[30px] box-border font-body-18 text-lg text-gray-500 min-w-[196px]"
              placeholder="Email Address"
              type="text"
            />
            <button
              className="cursor-pointer [border:none] py-[9px] px-16 bg-plum rounded-mini flex flex-row items-start justify-start relative gap-[10px] hover:bg-cornflowerblue"
              onClick={onSecondaryCTAClick}
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-plum" />
              <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray text-center inline-block min-w-[46px] z-[1]">
                Send
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1280px.propTypes = {
  className: PropTypes.string,
};

export default Footer1280px;
