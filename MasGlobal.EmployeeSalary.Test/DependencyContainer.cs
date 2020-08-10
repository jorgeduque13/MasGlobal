using System;
using System.Collections.Generic;
using System.Text;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure;
using MasGlobal.EmployeeSalary.Core;
using MasGlobal.EmployeeSalary.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace MasGlobal.EmployeeSalary.Test
{   
    internal static class DependencyContainer
    {
        public static IServiceProvider GetServiceProvider()
        {
            ServiceCollection services = new ServiceCollection();

            services.AddTransient<IEmployeeRepository, EmployeeRepository>();            

            services.AddTransient<IEmployeeService, EmployeeService>();            

            return services.BuildServiceProvider();
        }

    }   

}
