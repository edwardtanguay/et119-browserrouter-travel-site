import { NavLink } from "react-router-dom";

export const Page404 = () => {
	return (
		<section className="page">
			<p>
				Page not found, please <NavLink to="/">return home</NavLink>.
			</p>
		</section>
	);
};
