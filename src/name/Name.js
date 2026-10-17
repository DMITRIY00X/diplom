// import photo from "./photo.jpg";
import "./Name.css";
function Name() {
    return (
        <div className="wrap">
            <div className="name-block">
                <div className="name-common">
                    {/* <div className="photo">
                        < img src={photo} alt="" />
                    </div> */}
                    <div className="name-header">
                        <h2>Меня зовут Дмитрий</h2>
                        <h3>Я начинающий Frontend разработчик</h3>
                    </div>
                </div>
                <a href="">Мое резюме</a>
            </div>
        </div>

    )
}

export default Name;