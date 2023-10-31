import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typewriter from 'typewriter-effect';
import Navbar from "./navbar";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Navbar></Navbar>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold p-20 text-white"> 
            <Typewriter
              options={{
                strings: ['Welcome to CRPF Log Analyzer.'],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </h1>

          <div>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 text-white rounded-lg p-2 px-4 text-xl w-40"
            >
              Log In
            </button>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="flex justify-between w-full px-4 mt-40">
          <a href="https://www.youtube.com" target="_blank" className="bg-teal-500 text-white rounded-lg p-4 text-2xl w-96">
            Centralized Log Management Server View
          </a>
          <a href="https://www.youtube.com" target="_blank" className="bg-teal-500 text-white rounded-lg p-4 text-2xl w-96">
            Log Visualization
          </a>
          <a href="https://www.youtube.com" target="_blank" className="bg-teal-500 text-white rounded-lg p-4 text-2xl w-96">
            Log Analysis
          </a>
        </div>
      )}
    </>
  );
};

export default LoginButton;
