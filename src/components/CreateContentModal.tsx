import CrossIcon from "../icons/CrossIcon"
import Button from "./Button"
import Input from "./Input"

const CreateContentModal = ({open, onClose}: any) => {
  return (
    <div>
        {open && <div className="w-screen h-screen bg-black opacity-90 fixed top-0 left-0 flex z-10 items-center justify-center">
            <div className="flex items-center justify-center opacity-100 bg-white">
                <span className="flex flex-col h-96 w-[40vw] p-2">
                    <div className="flex justify-end ">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon size="md" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 justify-center items-center pt-5">
                        <h1 className="text-2xl font-semibold">Fill Your Brain</h1>
                        <Input onChange={() => {}} placeholder="Title"/>
                        <Input onChange={() => {}} placeholder="Dump your stuff"/>
                        <Input onChange={() => {}} placeholder="Type"/>
                        <Button variant="secondary" text="Submit" size="md" onClick={() => {}}/>
                    </div>
                </span>
            </div>
        </div>}
    </div>
  )
}

export default CreateContentModal