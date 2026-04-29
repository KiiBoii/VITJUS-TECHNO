import { Link } from "react-router-dom";

const FOOTER_LINKS = {
    Menu: [
        { label: "Juice", to: "/menu#juice" },
        { label: "Smoothie", to: "/menu#smoothie" },
        { label: "Best Sellers", to: "/menu#bestsellers" },
    ],
    Info: [
        { label: "About Us", to: "/about" },
        { label: "Location", to: "/location" },
    ],
    Social: [
        { label: "Instagram", to: "https://instagram.com/vitjuspku" },
        { label: "TikTok", to: "https://tiktok.com/@vitjus.id" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-[#194126] border-t-[3px] border-[#91c642]/25 pt-16 pb-8 px-20">
            {/* Top grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="md:col-span-1">
                    <Link to="/" className="flex items-center">
                        <img src="/images/logo.png" alt="VitJus" className="h-10 md:h-12 object-contain"/>
                    </Link>
                    <p className="text-[#fafbf7] text-[14px] leading-[1.7] max-w-[200px]">
                        Kesegaran alami dari buah pilihan terbaik untuk hidup yang lebih
                        sehat setiap hari.
                    </p>
                </div>

                {/* Link columns */}
                {Object.entries(FOOTER_LINKS).map(([group, links]) => (
                    <div key={group}>
                        <h4 className="font-unbounded text-[11px] font-bold text-[#91c642] tracking-[2px] uppercase mb-[18px]">
                            {group}
                        </h4>
                        <ul className="list-none space-y-[10px]">
                            {links.map((link) => {
                                const isExternal = link.to.startsWith("http");
                                return (
                                    <li key={link.label}>
                                        {isExternal ? (
                                            <a
                                                href={link.to}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#fafbf7]/45 text-[14px] no-underline hover:text-[#fafbf7] transition-colors duration-200"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.to}
                                                className="text-[#fafbf7]/45 text-[14px] no-underline hover:text-[#fafbf7] transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom row */}
            <div className="border-t border-[#91c642]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[#fafbf7] text-[13px]">
                    © {new Date().getFullYear()} VitJus. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
