
const CustomeButton = (props) => {
    return (
        <button 
            onClick={() => props.setTotalNotif(props.totalNotif + 1)} 
            className={`btn btn-${props.color} position-relative`}
        >
            Send Message
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {props.totalNotif}
            </span>
        </button>
    )
}

export default CustomeButton