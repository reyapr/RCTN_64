import { useParams } from "react-router-dom"

const Member = () => {
    const params = useParams()
    return (
        <>
            <h3>{params.memberName}</h3>
            <p>Hi i'm {params.memberName}</p>
        </>
    )
}

export default Member