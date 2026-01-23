import React from 'react';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-8 flex items-center bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
            aria-label="Toggle Dark Mode"
        >
            <div
                className={`w-6 h-6 bg-white dark:bg-indigo-400 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                    }`}
            >
                {theme === 'light' ? (
                    <i className="fas fa-sun text-amber-500 text-xs text-[10px]"></i>
                ) : (
                    <i className="fas fa-moon text-indigo-900 text-xs text-[10px]"></i>
                )}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <i className={`fas fa-sun text-[10px] ${theme === 'dark' ? 'text-slate-400 opacity-50' : 'opacity-0'}`}></i>
                <i className={`fas fa-moon text-[10px] ${theme === 'light' ? 'text-slate-400 opacity-50' : 'opacity-0'}`}></i>
            </div>
        </button>
    );
};

export default ThemeToggle;
