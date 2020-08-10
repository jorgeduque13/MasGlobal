using System;
using System.Collections.Generic;
using System.Text;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Extensions.DependencyInjection;

namespace MasGlobal.EmployeeSalary.Test
{
    [TestClass]
    public class EmployeeServiceTest
    {
        private IEmployeeService EmployeeService;

        [TestInitialize]
        public void InitializeTest()
        {
            IServiceProvider provider = DependencyContainer.GetServiceProvider();
            EmployeeService = provider.GetService<IEmployeeService>();
        }


        [TestMethod]
        public void GetEmployeeAnnualSalaryTest()
        {
            var result = EmployeeService.GetEmployeesAnnualSalary();

            if (result.Count > 0)
                Assert.IsTrue(true);
            else
                Assert.IsFalse(true);
        }
    }
}
