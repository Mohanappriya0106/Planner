import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate, Link } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" replace />;
  }


  // UI + form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // success or error text

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // backend returns { message, token, user }
      const { token } = res.data;
      if (!token) throw new Error("No token received");

      // Save token for protected routes
      localStorage.setItem("token", token);

      // Optional: save user info if returned
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      setLoading(false);
      setMessage("Login successful — redirecting...");
      // Small delay to show message, then navigate
      setTimeout(() => navigate("/dashboard", { replace: true }), 600);

    } catch (err) {
      setLoading(false);
      const errMsg = err.response?.data?.message || err.message || "Login failed";
      setMessage(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-50 flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-blue-600">Planner</h1>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Your personal daily planning assistant.  
          Stay organized, track tasks, and boost productivity.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <p className="text-gray-700">Fast and minimal interface designed for focus.</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <p className="text-gray-700">Secure login using encrypted tokens.</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <p className="text-gray-700">Plan daily tasks with ease.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-8">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-900 text-center">Login</h2>
          <p className="text-gray-600 text-center mt-2">
            Welcome back. Please enter your credentials.
          </p>

          {/* Message */}
          {message && (
            <div
              className={`mt-6 p-3 rounded text-center ${
                message.toLowerCase().includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">

            {/* Email */}
            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password + Show/Hide */}
            <div>
              <label className="font-medium text-gray-700">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-12"
                  placeholder="Enter your password"
                />

                {/* Toggle Button (eye icon) */}
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    /* Eye-off */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223C2.77 9.659 2 11.276 2 12c0 .724.77 2.341 1.98 3.777C5.88 18.246 8.828 20 12 20c1.295 0 2.536-.248 3.682-.7M9.878 9.878a3 3 0 104.243 4.243M6.228 6.228A9.966 9.966 0 0112 4c3.172 0 6.12 1.754 8.02 4.223.883 1.049 1.56 2.157 1.815 2.947M3 3l18 18" />
                    </svg>
                  ) : (
                    /* Eye */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4 12 4c4.638 0 8.573 3.507 9.963 7.678.07.207.07.437 0 .644C20.577 16.49 16.64 20 12 20c-4.638 0-8.573-3.507-9.963-7.678z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
  to="/forgot-password"
  className="text-blue-600 text-sm hover:underline"
>
  Forgot Password?
</Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="text-gray-600 text-center mt-6">
            Don’t have an account?{" "}
            <Link
  to="/register"
  className="text-blue-600 font-medium hover:underline"
>
  Sign Up
</Link>

          </p>

        </div>
      </div>

    </div>
  );
}

