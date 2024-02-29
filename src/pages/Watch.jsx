import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


function Watch() {

  const [history,setHistory] = useState([])
  const getAllHistory = async()=>{
    const result=await getHistoryAPI()
    if(result.status>=200 && result.status<300){
    setHistory(result.data)
    }
  }
    useEffect(()=>{
    getAllHistory()
  },[])

  //delte history button
  const deleteHistory = async (vId)=>{
    await removeHistoryAPI(vId)
    getAllHistory()
  }

  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>
          <i className='fa-solid fa-arrow-left'></i>Backto<i className='fa-solid fa-home'></i>
        </Link>
      </div>
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
          <th>#</th>
          <th>caption</th>
          <th>video link</th>
          <th>Time stamp</th>
          <th className='fa-solid fa-ellipsis-vertical'></th>
          </tr>
        </thead>
        
        <tbody>
         { history?.length>0? history?.map((video,index)=>(
     <tr key={index}>
         <td>{index+1}</td>
         <td>{video?.caption}</td>
           <td><a href={video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
          <td>{video?.timeStamp}</td>
          <td> <button className='btn' onClick={()=>deleteHistory(video.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
     </tr>
         ))
        
        :
        <tr className='text-danger fw-bolder'>your watch history is empty</tr>  
        }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watch