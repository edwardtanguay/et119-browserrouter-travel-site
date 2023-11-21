import { Routes, Route, NavLink } from "react-router-dom";
import { AreaGermany } from "../areas/AreaGermany";
import { AreaFrance } from "../areas/AreaFrance";

export const PageDestinations = () => {
	return (
		<section className="page">
			<p className="mb-4">Here are all of our current destinations:</p>
			<nav className="flex gap-3 mb-4">
				<NavLink to="germany">Germany</NavLink>
				<NavLink to="france">France</NavLink>
				<NavLink to="spain">Spain</NavLink>
			</nav>
			<Routes>
				<Route path="germany/*" element={<AreaGermany />} />
				<Route path="france" element={<AreaFrance />} />
			</Routes>
		</section>
	);
};
