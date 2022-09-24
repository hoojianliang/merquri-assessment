import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export function MySidebar(props) {
    let { show } = props;

    const handleClose = () => {
        console.log('handleClose')
        props.handleClose();
    }

    return (
        <>
            <div onClick={handleClose} className={`my-offcanvas-backdrop ${show ? "show" : ""}`}></div>
            <div className={`assessment-sidebar my-offcanvas ${show ? "active" : ""}`}>
                <div className="my-offcanvas-header">
                    <FontAwesomeIcon icon={faTimes} size="lg" onClick={handleClose} className="assessment-hoverable" />
                </div>
                <div className="my-offcanvas-body">
                    <ul>
                        <li><Link to="#">Menu Item 1</Link></li>
                        <li><Link to="#">Menu Item 2</Link></li>
                        <li><Link to="#">Menu Item 3</Link></li>
                    </ul>
                </div>
            </div>
        </>

    );
}