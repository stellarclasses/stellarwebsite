import React from 'react';
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  // UncontrolledCarousel
} from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.jsx';
import Footer from 'components/Footer/Footer.jsx';

// const carouselItems = [
//   {
//     src: require("assets/img/denys.jpg"),
//     altText: "Slide 1",
//     caption: "Big City Life, United States"
//   },
//   {
//     src: require("assets/img/fabien-bazanegue.jpg"),
//     altText: "Slide 2",
//     caption: "Somewhere Beyond, United States"
//   },
//   {
//     src: require("assets/img/mark-finn.jpg"),
//     altText: "Slide 3",
//     caption: "Stocks, United States"
//   }
// ];

// let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
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
  //     ps.destroy();
  //     document.documentElement.className += " perfect-scrollbar-off";
  //     document.documentElement.classList.remove("perfect-scrollbar-on");
  //   }
  //   document.body.classList.toggle("profile-page");
  // }
  // toggleTabs = (e, stateName, index) => {
  //   e.preventDefault();
  //   this.setState({
  //     [stateName]: index
  //   });
  // };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div style={{ height: '100px' }} />

        <div className="wrapper">
          <div className="page-header" style={{ minHeight: '70vh' }}>
            <img
              alt="..."
              className="dots"
              src={require('assets/img/dots.png')}
            />
            <img
              alt="..."
              className="path"
              src={require('assets/img/path4.png')}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="12" md="12">
                  <h1 className="profile-title text-left">About Us</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
	    Stellar offers English speaking and personality development classes, where we foster an environment of growth and self-improvement. Through interactive sessions and engaging activities, students enhance their communication skills, build confidence, and refine their presentation abilities. Our grammar classes ensure a strong foundation in English, covering topics from tenses to punctuation, making language proficiency attainable. By combining these two aspects, we empower students to express themselves effectively, with impeccable grammar, while developing their overall personality. Our holistic approach is designed to boost self-assured communication, instil poise, and equip individuals with the tools they need to succeed in a diverse, interconnected world, setting them on the path to personal and professional excellence.</p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="teachers">
            <Container className="align-items-center">
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      {/* <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/abc.png")}
                      /> */}
                      <h4 className="title">Dr.Sunaina Bhutani</h4>
                    </CardHeader>
                    <CardBody>
                      Ph.D, M.Phil (English), M.A (English), M.Ed, B.A(hons)and
                      B.Ed.
                      <br />
                      She has a vast experience of 24 years in various renowned
                      institutions teaching English to students.
                    </CardBody>
                    <CardFooter>
                      <i className="fa fa-phone" aria-hidden="true" />
                      <a href="tel:09650088055"> &nbsp; Call 09650088055</a>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    {/* <UncontrolledCarousel items={carouselItems} /> */}
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
                    {' '}
                    &nbsp;&nbsp;Location{' '}
                  </h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    1-C/5 NH, NIT-1
                    <br />
                    Faridabad
                    <br />
                    Haryana,121001
                    {/* <br />
                    Near Mothers Pride School */}
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
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
