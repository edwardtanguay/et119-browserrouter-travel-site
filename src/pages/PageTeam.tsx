import { useParams } from "react-router-dom";
import { Employee } from "../components/Employee";
import employees from "../data/employees.json";
import { IEmployee } from "../interfaces";

export const PageTeam = () => {
	const { id } = useParams();
	let employee = {} as IEmployee;
	if (id) {
		employee = employees.find(
			(m) => m.employeeID === Number(id)
		) as IEmployee;
	}
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
				<>
					{employee ? (
						<Employee employee={employee} highlighted={false} single={true} />
					) : (
						<p>Employee not found.</p>
					)}
				</>
			)}
		</>
	);
};
