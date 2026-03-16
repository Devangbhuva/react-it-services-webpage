import "./Sections.css";

import t1 from "../assets/images/team-1.jpg";
import t2 from "../assets/images/team-2.jpg";
import t3 from "../assets/images/team-3.jpg";
import t4 from "../assets/images/team-4.jpg";

export default function Team() {
    const members = [
        {
            img: t1,
            name: "Jhone Bi",
            role: "Application Manager",
            linkedin: "https://www.linkedin.com/in/devang-bhuva01/" 
        },
        {
            img: t2,
            name: "Sani Awesome",
            role: "Social Media",
            linkedin: "https://www.linkedin.com/in/devang-bhuva01/" 
        },
        {
            img: t3,
            name: "Andrio Willi",
            role: "Content Writer",
            linkedin: "https://www.linkedin.com/in/devang-bhuva01/" 
        },
        {
            img: t4,
            name: "Afa Jonson",
            role: "Business Manager",
            linkedin: "https://www.linkedin.com/in/devang-bhuva01/" 
        },
    ];

    return (

        // <section className="team-section">
        <section id="team" className="team-section">
            <div className="container">
                <div className="section-header">
                    <h2>Team</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="team-grid">
                    {members.map((member, index) => (
                        <div className="team-card" key={index}>

                            <div className="team-img">
                                <img src={member.img} alt={member.name} />
                            </div>

                            <h4>{member.name}</h4>
                            <span>{member.role}</span>

                            <div className="social">
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
        // </section>   
    );
}