import { useRouter } from "next/router"

const Person = () => {
    const router = useRouter()
    const { person, age } = router.query
    return (
        <>
            {person}
            age: {age}
        </>
    )
}

export default Person