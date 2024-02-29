// import { await } from "react-router-dom"
// import Category from "../comonents/Category"
import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./sever_url"


// upload video store video in localhost:3000/videos
export const uploadVideoAPI = async (video)=>{
    //send responce to add component
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}

//get video api called by View
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"") 
}

//store watch history by video card
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails )
}

//get history to watch component to localhost http/3000
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"" )
}

//remove history
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{} )  
}


//remove video from using home>card>button
 export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{} )  
 } 

 //save category
 export const addCategoryAPI =async (CategoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,CategoryDetails )  
 }

 //get category to category component
 export const getCategoryAPI =async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"" )  
 }

//  remove category api
 export const removeCategoryAPI =async(CategoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${CategoryId}`,{})  
 }

//get singlevideo api
export const getAvideoAPI =async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"" ) 
}

// //update category api
export const updateCategoryAPI = async(categoryId,updatedCategoryDetails )=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails )    
}

// getSingleCategory api
export const getSingleCategoryAPI = async(categoryId )=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")    
}