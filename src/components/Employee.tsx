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
					className={`flex flex-col mb-3 gap-3 ${
						highlighted ? "border-orange-500 border-4" : ""
					}`}
					key={employee.employeeID}
				>
					<img
						className="w-48 self-center h-fit rounded"
						src={`../images/employees/employee_${employee.employeeID}.jpg`}
					/>
					<div>
						<p className="font-semibold text-xl">
							{employee.firstName} {employee.lastName}
						</p>
						<p className="mb-2">{employee.address.phone}</p>
						<p className="text-xl">{employee.notes}</p>
					</div>
				</div>
			) : (
				<div
					className={`flex mb-3 gap-3 ${
						highlighted ? "border-orange-500 border-4" : ""
					}`}
					key={employee.employeeID}
				>
					<img
						className="w-20 h-fit"
						src={`../images/employees/employee_${employee.employeeID}.jpg`}
					/>
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
