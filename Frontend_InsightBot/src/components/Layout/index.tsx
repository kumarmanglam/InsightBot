import Navbar from '../common/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout