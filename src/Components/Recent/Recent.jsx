import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

// Cool glassmorphism card style
const cardStyle = {
    background: "rgba(255,255,255,0.15)",
    boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
    backdropFilter: "blur(8px)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.18)",
    transition: "transform 0.2s",
};

const Recent = () => {
    const features = [
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/assets/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/assets/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/assets/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/assets/features/product_4.png",
            currentPrice: "$200",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/assets/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/assets/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/assets/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/assets/features/product_4.png",
            currentPrice: "$200",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="lg:container mx-auto px-4 py-12 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#f9fafb] min-h-[60vh]">
            <SectionTitle title="Recently Added" mb={"mb-11"} />

            <div className="slider-container features_slider w-full h-full">
                <Slider {...settings}>
                    {features?.map((feature, index) => (
                        <div key={index} className="p-4 group">
                            <div
                                className="relative overflow-hidden"
                                style={cardStyle}
                            >
                                <img
                                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                                    src={feature?.image}
                                    alt={feature?.title}
                                />
                                {feature?.status && (
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#007580] to-[#00b4d8] text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold uppercase tracking-wider">
                                        {feature?.status}
                                    </div>
                                )}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg text-[#007580] capitalize font-bold font-inter">
                                            {feature?.title}
                                        </h4>
                                        <span className="bg-gradient-to-br from-[#007580] to-[#00b4d8] h-[44px] w-[44px] rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                            <ShoppingCart size="1.5rem" color="#fff" />
                                        </span>
                                    </div>
                                    <p className="text-2xl flex items-center gap-2 text-[#272343] font-bold font-inter mb-2">
                                        {feature?.price}
                                        {feature?.currentPrice && (
                                            <span className="text-base text-[#9a9caa] font-inter font-normal line-through">
                                                {feature?.currentPrice}
                                            </span>
                                        )}
                                    </p>
                                    <button className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-[#007580] to-[#00b4d8] text-white font-semibold shadow-md hover:from-[#00b4d8] hover:to-[#007580] transition-all">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Recent;