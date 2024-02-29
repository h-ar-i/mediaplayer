import React from 'react'
import { Link } from 'react-router-dom'
import Add from '../comonents/Add'
import View from '../comonents/View'
import Category from '../comonents/Category'
import { useState } from 'react'

function Home() {
  const[removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/watch'}>open history</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row text-center">
        <div className="col-lg-6">
          <h3>All videos</h3>
             <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>
        <div className="col-lg-6">
       
             <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
       
    </>
  )
}

export default Home