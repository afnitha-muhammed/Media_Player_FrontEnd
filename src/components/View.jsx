import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { UpdateCategoryApi, getAllCategoryApi, getVideoApi } from '../services/allApi'
import { json } from 'react-router-dom'

function View({addStatus}) {

  const [video, setvideo] = useState([])
  const [deletevideotatus, setdeletevideostatus] = useState([])

  const getvideo = async()=>{
    const result = await getVideoApi()
    setvideo(result.data);
  }

  const DragOver = (e)=>{
    e.preventDefault()
  }
  const VideoDrop = async(e)=>{
    const {videoid,categoryid} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(videoid,categoryid,"datashared");
    //get all category
    const {data} = await getAllCategoryApi()
    console.log(data);
    //get selected category
    const selectedcat = data.find((item=>item.id==categoryid))
    console.log(selectedcat);
    //remove video from selected category
    const result = selectedcat.allVideo.filter((item)=>item.id!=videoid)

    const reqbody = {
      categoryName: selectedcat.categoryName,
      allVideo:result,
      id:selectedcat.id

    }
    await UpdateCategoryApi(categoryid,reqbody)
  }

  useEffect(()=>{
    getvideo()
  },[addStatus,deletevideotatus])

  console.log(video);
  return (
    <Row className='w-100 my-4 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>VideoDrop(e)}>

      {
        video?.length>0?
        video?.map((item)=>(
          <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center'>
            <VideoCard displayvideo={item} setdeletevideostatus={setdeletevideostatus} />
          </Col>))
          :
          <p className='text-warning fs-5'>No Video yet Uploaded</p>
        
      }
      
    </Row>
  )
}

export default View