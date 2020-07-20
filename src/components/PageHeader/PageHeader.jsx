import React from 'react';
// import Logo from "assets/img/Stellar.jpg";

// reactstrap components
import { Container } from 'reactstrap';

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="Logo" style={{ fontSize: '90px' }}>
              Stellar
            </h1>
            <h3>Personality School & Grammar Classes</h3>
            {/* <h4 className="d-none d-sm-block">
              Empower your child with good communication skills and concept
              clarity.
            </h4> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
