import { FC, MouseEvent, useState } from "react";

const Posts: FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleFilterClick = (event: MouseEvent<HTMLDivElement>) => {
        const target: HTMLElement = event.target as HTMLElement
        if (target.id !== 'modalFilter') return
        console.log(event.target)
        setIsOpen(!isOpen)
    }

    return (
        <>
            {
                isOpen &&
                <div id='modalFilter' className="absolute top-0 h-screen w-screen flex justify-center 
                items-center bg-black/30 cursor-pointer" onMouseDown={(event) => { handleFilterClick(event) }}>
                    <div className="p-12 bg-white w-96 rounded-lg cursor-default">
                        <form className="flex flex-col space-y-5">
                            <label className="">
                                <span className="block">Заголовок</span>
                                <input type="text"
                                    className="mt-2 py-2 pl-4 w-full 
                                        outline-none border-slate-400 focus:border-slate-600 border rounded-xl"
                                    placeholder="Введите заголовок"
                                    value={title} 
                                    onChange={(event) => {setTitle(event.target.value)}}/>
                            </label>

                            <label className="">
                                <span className="block">Описание</span>
                                <textarea name="" id="" cols={30} rows={10} className="mt-2 py-2 pl-4 w-full outline-none 
                                border-slate-400 focus:border-slate-600 border rounded-xl resize-none"
                                    placeholder="Текст поста" 
                                    value={text}
                                    onChange={(event) => {setText(event.target.value)}}>
                                </textarea>
                            </label>


                            <button className="py-2 px-4 w-1/2 mx-auto bg-pink-400 
                            rounded-xl cursor-pointer hover:bg-pink-500 transition-all">
                                Добавить
                            </button>
                        </form>
                    </div>
                </div>
            }

            <div className="flex justify-center mt-32">
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