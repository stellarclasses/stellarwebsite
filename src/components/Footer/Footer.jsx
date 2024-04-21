import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/img/Stellar.jpg";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              {/* <h1 className="title">Stellar</h1> */}
              <img src={Logo} alt="" />
            </Col>

            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/about-us" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about-us" tag={Link}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/gallery" tag={Link}>
                    Gallery
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.youtube.com/channel/UCZZFu90WLY04eTtgnBq1J1A"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Subscribe
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/pg/bhutani.sunaina"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>
              </div>
            </Col>
            <Col md="3">
              <h6 className="title">
                1-C/5 NH, NIT-1
                <br />
                Faridabad
                <br />
                Haryana,121001
                <br />
                Call us @  9650088055
              </h6>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
