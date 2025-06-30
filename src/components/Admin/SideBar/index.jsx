import React from 'react'
import { NavLink } from "react-router";
import { FaAppStore, FaChartLine, FaHome, FaUsers, FaUserSecret } from "react-icons/fa";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


function Sidebar() {
const {t} = useTranslation();

    return (
        <div className='sidebarr'>
            <h1>POS  {t("system")}</h1>
            <ul>
                <li>
                    <NavLink to={""} end className={({ isActive }) => isActive ? "navlink active" : "navlink"} >   <FaHome />{ t("dashboard")}</NavLink>
                </li>
                <li>
                    <NavLink to={"stores"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <FaAppStore /> { t("stores")}</NavLink>
                </li>
                <li>
                    <NavLink to={"users"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                     <FaUsers /> { t("users")}
                     </NavLink>
                </li>
                <li>
                    <NavLink to={"suppliers"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}><FaUserSecret /> { t("suppliers")}</NavLink>
                </li>
                <li>
                    <NavLink to={"products"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}> <FaChartLine /> { t("products")}</NavLink>
                </li>
                <li>
                    <NavLink to={"orders"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}> <BsFillCartCheckFill /> { t("orders")}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar