import { IEmployee } from "../interfaces";

export const Employee = ({ employee, highlighted }: {employee: IEmployee, highlighted: boolean}) => {
	return (
		<div className={`flex mb-3 gap-3 ${highlighted ? 'border-orange-500 border-4' : ''}`} key={employee.employeeID}>
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
