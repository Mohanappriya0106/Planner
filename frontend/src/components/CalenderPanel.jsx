import { useState } from "react";
import Calendar from "react-calendar";

export default function CalendarPanel() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white border rounded-md p-5">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Calendar
      </h3>

    <div className="overflow-hidden">
      <Calendar
  onChange={setValue}
  value={value}
  tileClassName={({ date }) => {
    const today = new Date().toDateString();
    if (date.toDateString() === today) {
      return "font-semibold";
    }
  }}
/>

    </div>

      <p className="text-xs text-gray-400 mt-4">
        Select a date to view revisions
      </p>
    </div>
  );
}


