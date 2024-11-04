import React from 'react';
import SidebarComponent from "./global-components/navbar";

const Stories = () => {
    const storiesData = [
        {
            title: "Feeding the Community",
            description: "Jane from Khayelitsha has dedicated her weekends to organizing food drives for families in need. Her initiative has provided over 500 meals this year alone, showing how a single person's dedication can make a huge difference.",
            imageUrl: "/images/feeding-community.jpg", // Placeholder image path
        },
        {
            title: "Local Cleanup Hero",
            description: "Lungile, a high school teacher, started organizing regular clean-ups in her neighborhood after noticing increased litter. Her efforts have inspired others to join, resulting in cleaner streets and parks for everyone.",
            imageUrl: "/images/local-cleanup.jpg",
        },
        {
            title: "Rescuing Stranded Families",
            description: "During the recent floods, Thabo used his small boat to help evacuate families in the area, risking his own safety to bring them to higher ground. His courage and quick thinking saved many lives.",
            imageUrl: "/images/rescue-lives.jpg",
        },
        {
            title: "Youth Mentorship Program",
            description: "Ntombi has launched a mentorship program in Soweto, pairing young people with mentors in various fields. Through her work, many students have found new paths and ambitions, uplifting the community.",
            imageUrl: "/images/youth-mentorships.jpg",
        },
    ];

    return (
        <>
            <SidebarComponent > </SidebarComponent>

        <div className="container ">
            <h2 className="text-center">Stories of Impact</h2>
            <p className="text-center">Celebrating local heroes who make a difference in our communities. Join in and become part of the change!</p>
            <div className="row">
                {storiesData.map((story, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card shadow-sm h-100">
                            <img src={story.imageUrl} className="card-img-top m-0" alt={story.title} />
                            <div className="card-body">
                                <h5 className="card-title">{story.title}</h5>
                                <p className="card-text">{story.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Stories;
