import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, img } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section
      style={{
        backgroundImage: 'url(/GrassyBackground.jpg)',
      }}
      id="hero"
      className="jumbotron"
    >
      {/* id="hero-container" == for border */}
      <Container>
        {/*  */}
        {/* <div style={{ 
      backgroundImage: "url(/boyandball.png)", min-height: 'auto', min-width: '600em'}} >
      </div> */}

        <Row className="about-wrapper hero-border">
          <Col md={6} sm={12} id="hero-content">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Your Name'}</span>.
                <br />
                {subtitle || "I'm the Unknown Developer."}
              </h1>
              <h2 className="hero-title">Welcome to my PortFolio!</h2>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </Col>
          <Col md={6} sm={12} id="hero-img">
            <Fade top duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="boy kicking ball" filename={img} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
