import "./Main.css";

function Main() {
    return (
        <div className="main">
            <div className="main-header">
                <h2>Оглавление</h2>
            </div>
            <div className="menu">
                <div className="menu-blocks">
                    <a href="">Игры</a>
                    <p>В этом разделе находятся игры:</p>
                    <ul>
                        <li>Тетрис</li>
                        <li>Змейка</li>
                        <li>Игра нажми на шарик (игра на скорость реакции)</li>
                    </ul>
                </div>
                <div className="menu-blocks">
                    <a href="">Сайты</a>
                    <p>В этом разделе расположены сайты которые я создал в период обучения</p>
                    <ul>
                        <li>Сайт 1</li>
                        <li>Сайт 2</li>
                        <li>Сайт 3</li>
                    </ul>
                </div>
                <div className="menu-blocks">
                    <a href="">Разное</a>
                    <p>В этом разделе будут показаны примеры работы с формой и демонстрация других навыков</p>
                    <ul>
                        <li>Калькулятор</li>
                        <li>Книга (Показана будет работа с пагинацией)</li>
                        <li>Форма регистрации на сайте</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;