using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure;
using MasGlobal.EmployeeSalary.Core;
using MasGlobal.EmployeeSalary.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasGlobal.EmployeeSalary.Web.MVC
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {            
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();            

            return services;
        }

        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration Configuration)
        {            
            services.AddTransient<IEmployeeService, EmployeeService>();            
            //services.AddSingleton<ISettingService>(p => new SettingService(GetSettings(Configuration)));

            return services;
        }
    }
}
