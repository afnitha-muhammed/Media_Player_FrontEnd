import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteHistoryVideoApi, getHistoryVideoApi } from '../services/allApi';

function Watchhistory() {

  const [history, sethistory] = useState([])
  const [deletestatus, setdeleletestatus] = useState([])
  const gethistory = async()=>{
    const result = await getHistoryVideoApi()
    if(result.status>=200 && result.status<300){
    sethistory(result.data)}
  }
  const deleteHistory = async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result);
    setdeleletestatus(result.data)
  }

  console.log(history);
  useEffect(()=>{gethistory()},[deletestatus])

 

  return (
    <>
    <div className="d-flex p-5 mt-4">
      <h4 className='text-white'>Watch History</h4>
      <h5 className='text-white ms-auto'><Link to='/home' style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faArrowLeft} beat className='me-2'/> Back to Home <FontAwesomeIcon icon={faHouse} className='ms-1'/></Link></h5>
    </div>
<div className="row w-100">
  <div className="col-md-2"></div>
  <div className="col-md-8">
    {history?.length>0?
  <Table striped bordered hover className='mt-3 table table-secondary' responsive> 
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      { history?.map((item , index)=>(<tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
          <td>{item?.timeStamp}</td>
          <td><button className='btn btn-danger' onClick={()=>deleteHistory(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
        </tr>)) }
        
       
      </tbody>
    </Table>
    :
    <p className='text-warning fs-5'>No Watch History</p>}
  </div>
  <div className="col-md-2"></div>
</div>

   
    </>
  )
}

export default Watchhistory