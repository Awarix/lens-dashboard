import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
// import { useSearch } from "@memester-xyz/lens-use"

// const { data } = useSearch("stani");

export default function Navbar() {
  return (
    <header className="bg-white border-b-2 border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-emerald-500 lg:border-none">
          <div style={{display:'flex', justifyContent:'space-between', padding:'1rem 2rem'}} className="flex space-between">
            <Link href="/">
              <span className="text-lg text-emerald-600 font-medium">
                🌱 Lensomania 
              </span>
            </Link>
            <div>
              <SearchInput 
              placeholder='Start searching for a profile'
              // value={username}
              // onChange={e => setUsername(e.target.value)}
              type="text"
              />
            </div>

            {/* wallet ? my profile : connect */}
              <button>Connect</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
