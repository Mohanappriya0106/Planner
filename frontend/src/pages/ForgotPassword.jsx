export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-blue-50 flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-blue-600">Planner</h1>

        <p className="mt-6 text-gray-700 text-lg">
          Forgot your password?  
          No worries — we will help you recover access quickly.
        </p>

        <ul className="mt-10 space-y-4 text-gray-700">
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>Secure password recovery process.</span>
          </li>

          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>Email verification ensures safety.</span>
          </li>

          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">•</span>
            <span>Reset password in just a few minutes.</span>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-8">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Reset Password
          </h2>

          <p className="text-gray-600 text-center mt-2">
            Enter your registered email and we will send instructions.
          </p>

          <form className="mt-10 space-y-5">

            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>

          </form>

          <p className="text-gray-600 text-center mt-6">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}
