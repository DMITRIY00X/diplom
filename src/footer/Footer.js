import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            <div className="footer-contacts">
                <p>Телефон: 8 900-00-00-00</p>
                <p>Email: diplom@mail.ru</p>
            </div>
            <div className="footer-icons">
                <div className="footer-iconsBlock">
                    <div className="footer-vk"></div>
                    <div className="footer-whatsapp"></div>
                </div>

                <div className="footer-iconsBlock2">
                    <div className="footer-telegram"></div>
                    <div className="footer-youtube"></div>
                </div>

            </div>


            Челябинск - {new Date().getFullYear()}
        </div>
    )
}

export default Footer;