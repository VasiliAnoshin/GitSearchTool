using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IsracardEx.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult saveBookmark(string userId, string avatar, string repoName)
        {

            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }
    }
}