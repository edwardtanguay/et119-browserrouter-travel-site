import { PageDestinations } from "./pages/PageDestinations";
import { PagePlanner } from "./pages/PagePlanner";
import { PageTeam } from "./pages/PageTeam";
import { PageWelcome } from "./pages/PageWelcome";

export const AppRouter = () => {
	return (
		<>
			<PageWelcome />
			<PageTeam />
			<PageDestinations />
			<PagePlanner />
		</>
	);
};
