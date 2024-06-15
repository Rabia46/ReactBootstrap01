import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamsData = [
    {
        id: 1,
        image: require("../assests/images/team1.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Albert John',
        designation: "CEO",
        description: "Chief Executive Officer, brings over 20 years of experience in the industry."
    },
    {
        id: 2,
        image: require("../assests/images/team2.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Jane Doe',
        designation: "CTO",
        description: "Chief Technology Officer and tech-savvy leader with a passion for emerging technologies"
    },
    {
        id: 3,
        image: require("../assests/images/team3.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'John Smith',
        designation: "COO",
        description: ' Chief Operating Officer with a strong background in oparating managment'

    },
    {
        id: 4,
        image: require("../assests/images/team4.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Mary Johnson',
        designation: "CFO",
        description: 'Chief Financial Officer with extensive experience in corporate finance and accounting. '
    },
    {
        id: 5,
        image: require("../assests/images/team5.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Michael Brown',
        designation: "CMO",
        description: "Experienced marketing strategist with a track record of successful campaigns."
    },
    {
        id: 6,
        image: require("../assests/images/team6.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Emily Davis',
        designation: "CIO",
        description: "Expert in information technology and systems management."
    },
    {
        id: 7,
        image: require("../assests/images/team7.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Christopher Martinez',
        designation: "CHRO",
        description: "Human resources leader with a focus on organizational development."
    },
    {
        id: 8,
        image: require("../assests/images/team8.jpg"),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Olivia Garcia',
        designation: "Chief Legal Officer",
        description: "Seasoned legal expert with extensive experience in corporate law."
    }
]

export default function AppTeams() {
    return (
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>OUR TEAMS</h2>
                    <div className='subtitle'>some of our experts</div>
                </div>
                <Row>
                    {
                        teamsData.map(team => {
                            return (
                                <Col sm={3} key={team.id}>
                                    <div className='image'>
                                        <Image src={team.image} alt={team.name} fluid />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li>
                                                        <a href={team.fbLink} target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i></a>
                                                        <a href={team.twitterLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                                        <a href={team.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3>{team.name}</h3>
                                        <span className='designation'>{team.designation}</span>
                                        <p>{team.description}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
