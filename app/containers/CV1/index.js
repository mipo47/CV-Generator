import React from 'react';
import { Helmet } from 'react-helmet';
import { CV } from '../../cv';
import { Skills } from './skills';
import { Contact } from './contact';
import { About } from './about';
import { Experience } from './experience';
import { Milestones } from './milestones';
import { Services } from './services';

export default class CV1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="MD - Responsive Personal Resume / Portfolio template" />
          <meta name="keywords" content="MD - Responsive Personal Resume / Portfolio template" />
          <meta name="author" content="Miroslav Popugajev" />
          <title>Personal Resume - {CV.first_name} {CV.last_name}</title>

          <link rel="stylesheet" href="./css/bootstrap.css" />
          <link rel="stylesheet" href="./css/font-awesome.min.css" />
          <link rel="stylesheet" href="./css/styles.css" />
          <link rel="stylesheet" type="text/css" href="./css/animate.css" />
          <link rel="stylesheet" type="text/css" href="./css/owl.carousel.css" />
          <link rel="stylesheet" type="text/css" href="./css/owl.theme.css" />
          <link rel="stylesheet" type="text/css" href="./css/responsive.css" />
          <link rel="stylesheet" href="./css/color-red.css" title="red" />
        </Helmet>

        <section
          id="home"
          className="home-parallax"
          data-stellar-background-ratio="0.6"
          data-stellar-vertical-offset="20"
          style={{ backgroundPosition: '50% 0px' }}
        >
          <div className="home-overlay">
            <div className="container">
              <div className="col-md-12">
                <div className="info">
                  <h2>{CV.first_name} {CV.last_name}</h2>
                  <h3>{CV.title}</h3>
                </div>
              </div>
            </div>
            <div className="avatar-section">
              <img src="css/pro_pic.jpg" className="img-responsive" alt="" />
            </div>
          </div>
        </section>

        <About cv={CV} />

        <Experience cv={CV} />

        {/*<Milestones cv={CV} />*/}

        {/*<Services cv={CV} />*/}

        <Skills cv={CV} />

        <Contact cv={CV} />

        <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="js/appear-min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./index_files/js"></script>
        <script type="text/javascript" src="js/gmap3-min.js"></script>
        <script type="text/javascript" src="js/jquery.easing-1.3.pack-min.js"></script>
        <script type="text/javascript" src="js/jquery.easypiechart.min.js"></script>
        <script type="text/javascript" src="js/jquery.form-min.js"></script>
        <script type="text/javascript" src="js/jquery.isotope.min.js"></script>
        <script type="text/javascript" src="js/jquery.nav-min.js"></script>
        <script type="text/javascript" src="js/jquery.parallax-1.1.3-min.js"></script>
        <script type="text/javascript" src="js/jquery.scrollTo-min.js"></script>
        <script type="text/javascript" src="js/jquery.sticky-min.js"></script>
        <script type="text/javascript" src="js/jquery.ufvalidator-1.0.5-min.js"></script>
        <script type="text/javascript" src="js/owl.carousel-min.js"></script>
        <script type="text/javascript" src="js/skrollr-min.js"></script>
        <script type="text/javascript" src="js/styleswitcher-min.js"></script>
        <script type="text/javascript" src="js/smooth-scroll-min.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>

        <script type="text/javascript" charSet="UTF-8" src="js/common.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/util.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/geocoder.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/stats.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/map.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/marker.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/onion.js"></script>
        <script type="text/javascript" charSet="UTF-8" src="js/controls.js"></script>

        <a className="scroll-top" title="Scroll to top" style={{ display: 'none' }}><i className="fa-chevron-up"></i></a>
      </div>
    );
  }
}
