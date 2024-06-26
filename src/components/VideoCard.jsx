import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistoryApi, deleteVideoApi } from '../services/allApi';

function VideoCard({displayvideo , setdeletevideostatus, isPresent}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      let caption = displayvideo?.caption
      let url = displayvideo?.url
      let time = new Date()
      let timeStamp = new Intl.DateTimeFormat("en-GB",{year: "numeric",month: "numeric",day: "numeric",hour: "2-digit",minute: "2-digit",second: "2-digit"}).format(time)
    // console.log(displayvideo)
    console.log(timeStamp)

      const reqbody = {
        caption, url, timeStamp
      }
      const result = await addToHistoryApi(reqbody)
      console.log(result);

    }
  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
    setdeletevideostatus(result.data)}
  }

  const videodrag = (e,id)=>{
    console.log("card drag:",id);
    e.dataTransfer.setData("videoid",id)
  }


    
  return (
    <>
     <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e)=>videodrag(e,displayvideo?.id)}>
      { !isPresent && <Card.Img onClick={handleShow} variant="top" src={displayvideo?.image} width={'100%'} height={'300px'} />}
      <Card.Body className='d-flex'>
        <Card.Text>{displayvideo?.caption}</Card.Text>
        { !isPresent && <Button variant="danger" className='ms-auto' onClick={()=>handleDelete(displayvideo?.id)}><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayvideo?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard