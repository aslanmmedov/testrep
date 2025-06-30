
import { Outlet } from 'react-router'
import Sidebar from '../../components/Admin/SideBar'
import Navbar from '../../components/Admin/Navbar'
import "../../assets/Styles/style.scss"
function AdminLayout() {
    return (
        <div className="admin-content">
            <Sidebar />
            <div className="containerr">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout