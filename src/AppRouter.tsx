import { Route, Routes } from "react-router-dom";
import { PageDestinations } from "./pages/PageDestinations";
import { PagePlanner } from "./pages/PagePlanner";
import { PageTeam } from "./pages/PageTeam";
import { PageWelcome } from "./pages/PageWelcome";
import { Page404 } from "./pages/Page404";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/welcome" element={<PageWelcome />}/>
			<Route path="/team" element={<PageTeam />}>
				<Route path=":id" element={<PageTeam/>}/>
			</Route>
			<Route path="/destinations/*" element={<PageDestinations />}/>
			<Route path="/planner" element={<PagePlanner />}/>
			<Route path="/" element={<PageWelcome />}/>
			{/* <Route index element={<Navigate to="/welcome" replace />}/> */}
			<Route path="*" element={<Page404 />}/>
		</Routes>
	);
};
