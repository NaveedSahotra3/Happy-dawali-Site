import React from "react";
import { css } from 'emotion';
// import FaTwitter from "react-icons/lib/fa/twitter";
import FaTwitter from '@material-ui/icons/Twitter';
// import FaFacebook from "react-icons/lib/fa/facebook";
import FaFacebook from '@material-ui/icons/Facebook';
// import FaGooglePlus from "react-icons/lib/fa/google-plus";
// import FaEnvelope from "react-icons/lib/fa/envelope";
// import FaPinterest from "react-icons/lib/fa/pinterest";
import FaPinterest from '@material-ui/icons/Pinterest';
// import FaLinkedin from "react-icons/lib/fa/linkedin";

import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

const ShareButon = props => {
  const shareBlockProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    button: ShareButtonRectangle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
    //   { network: "GooglePlus", icon: FaGooglePlus },
    //   { network: "Email", icon: FaEnvelope },
      {
        network: "Pinterest",
        icon: FaPinterest,
        media:
          "https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"
      },
    //   { network: "Linkedin", icon: FaLinkedin }
    ],
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareButon
// ReactDOM.render(<App />, document.getElementById("root"));