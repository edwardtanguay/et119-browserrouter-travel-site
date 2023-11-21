import { Employee } from "../components/Employee";
import employees from "../data/employees.json";

export const PageTeam = () => {
	return (
		<>
			{employees.map((employee) => {
				return (
					<Employee employee={employee} highlighted={false} />
				);
			})}
		</>
	);
};
