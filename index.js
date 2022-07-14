import React from 'react';
import ReactDOM from 'react-dom';
import Cta from "./Navbar";
import Footer from "./Footer";
import Pricing from "./Pricing";


ReactDOM.render(<Cta />,
  document.getElementById("cta"));

ReactDOM.render(<Footer />, document.getElementById("footer"));

ReactDOM.render(<Pricing />, document.getElementById("pricing"));
