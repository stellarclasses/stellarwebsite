import React from 'react';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.jsx';
import PageHeader from 'components/PageHeader/PageHeader.jsx';
import Footer from 'components/Footer/Footer.jsx';

// sections for this page/view
import Basics from './Basics.jsx';

class HomePage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('index-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('index-page');
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Basics />
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
