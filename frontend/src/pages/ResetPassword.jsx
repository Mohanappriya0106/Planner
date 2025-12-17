import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Reset failed");
      }

      setMessage("Password reset successful. Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Invalid or expired reset link
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-50 flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-blue-600">Planner</h1>

        <p className="mt-6 text-gray-700 text-lg">
          Create a new secure password and regain access to your planner.
        </p>

        <ul className="mt-10 space-y-4 text-gray-700">
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>Your password is encrypted and stored securely.</span>
          </li>

          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>This reset link expires automatically.</span>
          </li>

          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>Choose a strong password you can remember.</span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-8">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Set New Password
          </h2>

          <p className="text-gray-600 text-center mt-2">
            Enter your new password below
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">

            <div>
              <label className="font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">
                {error}
              </p>
            )}

            {message && (
              <p className="text-green-600 text-sm text-center">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}
