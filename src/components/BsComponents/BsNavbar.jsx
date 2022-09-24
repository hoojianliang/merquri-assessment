import React, { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BsSearchbar } from './BsSearchbar';
import { BsSidebar } from './BsSidebar';

export function BsNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="assessment-navbar" expand="lg">
      <Container fluid>
        <Button variant="transparent" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} className="assessment-icon" />
        </Button>
        <BsSearchbar />
      </Container>
      <BsSidebar show={show} handleClose={handleClose} />
    </Navbar>
  );
}