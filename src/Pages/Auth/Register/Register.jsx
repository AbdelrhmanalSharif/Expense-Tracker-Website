import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] via-[#f0f2f3] to-[#c7d2fe]">
            <div className="max-w-[420px] w-full bg-white/90 shadow-2xl rounded-2xl p-10 flex flex-col items-center border border-[#e0e7ff]">
                <h3 className="text-4xl text-[#272343] font-bold font-inter mb-2 capitalize tracking-tight">
                    Create Account
                </h3>
                <p className="text-[#6b7280] mb-7 text-center">
                    Join us and manage your expenses easily!
                </p>
                <form
                    action="#"
                    onSubmit={submitHandle}
                    className="flex flex-col items-center w-full space-y-5"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full h-[48px] bg-[#f0f2f3] rounded-lg px-4 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#007580] transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full h-[48px] bg-[#f0f2f3] rounded-lg px-4 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#007580] transition"
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="w-full h-[48px] bg-[#f0f2f3] rounded-lg px-4 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#007580] transition"
                    />
                    <button
                        type="submit"
                        className="w-full h-[48px] bg-gradient-to-r from-[#007580] to-[#43c6ac] rounded-lg text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-2.5 shadow-md hover:scale-105 transition-transform"
                    >
                        Register <MoveRight />
                    </button>
                </form>
                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-6">
                    Already have an account?
                    <Link
                        to={'/auth/login'}
                        className="text-[#007580] underline hover:text-[#43c6ac] transition"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;