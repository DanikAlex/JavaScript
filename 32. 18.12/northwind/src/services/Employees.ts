import axios from "axios";
import employeesConfig from "../utils/EmployeesConfig";
import Employees from "../models/Employees";

class Employee{
    public async getAll(): Promise<Employees[]> {
        const response = await axios.get<Employees[]>(employeesConfig.EmployeesUrl);

        const employees = response.data;

        return employees;
    }
}

const employees = new Employee();
export default employees;