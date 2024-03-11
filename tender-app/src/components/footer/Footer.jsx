// Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CustomFooter = () => {
  return (
    <footer className="bg-light mt-4">
      <Container>
        <Row>
          <Col>
            <p className="text-muted">© 2024 Tender App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
