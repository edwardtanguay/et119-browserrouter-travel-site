import { NavLink, Outlet } from "react-router-dom";

export const AreaMitte = () => {
	return (
		<>
			<p className="mb-4">
				Berlin Mitte is the historic heart of the German capital,
				blending rich cultural heritage with contemporary vibrancy
				through its iconic landmarks, diverse art scene, and dynamic
				urban atmosphere.
			</p>

			<nav className="flex gap-3 mb-4">
				<NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
				<NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
				
			</nav>

			<div className="showArea">
				<Outlet />
			</div>
		</>
	);
};
