import { NavLink, Routes, Route } from "react-router-dom";
import { AreaBerlin } from "./AreaBerlin";
import { AreaHamburg } from "./AreaHamburg";
import { AreaHannover } from "./AreaHannover";

export const AreaGermany = () => {
	return (
		<>
			<p className="mb-4">
				Germany, a European powerhouse, is renowned for its precision
				engineering, cultural contributions, and a harmonious blend of
				historical tradition and contemporary innovation.
			</p>
			<nav className="flex gap-3 mb-4">
				<NavLink to="hamburg">Hamburg</NavLink>
				<NavLink to="hannover">Hannover</NavLink>
				<NavLink to="berlin">Berlin</NavLink>
			</nav>
			<Routes>
				<Route path="hamburg" element={<AreaHamburg />} />
				<Route path="hannover" element={<AreaHannover />} />
				<Route path="berlin/*" element={<AreaBerlin />} />
			</Routes>
		</>
	);
};
