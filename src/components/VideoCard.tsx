import { VideoCardProps, VideoProps } from "../types";

const VideoCard: React.FC<VideoCardProps & VideoProps> = ({
    title,
    image,
    publishingYear,
    onClick,
}) => {
 
    return (
        <div className="flex flex-col gap-4 bg-card hover:bg-cardhover hover:cursor-pointer text-white font-montserrat sm:w-[280px] w-[40vw] rounded-lg p-2" onClick={onClick}>
            <img src={image} alt="" />
            <div className="pl-2">
                <p className="sm:text-xl sm:font-medium font-bold">{title}</p>
                <p className="text-sm font-normal">{publishingYear}</p>
            </div>
        </div>
    )
}

export default VideoCard;