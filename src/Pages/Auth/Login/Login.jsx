import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] via-[#f0f2f3] to-[#c7d2fe]">
            <div className="max-w-[420px] w-full bg-white/90 shadow-2xl rounded-2xl p-10 flex flex-col items-center border border-[#e5e7eb] backdrop-blur-md">
                <div className="w-16 h-16 bg-[#007580] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <MoveRight size={32} color="#fff" />
                </div>
                <h3 className="text-3xl text-[#272343] font-bold font-inter mb-2 capitalize tracking-tight">Welcome Back</h3>
                <p className="text-[#6b7280] mb-6 text-center">Login to your account to continue tracking your expenses.</p>
                <form
                    action="#"
                    onSubmit={submitHandle}
                    className="flex flex-col items-center w-full space-y-5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-[48px] bg-[#f0f2f3] rounded-lg pl-4 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#007580] transition"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-[48px] bg-[#f0f2f3] rounded-lg pl-4 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#007580] transition"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full h-[48px] bg-gradient-to-r from-[#007580] to-[#43c6ac] rounded-lg text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5 shadow-md hover:scale-105 transition-transform"
                    >
                        Login <MoveRight />
                    </button>
                </form>
                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-6">
                    Don't have an account?
                    <Link to={'/auth/register'} className="text-[#007580] font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;