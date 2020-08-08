using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MasGlobal.EmployeeSalary.Web.MVC.Controllers
{
    public class EmployeeController : Controller
    {      

        public ActionResult Employee()
        {
            return View();
        }
    }
}