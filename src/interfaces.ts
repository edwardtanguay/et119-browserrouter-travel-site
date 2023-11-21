export interface IEmployee {
	employeeID: number;
	firstName: string;
	lastName: string;
	notes: string;
	address: {
		phone: string;
	}
}