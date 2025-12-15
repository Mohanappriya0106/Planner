export default function Header() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        Planner
      </h1>

      <div className="flex items-center gap-6">
        <span className="text-gray-600 text-sm">
          Welcome back
        </span>

        <button className="text-gray-700 hover:text-blue-600 font-medium">
          Logout
        </button>
      </div>
    </nav>
  );
}


