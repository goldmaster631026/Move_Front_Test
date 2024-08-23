import { createSlice } from "@reduxjs/toolkit";
import { VideoProps, VideoStateProps } from "../../types";
import instance from "../../utils/axios";
import { dispatch } from "..";

const initialState: VideoStateProps = {
    error: null,
    videos: [],
    video: null
}

const videos = createSlice({
    name: "videos",
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },
        addVideoData(state, action) {
            state.videos.push(action.payload)
        },
        getVideoData(state, action) {
            state.videos = action.payload
        },
        getVideoInfo(state, action) {
            state.video = action.payload
        },
        setVideoInfo(state, action) {
            state.videos = state.videos.map((video) => {
                if (video._id === action.payload._id) {
                    return action.payload;
                }
                return video;
            })
        }
    }
})

export const getAllVideosData = () => {
    return async () => {
        try {
            const response = await instance.get("/videos/all")
            dispatch(videos.actions.getVideoData(response.data.data.videos))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const getVideoInfo = (id: string | null) => {

    return async () => {
        try {
            const response = await instance.get(`/videos/video/${id}`)
            dispatch(videos.actions.getVideoInfo(response.data.data))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const addVideosData = (data: VideoProps) => {
    return async () => {
        try {
            const response = await instance.post("/videos/addvideo", data)
            dispatch(videos.actions.addVideoData(response.data.data))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const updateVideoData = async (id: string | null, data: VideoProps) => {
    try {
        const response = await instance.put(`/videos/video/${id}`, data)
        return dispatch(videos.actions.setVideoInfo(response.data.data))
    } catch (error) {
        return dispatch(videos.actions.hasError(error))
    }
}


export default videos.reducer;