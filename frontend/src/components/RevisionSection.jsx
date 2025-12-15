import RevisionCard from "./RevisionCard";

export default function RevisionSection({ title, type }) {
  const dummyData = [
    { id: 1, topic: "Prototype Inheritance", studiedOn: "12 Dec" },
    { id: 2, topic: "Promises in JS", studiedOn: "13 Dec" },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        {title}
      </h3>

      {dummyData.length === 0 ? (
        <p className="text-sm text-gray-400">
          Nothing to revise here.
        </p>
      ) : (
        <div className="divide-y border rounded-md bg-white">
          {dummyData.map(item => (
            <RevisionCard key={item.id} item={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
}
