import React,{useEffect, useState} from 'react'
import { Button,Modal,Form,FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI,getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPi, removeVideoAPI, updateCategoryApI } from '../services/allAPI'
import VideoCard from './VideoCard'

const Category = ({setRemoveVideoResponseFromCategorie,removeVideoResponseFromView}) => {
  const [allCategories,setAllCategories] =useState([])

  const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCategory()
  },[removeVideoResponseFromView])

  const handleAddCategory = async()=>{
    if(categoryName){
      const categoryDetails={categoryName,allVideos:[]}
      await  addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("")
      getAllCategory()
    }else{
      alert("Please fill the form completely")
    }
  }
  const getAllCategory= async()=>{
    const response= await getAllCategoryAPI()
    setAllCategories(response.data)

  }
  // console.log(allCategories);
  const deleteCategory = async(id)=>{
    await removeCategoryAPi(id)
    getAllCategory()
  }

  const dragOverCategory = e=>{
    e.preventDefault()
  }

  const videoDragCategory = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("id")
    // console.log(`video id : ${videoId} Dropped inside category id : ${categoryId}`);
    
    const {data}= await getSingleVideoAPI(videoId)
    console.log(data);

    const selectedCategories = allCategories?.find (item=>item.id==categoryId)
    selectedCategories.allVideos.push(data)
    console.log(selectedCategories);
    await updateCategoryApI(categoryId,selectedCategories)
    const response = await removeVideoAPI(videoId)
    // pass response to view component
    setRemoveVideoResponseFromCategorie(response)
    // get all updated categories
    getAllCategory()
   }


   const categoryVideoDragStart = (e,categoryId,video)=>{
    console.log(`Video With id : ${video.id} from category id: ${categoryId} has started dragging`);
    let dataShare = {categoryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    
   }
  
  return (
    <>
    <div className="d-flex justify-content-around align-items-center">
      <h3>All Category </h3>
      <button onClick={handleShow} className='btn btn-warning rounded-circle fs-5 fw-bolder'>+</button>
      </div>

      <div className="container-fluid  mt-3">
       {
        allCategories?.length>0?
        allCategories?.map(categoryDetails=>(
          <div key={categoryDetails?.id} droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoDragCategory(e,categoryDetails?.id)} className=" border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
            <h3>{categoryDetails?.categoryName}</h3>
            <button onClick={()=>deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i>
            </button>
          </div>
          {/* each category videos */}
          <div className='row-mt-2'>
            {
              categoryDetails?.allVideos?.length>0&&
              categoryDetails?.allVideos?.map(video=>(
                <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} key={video?.id} className='col-md-4'>
                <VideoCard displayData={video} insideCategory={true}/>
                </div>
              ))
            }
          
        

          </div>
        </div>
        ))
        :
        <div className='text-danger fw-bolder'>No categories Added</div>
       }
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category Details!!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
          <FloatingLabel
        controlId="floatingInputName"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)}  type="text" placeholder="Category Name" />
      </FloatingLabel>

     
       </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info' >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      </>


       
  )
}

export default Category 