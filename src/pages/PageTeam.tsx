import { useParams } from "react-router-dom";
import { Employee } from "../components/Employee";
import employees from "../data/employees.json";

export const PageTeam = () => {
	const { id } = useParams();
	return (
		<>
			{!id ? (
				<>
					{employees.map((employee) => {
						return (
							<Employee
								employee={employee}
								highlighted={false}
								key={employee.employeeID}
							/>
						);
					})}
				</>
			) : (
					<p>single employee with id {id}</p>
			)}
		</>
	);
};
