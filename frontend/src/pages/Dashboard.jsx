import Header from "../components/Header";
import RevisionSection from "../components/RevisionSection";
import CalendarPanel from "../components/CalenderPanel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main content */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Revisions for Today
          </h2>

          <div className="space-y-8">
            <RevisionSection title="2 Day Revision" type="2D" />
            <RevisionSection title="1 Week Revision" type="1W" />
            <RevisionSection title="1 Month Revision" type="1M" />
          </div>
        </section>

        {/* Side panel */}
        <aside>
          <CalendarPanel />
        </aside>

      </main>

      {/* Primary Action */}
      <button className="fixed bottom-8 right-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition">
        + Add Topic
      </button>
    </div>
  );
}