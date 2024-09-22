import bot from "../../../assets/icons/bot.jpg"
import "./style.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='entireLayout'>
            <div className='navLogo' onClick={() => navigate("/viewDocuments")}>
                <img src={bot} alt='foxai-logo' id="fox-ai-logo" />
                <p id="fox-ai-heading">Insight Bot</p>
            </div>
            <div className='home-logout'>
                {/* <button id='navHomeButton' className="actionButton" onClick={() => navigate("/viewDocuments")}>Home</button> */}
            </div>
        </div>
    )
}

export default Navbar;