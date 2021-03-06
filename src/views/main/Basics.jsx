import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

class Basics extends React.Component {
  render() {
    return (
      <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require('assets/img/path1.png')} />
        <Container>
          <Row>
            <Col md="12">
              <h2>
                "Empower your child with good communication skills and concept
                clarity"
              </h2>
              <p>
                Stellar is a Personality School and Coaching Academy. Here we
                offer English Speaking Classes, Personality Development
                Programs, Anchoring and Compering skills, Leadership skills and
                Coaching Classes to instill confidence among the students and to
                make them effulgent in academics. We give them ample exposure to
                stage, microphone and camera and shun their hesitation. We have
                a language laboratory to show audio-video modules. Special
                attention is given to positive body language, intonation and
                stress.
              </p>
            </Col>
            <Col md="12" style={{ textAlign: 'center' }}>
              <iframe
                title="video"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbhutani.sunaina%2Fvideos%2F297535424112532%2F&show_text=0&width=476"
                width="476"
                height="476"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allowFullScreen="true"
              />
            </Col>
            <Col md="6">
              <h3 className="title">Why Stellar!!</h3>
              {/* <p className="category">Pick your style</p> */}
              <p>
                <ul>
                  <li>Effective speaking is the motto</li>
                  <li>Time to Time Interaction with parents</li>
                  <li>Qualified Professionals</li>
                  <li>Use of Audio & Video Modules</li>
                  <li>
                    Special emphasis on Body Language Correction and Etiquettes
                  </li>
                  <li>Nurture Skills & Talent through various activities</li>
                </ul>
              </p>
            </Col>
            <Col md="6">
              <h3 className="title">Coaching Classes</h3>
              <p>
                <ul>
                  <li>XI-XII Special Comprehensive Programs</li>
                  <li>III- XII Grammar Classes</li>
                </ul>
              </p>
            </Col>
            <Col md="12" style={{ textAlign: 'center' }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeRKQQvWq-oNzyTwUTCIL6AtXQMHnELNZbZ70Ete-F0iZFEVA/viewform?embedded=true"
                width="640"
                height="709"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Basics;
