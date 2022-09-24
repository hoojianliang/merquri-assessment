import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function BsSidebar(props) {
    let { show } = props;

    const handleClose = () => {
        props.handleClose();
    }

    return (
        <Offcanvas show={show} onHide={handleClose} className="assessment-sidebar">
            <Offcanvas.Header>
                <FontAwesomeIcon icon={faTimes} size="lg" onClick={handleClose} className="assessment-hoverable" />
            </Offcanvas.Header>
            <Offcanvas.Body> 
                <Nav className="flex-column">
                    <Nav.Link href="#" className="mb-2">Menu Item 1</Nav.Link>
                    <Nav.Link href="#" className="mb-2">Menu Item 2</Nav.Link>
                    <Nav.Link href="#" className="mb-2">Menu Item 3</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
}