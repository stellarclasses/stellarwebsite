import React from "react";

// reactstrap components
import { Container, UncontrolledCarousel } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/gallery/1.jpeg"),
    altText: "Slide 1",
    caption: " "
  },
  //   {
  //     src: require("assets/img/gallery/2.jpeg"),
  //     altText: "Slide 2",
  //     caption: "Kids "
  //   },
  {
    src: require("assets/img/gallery/3.jpeg"),
    altText: "Slide 3",
    caption: " "
  },
  {
    src: require("assets/img/gallery/4.jpeg"),
    altText: "Slide 4",
    caption: " "
  },
  {
    src: require("assets/img/gallery/5.jpeg"),
    altText: "Slide 5",
    caption: " "
  },
  {
    src: require("assets/img/gallery/6.jpeg"),
    altText: "Slide 6",
    caption: " "
  },
  {
    src: require("assets/img/gallery/7.jpeg"),
    altText: "Slide 7",
    caption: " "
  }
];

// let ps = null;

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  // componentDidMount() {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }
  //   document.body.classList.toggle("profile-page");
  // }
  // componentWillUnmount() {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     // ps.destroy();
  //     document.documentElement.className += " perfect-scrollbar-off";
  //     document.documentElement.classList.remove("perfect-scrollbar-on");
  //   }
  //   document.body.classList.toggle("profile-page");
  // }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div style={{ height: "100px" }} />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <h1>Gallery</h1>
              <p>Shining kids of Stellar</p>
              <br />
              <br />
              <UncontrolledCarousel items={carouselItems} />
            </Container>
          </div>
          {/* <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <iframe
                      title="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.5824693112557!2d77.30134522914892!3d28.379102878841103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc3d8be093ed%3A0x846df4033978554f!2s1C+5%2C+Bata+B+Colony%2C+New+Industrial+Twp+1%2C+New+Industrial+Town%2C+Faridabad%2C+Haryana+121001!5e0!3m2!1sen!2sin!4v1560511131527!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen
                    />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">
                    {" "}
                    &nbsp;&nbsp;Location{" "}
                  </h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    1-C/5 NH, NIT-1
                    <br />
                    Faridabad
                    <br />
                    Haryana,121001
                    <br />
                    Near Mothers Pride School
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="https://www.google.com/maps?saddr=My+Location&daddr=28.379068, 77.301946"
                      target="_blank"
                    >
                      <i className="tim-icons icon-square-pin" /> Get Directions
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="tel:09650088055"
                    >
                      <i className="tim-icons icon-badge" /> Call Us
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}

          <Footer />
        </div>
      </>
    );
  }
}

export default GalleryPage;
