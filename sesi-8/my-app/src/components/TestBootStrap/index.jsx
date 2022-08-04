import { useState } from "react"
import CustomeButton from './CustomeButton'

const TestBootStrap = () => {
    const [totalNotif, setTotalNotif] = useState(0)
    return (
        <div className="container">
            <div className="row">
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif} 
                        setTotalNotif={setTotalNotif}
                        color="info"
                    />
               </div>
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif} 
                        setTotalNotif={setTotalNotif}
                        color="danger"
                    />
               </div>
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif} 
                        setTotalNotif={setTotalNotif}
                        color="success"
                    />
               </div>
            </div>
        </div>
    )
}

export default TestBootStrap