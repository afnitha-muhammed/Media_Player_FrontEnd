import { faPlus, faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AVideoApi, UpdateCategoryApi, addCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addstatus, setaddstatus] = useState(false)
  const handleClose = () => { setShow(false)
  setCategoryName("")}
  const handleShow = () => setShow(true);

  const addCategory = async()=>{
    if(categoryName){
      const reqbody = { 
        categoryName,
        allVideo:[] }
      const result = await addCategoryApi(reqbody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        toast.success('Category Added Successfully')
      }
      else{
        console.log(result);
      }
    }
    else{
      toast.info('Please Add the Category')
    }
  }


const getallcategory = async()=>{
  const result = await getAllCategoryApi()
  // console.log(result)
  if(result.status>=200 && result.status<300){
    setAllCategory(result.data)
    setaddstatus(true)
  }
}

const delCategory = async(id)=>{
  const result = await deleteCategoryApi(id)
  console.log(result);
  getallcategory()
}

const DragOver = (e)=>{
  e.preventDefault()
}

const VideoDrop = async(e, categoryid)=>{
  console.log("category id",categoryid);
  //accessing video id from view component
  const videoid = e.dataTransfer.getData("videoid")
  console.log("video id is:", videoid);
  //get video details from backend
  const {data} = await AVideoApi(videoid)
  console.log(data);

  // checking for the video already exist in the category
  const selectedCategory = allCategory.find((item)=>item.id==categoryid)
  if(selectedCategory.allVideo.find((item)=>item.id==data.id)){
    toast.warning("Video Already Existed in Category")
  }
  else{
  selectedCategory.allVideo.push(data)
  }

  await UpdateCategoryApi(categoryid, selectedCategory)
}

const Dragstart =(e, videoid, categoryid)=>{
  console.log("grag",videoid,categoryid);
  let datashare = {
    videoid,categoryid
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(datashare))
}

useEffect(()=>{
  getallcategory()
  setaddstatus(false)
},[addstatus])

  return (
    <>
    <button className='w-100 btn btn-warning' onClick={handleShow} >Add New Category <FontAwesomeIcon icon={faPlus} /></button>
   { allCategory?.length>0?
      allCategory?.map((item)=>(
      <div className='mt-4'>
     <div className='border border-secondary p-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>VideoDrop(e,item.id)}>
      <div className="d-flex">
        <h6>{item.categoryName}</h6>
        <Button variant="danger" className='ms-auto' onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
      </div>
      <Row>
        {
          item?.allVideo?.length>0?
          item?.allVideo?.map((videoitem)=>(
            <Col sm={12} draggable onDragStart={(e)=>Dragstart(e,videoitem.id,item.id)}>
              <VideoCard displayvideo={videoitem} isPresent={true} />
            </Col>
          ))
          
          : null
        }
      </Row>
      </div>
     </div>
      ))
     :
     null}


     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPencil} style={{color:'orange'}}/> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className='form border border-secondary p-3'>
          <label htmlFor="">Category Name</label><br />
          <input type="text"  placeholder='Enter Category Name' className='mt-3 rounded w-100 form-control' style={{lineHeight:2}} onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
            <button type='button' className='btn btn-warning ms-2' onClick={addCategory}>Add</button>
          </Modal.Footer>
        
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Category