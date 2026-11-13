import "./Header.css";

import { Routes, Route } from "react-router-dom";
import DescriptionPage from "../pages/DescriptionPage";
import GamesPage from "../pages/GamesPage";
import MainPage from "../pages/MainPage";
import SitePage from "../pages/SitePage";
import Layout from "../layout/Layout";


function Header() {

    return (
        <div>
            <div className="header" >
                <h1>Мое портфолио</h1>
                <div className="header-menu">
                    {/* <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/games">Игры</NavLink></li>
                        <li><NavLink to="/site">Сайты</NavLink></li>
                        <li><NavLink to="/description">Описание проектов</NavLink></li>
                    </ul> */}
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/games" element={<GamesPage />} />
                            <Route path="/site" element={<SitePage />} />
                            <Route path="/description" element={<DescriptionPage />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Header;