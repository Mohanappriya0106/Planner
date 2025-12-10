import TestimonialSection from "../components/TestimonialSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">Planner</h1>

        <div className="space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</a>
          <a 
            href="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-24 text-center">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Organize Your Day,
          <span className="text-blue-600"> Effortlessly</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A simple and elegant planner that helps you manage tasks, track progress,
          and stay productive every day.
        </p>

        <div className="mt-8">
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

    {/* Features Section */}
<section className="py-20 bg-gray-50">
  <h3 className="text-4xl font-bold text-center text-gray-900">
    Why Choose Planner?
  </h3>

  <p className="text-center text-gray-600 mt-3 mb-12 max-w-xl mx-auto">
    A clean and intuitive tool designed to help you stay organized, focused,
    and productive.
  </p>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">Task Management</h4>
      <p className="text-gray-600 mt-3">
        Easily create, update, and track your tasks for the day.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">Secure Login</h4>
      <p className="text-gray-600 mt-3">
        Your data is protected using encrypted authentication.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">Simple & Fast</h4>
      <p className="text-gray-600 mt-3">
        A minimal interface designed to keep you focused and productive.
      </p>
    </div>
  </div>
</section>


{/* How It Works Section */}
<section className="py-20">
  <h3 className="text-4xl font-bold text-center text-gray-900">
    How It Works
  </h3>

  <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

    <div className="text-center">
      <div className="text-blue-600 text-5xl font-bold">1</div>
      <h4 className="text-xl font-semibold mt-3">Create an Account</h4>
      <p className="text-gray-600 mt-2">
        Sign up using your email to get started instantly.
      </p>
    </div>

    <div className="text-center">
      <div className="text-blue-600 text-5xl font-bold">2</div>
      <h4 className="text-xl font-semibold mt-3">Login to Dashboard</h4>
      <p className="text-gray-600 mt-2">
        Access your personal dashboard with secure authentication.
      </p>
    </div>

    <div className="text-center">
      <div className="text-blue-600 text-5xl font-bold">3</div>
      <h4 className="text-xl font-semibold mt-3">Plan Your Day</h4>
      <p className="text-gray-600 mt-2">
        Add tasks, mark progress, and stay productive.
      </p>
    </div>

  </div>
</section>


{/* Revision Strategy & Audience Section */}
<section className="py-20 bg-gray-50">
  <h3 className="text-4xl font-bold text-center text-gray-900">
    Built for Smart Learning & Consistent Revision
  </h3>

  <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
    Planner is designed to help students and learners retain information better 
    with a scientifically structured revision cycle.
  </p>

  {/* Revision Cycle */}
  <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
    
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <h4 className="text-2xl font-bold text-blue-600">Revise After 2 Days</h4>
      <p className="text-gray-600 mt-3">
        Strengthens short-term memory and ensures newly learned concepts stick.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <h4 className="text-2xl font-bold text-blue-600">Revise After 1 Week</h4>
      <p className="text-gray-600 mt-3">
        Prevents forgetting curve and boosts medium-term retention.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <h4 className="text-2xl font-bold text-blue-600">Revise After 1 Month</h4>
      <p className="text-gray-600 mt-3">
        Deepens understanding and strengthens long-term memory.
      </p>
    </div>

  </div>

  {/* Audience */}
  <h3 className="text-3xl font-bold text-center text-gray-900 mt-20">
    Designed for Every Ambitious Learner
  </h3>

  <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto">
    Whether you are preparing for competitive exams or learning new skills, Planner fits your workflow.
  </p>

  <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">UPSC Aspirants</h4>
      <p className="text-gray-600 mt-2">
        Manage vast syllabus with structured revisions and daily targets.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">NEET & JEE Students</h4>
      <p className="text-gray-600 mt-2">
        Plan chapters, track progress, and strengthen recall with spaced repetition.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold text-blue-600">All Competitive Exams</h4>
      <p className="text-gray-600 mt-2">
        SSC, Banking, TNPSC, or State Exams — stay consistent with structured planning.
      </p>
    </div>

  </div>
</section>



<TestimonialSection />



{/* Footer */}
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

    <h1 className="text-2xl font-bold">Planner</h1>

    <p className="text-gray-400 mt-4 md:mt-0">
      © 2025 Planner. All rights reserved.
    </p>

  </div>
</footer>


    </div>
  );
}

