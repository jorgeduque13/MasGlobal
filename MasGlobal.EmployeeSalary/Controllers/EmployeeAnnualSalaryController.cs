﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using MasGlobal.EmployeeSalary.Contracts.Models;
using Microsoft.AspNetCore.Mvc;

namespace MasGlobal.EmployeeSalary.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(string id)
        {
            var result = EmployeeService.GetEmployeesAnnualSalary().FirstOrDefault(i => i.Id.ToString() == id);            
            return Ok(result);
        }

    }
}
