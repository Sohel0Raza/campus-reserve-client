import Lottie from "lottie-react";
import animationData from "../../../public/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { singIn, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const loginUser = result.user;
                form.reset()
                if (loginUser) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                form.reset()
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: `${error}`
                    })
                }
            })

    }

    const handleLoginGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                if (loginUser) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: `${error}`
                    })
                }
            })
    }
    return (
        <div className="md:flex items-center p-5 md:px-10 pt-24">
            <div className="md:w-1/2 md:ml-10 p-5 md:p-0">
                <Lottie
                    className="w-full"
                    animationData={animationData}
                    loop={true}
                ></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:1/2 md:ml-10">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className=" btn-secondary"
                            type="submit"
                            value="Login"
                        />
                    </div>
                    <hr className="mt-5 " />
                    <p className="text-center font-bold">or</p>
                    <div className="text-center">
                        <button onClick={handleLoginGoogle} className="shadow-2xl border-2 mr-5 hover:border-[#953333] rounded-full p-2"><FcGoogle className="text-2xl"></FcGoogle></button>
                        <button  className="shadow-2xl border-2 hover:border-[#953333] rounded-full p-2"><BsFacebook className="text-2xl"></BsFacebook></button>
                    </div>
                    <p className="mt-5">New to CampusReserve? please <Link to="/singup"><span className="font-bold text-orange-600">Sing Up</span></Link></p>
                </form>
            </div>
        </div>
    );
};
export default Login;