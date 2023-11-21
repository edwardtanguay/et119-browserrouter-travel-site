import { AppRouter } from "./AppRouter";
import { Nav } from "./components/Nav";

function App() {
	return (
		<>
			<h1 className="text-2xl mb-3">Travel Agency</h1>
			<Nav/>
			<AppRouter/>
		</>
	);
}

export default App;
