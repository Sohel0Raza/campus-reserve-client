import Lottie from "lottie-react";
import animationData from "../../../public/signup.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const singUpUser = result.user;
        upDateUser(singUpUser, name, photo);
        console.log(singUpUser);
        form.reset();
        if (singUpUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "SingUp SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        form.reset();
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${error}`,
          });
        }
      });

    const upDateUser = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {})
        .catch((error) => {
          form.reset();
          if (error) {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: `${error}`,
            });
          }
        });
    };
  };
  return (
    <div className="md:flex items-center bg-slate-100 p-5 md:px-10 pt-28">
      <div className="md:w-1/2 md:ml-20 p-5 md:p-0">
        <Lottie
          className="w-full"
          animationData={animationData}
          loop={true}
        ></Lottie>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-inner md:py-5 shadow-black bg-base-100 md:1/2 md:ml-10">
        <form onSubmit={handleSingUp} className="card-body">
          <h1 className="text-4xl font-bold">SingUp now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <input className="btn-secondary" type="submit" value="Sing Up" />
          </div>
          <p className="mt-5">
            Have an account CampusReserve?{" "}
            <Link to="/login">
              <span className="font-bold text-orange-600">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;