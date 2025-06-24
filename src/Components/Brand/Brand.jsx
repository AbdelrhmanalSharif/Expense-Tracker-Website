import React from "react";

const Brand = () => {
    const brands = [
        { id: 1, image: "/src/assets/brands/brand_1.png" },
        { id: 2, image: "/src/assets/brands/brand_2.png" },
        { id: 3, image: "/src/assets/brands/brand_3.png" },
        { id: 4, image: "/src/assets/brands/brand_4.png" },
        { id: 5, image: "/src/assets/brands/brand_5.png" },
        { id: 6, image: "/src/assets/brands/brand_6.png" },
        { id: 7, image: "/src/assets/brands/brand_7.png" },
    ];

    return (
        <div className="lg:container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-wide">
                Trusted by Leading Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="brand_item flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 group"
                    >
                        <img
                            className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            src={brand.image}
                            alt={`brand-${brand.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
