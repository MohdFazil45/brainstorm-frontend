import axios from "axios";
import DeleteIcon from "../icons/DeleteIcon";
import LinkIcon from "../icons/LinkIcon";
import ShareIcon from "../icons/ShareIcon";
import TextIcon from "../icons/TextIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { BACKEND_URL } from "../config";

  interface CardProps {
    title: string;
    link: string;
    contentId?: string; // Add contentId prop
    onDeleteSuccess?: () => void; // Callback to refresh content after deletion
    isPublicView?: boolean; // New prop to control UI
    type: "twitter" | "youtube" | "text" | "link";
  }

  const Card = ({ title, link, type, contentId}: CardProps) => {

    const shareLink = async()=>{
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
        share:true
      },{
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      })
      const shareURL = `https://fazil-brainstorm.netlify.app/share/${response.data.hash}`
      
      await  navigator.clipboard.writeText(shareURL)
      alert("Copy link to clipboard")
    }

    function getEmbedLink(url: string) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                },
                data: { 
                    contentId: contentId
                }
            });
            alert("Content deleted successfully!");
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Failed to delete content.");
        }
    };


    return (
      <div>
      <div className="p-4 bg-white rounded-md border shadow-xl border-gray-200 max-w-72 min-w-72 min-h-24 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              {type === "twitter" && (
                <TwitterIcon/>
              )}

              {type === "youtube" && (
                <YoutubeIcon/>
              )}

              {type === "text" && (
                <TextIcon size="md"/>
              )}

              {type === "link" && (
                <LinkIcon size="md"/>
              )}
            </div>
            <div className="font-medium text-md">{title}</div>
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500 cursor-pointer" onClick={shareLink}>
              <ShareIcon size="md" />
            </div>
            <div className="text-gray-500 cursor-pointer" onClick={handleDelete}>
              <DeleteIcon size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4 ">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={getEmbedLink(link)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}

          {type === "text" && (
              <div className="text-md leading-[1.5vw] text-gray-800 border-2 rounded-2xl p-3 w-full ">
                {link}
              </div>
          )}

          {type === "link" && (
              <div className="text-md leading-[1.5vw] text-blue-500 rounded-2xl p-3 w-full ">
                <a className="block text-blue-600 hover:underline break-all" href={`${link}`} target="_blank">{link}</a>
              </div>
          )}
        </div>
      </div>
      </div>
    );
  };

  export default Card;
