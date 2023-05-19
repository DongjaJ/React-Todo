import { createContext, useState } from 'react';

export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => setDarkMode((mode) => !mode);
	const updateDarkMode = (mode) => setDarkMode(mode);

	console.log(darkMode);

	return (
		<DarkModeContext.Provider
			value={{ darkMode, toggleDarkMode, updateDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}
