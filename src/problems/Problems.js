import "./Problems.css";


function Problems(props) {
    let { dif } = props;
    return (
        <div className="problems">
            {/* <h2>Трудности в создании проектов</h2>
            <div className="problem-block">
             <h3>Трудности при создании игры "Змейка"</h3>
           <ul>
                     <li>Логика движения змейки</li>
                   <li>Генерация яблок</li>
                    <li>Увеличение змейки</li>
                    <li>Соприкосновение змейки с объектами</li>
                    <li>Подсчет очков и условия проигрыша и выигрыша</li>
                 </ul>
             </div>
             <button className="problem-rightBtn">&gt;</button>
             <button className="problem-leftBtn">&lt;</button> */}

            <h2>Трудности при создании проектов</h2>

            {
                Object.keys(dif).map(d => {
                    return (
                        <div className="difficulties">
                            <div className="name">
                                {dif[d].name} {dif[d].type}
                                <div className="problems-description">
                                    <div>
                                        {dif[d].description.one}
                                    </div>
                                    <div>
                                        {dif[d].description.two}
                                    </div>
                                    <div>
                                        {dif[d].description.three}
                                    </div>
                                    <div>
                                        {dif[d].description.four}
                                    </div>
                                    <div>
                                        {dif[d].description.five}
                                    </div>
                                </div>
                            </div>
                            <div className="year">
                                {dif[d].year}
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Problems;