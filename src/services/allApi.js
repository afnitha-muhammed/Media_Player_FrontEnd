import Category from "../components/Category"
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//api to add video
export const addVideoApi = async(requestBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,requestBody)
}

//api to get all video
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to delete a video
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to watch history
export const addToHistoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqbody)
}

//api to get video from watch history
export const getHistoryVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete a video from watch history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

// api to add category
export const addCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqbody)
}

//api to get all category
export const getAllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}

//api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to get a video
export const AVideoApi = async(id)=>{
    return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

//api to update category
export const UpdateCategoryApi = async(id, reqbody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
}

//