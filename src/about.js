function ExecSection() {
    return (
        <div>
            <h1 className="section_titles">Meet our Execs</h1>
            <div className="execs_container">
                <Exec 
                    name = "Gordon Zhou"
                    position = "President"
                    bio = "Gordon is the president for the Van Tech Coding Club. He was first introduced to coding in Grade 7, creating a flash game for a school project. He is currently in Grade 12 and hopes to pursue a career in computer science. He hopes that Coding Club can offer itself to others as a place to explore all that programming has to offer."
                    image_path = "images\2022-2023execs\Gordon.png"
                    instagram = "https://www.instagram.com/_gordon.z/"
                    github = "https://github.com/complexape"
                />
                <Exec 
                    name = "Ryan Lowe"
                    position = "Vice-President"
                    bio = "Ryan is the vice-president of the Van Tech Coding Club. He hopes to pursue a future in STEM, but for now he is in his junior year pursuing secondary education at Van Tech in the French Immersion program. He hopes to help others learn and develop a passion for programming through Coding Club."
                    image_path = "images\2022-2023execs\Ryan.jpg"
                    instagram = "https://www.instagram.com/glaceyarn/"
                    github = "https://github.com/icyfrostbolt"
                    linkedin = "https://www.linkedin.com/in/ryan-lowe-aa873a241/"
                />
                <Exec 
                    name = "Brandon Wu"
                    position = "Secretary"
                    bio = "Brandon is the secretary of the Van Tech Coding Club. He is currently in the 10th grade and aspires to be a mechatronics engineer in the near future. Through Coding Club, he hopes to inspire other students to develop an interest in programming as it did for him."
                    image_path = "images\2022-2023execs\Brandon.png"
                    instagram = "https://www.instagram.com/brandonn.wu/"
                />
                <Exec 
                    name = "Winnie Luk"
                    position = "Marketing Director"
                    bio = "Winnie is the Branding Director of the Van Tech Coding Club. She is in charge of marketing and leading the design team to promote the club. She has not figured out what she would like to do for her future yet, perhaps she will find out during her remaining years in Van Tech."
                    image_path = "images\2022-2023execs\Winnie.jpeg"
                    instagram = "https://www.instagram.com/winnie_luk16/"
                />
            </div>
        </div>
    )
}

function Exec(props) {
    return (
        <div className="exec">
            <div className="exec_image_container">
                <img className="exec_image" src={props.image_path}/>
                <p className="exec_bio">{props.bio}</p>

            </div>
            <p className="exec_name">{props.name}</p>
            <p className="exec_position">{props.position}</p>

            <div className="exec_socials">
                {props.instagram && <a href={props.instagram} target="_blank" className="exec_socials_icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>}
                {props.twitter && <a href={props.twitter} target="_blank" className="exec_socials_icon"><i className="fab fa-twitter" aria-hidden="true"></i></a>}
                {props.github && <a href={props.github} target="_blank" className="exec_socials_icon"><i className="fab fa-github" aria-hidden="true"></i></a>}
                {props.linkedin && <a href={props.linkedin} target="_blank" className="exec_socials_icon"><i className="fab fa-linkedin" aria-hidden="true"></i></a>}
                {props.website && <a href={props.website} target="_blank" className="exec_socials_icon"><i className="fab fa-solid fa-globe" aria-hidden="true"></i></a>}
            </div>

        </div>
    )
}


const execSection = document.getElementById("exec_section");
const root = ReactDOM.createRoot(execSection);
root.render(React.createElement(ExecSection))