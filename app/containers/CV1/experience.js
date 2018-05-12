import React from 'react';
import PropTypes from 'prop-types';

export class Experience extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const CV = this.props.cv;
    const experience = CV.experience;
    const education = CV.education;
    return (
      <section id="resume" className="section">
        <div className="container">

          <div className="section-title">
            <h2>My resume</h2>
            <span className="border"></span>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                <div className="timeline-category exp-category">
                  <a className="large bt-timeline">Experiences</a>
                  <div className="timeline-category-icon">
                    <div className="iconspace"><i className="fa-folder-open"></i></div>
                  </div>
                </div>

                {experience.map((e, i) => (
                  <div key={e.company + e.from} className={'col-md-6 timeline-post-right'}>
                    <div className="timeline-post">
                      <div className="timeline-post-content-holder">
                        <div className="timeline-post-icon"></div>
                        <div className="timeline-post-title">
                          <h4>{e.title}
                            {e.project ? <span className="badge badge-secondary">Contract</span> : null}
                          </h4>
                        </div>
                        <div className="timeline-post-subtitle">
                          <p><span>{e.company} </span><span className="timeline-duration">{e.from} - {e.to}</span>
                          </p>
                        </div>
                        <div className="timeline-post-content">
                          <p>{e.description}</p>
                          {e.achievements ? (
                            <ul>
                              {e.achievements.map((a) => (
                                <li key={a}>{a}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="timeline-category edu-cagegory">
                  <a className="large bt-timeline">Education</a>
                  <div className="timeline-category-icon">
                    <div className="iconspace"><i className="fa-book"></i></div>
                  </div>
                </div>
                {education.map((e, i) => (
                  <div key={e.company + e.from} className={'col-md-6 timeline-post-' + (i % 2 == 1 ? 'left' : 'right')}>
                    <div className="timeline-post">
                      <div className="timeline-post-content-holder">
                        <div className="timeline-post-icon"></div>
                        <div className="timeline-post-title">
                          <h4>{e.title}</h4>
                        </div>
                        <div className="timeline-post-subtitle">
                          <p><span>{e.company} </span><span className="timeline-duration">{e.from} - {e.to}</span>
                          </p>
                        </div>
                        <div className="timeline-post-content">
                          <p>{e.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="timeline-end-icon"><span> <i className="fa-bookmark"></i></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Experience.propTypes = {
  cv: PropTypes.object,
};
