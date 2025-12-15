export default function RevisionCard({ item, type }) {
  const badgeStyle = {
    "2D": "text-blue-600 bg-blue-50",
    "1W": "text-yellow-600 bg-yellow-50",
    "1M": "text-purple-600 bg-purple-50",
  };

  return (
    <div className="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition">
      <div>
        <p className="font-medium text-gray-800">
          {item.topic}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Studied on {item.studiedOn}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className={`text-xs px-2 py-1 rounded ${badgeStyle[type]}`}>
          {type}
        </span>

        <button className="text-sm text-blue-600 hover:underline">
          Mark done
        </button>
      </div>
    </div>
  );
}



