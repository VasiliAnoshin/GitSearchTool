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
        public ActionResult saveBookmark(string repoId, string avatar, string repoName)
        {
            if (String.IsNullOrEmpty(repoId) || String.IsNullOrEmpty(avatar) || String.IsNullOrEmpty(repoName))
            {
                return Json(new { Message = "ERROR in input values.", JsonRequestBehavior.AllowGet });
            }
            if (Session[repoId] != null)
            {
                return Json(new { Message = "This Repository was bookmarked already!", JsonRequestBehavior.AllowGet });
            }
            Session[repoId] = new Models.Repository(avatar, repoName, repoId);
            return Json(new { Message = "Bookmark was saved SUCCESSFULLY!", JsonRequestBehavior.AllowGet });
        }
    }
}