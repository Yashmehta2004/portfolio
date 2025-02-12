import React from "react";
import "./footers.css";

const Footer = () => {
  return (
    <div className="fdiv1">
      <div className="fdiv12">
        Contact Me:
        <p>Feel free to reach out</p>
      </div>

        <div className="fdiv2-container">
        <div className="fdiv2">
          <img
            className="fimg"
            src="https://th.bing.com/th/id/OIP.0kcEw5qofArBqRzSIfKs5gAAAA?rs=1&pid=ImgDetMain"
            alt="Email"
          />
          <div>iamyashmehta2004@gmail.com</div>
        </div>

        <div className="fdiv2">
          <img
            className="fimg"
            src="https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
            alt="LinkedIn"
          />
          <div>linkedin.com/in/yash-mehta-a9163724b</div>
        </div>

        <div className="fdiv2">
          <img
            className="fimg"
            src="https://w7.pngwing.com/pngs/915/706/png-transparent-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-telephone-call.png"
            alt="Phone"
          />
          <div>87002*****</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
