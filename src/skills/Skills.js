import "./Skills.css";

function Skills() {
    return (
        <div className="skills">
            <h2>Умения</h2>
            <div className="skills-slider">
                <h3>Навык №1</h3>
                <p>Работа c HTML разметкой</p>
                <p>Работа с HTML и CSS является базовой необходимой потребностью программиста</p>
                <p>В процессе изучения блока HTML и CSS я научился:</p>
                <ul>
                    <li>Создавать структуры веб-страниц с помощью HTML и правильно размещать контент:
                        <ul>
                            <li>Заголовки</li>
                            <li>Абзацы</li>
                            <li>Списки</li>
                            <li>Таблицы</li>
                        </ul>
                    </li>
                    <li>Стилизации с помощью CSS</li>
                    <li>Адаптивной верстке</li>
                    <li>Работа с инструментами разработки(Visual Studio Code)</li>
                    <li>Работа с макетами(Figma,Picso)</li>
                </ul>
            </div>
            <button className="skills-btn__left">&lt;</button>
            <button className="skills-btn__right">&gt;</button>
        </div>
    )
}

export default Skills;
