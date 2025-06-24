import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
    const features = [
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_4.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/Expense-Tracker-Website/features/product_4.png',
            currentPrice: '$200',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-gradient-to-br from-[#e0f7fa] via-[#f8fafc] to-[#f1f8e9] py-16">
            <div className="lg:container mx-auto px-4">
                <SectionTitle title="Featured Products" mb="mb-11" />
                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {features.map((feature, index) => (
                            <div key={index} className="p-4">
                                <div className="rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                    <div className="feature_image mb-4 relative">
                                        <img
                                            className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                                            src={feature?.image}
                                            alt={feature?.title}
                                        />
                                        {feature?.status && (
                                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md
                                                ${feature.status === "New" ? "bg-[#007580] text-white" : "bg-[#ffb300] text-[#272343]"}`}>
                                                {feature?.status}
                                            </div>
                                        )}
                                    </div>
                                    <div className="feature_content px-5 pb-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-lg text-[#007580] capitalize font-semibold font-inter">
                                                {feature?.title}
                                            </h4>
                                            <button className="bg-[#007580] hover:bg-[#005f63] h-11 w-11 rounded-lg flex items-center justify-center shadow-lg transition-colors duration-200">
                                                <ShoppingCart size="1.5rem" color="#fff" />
                                            </button>
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <span className={`text-xl font-bold font-inter ${feature.currentPrice ? "line-through text-[#9a9caa]" : "text-[#272343]"}`}>
                                                {feature?.price}
                                            </span>
                                            {feature?.currentPrice && (
                                                <span className="text-2xl text-[#007580] font-bold font-inter animate-pulse">
                                                    {feature?.currentPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#007580]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Features;