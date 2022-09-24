import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MySearchbar } from './MySearchbar';
import { MySidebar } from './MySidebar';

export function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="assessment-navbar my-container-fluid my-navbar">
      <div className="my-navbar-item-grow">
        <button className="my-btn btn-transparent" onClick={handleShow}><FontAwesomeIcon icon={faBars} className="assessment-icon" /></button>
      </div>
      <div><MySearchbar /></div>
      <MySidebar show={show} handleClose={handleClose} />
    </header>
  )
}