import React from 'react';
import PropTypes from 'prop-types';

export class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const CV = this.props.cv;
    return (
      <section id="contact" className="section">
        <div className="container">

          <div className="section-title">
            <h2>Contact me</h2>
            <span className="border"></span>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2>LET'S GET IN TOUCH</h2>
              <ul className="get_in">
                <li><i className="fa fa-skype2"></i>
                  <p>{CV.contacts.skype}</p></li>
                <li><i className="fa fa-envelope-o"></i>
                  <p>{CV.contacts.email}</p></li>
                <li><i className="fa fa-phone"></i>
                  <p>{CV.contacts.phone}</p></li>
                <li><i className="fa fa-map-marker"></i><p>{CV.contacts.address}</p></li>
              </ul>
              {/*<ul className="get_in">*/}
                {/*<li><i className="fa fa-skype2"></i>*/}
                  {/*<p><a href={'skype:' + CV.contacts.skype}>{CV.contacts.skype}</a></p></li>*/}
                {/*<li><i className="fa fa-envelope-o"></i>*/}
                  {/*<p><a href={'mailto:' + CV.contacts.email}>{CV.contacts.email}</a></p></li>*/}
                {/*<li><i className="fa fa-phone"></i>*/}
                  {/*<p><a href={'callto://' + CV.contacts.phone.replace(/ /g, '')}>{CV.contacts.phone}</a></p></li>*/}
                {/*<li><i className="fa fa-map-marker"></i><p>{CV.contacts.address}</p></li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  cv: PropTypes.object,
};
