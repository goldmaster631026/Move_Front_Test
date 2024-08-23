import { Download } from "lucide-react";
import image from '../../assets/image.png';
import SubmitForm from "../../components/SubmitForm";
import { useDispatch, useSelector } from "../../store";
import { useState, ChangeEvent, useEffect } from "react";
import { getVideoInfo, updateVideoData } from "../../store/reducers/videos";
import { VideoProps } from "../../types";
import { useNavigate } from "react-router";

const EditMovie: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const video = useSelector((state) => state.videos.video);
    console.log("video", video, typeof(video));

    // Get video id from URL
    const [id, setId] = useState<string | null>(null);
    console.log(id);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setId(queryParams.get('id'));
        if(id != null ){
            dispatch(getVideoInfo(id))
        }
    }, [id]); // Run this effect only once when the component mounts

    // Video Data
    const [newVideoData, setNewVideoData] = useState<VideoProps>({
        title: video?.title || '',
        image: video?.image || '',
        publishingYear: video?.publishingYear || '',
    });
    console.log(newVideoData);
    useEffect(() => {
        if (video) {
            setNewVideoData({
                title: video.title,
                image: video.image || '',
                publishingYear: video.publishingYear || '',
            });
        }
    }, [video]); // Update newVideoData when video changes

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const videoTitle = e.target.value;
        setNewVideoData({
            ...newVideoData,
            title: videoTitle,
        });
    };

    const photoUpload = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files?.[0]; // Use optional chaining to handle undefined

        if (file) {
            reader.onloadend = () => {
                setNewVideoData({
                    ...newVideoData,
                    image: reader.result as string,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        const publishingYear = e.target.value;
        setNewVideoData({
            ...newVideoData,
            publishingYear: publishingYear,
        });
    };

    const handleUpdate = () => {
        updateVideoData(id, newVideoData);
        navigate("/main")
    }

    return (
        <>
            <div className="text-white font-montserrat xl:px-80 lg:px-40 md:px-20 px-10 xl:pt-40 pt-20">
                <p className="md:text-5xl text-3xl font-semibold">Edit</p>
                <div className="grid mt-20 gap-20 md:grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 md:row-span-2 lg:order-1">
                        <label htmlFor="photo-upload" className="fas">
                            <div className="lg:h-full h-[200px] border-2 border-white border-dashed rounded-md flex justify-center items-center hover:cursor-pointer">
                                {newVideoData.image === '' ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <Download />
                                        <p className="text-sm">Drop an image here</p>
                                    </div>
                                ) : (
                                    <img src={newVideoData.image} alt="video" className="relative w-auto h-[100%]" />
                                )}
                            </div>
                            <input id="photo-upload" type="file" className="hidden" onChange={photoUpload} />
                        </label>
                    </div>
                    <div className="order-1">
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Title" className="lg:w-96" value={newVideoData.title} onChange={handleTitleChange} />
                            <input type="text" placeholder="Publishing year" value={newVideoData.publishingYear} className="lg:w-56" onChange={handleYearChange} />
                        </div>
                    </div>
                    <div className="order-3">
                        <div className="flex lg:justify-start justify-center">
                            <SubmitForm onClick={handleUpdate} />
                        </div>
                    </div>
                </div>
            </div>

            <img src={image} alt="" className='w-full absolute bottom-0' />
        </>
    );
}

export default EditMovie;