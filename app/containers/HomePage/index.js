import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CV } from '../../cv';

const Container = styled.section`
  padding: 30px 50px;
`;

const Section = styled.section`
  background: #eee;
  padding: 5px 25px;
  margin-bottom: 10px;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const skills = CV.skills.map((skill) =>
      <li key={skill}>{skill}</li>
    );
    const contacts = Object.keys(CV.contacts).map((key) =>
      <li key={key}>{key}: {CV.contacts[key]}</li>
    );
    return (
      <Container>
        <Helmet>
          <title>CV / {CV.title} / {CV.first_name} {CV.last_name}</title>
        </Helmet>
        <h1>{CV.title}</h1>
        <h2>{CV.first_name} {CV.last_name}</h2>
        <Section>
          <h3>Styles</h3>
          <Link to="/CV1">CV1</Link>
        </Section>
        <Section>
          <h3>Skills</h3>
          <ul>{skills}</ul>
        </Section>
        <Section>
          <h3>Contacts</h3>
          <ul>{contacts}</ul>
        </Section>
      </Container>
    );
  }
}
