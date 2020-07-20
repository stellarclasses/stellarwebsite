import React from 'react';

// reactstrap components
import { Container, UncontrolledCarousel } from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.jsx';
import Footer from 'components/Footer/Footer.jsx';

const carouselItems = [
  {
    src: require('assets/img/gallery/19.jpg'),
    altText: 'Slide 19',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/18.jpg'),
    altText: 'Slide 18',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/17.jpg'),
    altText: 'Slide 17',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/16.jpg'),
    altText: 'Slide 16',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/1.jpeg'),
    altText: 'Slide 1',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/4.jpeg'),
    altText: 'Slide 3',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/5.jpeg'),
    altText: 'Slide 4',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/6.jpeg'),
    altText: 'Slide 5',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/7.jpeg'),
    altText: 'Slide 6',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/8.jpeg'),
    altText: 'Slide 7',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/9.jpeg'),
    altText: 'Slide 8',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/10.jpeg'),
    altText: 'Slide 9',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/11.jpeg'),
    altText: 'Slide 10',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/12.jpeg'),
    altText: 'Slide 11',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/13.jpeg'),
    altText: 'Slide 12',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/14.jpeg'),
    altText: 'Slide 10',
    caption: ' ',
  },
  {
    src: require('assets/img/gallery/15.jpeg'),
    altText: 'Slide 10',
    caption: ' ',
  },
];

// let ps = null;

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div style={{ height: '100px' }} />
        <div className="wrapper">
          <div className="page-header">
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
              <h1>Gallery</h1>
              <p>Shining kids of Stellar</p>
              <br />
              <br />
              <UncontrolledCarousel items={carouselItems} />
            </Container>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default GalleryPage;
