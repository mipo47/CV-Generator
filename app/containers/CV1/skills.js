import React from 'react';
import PropTypes from 'prop-types';

export class Skills extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const skills = this.props.cv.skills;
    return (
      <section id="skills" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <span className="border"></span>
          </div>
          <div className="row">
            {skills.map((s) => (
              <div key={s.name} className="col-xs-12 col-sm-6 col-md-3 chart-padding">
                <div className="chart" data-percent="75"><p>{s.percentage}<sup>%</sup></p>
                  <canvas height="170" width="170"></canvas>
                </div>
                <div className="skills-content">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  cv: PropTypes.object,
};
