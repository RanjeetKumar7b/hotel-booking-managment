import React,{useState} from 'react'
import {Modal,Button,Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Room({room}) {
          const [show, setShow] = useState(false);

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
  return (
    <div className="row bs">
          <div className="col-md-4">
             <img src={room.imageurls[0]} className='smallimg' />
          </div>
         <div className="col-md-7 text-left">
           <h1>{room.name}</h1>
           <b>
                    <p>Max count : {room.maxcount}</p>
                    <p>phone number : {room.phonenumber}</p>
                    <p>Type : {room.type}</p>
           </b>

           <div style={{float:'right'}}>
            <Link to={`/book/${room._id}`}>
            <Button className='btn btn-primary m-2'>Book Now</Button>
            </Link>
                    <button className="btn btn-primary" onClick={handleShow}>view details</button>
           </div>
         </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel prevLabel='' nextLabel=''>
          {room.imageurls.map(url=>{
                    return <Carousel.Item>
                    <img className="d-block w-100" 
                    src={url} 
                    alt="first image"/>
                  </Carousel.Item>
          })}

      </Carousel>
      <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room