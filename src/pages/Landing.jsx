import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/img1.webp'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/imgf.jpeg'
import feature2 from '../assets/img2.jpeg'
import feature3 from '../assets/img3.jpeg'





const Landing = () => {
  return (
    <div style={{paddingTop:"100px"}}className='container'>
        {/* {Landing Head} */}
        <div className=' row align-items-center'>
            <div className='col-lg-5'>
                <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
                <p style={{textAlign:"justify"}} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laborum iusto nobis. Exercitationem quia tempora cupiditate, quos qui velit consequatur eum saepe quam odit voluptas labore harum sapiente eaque magnam!
                Illum alias obcaecati deserunt repudiandae deleniti corporis quia beatae ipsa impedit placeat voluptas sequi quis velit nostrum, consectetur aliquid similique dolore mollitia ipsam. Dolorem ex a quas esse veniam reprehenderit.
                Totam, quis veritatis aperiam qui sint atque optio maxime distinctio! Soluta, quidem sunt eveniet, deserunt dolores cumque repellat beatae totam sapiente fugiat similique. Omnis deserunt quisquam atque nulla facilis tenetur.</p>
               <Link to={'/home'} className='btn btn-info'> get Started!!!</Link>
            </div>
            <div className='col'>
              <div className='col-lg-6'>
                <img className='img-fluid ms-5' src={landingImg} alt="" />
              </div>
            </div>
        </div>
        {/* Features */}
        <div className="my-5">
          <h3 className='text-center'>Features</h3>
           <div className="row mt-5">
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height="250px" variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Users can upload ,view and remove the video
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height="250px" variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categorizing Video</Card.Title>
        <Card.Text>
          Users can Categorize the videos by drag and drop Feature 
       
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height="250px" variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Managing Video History</Card.Title>
        <Card.Text>
          Users Can mange the watch history of all videos
       
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
           </div>
        </div>
        {/* Youtube */}
        <div className="my-5 row align-items-center border rounded p-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p style={{textAlign:"justify"}}> <span className='fs-5'>Play everything</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laborum voluptatum modi, dicta sapiente velit, magni ipsa adipisci vitae libero dolorum hic repellat animi aspernatur soluta? Blanditiis, quaerat? Quaerat, impedit!</p>
            <p style={{textAlign:"justify"}}> <span className='fs-5'>Categorize video</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laborum voluptatum modi, dicta sapiente velit, magni ipsa adipisci vitae libero dolorum hic repellat animi aspernatur soluta? Blanditiis, quaerat? Quaerat, impedit!</p>
            <p style={{textAlign:"justify"}}> <span className='fs-5'>Managing History</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laborum voluptatum modi, dicta sapiente velit, magni ipsa adipisci vitae libero dolorum hic repellat animi aspernatur soluta? Blanditiis, quaerat? Quaerat, impedit!</p>
          </div>
          <div className='col'>
            <div className='col-lg-6'>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/TPU5qB1cvGc" title="Angu Vaana Konilu (From &quot;ARM&quot;)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing