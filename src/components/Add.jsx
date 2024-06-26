import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setaddStatus}) {
  //create a state to hold data from input
  const [video, setvideo] = useState({
    caption:"",
    image:"",
    url:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setvideo({caption:"",image:"",url:""})
  };
  const handleShow = () => setShow(true);

  // There are 3 cases for getting a video link
  // https://www.youtube.com/watch?v=t0Q2otsqC4I
  // https://youtu.be/t0Q2otsqC4I?si=e8shqfgiMxxuoO0M
  // https://www.youtube.com/embed/t0Q2otsqC4I?si=e8shqfgiMxxuoO0M

  // https://www.youtube.com/embed/hVwQl5JVt8s?si=V7bYKOPbhYuGsRve
  // https://www.youtube.com/watch?v=hVwQl5JVt8s
  // https://youtu.be/hVwQl5JVt8s?si=MV3DTpQ84Jg3RTBR

  const validate = (e)=>{
    console.log(e.target.value);
    const link = e.target.value
    if(link.startsWith('https://youtu.be/')){
      const yTKey = link.slice(17,28)
      let embedKey = `https://www.youtube.com/embed/${yTKey}`
      setvideo({...video,url:embedKey})
      console.log(yTKey);
    }
    else if(link.startsWith('https://www.youtube.com/embed/')){
      const yTKey = link.slice(30,41)
      let embedKey = `https://www.youtube.com/embed/${yTKey}`
      console.log(yTKey);
      setvideo({...video,url:embedKey})
    }
    else{
      const yTKey = link.slice(-11)
      let embedKey = `https://www.youtube.com/embed/${yTKey}`
      console.log(yTKey);
      setvideo({...video,url:embedKey})
    }
  }


  const handleUpload= async(e)=>{
    e.preventDefault() // in order to eliminate data lost
    const {caption, image, url} = video
    if(!caption || !image || !url){
      toast.info("Please Fill the Form Completly")
    }
    else{
      const result = await addVideoApi(video)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success("Video Uploaded Successfully")
        setaddStatus(result.data)
        handleClose()
      }
      else{
        toast.error("Something Went Wrong")
        handleClose()
      }

    }
    // else{
  
    //   console.log(e.target.value);
    //   // const link = e.target.value

    //   if(url.startsWith('https://youtu.be/')){
    //     const yTKey = url.slice(17,28)
    //     let embedKey = `https://www.youtube.com/embed/${yTKey}`
    //     setvideo({...video,url:embedKey})
    //     console.log(yTKey);
    //   }
    //   else if(url.startsWith('https://www.youtube.com/embed/')){
    //     const yTKey = url.slice(30,41)
    //     let embedKey = `https://www.youtube.com/embed/${yTKey}`
    //     console.log(yTKey);
    //     setvideo({...video,url:embedKey})
    //   }
    //   else{
    //     const yTKey = url.slice(-11)
    //     let embedKey = `https://www.youtube.com/embed/${yTKey}`
    //     console.log(yTKey);
    //     setvideo({...video,url:embedKey})
    //   }
    // }
  }
  
  console.log(video);
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload New Video </h5>
        <button className='btn mb-2' onClick={handleShow} ><FontAwesomeIcon icon={faCloudArrowUp} size="xl" /> </button>   
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} size="lg" /> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following Details</p>
          <form className='border border-secondary p-3 rounded'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setvideo({...video,caption:e.target.value})} />
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setvideo({...video,image:e.target.value})} />
            <input type="text" placeholder='Video URL' className='form-control mt-3' onChange={(e)=>validate(e)}  />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Add