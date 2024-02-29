import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {


  const navigate =useNavigate()

  const handleNavigate = ()=>{
    // navigation to home page
    navigate ('/home')
  }
  return (
  <>
  <div className="container ">
    <div className="header row align-items-center m-3">
      <div className="col-lg-5">
        <h3>WELCOME to <span className='text-warning'>Media player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus voluptas sunt quaerat eveniet unde soluta asperiores, enim eius repellendus quae exercitationem amet tempora modi blanditiis nesciunt, aspernatur veritatis. Voluptates.</p>
              <button  onClick={handleNavigate} className='btn btn-danger mt-3'>Get Started</button>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6 ">
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWl3enp2bmg1M2l4MHZ2N3AxYmMxZm13NzNqdWd6eGJicGw4NXh3MCZlcD12MV9naWZzX3NlYXJjaCZjdD1z/4hskq67xMqnRpYwBXe/giphy.webp" alt="landing image" />
      </div>
    </div>
    <div className="feature">
      <h3 className='text-center' style={{color:"yellow"}}>Feature's</h3>
      <div className="row">
        <div className="col-lg-4">
        <Card style={{height:'400px'}} >
      <Card.Img variant="top" style={{height:'200px'}} src="https://i.pinimg.com/originals/49/e9/d6/49e9d662d2f99e8d945c8b21bd2cde85.gif" />
      <Card.Body>
        <Card.Title>Mangaing videos </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://i.gifer.com/origin/73/732699ab07a8d8c5b8387bf85b5a5ef9_w200.webp" />
      <Card.Body>
        <Card.Title>Catogries</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://media4.giphy.com/media/8kGd0ZJRhKtrTlPiN0/giphy.webp?cid=ecf05e47kskw9ywqz64tj7vpkph4wb0v9h38yj6liuhmhjuk&ep=v1_gifs_search&rid=giphy.webp&ct=s" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    <div className="video row border  p-5 mt-5 rounded align-items-center ">
      <div className="col-lg-5">
        <h3 className='text-warning'>Simple,fast & powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae maxime error vel molestiae non blanditiis, eligendi laboriosam nesciunt distinctio deserunt qui asperiores ad in. Veritatis at deserunt iusto quisquam excepturi!</p>
        <h3 className='text-warning'>Simple,fast & powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam mollitia cum ipsa illum esse corporis earum ea nihil explicabo, hic reiciendis eligendi dicta. Dicta accusantium voluptatem obcaecati. Et, similique.</p>
        <h3 className='text-warning'>Simple,fast & powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quia, voluptas rem mollitia numquam pariatur minima vero ducimus, accusamus odio maiores molestiae commodi deserunt aut provident inventore animi?</p>
      </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="400" src={`https://www.youtube.com/embed/Xx6SKzOUqhQ?autoplay=1`} title="STAY Ft K.S. Chithra | Stay X Pon Kasavu Six Eight Edit | The Kid LAROI &amp; Justin Bieber" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
    
  </div>
    <hr/>
  </>
  )
}

export default Landing