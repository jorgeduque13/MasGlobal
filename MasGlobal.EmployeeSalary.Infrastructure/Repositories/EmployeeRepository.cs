using MasGlobal.EmployeeSalary.Contracts.Dtos;
using MasGlobal.EmployeeSalary.Contracts.Interfaces.Infrastructure;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MasGlobal.EmployeeSalary.Infrastructure.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<List<EmployeeDto>> GetAll()
        {           
            //MasGlobal API request
            var client = new RestClient("http://masglobaltestapi.azurewebsites.net/api/Employees");
            var request = new RestRequest(Method.GET);
            
            IRestResponse response = client.Execute(request);

            var result = JsonConvert.DeserializeObject<List<EmployeeDto>>(response.Content);
            if (result != null && result.Count > 0)
                return result;
            else
                return new List<EmployeeDto>();
        }
    }
}
