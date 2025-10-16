  import DeleteIcon from "../icons/DeleteIcon";
import LinkIcon from "../icons/LinkIcon";
import ShareIcon from "../icons/ShareIcon";
import TextIcon from "../icons/TextIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

  interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube" | "text" | "link";
  }

  const Card = ({ title, link, type }: CardProps) => {
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
            <div className="pr-2 text-gray-500 cursor-pointer">
              <ShareIcon size="md" />
            </div>
            <div className="text-gray-500 cursor-pointer">
              <DeleteIcon size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4 ">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch?v=", "embed/").replace("m.youtube.com", "www.youtube.com")}
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
