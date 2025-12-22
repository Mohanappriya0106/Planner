import Header from "../components/Header";
import { useState } from "react";

export default function AddTopic() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  // enhancement
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto px-10 py-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Add Topic
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add what you learned and schedule smart revisions automatically.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          
          {/* Topic Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topic Name
            </label>
            <input
              type="text"
              placeholder="e.g. Sliding Window Technique"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes (optional)
            </label>
            <textarea
              rows="3"
              placeholder="Key ideas, mistakes, or insights..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Learning Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Revision Preview */}
          {date && (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Upcoming Revisions
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {addDays(date, 2)} — 2 Day Revision</li>
                <li>• {addDays(date, 7)} — 1 Week Revision</li>
                <li>• {addDays(date, 30)} — 1 Month Revision</li>
              </ul>
            </div>
          )}

          {/* Action */}
          <div className="flex justify-end pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition">
              Save Topic
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

/* Utility */
function addDays(baseDate, days) {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString();
}
