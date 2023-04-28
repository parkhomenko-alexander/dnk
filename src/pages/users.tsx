import { FC, useEffect, useState } from "react";

interface IUser {
    id: number,
    fullName: string,
    email: string
}

const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch('http://localhost:4000/user')
                if (!response.ok) {
                    console.warn('something wrong')
                    return
                }
                const usersData: IUser[] = await response.json()
                setUsers(usersData)
            } catch (error) {
                console.warn(error)
            }
        }

        getData()
    }, [])

    return (
        <>
            <div className="h-screen">
                <div className="mt-10 flex justify-center items-center tx-xl">
                    {
                        users.map(user => {
                            return (
                                <div key={user.id}>
                                    {user.email}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Users