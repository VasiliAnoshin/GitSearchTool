using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IsracardEx.Models
{
    public class Repository
    {
        public string Url { get; set; }
        public string Owner { get; set; }

        public string Id { get; set; }

        public Repository(string _url, string _owner, string _id)
        {
            this.Id = _id;
            this.Owner = _owner;
            this.Url = _url;
        }
    }
}