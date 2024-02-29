import React, { useState } from 'react'
import {Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const[uploadvideo,setUploadVideo]=useState({
    caption:" ",imageURL:" ",youtubeLink:" "
  })

    const [show, setShow] = useState(false);

    const handleClose = () => {
    setShow(false);
    setUploadVideo({...uploadvideo,caption:"",imageURL:"",youtubeLink:""})
    }
    const handleShow = () => setShow(true);

    console.log(uploadvideo);

                                 //        youtube link to check the data
    
                       //                    normal link to embedded conversion
    const getYoutbeEmbededLink =(Link)=>{
      if(Link.includes("v=")){
        let videoId = Link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadvideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setUploadVideo({...uploadvideo,youtubeLink:""})
        alert("input proper youtube link!!!!")
      }
    }
                                      //                    video upolad

    const handleUpload= async ()=>{
      // store upload video in localhost:3000
      const{caption,imageURL,youtubeLink}=uploadvideo
      // console.log(caption);
      if(caption && imageURL && youtubeLink) {
        // proceed to store video
        const result=await uploadVideoAPI(uploadvideo)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert(`video'${result.data.caption}'uploaded sucessfully`)
          setUploadVideoResponse(result.data)
          handleClose()
        }else{
          alert("API call failed... please try after some time")
        }
      }else{
        alert("please fill the form completely")
      }
        
    }
                                                  //   store end
  return (
  
    <>
        <div className="d-flex">
            <h5>upload video</h5>
            <button  onClick={handleShow} className='btn bg-danger ms-2 '>
                <i className="fa-solid fa-plus"></i></button>
        </div>
                                                {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                   {/* form */}
            <p>please fill the following details....</p>
            
        <FloatingLabel
        controlId="floatingInputCaption"
        label="video caption"
        className="mb-3"
      >
        <Form.Control value={uploadvideo.caption} onChange={e=>setUploadVideo({...uploadvideo,caption:e.target.value})} type="text" placeholder="video caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control value={uploadvideo.imageURL} onChange={e=>setUploadVideo({...uploadvideo,imageURL:e.target.value})} type="text" placeholder="url()" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="ytube video link"
        className="mb-3"
      >
        <Form.Control  value={uploadvideo.youtubeLink} onChange={e=>getYoutbeEmbededLink(e.target.value)} type="text" placeholder="Link" />
      </FloatingLabel>
      

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add