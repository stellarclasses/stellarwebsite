import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";
import Embed from "./Embed.jsx";

// sections for this page/view
import Basics from "./Basics.jsx";

class HomePage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="container">
            <div style={{ height: "100px" }} />
            <Embed title="1" link="-AXPJKDqjqU" />

            <Embed title="2" link="DD8DaRNFLBE" />
            <Embed title="3" link="JcJtFfj3xJ4" />
            <Embed title="4" link="e2neY1oCit0" />
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
