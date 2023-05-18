import { FC, FormEvent, MouseEvent, useState } from "react"

interface IPopUpProps {
    isOpen: boolean,
    openHandler: (isOpen: boolean) => void 
}

const PopUp:FC<IPopUpProps> = ({ isOpen, openHandler }) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleFilterClick = (event: MouseEvent<HTMLDivElement>) => {
        const target: HTMLElement = event.target as HTMLElement
        if (target.id !== 'modalFilter') return
        openHandler(!isOpen)
    }

    const hanldeSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                text
            })
        })

        const json = await response.json() 
    
        setTitle('')
        setText('')

        console.log(response, json)
        openHandler(!isOpen)
    }


    return (
        <>
            {
                isOpen &&
                <div id='modalFilter' className="absolute top-0 h-screen w-screen flex justify-center 
                items-center bg-black/30 cursor-pointer" onMouseDown={(event) => { handleFilterClick(event) }}>
                    <div className="p-12 bg-white w-96 rounded-lg cursor-default">
                        <form className="flex flex-col space-y-5" onSubmit={(event) => hanldeSubmit(event)}>
                            <label className="">
                                <span className="block">Заголовок</span>
                                <input type="text"
                                    className="mt-2 py-2 pl-4 w-full 
                                        outline-none border-slate-400 focus:border-slate-600 border rounded-xl"
                                    placeholder="Введите заголовок"
                                    value={title}
                                    onChange={(event) => { setTitle(event.target.value) }} />
                            </label>

                            <label className="">
                                <span className="block">Описание</span>
                                <textarea name="" id="" cols={30} rows={10} className="mt-2 py-2 pl-4 w-full outline-none 
                                border-slate-400 focus:border-slate-600 border rounded-xl resize-none"
                                    placeholder="Текст поста"
                                    value={text}
                                    onChange={(event) => { setText(event.target.value) }}>
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

        </>
    )
}

export default PopUp