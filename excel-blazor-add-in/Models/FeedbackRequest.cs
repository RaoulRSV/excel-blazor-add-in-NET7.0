using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class FeedbackRequest   
    {
        public string? Rating { get; set; }
        public string? Feedback { get; set; }
        public string? Activité { get; set; }
    }
}
