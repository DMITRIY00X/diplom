import "./Header.css";
import photoback from "./4.jpg";
function Header() {

    return (
        <div>
            <div className="header" >
                <h1>Мое портфолио</h1>
                <div className="header-menu">
                    <a href="">Игры</a>
                    <a href="">Сайты</a>
                    <a href="">Описание проектов</a>
                </div>
            </div>
        </div>
    )
}

export default Header;