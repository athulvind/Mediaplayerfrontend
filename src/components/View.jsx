import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoApi, getSingleCategoryAPI, updateCategoryApI, uploadVideoAPI } from '../services/allAPI'



const View = ({ videoUploadResponse, removeVideoResponseFromCategories, setRemoveVideoResponseFromView }) => {
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")
  const [allVideos, setAllVideoes] = useState([])
  useEffect(() => {
    getAllVideos()
  }, [videoUploadResponse, deleteVideoResponse, removeVideoResponseFromCategories])

  const getAllVideos = async () => {
    try {
      const response = await getAllVideoApi()
      // console.log(response);
      setAllVideoes(response.data)
    } catch (err) {
console.log(err);

    }

  }
    // console.log(allVideos)
    const dragOverView = (e) => {
      e.preventDefault()
    }

    const categoryVideoDrop = async(e) => {
      const {categoryId, video} = JSON.parse(e.dataTransfer.getData("dataShare"))
      console.log(`video id: ${video.id} from category id ${categoryId} dropped in view component `);
      // remove video from category
      // get category  details from whre we have to remove video
      const {data} = await getSingleCategoryAPI(categoryId)
      console.log(data);
      
      // update category after removing video
      const updateAllVideos = data?.allVideos?.filter(item => item.id != video?.id)
      console.log(updateAllVideos);
      
      const updateCategoryDetails = { id: categoryId, categoryName: data.categoryName, allVideos: updateAllVideos }
      console.log(updateCategoryDetails);
      
      const response = await updateCategoryApI(categoryId, updateCategoryDetails)
      console.log(response);
      
      // pass response to  categories
      setRemoveVideoResponseFromView(response)
      await uploadVideoAPI(video)
      getAllVideos()
      }
// 
  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)} >
        {
          allVideos?.length > 0 ?
            allVideos?.map(video => (
              <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
                <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video} />
              </Col>
            ))
            :
            <div className='text-danger fw-bolder'>No videos are uploaded yet!!</div>
        }
      </Row>
    </>

  )
}
export default View