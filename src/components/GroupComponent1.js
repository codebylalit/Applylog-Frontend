import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  implementDesignScreens,
  ourDesignersCreated6Scree,
  vH,
  lK,
}) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-white flex flex-col items-start justify-start p-6 box-border gap-[21px] w-auto h-auto z-[1] text-left text-5xs text-black font-poppins hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[21px] hover:items-start hover:justify-start hover:rounded-xl hover:p-6 hover:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[5px] w-auto h-auto [transform:rotate(0deg)] text-dimgray hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[5px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
            <div className="w-[9px] h-[9px] relative rounded-[50%] bg-deeppink flex z-[1] hover:bg-deeppink hover:flex hover:w-[9px] hover:h-[9px]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-0 hover:box-border">
            <div className="relative font-medium flex min-w-[56] z-[1] hover:font-medium hover:font-poppins hover:text-5xs hover:text-left hover:text-dimgray hover:flex hover:min-w-[56]">
              DEVELOPMENT
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-1.5 hover:px-0 hover:pb-0 hover:box-border">
            <img
              className="w-4 h-0.5 relative flex z-[1] hover:flex hover:w-4 hover:h-0.5"
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
          </div>
        </div>
        <div className="relative text-lg font-medium flex z-[1] hover:font-medium hover:font-poppins hover:text-lg hover:text-left hover:text-black hover:flex">
          {implementDesignScreens}
        </div>
        <div className="self-stretch relative text-xs flex w-auto z-[1] hover:font-poppins hover:text-xs hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
          {ourDesignersCreated6Scree}
        </div>
      </div>
      <div className="w-[53px] flex flex-row items-start justify-start h-auto gap-[-5px] [transform:rotate(0deg)] text-xs text-white hover:flex hover:w-[53px] hover:h-auto hover:flex-row hover:gap-[-5px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="h-[29px] flex-1 relative flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-[29px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue box-border w-full h-full flex z-[1] border-[1px] border-solid border-white hover:bg-darkslateblue hover:flex hover:w-full hover:h-full hover:box-border hover:border-[1px] hover:border-solid hover:border-white" />
          <div className="absolute top-[5px] left-[6px] flex min-w-[17] z-[2] hover:font-poppins hover:text-xs hover:text-left hover:text-white hover:flex hover:min-w-[17]">
            {vH}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border w-auto [align-self:unset] h-auto gap-[-21px] [transform:rotate(0deg)] ml-[-5px] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[-21px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-2 hover:pl-0 hover:box-border">
          <div className="h-[29px] w-[29px] relative rounded-[50%] bg-forestgreen box-border flex z-[2] border-[1px] border-solid border-white hover:bg-forestgreen hover:flex hover:w-[29px] hover:h-[29px] hover:box-border hover:border-[1px] hover:border-solid hover:border-white" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] ml-[-21px] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[5px] hover:px-0 hover:pb-0 hover:box-border">
            <div className="relative flex min-w-[13] z-[3] hover:font-poppins hover:text-xs hover:text-left hover:text-white hover:flex hover:min-w-[13]">
              {lK}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  implementDesignScreens: PropTypes.string,
  ourDesignersCreated6Scree: PropTypes.string,
  vH: PropTypes.string,
  lK: PropTypes.string,
};

export default GroupComponent1;
