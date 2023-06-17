using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class FeedbackResponse
    {
        public string? Status { get; set; }
        public string? Message { get; set; }
        public string? Result { get; set; }
        public string? Adresse { get; set; }
    }
}
