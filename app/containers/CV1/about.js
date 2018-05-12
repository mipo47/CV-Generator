import React from 'react';
import PropTypes from 'prop-types';

export class About extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const CV = this.props.cv;
    return (
      <section id="about" className="section about-style1">
        <div className="container">

          <div className="section-title">
            <h2>About me</h2>
            <span className="border"></span>
            <p>
              <span>{CV.short_description}</span>
            </p>
            {CV.descriptions.map((d, i) => (
              <p key={'description-' + i}>{d}</p>
            ))}
          </div>

          {true ? null : (
            <div className="row">
              <div className="col-md-4">
                <div className="about-info">
                  <div className="info-title">
                    <p>Birthdate</p>
                    <p>Phone</p>
                    <p>Skype</p>
                    <p>Email</p>
                    <p>Address</p>
                  </div>
                  <div className="info-details">
                    <p>: {CV.birthdate}</p>
                    <p>: {CV.contacts.phone}</p>
                    <p>: {CV.contacts.skype}</p>
                    <p>: {CV.contacts.email}</p>
                    <p>: {CV.contacts.address}</p>
                  </div>
                  <p className="about-signature">{CV.first_name} {CV.last_name}</p>
                  <a href="#" className="mt-button large btn"><i className="fa-download"></i><span>Download Resume</span></a>
                </div>
              </div>
              {CV.interests ? (
                <div className="col-md-8">
                  <div className="about-extra">
                    <h4>HOBBIES &amp; INTERESTS</h4>
                    <div className="about-extra-icon">
                      <ul>
                        <li>
                          <p><i className="fa-headphones"></i><br /><span>Music</span></p>
                        </li>
                        <li>
                          <p><i className="fa-plane"></i><br /><span>Travel</span></p>
                        </li>
                        <li>
                          <p><i className="fa-video-camera"></i><br /><span>Cinema</span></p>
                        </li>
                        <li>
                          <p><i className="fa-coffee"></i><br /><span>Coffee</span></p>
                        </li>
                        <li>
                          <p><i className="fa-truck"></i><br /><span>Cars</span></p>
                        </li>
                        <li>
                          <p><i className="fa-venus"></i><br /><span>Women</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>
    );
  }
}

About.propTypes = {
  cv: PropTypes.object,
};
