import { Link } from "react-router-dom";
import BG from "../assets/login.jpg";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  emailValidation,
  inputValidation,
  passwordValidation,
} from "../middleware/validate";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checked: false,
  });
  useEffect(() => {
    document.title = "Login";

    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // change the value of checked to true if the checkbox is checked
    if (e.target.type === "checkbox") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(form);

    if (!emailValidation(form?.email)) {
      toast.error("Invalid email address");
      return;
    } else if (!passwordValidation(form?.password)) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (
      inputValidation(form?.email) &&
      inputValidation(form?.password)
    ) {
      toast.error("All fields are required");
      return;
    }
    // if all the conditions are met, show a success message

    toast.success("Logged in successfully");
  };

  return (
    <div>
      <main className="container mx-auto grid grid-cols-2 gap-4 justify-center items-center min-h-screen">
        {/* insert image in first section and form in second one */}
        <section className="p-10 rounded-lg flex flex-col justify-center items-center text-center">
          <img
            src={BG}
            alt="login"
            className="w-full rounded-md"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </section>{" "}
        <section
          className="p-10 rounded-lg flex flex-col justify-center items-center text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "50%",
          }}
        >
          <h1 className="text-3xl font-semibold mb-5">Welcome Back!</h1>
          <form
            className="flex flex-col gap-4 w-full"
            autoComplete="disabled"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500 w-full"
              autoComplete="disabled"
              value={form?.email}
              onChange={onChange}
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500 w-full"
              autoComplete="disabled"
              value={form?.password}
              onChange={onChange}
              name="password"
            />
            <div className="flex justify-between items-center">
              <label
                htmlFor="remember"
                className="text-sm flex justify-center items-center transition-all duration-300 ease-in-out h-5 rounded-md cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="checked:accent-green-500 rounded-md mr-2 my-1 focus:outline-none transition-all duration-300 ease-in-out hover:accent-green-500"
                  checked={form?.checked}
                  onChange={onChange}
                  name="checked"
                />
                <span>Remember me</span>
              </label>
              <Link to="/forget" className="text-blue-500 text-sm">
                Forgot password?
              </Link>
            </div>
            <button className="bg-blue-500 text-white p-3 rounded-md">
              Login
            </button>
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
