import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const ContactForm1280px = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backend-7-j8xc.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setFormMessage(result.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormMessage("Failed to submit form");
    }
  };

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-row items-center justify-center py-[100px] px-5 box-border max-w-full text-left text-41xl text-white font-body-18 mq750:pt-[65px] mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="w-[1080px] flex flex-row items-start justify-between gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[325px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[90px] font-semibold font-inherit mq450:text-17xl mq450:leading-[54px] mq1050:text-29xl mq1050:leading-[72px]">
                <p className="m-0">{`Questions? `}</p>
                <p className="m-0">{`Let’s talk `}</p>
              </h1>
              <div className="w-[400px] relative text-lg leading-[32px] text-gray-500 inline-block max-w-full">
                <p className="m-0">Contact us through our form below.</p>
                <p className="m-0">We’re always happy to help!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[325px] max-w-full">
          <form
            className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full [border:none] [outline:none] bg-darkslategray h-[50px] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start py-[9px] px-[30px] box-border font-body-18 text-lg text-gray-500 min-w-[196px]"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-full [border:none] [outline:none] bg-darkslategray h-[50px] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start py-[9px] px-[30px] box-border font-body-18 text-lg text-gray-500 min-w-[196px]"
              placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="w-full [border:none] [outline:none] bg-darkslategray h-[150px] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start py-[9px] px-[30px] box-border font-body-18 text-lg text-gray-500 min-w-[196px]"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button
              className="cursor-pointer [border:none] py-[9px] pr-7 pl-9 bg-yellow rounded-mini flex flex-row items-start justify-start relative gap-[10px] whitespace-nowrap hover:bg-darkkhaki"
              type="submit"
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-yellow" />
              <div className="relative text-lg leading-[32px] font-body-18 text-darkslategray whitespace-pre-wrap text-center inline-block min-w-[111px] z-[1]">{`Send Message  `}</div>
            </button>
          </form>
          {formMessage && (
            <h6 className="text-lg font-thin mt-2">{formMessage}</h6>
          )}
        </div>
      </div>
    </section>
  );
};

ContactForm1280px.propTypes = {
  className: PropTypes.string,
};

export default ContactForm1280px;
