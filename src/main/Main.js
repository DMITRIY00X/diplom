import "./Main.css";
import office from "./office.png";


function Main() {
    return (
        <div className="main">
            <div className="main-header">
                <img src={office} alt="" />
                {/* <h2>9 Работ</h2>
                <p>Меня зовут Дмитрий! Я frontend‑разработчик. Сегодня я презентую свои первые проекты. При создании проектов я использовал HTML, CSS, javaScript и React.</p>
                <p>Проекты разнообразные, интересные и демонстрирующие разнообразные аспекты разработки</p> */}
            </div>
            <div className="main-aboutMe">
                <h2>Обо мне</h2>
                <h3>Меня зовут Дмитрий мне 31 год. Я родился и вырос в городе Челябинск</h3>
                <p>ФИО:      Акулов Дмитрий Русланович</p>
                <p>Почта:    test@mail.ru</p>
                <p>Город:    Челябинск</p>
                <button className="main-btn">Информация обо мне</button>
            </div>
        </div>
    )
}

export default Main;