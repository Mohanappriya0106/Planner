import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";



export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.password) {
    alert("All fields are required.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    // alert("Account created successfully!");
    navigate("/login", { replace: true });


  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};


  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-50 flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-blue-600">Planner</h1>

        <p className="mt-6 text-gray-700 text-lg">
          Create your free Planner account and start managing your day better than ever.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <p className="text-gray-700">No complex setup — start planning instantly.</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <p className="text-gray-700">Organize tasks and track progress.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Create Account</h2>
          <p className="text-gray-600 text-center mt-2">
            Sign up to start planning your day.
          </p>

          <form onSubmit={handleRegister} className="mt-10 space-y-5">

            {/* Name */}
            <div>
              <label className="font-medium text-gray-700">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-medium text-gray-700">Password</label>

              <div className="relative">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-12"
                  placeholder="********"
                />

                {/* Toggle password visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" strokeWidth="1.8"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.98 8.223C2.77 9.659 2 11.276 2 12c0 .724.77 2.341 1.98 3.777C5.88 18.246 8.828 20 12 20c1.295 0 2.536-.248 3.682-.7M9.878 9.878a3 3 0 104.243 4.243M6.228 6.228A9.966 9.966 0 0112 4c3.172 0 6.12 1.754 8.02 4.223.883 1.049 1.56 2.157 1.815 2.947M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" strokeWidth="1.8"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4 12 4c4.638 0 8.573 3.507 9.963 7.678.07.207.07.437 0 .644C20.577 16.49 16.64 20 12 20c-4.638 0-8.573-3.507-9.963-7.678z" />
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

          </form>

          <p className="text-gray-600 text-center mt-6">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-blue-600 font-medium hover:underline"
  >
    Login
  </Link>
</p>

        </div>
      </div>

    </div>
  );
}
