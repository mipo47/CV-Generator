import React from 'react';
import PropTypes from 'prop-types';

export class Services extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const CV = this.props.cv;
    return (
      <section id="services" className="section">
        <div className="container">

          <div className="section-title">
            <h2>My Services</h2>
            <span className="border"></span>
          </div>

          <div className="row">
            <div className="col-md-6 left-service">

              <div className="service-box">
                <i className="service-icon fa-leaf"></i>

                <div className="service-content">
                  <h3>Designing</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
              <div className="service-box">
                <i className="service-icon fa-magic"></i>

                <div className="service-content">
                  <h3>Branding</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
              <div className="service-box">
                <i className="service-icon fa-bar-chart-o"></i>

                <div className="service-content">
                  <h3>Analytics</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 right-service">

              <div className="service-box">
                <i className="service-icon fa-flask"></i>

                <div className="service-content">
                  <h3>Developing</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
              <div className="service-box">
                <i className="service-icon fa-globe"></i>

                <div className="service-content">
                  <h3>Marketing</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
              <div className="service-box">
                <i className="service-icon fa-anchor"></i>

                <div className="service-content">
                  <h3>Support</h3>

                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Services.propTypes = {
  cv: PropTypes.object,
};
