using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using MasGlobal.EmployeeSalary.Contracts.Models;
using Microsoft.AspNetCore.Mvc;

namespace MasGlobal.EmployeeSalary.Web.MVC.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeAnnualSalaryController : Controller
    {
        private readonly IEmployeeService EmployeeService;

        public EmployeeAnnualSalaryController(IEmployeeService employeeService)
        {
            EmployeeService = employeeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployeesAnnualSalary()
        {
            try
            {
                var result = EmployeeService.GetEmployeesAnnualSalary();
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
