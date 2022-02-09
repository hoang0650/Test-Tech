import React, { useEffect, useState } from "react";
import {Modal, Button} from "react-bootstrap"

function Content(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <div className="content">
        <div className="content-item">
        <Modal show={show} onHide={handleClose} size='lg'>

            <Modal.Header>
                <Modal.Title style={{color: '#203A43'}}>Something went wrong</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            That's all the jokes for today! Come back another day!
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{color: '#000'}}>
                    Close
                </Button>
            </Modal.Footer>

        </Modal>
          <div className="text">
            A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their
            babies became adults and made babies, and so on." The child then went to his mother, asked her the same
            question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back
            to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the
            family."
          </div>
          <div className="activity">
            <button style={{backgroundColor: '#3C7FDD'}} onClick={handleShow}>This is Funny!</button>
            <button style={{backgroundColor: '#1fc06f'}}>This is not funny.</button>
           
          </div>
         

        </div>
      </div>
    )
}

export default Content;