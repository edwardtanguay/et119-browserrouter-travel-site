import { IEmployee } from "../interfaces";

interface IProps {
	employee: IEmployee;
}

export const Employee = ({employee} :IProps) => {
	return (
		<div className="flex mb-3 gap-3" key={employee.employeeID}>
			<img
				className="w-24 h-fit rounded"
				src={`images/employees/employee_${employee.employeeID}.jpg`}
			/>
			<div>
				<p className="font-semibold">
					{employee.firstName} {employee.lastName}
				</p>
				<p className="text-xs">{employee.notes}</p>
			</div>
		</div>
	);
};
