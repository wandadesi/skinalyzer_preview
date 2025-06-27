import React, { useRef, useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 rounded-b-xl transition-all duration-300 bg-transparent backdrop-blur-none hover:bg-white/20 hover:backdrop-blur-md shadow-none hover:shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-flower text-white transition-colors duration-300"
          >
            <circle cx="12" cy="12" r="2" />
            <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
            <path d="M12 7.5V9" />
            <path d="M7.5 12H9" />
            <path d="M16.5 12H15" />
            <path d="M12 16.5V15" />
            <path d="m8 8 1.88 1.88" />
            <path d="M14.12 9.88 16 8" />
            <path d="m8 16 1.88-1.88" />
            <path d="M14.12 14.12 16 16" />
          </svg>
          <span className="text-white! text-md italic transition-colors duration-300">
            Skinalyzer
          </span>
        </a>

        <div className="flex items-center space-x-5">
          <a
            href="/History"
            className="font-montserrat text-base text-white! transition"
          >
            History
          </a>

          <a
            href="/Login"
            className="text-sm border border-white text-white! bg-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-[#7a422c] transition"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
