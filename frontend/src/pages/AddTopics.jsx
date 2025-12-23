// import Header from "../components/Header";
// import { useState } from "react";

// export default function AddTopic() {
//   const [topic, setTopic] = useState("");
//   const [notes, setNotes] = useState("");
//   const [date, setDate] = useState("");

//   // enhancement
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="max-w-3xl mx-auto px-10 py-10">
//         {/* Page Title */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold text-gray-800">
//             Add Topic
//           </h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Add what you learned and schedule smart revisions automatically.
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          
//           {/* Topic Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Topic Name
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Sliding Window Technique"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Notes */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Notes (optional)
//             </label>
//             <textarea
//               rows="3"
//               placeholder="Key ideas, mistakes, or insights..."
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Learning Date
//             </label>
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Revision Preview */}
//           {date && (
//             <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
//               <p className="text-sm font-medium text-gray-700 mb-2">
//                 Upcoming Revisions
//               </p>
//               <ul className="text-sm text-gray-600 space-y-1">
//                 <li>• {addDays(date, 2)} — 2 Day Revision</li>
//                 <li>• {addDays(date, 7)} — 1 Week Revision</li>
//                 <li>• {addDays(date, 30)} — 1 Month Revision</li>
//               </ul>
//             </div>
//           )}

//           {/* Action */}
//           <div className="flex justify-end pt-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition">
//               Save Topic
//             </button>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }

// /* Utility */
// function addDays(baseDate, days) {
//   const d = new Date(baseDate);
//   d.setDate(d.getDate() + days);
//   return d.toLocaleDateString();
// }

import Header from "../components/Header";
import { useMemo, useState } from "react";

export default function AddTopic() {
  const [form, setForm] = useState({
    topic: "",
    notes: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ---------------- Handlers ---------------- */

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};

    if (!form.topic.trim()) {
      newErrors.topic = "Topic name is required";
    } else if (form.topic.length < 3) {
      newErrors.topic = "Topic must be at least 3 characters";
    }

    if (!form.date) {
      newErrors.date = "Learning date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    setLoading(false);
    setSuccess(true);

    setForm({
      topic: "",
      notes: "",
      date: "",
    });
  }

  /* ---------------- Derived Data ---------------- */

  const revisions = useMemo(() => {
    if (!form.date) return [];

    return [
      { label: "2 Day Revision", date: addDays(form.date, 2) },
      { label: "1 Week Revision", date: addDays(form.date, 7) },
      { label: "1 Month Revision", date: addDays(form.date, 30) },
    ];
  }, [form.date]);

  const isFormValid = form.topic.trim() && form.date;

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto px-10 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Add Topic
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add what you learned and schedule smart revisions automatically.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-sm p-8 space-y-6"
          noValidate
        >
          {/* Topic */}
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Topic Name *
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              maxLength={100}
              placeholder="e.g. Sliding Window Technique"
              value={form.topic}
              onChange={handleChange}
              className={`w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:outline-none
                ${
                  errors.topic
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
            />
            {errors.topic && (
              <p className="text-xs text-red-500 mt-1">
                {errors.topic}
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Key ideas, mistakes, or insights..."
              value={form.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Learning Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className={`w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:outline-none
                ${
                  errors.date
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
            />
            {errors.date && (
              <p className="text-xs text-red-500 mt-1">
                {errors.date}
              </p>
            )}
          </div>

          {/* Revision Preview */}
          {revisions.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Upcoming Revisions
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {revisions.map((r) => (
                  <li key={r.label}>
                    • {r.date} — {r.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between items-center pt-4">
            {success && (
              <p className="text-sm text-green-600">
                Topic saved successfully
              </p>
            )}

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-md text-sm font-medium transition"
            >
              {loading ? "Saving..." : "Save Topic"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

/* ---------------- Utility ---------------- */

function addDays(baseDate, days) {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + days);
  return new Intl.DateTimeFormat("en-IN").format(d);
}

