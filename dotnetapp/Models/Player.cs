namespace dotnetapp.Models
{
    public class Player
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Category { get; set; }
        public double BiddingPrice { get; set; }
        public bool? Sold { get; set; }
        public string? Email { get; set; }
        public long? Team_Id { get; set; }
        public Team? Team { get; set; }
    }
}
