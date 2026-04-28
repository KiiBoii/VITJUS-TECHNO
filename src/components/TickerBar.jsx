const ITEMS = [
  "100% Fresh Fruit",
  "No Preservatives",
  "Made To Order",
  "Cold Pressed",
  "Vitamin Rich",
  "Zero Additives",
  "Handcrafted Daily",
];

const TickerBar = () => {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden bg-[#f9a519] border-t-[3px] border-b-[3px] border-[#194126] py-[10px]">
      <div
        className="flex w-max"
        style={{ animation: "ticker 18s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 whitespace-nowrap font-unbounded text-[12px] font-bold text-[#194126] tracking-widest uppercase"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#194126] inline-block" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
