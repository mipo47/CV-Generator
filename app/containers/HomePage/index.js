import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  padding: 30px 50px;
`;

const Section = styled.section`
  background: #eee;
  padding: 25px;
  margin-bottom: 10px;
`;

const Header = styled.h3`
  margin: 0;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet>
          <title>CV generator</title>
        </Helmet>
        <h1>CV generator</h1>
        <Section>
          <Header>Example CV (app/containers/CV1)</Header>
          <Link to="/CV1">Web page</Link>
          <br />
          <Link to="/CV_Miroslav_Popugajev.pdf">Generated PDF</Link>
        </Section>
        <Section>
          <Header>Github repository</Header>
          <a href="https://github.com/mipo47/CV-Generator" target="_blank">Link</a>
        </Section>
      </Container>
    );
  }
}
