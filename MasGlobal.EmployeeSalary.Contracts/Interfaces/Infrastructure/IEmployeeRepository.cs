using MasGlobal.EmployeeSalary.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure
{
    public interface IEmployeeRepository
    {
        Task<List<EmployeeDto>> GetAll();
    }
}
