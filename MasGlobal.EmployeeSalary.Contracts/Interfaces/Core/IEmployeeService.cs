using MasGlobal.EmployeeSalary.Contracts.Dtos;
using MasGlobal.EmployeeSalary.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MasGlobal.EmployeeSalary.Contracts.Interfaces.Core
{
    public interface IEmployeeService
    {
        List<Employee> GetEmployeesAnnualSalary(List<int> employeeids);
    }
}
