import { useNavigate } from "react-router-dom"

const ItemRow = ({ item }) => {
    const navigate = useNavigate()
    console.log(item?.name, `<=================== name ==================`);
    return (
        <tr>
            <td>{item?.name}</td>
            <td>
                <button onClick={() => navigate(`${item?.id}`)} >Show Detail</button>
            </td>
        </tr>
    )
}

export default ItemRow