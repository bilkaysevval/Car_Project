using Microsoft.EntityFrameworkCore;
using MyCar_Creation.Entities;

namespace MyCar_Creation.Context
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{
		}
		public DbSet<Category> Categories { get; set; }
      public DbSet<Vehicle> Vehicles { get; set; }
    }
}
