import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <nav
      className={`m-0 w-56 shadow-[7px_-1px_12px_rgba(0,_0,_0,_0.11)] bg-white flex flex-col items-start justify-start pt-8 px-0 pb-[84px] box-border gap-[58px] h-auto [transform:rotate(0deg)] text-left text-base text-black font-poppins hover:bg-white hover:flex hover:w-56 hover:h-auto hover:flex-col hover:gap-[58px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-8 hover:px-0 hover:pb-[84px] hover:box-border hover:shadow-[7px_-1px_12px_rgba(0,_0,_0,_0.11)] mq450:pt-5 mq450:pb-9 mq450:box-border mq1125:pt-[21px] mq1125:pb-[55px] mq1125:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-[42px] pl-[43px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[42px] hover:pl-[43px] hover:box-border">
        <div className="flex flex-row items-start justify-start gap-[16px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[1] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
            loading="lazy"
            alt=""
            src="/codesandbox.svg"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit] flex min-w-[99] z-[1] hover:font-bold hover:font-poppins hover:text-base hover:text-left hover:text-black hover:flex hover:min-w-[99]">
            Pro Manage
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[538px] box-border gap-[28px] w-auto h-auto [transform:rotate(0deg)] text-dimgray hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[28px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[538px] hover:box-border mq800:pb-[350px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-[50px] pl-[43px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[50px] hover:pl-[43px] hover:box-border">
          <div className="flex flex-row items-start justify-start gap-[16px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[1] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
              loading="lazy"
              alt=""
              src="/grid.svg"
            />
            <a className="[text-decoration:none] relative font-medium text-[inherit] flex min-w-[91] z-[1] hover:font-medium hover:font-poppins hover:text-base hover:text-left hover:text-dimgray hover:flex hover:min-w-[91]">
              Dashboard
            </a>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px] w-auto h-auto [transform:rotate(0deg)] text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[37px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[26px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <div className="self-stretch bg-cornflowerblue flex flex-row items-start justify-start pt-[9px] px-[43px] pb-2.5 box-border gap-[16px] w-auto h-auto [transform:rotate(0deg)] z-[1] hover:bg-cornflowerblue hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[9px] hover:px-[43px] hover:pb-2.5 hover:box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[2] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                loading="lazy"
                alt=""
                src="/layout.svg"
              />
              <div className="relative font-medium flex min-w-[49] z-[2] hover:font-medium hover:font-poppins hover:text-base hover:text-left hover:text-black hover:flex hover:min-w-[49]">
                Board
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[43px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] text-dimgray hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[43px] hover:box-border">
              <div className="flex flex-row items-start justify-start gap-[16px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[1] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                  loading="lazy"
                  alt=""
                  src="/database.svg"
                />
                <a className="[text-decoration:none] relative font-medium text-[inherit] flex min-w-[75] z-[1] hover:font-medium hover:font-poppins hover:text-base hover:text-left hover:text-dimgray hover:flex hover:min-w-[75]">
                  Analytics
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[43px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] text-dimgray hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[43px] hover:box-border">
            <div className="flex flex-row items-start justify-start gap-[16px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[1] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                loading="lazy"
                alt=""
                src="/settings.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-[inherit] flex min-w-[66] z-[1] hover:font-medium hover:font-poppins hover:text-base hover:text-left hover:text-dimgray hover:flex hover:min-w-[66]">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[46px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[46px] hover:box-border">
        <div className="flex flex-row items-start justify-start gap-[19px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[19px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
            <div className="w-[18px] h-[18px] relative flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[18px] hover:h-[18px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="absolute top-[0px] left-[0px] w-1.5 h-[18px] flex box-border z-[1] border-[1px] border-solid border-black hover:flex hover:w-1.5 hover:h-[18px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute top-[4px] left-[13px] w-[5px] h-2.5 flex box-border z-[1] border-[1px] border-solid border-black hover:flex hover:w-[5px] hover:h-2.5 hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[9px] left-[6px] w-3 h-px flex box-border z-[2] border-[1px] border-solid border-black hover:flex hover:w-3 hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="relative font-medium flex min-w-[59] z-[1] hover:font-medium hover:font-poppins hover:text-base hover:text-left hover:text-black hover:flex hover:min-w-[59]">
            Log out
          </div>
        </div>
      </div>
    </nav>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
