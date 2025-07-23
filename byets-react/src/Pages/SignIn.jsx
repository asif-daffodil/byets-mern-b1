import { useForm } from "react-hook-form";
import LoadingBar from "../Components/LoadingBar";
import { motion } from "motion/react"

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm({
        mode: "blur",
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <LoadingBar />
            <motion.div className="flex flex-col justify-center sm:h-screen p-4" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                    <div className="text-center mb-12">
                        <a href="#"><img
                            src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 inline-block" />
                        </a>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6">
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Please enter a valid email address"
                                    }
                                })} type="text" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" onKeyUp={() => trigger("email")} />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                        message: "Password must be at least 8 characters long and contain at least one letter, one number, and one special character"
                                    }
                                })} type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" onKeyUp={()=> trigger("password")} />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                                <input {...register("cpassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password is required"
                                    },
                                    validate: (value) => {
                                        if (value !== watch("password")) {
                                            return "Passwords do not match";
                                        }
                                    }
                                })} type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" onKeyUp={() => trigger("cpassword")} />
                                {errors.cpassword && <p className="text-red-500 text-sm mt-1">{errors.cpassword.message}</p>}
                            </div>

                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="text-slate-600 ml-3 block text-sm">
                                    I accept the <a href="#;" className="text-blue-600 font-medium hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                Create an account
                            </button>
                        </div>
                        <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <a href="#;" className="text-blue-600 font-medium hover:underline ml-1">Login here</a></p>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default SignIn;