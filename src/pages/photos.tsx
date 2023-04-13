import { FC } from "react";

const Photos: FC = ( title='Какой то тайтл' ) => {
    return (
        <>
            <div className="h-screen">
                <div>title</div>
                <div className="h-3/4 flex justify-center items-center tx-xl"> Фотографии </div>
            </div>
        </>
    )
}

export default Photos