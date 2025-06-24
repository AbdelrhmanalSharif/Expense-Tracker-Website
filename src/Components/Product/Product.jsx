import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

// Animation helper for fade-in and scale
const fadeInUp = {
    initial: { opacity: 0, transform: "translateY(30px) scale(0.95)" },
    animate: { opacity: 1, transform: "translateY(0) scale(1)", transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }
};

const Product = () => {
    const [active, setActive] = useState({
        id: 0,
        product: "all",
    });

    const [clicked, setClicked] = useState(null);
    const [filterAnimating, setFilterAnimating] = useState(false);

    const productTitle = [
        { id: 0, title: "all", product: "all" },
        { id: 1, title: "newest", product: "newest" },
        { id: 2, title: "trending", product: "trending" },
        { id: 3, title: "best seller", product: "best_seller" },
    ];

    const products = [
        { title: "library stool", status: "New", price: "$250", image: "/Expense-Tracker-Website/products/product_1.png", currentPrice: "$200", product: "newest" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_2.png", product: "newest" },
        { title: "library stool", status: "New", price: "$250", image: "/Expense-Tracker-Website/products/product_3.png", currentPrice: "$200", product: "newest" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_4.png", product: "newest" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_5.png", product: "trending" },
        { title: "library stool", status: "New", price: "$250", image: "/Expense-Tracker-Website/products/product_6.png", currentPrice: "$200", product: "trending" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_7.png", product: "trending" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_8.png", product: "trending" },
        { title: "library stool", status: "New", price: "$250", image: "/Expense-Tracker-Website/products/product_1.png", currentPrice: "$200", product: "best_seller" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_2.png", product: "best_seller" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_3.png", product: "best_seller" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_5.png", product: "best_seller" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_6.png", product: "featured" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_7.png", product: "featured" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_8.png", product: "featured" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_1.png", product: "featured" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_2.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_3.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_4.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_5.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_6.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_7.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_8.png", product: "all" },
        { title: "library stool Chair", status: "Sales", price: "$250", image: "/Expense-Tracker-Website/products/product_1.png", product: "all" },
    ];

    const productFilter =
        active.product === "all"
            ? products
            : products.filter((product) => product.product === active.product);

    // Animation for product cards
    const getCardStyle = (index) => ({
        ...fadeInUp.initial,
        animation: `fadeInUp 0.5s ${index * 0.07 + 0.1}s both cubic-bezier(.4,0,.2,1)`,
        ...(clicked === index && {
            transform: "scale(1.05)",
            boxShadow: "0 8px 32px 0 rgba(0, 118, 128, 0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
        }),
    });

    // Animation for filter change
    const filterAnimationStyle = filterAnimating
        ? { animation: "fadeFilter 0.4s" }
        : {};

    const handleFilterClick = (title) => {
        setFilterAnimating(true);
        setActive({
            id: title?.id,
            product: title?.product,
        });
        setTimeout(() => setFilterAnimating(false), 400);
    };

    return (
        <div className="lg:container mx-auto">
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(30px) scale(0.95);}
                    100% { opacity: 1; transform: translateY(0) scale(1);}
                }
                @keyframes fadeFilter {
                    0% { opacity: 0; transform: scale(0.97);}
                    100% { opacity: 1; transform: scale(1);}
                }
                .tab-animate {
                    transition: color 0.3s, border-bottom 0.3s;
                }
                .tab-animate.active {
                    color: #007580 !important;
                    border-bottom: 2px solid #007580;
                }
                `}
            </style>
            <div className="flex flex-col items-center justify-center">
                <SectionTitle
                    title={"our product"}
                    textAlign={"center"}
                    mb={"mb-5"}
                ></SectionTitle>

                <div className="flex items-center justify-center gap-6 mb-11">
                    {productTitle?.map((title, indx) => (
                        <button
                            key={title?.id}
                            onClick={() => handleFilterClick(title)}
                            className={`tab-animate text-base font-black uppercase font-inter cursor-pointer ${
                                active?.id === indx
                                    ? "active text-[#272343]"
                                    : "text-[#9a9caa]"
                            }`}
                            style={{
                                transition: "color 0.3s, border-bottom 0.3s",
                            }}
                        >
                            {title?.title}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6"
                style={filterAnimationStyle}
            >
                {productFilter?.map((product, index) => (
                    <div
                        key={index}
                        className="p-4 cursor-pointer"
                        style={getCardStyle(index)}
                        onMouseDown={() => setClicked(index)}
                        onMouseUp={() => setClicked(null)}
                        onMouseLeave={() => setClicked(null)}
                    >
                        <div className="feature_image mb-4 relative group">
                            <img
                                className="w-full max-h-[312px] rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                                src={product?.image}
                                alt={product?.title}
                            />
                            {product?.status && (
                                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg animate-bounce">
                                    <button className="text-sm font-inter font-normal">
                                        {product?.status}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="feature_content">
                            <div className="flex items-center justify-between">
                                <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                                    {product?.title}
                                </h4>
                                <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                    <ShoppingCart size="1.5rem" color="#fff" />
                                </span>
                            </div>
                            <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                {product?.price}
                                {product?.currentPrice && (
                                    <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">
                                        {product?.currentPrice}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
