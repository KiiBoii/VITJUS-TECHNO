const WORDS = [
  "Fresh",
  "Healthy",
  "Natural",
  "Delicious",
  "Organic",
  "Pure",
  "Vibrant",
];

const MarqueeStrip = () => {
  const doubled = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="bg-[#91c642] border-t-[4px] border-b-[4px] border-[#194126] py-[18px] overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: "ticker 22s linear infinite" }}
      >
        {doubled.map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-10 font-black text-[20px] whitespace-nowrap"
          >
            {/* Star */}
            <span className="text-[#194126] opacity-80">★</span>

            {/* Word */}
            <span
              className={
                i % 2 === 0
                  ? "text-[#194126]"
                  : "text-[#fff7d6]"
              }
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;