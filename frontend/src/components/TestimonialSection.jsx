import { useState, useEffect, useRef } from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Aarav S.",
      role: "Product Manager",
      feedback:
        "Planner has completely transformed how I manage my daily tasks. Simple, fast, and reliable.",
    },
    {
      name: "Priya M.",
      role: "Software Engineer",
      feedback:
        "The clean UI and smooth workflow make planning enjoyable. I use it every day.",
    },
    {
      name: "Rahul K.",
      role: "Student",
      feedback:
        "Really helped me stay consistent with my study schedule. Highly recommend it.",
    },
    {
      name: "Sneha L.",
      role: "Designer",
      feedback:
        "The UI is minimal, aesthetic, and well-designed. Best planning tool I’ve used.",
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds auto-slide
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-600 mb-12">
          Real feedback from real users who rely on Planner.
        </p>

        {/* Outer container */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 border shadow-sm p-10">

          {/* Sliding Track */}
          {/* Sliding Track */}
<div
  className="flex transition-transform duration-700 ease-in-out"
  style={{
    transform: `translateX(-${index * 100}%)`,
  }}
>
  {testimonials.map((t, i) => (
    <div
      key={i}
      className="w-full flex-shrink-0 px-4 overflow-hidden" // FIXED HERE
    >
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-gray-700 italic leading-relaxed">
          “{t.feedback}”
        </p>
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900">
            {t.name}
          </h4>
          <span className="text-sm text-gray-500">{t.role}</span>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border shadow px-3 py-2 rounded-full hover:bg-gray-100"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border shadow px-3 py-2 rounded-full hover:bg-gray-100"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "bg-gray-900 w-4" : "bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
