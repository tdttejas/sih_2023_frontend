// Navbar.js
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
     const { logout } = useAuth0();
  return (
    <div className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <span className="text-white font-bold text-xl">CRPF Log Analyzer Dashboard</span>
      </div>
      <div>
         <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="bg-red-800 text-white rounded-lg p-2 px-4"
      >
        Log Out
      </button>
      </div>
    </div>
  );
};

export default Navbar;
