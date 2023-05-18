import PopUp from "@/components/pop-up/PopUp";
import { FC,  useState } from "react";
import { isJsxOpeningElement } from "typescript";

const Posts: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [posts, setPosts] = useState([])

    
    return (
        <>
            <PopUp isOpen={isOpen} openHandler={setIsOpen}/>

            <div className="flex justify-center mt-32">
                {
                    posts.length === 0 ? 'Постов нету' :
                    posts.map(p => {
                        return (
                            <div>
                                <h2>{p.title}</h2>
                                <div>
                                    {p.text}
                                </div>
                            </div>
                        )
                    })
                }

                <button className="bg-pink-400 py-2 px-3 flex justify-center items-center
                            rounded-xl cursor-pointer  hover:bg-pink-500 
                            transition-all" onClick={() => setIsOpen(!isOpen)}>
                    Add
                </button>
            </div>
        </>
    )
}

export default Posts