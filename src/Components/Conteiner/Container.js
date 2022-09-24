import "./Container.css"
import Header from "../Header/Header"
import Btns from "../Btns/Btns"
import Footer from "../Footer/Footer"
const Container =()=>{
    return(
        <div className="Container">
            <Header/>
            <Btns/>
            <Footer/>
        </div>
    )
}

export default Container