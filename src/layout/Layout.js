import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/games">Игры</NavLink></li>
                <li><NavLink to="/site">Сайты</NavLink></li>
                <li><NavLink to="/description">Описание проектов</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout;