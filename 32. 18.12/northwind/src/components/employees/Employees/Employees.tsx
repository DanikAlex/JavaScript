import "./Employees.css";
import { useEffect, useState } from "react";
import Employee from "../../../models/Employees";
import employeeServices from "../../../services/Employees";

function Employees(): JSX.Element {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        employeeServices.getAll()
        .then(employeesFromServer => setEmployees(employeesFromServer))
        .catch(err => alert(err));
    }, [])

    return (
        <div className="Employees">
			<table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>title</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.firstName} {employee.lastName}</td>
                            <td>{employee.title}</td>
                            <td><img src={employee.imageUrl} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;
