using MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Microsoft.Extensions.DependencyInjection;

namespace MasGlobal.EmployeeSalary.Test
{
    [TestClass]
    public class EmployeeRepositoryTest
    {

        private IEmployeeRepository EmployeeRepository;

        [TestInitialize]
        public void InitializeTest()
        {
            IServiceProvider provider = DependencyContainer.GetServiceProvider();
            EmployeeRepository = provider.GetService<IEmployeeRepository>();
        }

        [TestMethod]
        public void GetAllFromRepositoryTest()
        {
            var result = EmployeeRepository.GetAll().Result;

            if (result.Count > 0)
                Assert.IsTrue(true);
            else
                Assert.IsFalse(true);
        }
    }
}
