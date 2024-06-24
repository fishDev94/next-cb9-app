import { useRouter } from "next/router"

export default function UserPage() {

    const router = useRouter();

    console.log(router)
    return (
        <div>
            <h1>User Page</h1>
            <p>{router.query.user}</p>
        </div>
    )
}