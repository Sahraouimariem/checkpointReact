import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Addfilm({listfilms,setlistfilms}) {
    console.log(listfilms,setlistfilms);
    
    const [show, setShow] = useState(false);
const [title,settitle]=useState("")
const [genre,setgenre]=useState("")
const [poster,setposter]=useState("")
const [trailer, settrailer] = useState("");
const [description, setdescription] = useState("");
const [year, setyear] = useState(0);
const [director, setdirector] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const handlesubmit=()=>{
    const newmovie={id:listfilms.length+1,title,genre,poster,trailer,description,year,director}
    setlistfilms([...listfilms,newmovie])
    handleClose()

   }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          add film
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>


              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="film title"
                  autoFocus
                  onChange={(event)=>settitle(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="genre"
                  autoFocus
                  onChange={(event)=>setgenre(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>poster</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="link of photo"
                  autoFocus
                  onChange={(event)=>setposter(event.target.value)}
                />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>trailer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="link "
                  autoFocus
                  onChange={(event)=>settrailer(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description"
                  autoFocus
                  onChange={(event)=>setdescription(event.target.value)}
                />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="year"
                  autoFocus
                  onChange={(event)=>setyear(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>director</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="director"
                  autoFocus
                  onChange={(event)=>setdirector(event.target.value)}
                />
              </Form.Group>
             </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Addfilm