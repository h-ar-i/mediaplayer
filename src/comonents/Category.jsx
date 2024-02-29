import React,{useEffect, useState} from 'react'
import { FloatingLabel,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, getAvideoAPI, getCategoryAPI,removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';

// import { all } from 'axios';



function Category({removeCategoryVideoResponse}) {
const [Allcategories,setAllcategories]=useState([])

const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }

  const handleShow = () => setShow(true);
  const handleAddCategory =async ()=>{
    if(categoryName){
      const result=await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllcategories()
    }else{
      alert("please fill the form completely")
    }
  }

  const getAllcategories=async()=>{
    const result=await getCategoryAPI()
    setAllcategories(result.data)
    
   
  }
   // console.log(Allcategories);
   useEffect(()=>{
    getAllcategories()
  },[removeCategoryVideoResponse])

    const handleRemoveCategory = async (cId)=>{
      await removeCategoryAPI(cId)
      getAllcategories()
    }
 
    const dragOverCatergory=(e)=>{
      e.preventDefault()
      console.log("dragging over the category");
    }

    const videoDropped= async (e,CategoryId)=>{
      const videoId = e.dataTransfer.getData("videoId")
      console.log(`video Dropped with VId:${e.dataTransfer.getData("videoId")},inside category id: ${CategoryId}`);
      //get details of video id
      const {data} = await getAvideoAPI(videoId)
      console.log(data);
      //get category detail where we have to add video
      let selectedcategory = Allcategories.find(item=>item.id==CategoryId)
      selectedcategory.allVideos.push(data)
      console.log(selectedcategory);
      await updateCategoryAPI (CategoryId,selectedcategory)
      getAllcategories()
    }

    const videoDragStarted = (e,videoId,CategoryId)=>{
      console.log(`drag started from category id:${CategoryId} with video id:${videoId}`);
      let dataShare = {videoId,CategoryId}
      e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
    }

  return (
    <>
           <div className='d-flex justify-content-around'>
      <h3>All Categories</h3>
    <button onClick={handleShow} style={{width:'60px',height:'60px'}} className='btn btn-info rounded-circle fs-5'>+</button>
    </div>


    <div className='container-fluid mt-3'>
      { Allcategories.length>0? Allcategories.map((item,index)=>(
      <div droppable="true" onDragOver={(e)=>dragOverCatergory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className='border rounded p-3 mb-2'>
       <div className='d-flex justify-content-between'>
        <h5>{item.categoryName}</h5>
        <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </div>


      <div className='row mt-2'>
          {
            item.allVideos?.length>0 &&
            item.allVideos?.map((video,index)=>(
              <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                <Videocard insideCategory={true} displayData={video}/>
              </div>
            ))
          }
      </div>
          

      </div>
      ))
    : 
    <div className='text-danger fw-bolder'>
      No Categories Are Added Yet
    </div>
    }
    </div>

            



    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>Add new category form</Modal.Title>
        </Modal.Header>
        <Modal.Body><p> please fill the following details</p>
        
        <FloatingLabel
        controlId="floatingInput caption"
        label="category Name"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="category name" />
      </FloatingLabel>
        
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category