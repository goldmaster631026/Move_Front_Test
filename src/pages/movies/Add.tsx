import { Download } from "lucide-react";
import image from '../../assets/image.png';
import SubmitForm from "../../components/SubmitForm";
import { VideoProps } from "../../types";
import { useDispatch } from "../../store";
import { useState, ChangeEvent } from "react";
import { addVideosData } from "../../store/reducers/videos";
import { useNavigate } from "react-router";

const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [videoData, setVideoData] = useState<VideoProps>({
        title: "",
        image: "",
        publishingYear: "",
    });
    console.log(videoData);
    
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const videoTitle = e.target.value;
        setVideoData({
            ...videoData,
            title: videoTitle
        });
    };
    const photoUpload = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files?.[0]; // Use optional chaining to handle undefined

        if (file) {
            reader.onloadend = () => {
                setVideoData({
                    ...videoData,
                    image: reader.result as string
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        const publishingYear = e.target.value;
        setVideoData({
            ...videoData,
            publishingYear: publishingYear
        })
    }

    const handleSubmit = () => {
        dispatch(addVideosData(videoData))
        navigate("/main")
    }

    return (
        <>
            <div className="text-white font-montserrat xl:px-80 lg:px-40 md:px-20 px-10 xl:pt-40 pt-20">
                <p className="md:text-5xl text-3xl font-semibold">Create a new movie</p>
                <div className="grid mt-20 gap-20 md:grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 md:row-span-2 lg:order-1">
                        <label htmlFor="photo-upload" className="fas">
                            <div className="lg:h-full h-[200px] border-2 border-white border-dashed rounded-md flex justify-center items-center hover:cursor-pointer">
                                {videoData.image == '' ? <div className="flex flex-col items-center gap-3">
                                    <Download />
                                    <p className="text-sm">Drop an image here</p>
                                </div> :
                                    <img src={videoData.image} alt="video" className="relative w-auto h-[100%]" />}
                            </div>
                            <input id="photo-upload" type="file" className="hidden" onChange={photoUpload} />
                        </label>
                    </div>
                    <div className="order-1">
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Title" className="lg:w-96" onChange={handleTitleChange} />
                            <input type="text" placeholder="Publishing year" className="lg:w-56" onChange={handleYearChange} />
                        </div>
                    </div>
                    <div className="order-3">
                        <div className="flex lg:justify-start justify-center">
                            <SubmitForm onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className='w-full absolute bottom-0' />
        </>
    )
}

export default AddMovie;