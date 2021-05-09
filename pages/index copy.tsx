// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.scss';
import BasePage from 'components/BasePage';
import BaseLayout from 'components/layouts/BaseLayout';
import { Col, Container, Row } from 'reactstrap';

const Home = () => {
  return (
    <BaseLayout navBgColor="#4A90E2">
      <BasePage indexPage metaTitle="Space">
        <div className="main-section">
          <div className="background-image">
            {/* <img src="/images/background-index.png" /> */}
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="image image-2">
                        <div className="hero-section-content">
                          <h2>React and Next is Amazing!</h2>
                          <div className="hero-section-content-intro">
                            Software developer ready for a project of any type!
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Raul Rosa. Get informed,
                    collaborate and discover projects I was working on through
                    the years!
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Home;
