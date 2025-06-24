import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Modern Wooden Chair",
        subTitle: "Upgrade your comfort",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Elegant Table Lamp",
        subTitle: "Light up your space",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Minimalist Sofa",
        subTitle: "Relax in style",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Classic Bookshelf",
        subTitle: "Organize with elegance",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
};

const Banner = () => {
    return (
        <div className="lg:container mx-auto py-10 px-4">
            <div className="slider-container w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="relative w-full h-[400px] md:h-[500px]">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                                <p className="text-lg font-semibold text-[#6dd5ed] uppercase tracking-widest mb-2 drop-shadow">
                                    {product.subTitle}
                                </p>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                    {product.title}
                                </h3>
                                <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#029fae] to-[#6dd5ed] rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200">
                                    Shop Now <MoveRight size={22} />
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
