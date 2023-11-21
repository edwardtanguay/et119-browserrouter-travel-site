import { NavLink, Routes, Route } from "react-router-dom";
import { AreaBrandenburgGate } from "./AreaBrandenburgGate";
import { AreaCheckpointCharlie } from "./AreaCheckpointCharlie";
import { AreaSteglitz } from "./AreaSteglitz";
import { AreaTiergarten } from "./AreaTiergarten";
import { AreaUnterDenLinden } from "./AreaUnterDenLinden";
import { AreaMitte } from "./AreaMitte";

export const AreaBerlin = () => {
	return (
		<>
			<p className="mb-4">
				Berlin, the capital of Germany, is a dynamic metropolis that
				seamlessly blends a tumultuous history with contemporary art,
				vibrant nightlife, and a progressive cultural scene. For more information on Berlin, contact <NavLink to="/team/8">Laura</NavLink>.
			</p>

			<nav className="flex gap-3 mb-4">
				<NavLink to="tiergarten">Tiergarten</NavLink>
				<NavLink to="steglitz">Steglitz</NavLink>
				<NavLink to="mitte">Mitte</NavLink>
			</nav>
			<Routes>
				<Route path="tiergarten" element={<AreaTiergarten />} />
				<Route path="steglitz" element={<AreaSteglitz />} />
				<Route path="/mitte/" element={<AreaMitte />}>
					<Route
						path="/mitte/checkpointCharlie"
						element={<AreaCheckpointCharlie />}
					/>
					<Route
						path="/mitte/brandenburgGate"
						element={<AreaBrandenburgGate />}
					/>
					<Route
						path="/mitte/unterDenLinden"
						element={<AreaUnterDenLinden />}
					/>
				</Route>
			</Routes>
		</>
	);
};
