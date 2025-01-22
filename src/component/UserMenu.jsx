import React from 'react';

const UserMenu = ({logoutHandler}) => {
   
    return (
      <div className="flex flex-col gap-2 bg-[#eee] p-3 rounded-lg text-gray-900 w-48">
        
        <button 
          onClick={logoutHandler}
          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 rounded-md transition-colors text-gray-900 "
        >
          <svg 
            className="w-5 h-5 rotate-180" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    );
  };
  
  export default UserMenu;