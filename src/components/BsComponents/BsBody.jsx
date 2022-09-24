import React from 'react';
import { Container, Placeholder, Row, Col } from 'react-bootstrap'

export function BsBody() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} sm={3} xs={4}>
          <Placeholder as="div" animation="wave" className="assessment-image">
            <Placeholder xs={12} className="assessment-image-placeholder assessment-placeholder" />
          </Placeholder>
        </Col>
        <Col md={10} sm={9} xs={8}>
          <Placeholder as="div" animation="wave">
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
            <Placeholder className="assessment-placeholder" xs={12} />
          </Placeholder>
        </Col>
      </Row>
    </Container>
  );
}
