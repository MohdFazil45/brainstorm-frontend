import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
  Link: "link",
  Text: "text",
} as const;

type ContentType = (typeof ContentType)[keyof typeof ContentType];

const CreateContentModal = ({ open, onClose }: any) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  const createContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    axios.post(`${BACKEND_URL}/api/v1/content`, {
      title,
      link,
      type
    },{
        headers:{
            "Authorization": localStorage.getItem("token")
        }
    });
    onClose()
  };
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 flex z-10 items-center justify-center opacity-60"></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex z-10 items-center justify-center ">
            <div className="flex items-center justify-center  bg-white">
              <span className="flex flex-col h-96 w-[40vw] p-2">
                <div className="flex justify-end ">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon size="md" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center pt-3">
                  <h1 className="text-2xl font-semibold">Fill Your Brain</h1>
                  <Input ref={titleRef} placeholder="Title" />
                  <Input
                    ref={linkRef}
                    placeholder="Dump your X & Yt links, text, links"
                  />
                  <h1>Select Type</h1>
                  <div className="flex gap-2 ">
                    <Button
                      text="Youtube"
                      variant={
                        type === ContentType.Youtube ? "secondary" : "primary"
                      }
                      size="sm"
                      onClick={() => setType(ContentType.Youtube)}
                    />
                    <Button
                      text="Twitter"
                      variant={
                        type === ContentType.Twitter ? "secondary" : "primary"
                      }
                      size="sm"
                      onClick={() => setType(ContentType.Twitter)}
                    />
                    <Button
                      text="Link"
                      variant={
                        type === ContentType.Link ? "secondary" : "primary"
                      }
                      size="sm"
                      onClick={() => setType(ContentType.Link)}
                    />
                    <Button
                      text="Text"
                      variant={
                        type === ContentType.Text ? "secondary" : "primary"
                      }
                      size="sm"
                      onClick={() => setType(ContentType.Text)}
                    />
                  </div>
                  <Button
                    variant="secondary"
                    text="Submit"
                    size="md"
                    onClick={createContent}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
