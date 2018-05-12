import React from 'react';
import PropTypes from 'prop-types';

export class Milestones extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const CV = this.props.cv;
    return (
      <div
        id="milestones"
        className="parallax"
        data-stellar-background-ratio="0.6"
        data-stellar-vertical-offset="20"
        style={{ backgroundPosition: '50% 113px' }}
      >
        <div className="parallax-overlay-2">
          <div className="container">
            <div className="title">
              <h1>Milestones Achieved</h1>
            </div>
            <div className="row count">

              <div className="col-xs-6 col-sm-6 col-md-3 single">
                <div className="total-numbers" data-perc="1300">
                  <div className="iconspace"><i className="cicon fa-coffee"></i></div>
                  <span className="sum">2412</span>
                  Cups of Coffee
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-3 single">
                <div className="total-numbers" data-perc="1300">
                  <div className="iconspace"><i className="cicon fa-briefcase"></i></div>
                  <span className="sum">550</span>
                  Succesful Projects
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-3 single">
                <div className="total-numbers" data-perc="1300">
                  <div className="iconspace"><i className="cicon fa-group"></i></div>
                  <span className="sum">212</span>
                  Happy Clients
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-3 single">
                <div className="total-numbers" data-perc="1300">
                  <div className="iconspace"><i className="cicon fa-trophy"></i></div>
                  <span className="sum">99</span>
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Milestones.propTypes = {
  cv: PropTypes.object,
};
