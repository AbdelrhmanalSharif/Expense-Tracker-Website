import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from './../SectionTitle/SectionTitle';

// Use import for images for reliability
import cat1 from '../../assets/categories/categories_1.png';
import cat2 from '../../assets/categories/categories_2.png';
import cat3 from '../../assets/categories/categories_3.png';
import cat4 from '../../assets/categories/categories_4.png';

const Categories = () => {
    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: cat1,
        },
        {
            title: 'Wooden Chair',
            products: '157 Products',
            image: cat2,
        },
        {
            title: 'Desk Chair',
            products: '154 Products',
            image: cat3,
        },
        {
            title: 'Park Bench',
            products: '154 Products',
            image: cat4,
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Top Categories" mb='mb-11' />
                <div className="slider-container features_slider w-full">
                    <Slider {...settings}>
                        {categories.map((category, index) => (
                            <div key={index} className="p-2">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 h-full flex flex-col">
                                    <div className="relative h-64">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={category.image}
                                            alt={category.title}
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                                            <h4 className="text-lg text-white font-semibold capitalize">{category.title}</h4>
                                            <p className="text-sm text-gray-200">{category.products}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Categories;