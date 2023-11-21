import { NavLink } from "react-router-dom";
import { IEmployee } from "../interfaces";

interface IProps {
	employee: IEmployee;
	highlighted: boolean;
	single?: boolean;
}

export const Employee = ({ employee, highlighted, single = false }: IProps) => {
	return (
		<>
			{single ? (
				<div
					className={`flex mb-3 gap-3 ${
						highlighted ? "border-orange-500 border-4" : ""
					}`}
					key={employee.employeeID}
				>
					<img
						className="w-36 h-fit rounded"
						src={`../images/employees/employee_${employee.employeeID}.jpg`}
					/>
					<div>
						<p className="font-semibold">
							{employee.firstName} {employee.lastName}
						</p>
						<p className="text-xs">{employee.notes}</p>
					</div>
				</div>
			) : (
				<div
					className={`flex mb-3 gap-3 ${
						highlighted ? "border-orange-500 border-4" : ""
					}`}
					key={employee.employeeID}
				>
						<div className="rounded">
					<NavLink  to={`team/${employee.employeeID}`}>
					<img
					
						
						src={`../images/employees/employee_${employee.employeeID}.jpg`}
							/>
						</NavLink>
					</div>
					<div>
						<p className="font-semibold">
							{employee.firstName} {employee.lastName}
						</p>
						<p className="text-xs">{employee.notes}</p>
					</div>
				</div>
			)}
		</>
	);
};
