import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

const Footer1280px = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://backend-7-j8xc.onrender.com/api/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      setMessage(result.message);
      setEmail("");
    } catch (error) {
      setMessage("Failed to submit email");
    }
  };

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
              <RouterLink
                to="/privacy-policy"
                className="footer-link no-underline text-white"
              >
                Privacy Policy
              </RouterLink>
            </div>
            <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[86px]">
              <RouterLink
                to="/cookies-policy"
                className="footer-link no-underline text-white"
              >
                Cookies Policy
              </RouterLink>
            </div>
            <div className="relative leading-[32px] font-semibold inline-block min-w-[117px]">
              <RouterLink
                to="/terms-of-use"
                className="footer-link no-underline text-white"
              >
                Terms of Use
              </RouterLink>
            </div>
          </div>
        </div>
        <div className="w-[501px] flex flex-col items-start justify-start gap-[15px] max-w-full text-lg">
          <div className="relative leading-[32px]">
            Updates right to your Inbox
          </div>
          <form
            className="self-stretch flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full [border:none] [outline:none] bg-darkslategray h-[50px] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start py-[9px] px-[30px] box-border font-body-18 text-lg text-gray-500 min-w-[196px]"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="cursor-pointer [border:none] py-[9px] px-16 bg-plum rounded-mini flex flex-row items-start justify-start relative gap-[10px] hover:bg-cornflowerblue"
              type="submit"
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-plum" />
              <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray text-center inline-block min-w-[46px] z-[1]">
                Send
              </div>
            </button>
          </form>
          {message && <p className="text-white mt-2">{message}</p>}
        </div>
      </div>
    </footer>
  );
};

Footer1280px.propTypes = {
  className: PropTypes.string,
};

export default Footer1280px;
