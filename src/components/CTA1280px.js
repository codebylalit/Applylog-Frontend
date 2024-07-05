import { useCallback } from "react";
import PropTypes from "prop-types";

const CTA1280px = ({ className = "" }) => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-center py-[100px] px-5 box-border max-w-full text-left text-41xl text-white font-body-18 mq750:pt-[65px] mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="w-[1080px] flex flex-row flex-wrap items-start justify-center gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[325px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[90px] font-semibold font-inherit mq450:text-17xl mq450:leading-[54px] mq1050:text-29xl mq1050:leading-[72px]">
                <p className="m-0">{`Questions? `}</p>
                <p className="m-0">{`Let’s talk `}</p>
              </h1>
              <div className="w-[400px] relative text-lg leading-[32px] text-gray-500 inline-block max-w-full">
                <p className="m-0">Contact us through our 24/7 live chat.</p>
                <p className="m-0">We’re always happy to help!</p>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[9px] pr-7 pl-9 bg-yellow rounded-mini flex flex-row items-start justify-start relative gap-[10px] whitespace-nowrap hover:bg-darkkhaki"
              onClick={onPrimaryCTAClick}
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-yellow" />
              <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray whitespace-pre-wrap text-center inline-block min-w-[111px] z-[1]">{`Get started  `}</div>
            </button>
          </div>
        </div>
        <img
          className="h-[400px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[325px]"
          loading="lazy"
          alt=""
          src="/gif@2x.png"
        />
      </div>
    </section>
  );
};

CTA1280px.propTypes = {
  className: PropTypes.string,
};

export default CTA1280px;
