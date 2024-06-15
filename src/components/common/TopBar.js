import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { PiPencilLineLight } from 'react-icons/pi';
// import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="topbar">
        <Container>
          <Row>
            <Col xs={7}>
              <PiPencilLineLight size={24} />
              <span className="d-none d-md-inline">
                Duygular, o satırlara sığmadı.
              </span>{' '}
            </Col>
            <Col xs={5}>
              <ul>
                <li className="d-none d-md-block">
                  <a href="https://www.youtube.com/channel/UCNOgF_xDiVbJEz4Iw4h5fTw">
                    <FiYoutube />
                  </a>
                </li>
                <li className="d-none d-md-block">
                  <a href="https://www.facebook.com/karadag.arzu.siir">
                    <FiFacebook />
                  </a>
                </li>
                <li className="d-none d-md-block">
                  <a href="https://twitter.com/arzukaradagsiir">
                    <FiTwitter />
                  </a>
                </li>
                <li className="d-none d-md-block">
                  <a href="https://www.instagram.com/arzukaradagsiir/">
                    <FiInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TopBar;
