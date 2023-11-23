import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
	return (
		<section className="page">
			<p>
				Welcome to our site. If you need help finding a travel
				destination, contact our <NavLink to="/team">team</NavLink>. If you are interested in a vacation in Africa, please contact <NavLink to="/team/6">Michael</NavLink>.
			</p>
			<p>
				There is currently an event happening at <NavLink to="/destinations/germany/berlin/mitte/checkpointCharlie">Checkpoint Charlie</NavLink>.
			</p>
		</section>
	);
};
