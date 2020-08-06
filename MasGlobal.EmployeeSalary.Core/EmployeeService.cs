using MasGlobal.EmployeeSalary.Contracts.Dtos;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure;
using MasGlobal.EmployeeSalary.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MasGlobal.EmployeeSalary.Core
{
    public class EmployeeService : IEmployeeService
    {
        IEmployeeRepository EmployeeRepository { get; set; }

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            EmployeeRepository = employeeRepository;   
        }

        public List<Employee> GetEmployeesAnnualSalary(List<int> employeeids)
        {            
            var Employees = EmployeeRepository.GetAll().Result;
            var result = EmployeeFactory(Employees, employeeids);
            return result;
        }
        
        /// <summary>
        /// Employee Factory method
        /// </summary>
        /// <param name="employeeDto"></param>
        /// <returns>List of Employees with annual salary</returns>
        private List<Employee> EmployeeFactory(List<EmployeeDto> lstemployeeDto, List<int> lstids)
        {
            List<Employee> lstEmployee = new List<Employee>();            
            Employee employee = new Employee();
                      
            foreach (var item in lstemployeeDto)
            {
                foreach (var id in lstids)
                {
                    if (item.Id == id)
                    {
                        employee = new Employee();

                        employee.Id = item.Id;
                        employee.Name = item.Name;
                        employee.ContractTypeName = item.ContractTypeName;
                        employee.RoleId = item.RoleId;
                        employee.RoleName = item.RoleName;
                        employee.RoleDescription = item.RoleDescription;
                        employee.HourlySalary = item.HourlySalary;
                        employee.MonthlySalary = item.MonthlySalary;
                        employee.AnnualSalary = GetAnnualSalary(item.ContractTypeName, item.HourlySalary, item.MonthlySalary);

                        lstEmployee.Add(employee);
                    }
                }                
            }

            return lstEmployee;
        }

        /// <summary>
        /// /Method to calculate the annual salary according to the contract type.
        /// </summary>
        /// <param name="contractTypeName"></param>
        /// <param name="hourlySalary"></param>
        /// <param name="monthlySalary"></param>
        /// <returns>AnnualSalary</returns>
        private double GetAnnualSalary(string contractTypeName, double hourlySalary, double monthlySalary)
        {
            double annualSalary = 0;
            if (contractTypeName.ToUpper() == "HOURLYSALARYEMPLOYEE")
                annualSalary = 120 * hourlySalary * 12;
            if (contractTypeName.ToUpper() == "MONTHLYSALARYEMPLOYEE")
                annualSalary = monthlySalary * 12;
            return annualSalary;
        }
    }
}
