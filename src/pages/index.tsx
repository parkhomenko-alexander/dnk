import {  ChangeEvent, useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState<string>('init data') 

  useEffect(() => {
    const testDiv: HTMLDivElement | null = document.querySelector('#test')
    console.log(new Date(Date.now()))
    const date = new Date(Date.now()).toString()
    testDiv!.innerText = date
  }, [])

    
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(data)
    setData(event.target.value)
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">

        <div className="text-4xl" id="test"></div>

        <input  className='m-10 text-3xl border-4' type="text" value={data} onChange={(event) => handleOnChange(event)}/>
        <div className="h-3/4 flex justify-center items-center tx-xl">Главная</div>
      </div>
    </>
  )
}