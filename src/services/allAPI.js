import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl"

export const uploadVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}
//getALLVideoApi - called by view compoenent
export const getAllVideoApi = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}


export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POSt",`${SERVER_URL}/history`,videoDetails)
}

// getHistoryAPI - call by history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// removeHistoryApi - called by history

export const removeHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// removeVideoyApi - called by history

export const removeVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addCateogryAPI - called by category
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}
export const getAllCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

export const removeCategoryAPi = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

export const getSingleVideoAPI = async (id)=>{
    return await commonAPI ("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
 
export const updateCategoryApI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI ("PUT",`${SERVER_URL}/category/${categoryId}`,updateCategoryDetails)
}

// getSingleCategoryAPI
export const getSingleCategoryAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/category/${id}`,"")
} 