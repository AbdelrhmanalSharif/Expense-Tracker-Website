import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { User } from "lucide-react";

const Client = () => {
    const clientSays = [
        {
            id: 1,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            description: 'Expense Tracker has made managing my finances so much easier. The interface is intuitive and the reports are very helpful.',
            name: 'Emily Carter',
            position: 'Freelance Designer',
        },
        {
            id: 2,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            description: 'I love how quickly I can add expenses and see where my money goes. Highly recommended for anyone looking to budget better!',
            name: 'Michael Lee',
            position: 'Software Engineer',
        },
        {
            id: 3,
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            description: 'The customer support is fantastic and the app keeps getting better with every update.',
            name: 'Priya Singh',
            position: 'Startup Founder',
        },
        {
            id: 4,
            image: "https://randomuser.me/api/portraits/men/54.jpg",
            description: 'Tracking expenses for my small business has never been this simple. The export feature saves me hours every month.',
            name: 'Carlos Ramirez',
            position: 'Small Business Owner',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="lg:container mx-auto py-16 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] rounded-3xl shadow-xl ">
            <SectionTitle title="What our clients say about us" mb="mb-11" />
            <div className="slider-container w-full h-full px-2 ">
                <Slider {...settings}>
                    {clientSays.map((client) => (
                        <div
                            key={client.id}
                            className="p-8 md:p-12 bg-white rounded-2xl shadow-lg mx-6 flex flex-col gap-6 border border-[#e1e1e3] hover:shadow-2xl transition-shadow duration-300 min-h-[320px] padding-6 justify-between"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-indigo-100 rounded-full p-3 flex items-center justify-center shadow">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl text-[#272343] font-semibold capitalize mb-1">{client.name}</h4>
                                    <p className="text-sm md:text-base text-[#636270] font-medium">{client.position}</p>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl text-[#636270] font-inter font-normal italic leading-relaxed relative pl-8">
                                <span className="absolute left-0 top-0 text-4xl text-indigo-200 font-serif select-none">“</span>
                                {client.description}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client;