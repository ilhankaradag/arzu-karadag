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
                  <FiYoutube />
                </li>
                <li className="d-none d-md-block">
                  <FiFacebook />
                </li>
                <li className="d-none d-md-block">
                  <FiTwitter />
                </li>
                <li className="d-none d-md-block">
                  <FiInstagram />
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
