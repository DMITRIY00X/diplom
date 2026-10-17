
import "./Projects.css";
import "./appicon.png";
function Projects(props) {
    let { elem } = props;
    return (
        <div className="projects">
            <h2>Мои проекты</h2>
            <div className="project-blocks">
                <div className="project-element-blocks"> 
                    {
                        Object.keys(elem).map(el => {
                            return (
                                <div className="presentation">
                                    <div className="name">
                                        {elem[el].name} {elem[el].type}
                                        <div>
                                            <img src={elem[el].photo} alt="" />
                                        </div>
                                    </div>
                                    <div className="year">
                                        {elem[el].year}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Projects;