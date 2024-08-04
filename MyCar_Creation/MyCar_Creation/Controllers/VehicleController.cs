using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCar_Creation.Context;
using MyCar_Creation.Dtos;
using MyCar_Creation.Entities;

namespace MyCar_Creation.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VehicleController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		public VehicleController(ApplicationDbContext context)
		{
			_context = context;
		}
		[HttpPost("CreateVehicle")]
		public ActionResult CreateVehicle(VehicleDTO model)
		{
			Vehicle vehicle = new()
			{
				Brand = model.Brand,
				Model	= model.Model,
				ModelYear = model.ModelYear,
				Price = model.Price,
				Description = model.Description,
				CategoryId = model.CategoryId,
			};
			_context.Vehicles.Add(vehicle);
			if (_context.SaveChanges() > 0)
			{
				return Ok();
			}
			return NotFound();
		}

		[HttpDelete("DeleteVehicle/{vehicleId}")]
		public ActionResult DeleteVehicle([FromRoute] Guid vehicleId)
		{
			Vehicle vehicle = _context.Vehicles.Find(vehicleId);
			if (vehicle != null)
			{
				_context.Vehicles.Remove(vehicle);
				if (_context.SaveChanges() > 0)
				{
					return Ok();
				}
			}
			return NotFound();
		}
		[HttpGet("GetAllVehicle")]
		public ActionResult GetAllVehicle()
		{
			List<Vehicle> vehicles = _context.Vehicles.ToList();
			if (vehicles is not null)
			{
				return Ok(vehicles);
			}
			return NotFound();
		}
		[HttpPut("UpdateVehicle/{vehicleId}")]
		public ActionResult UpdateVehicle([FromRoute] Guid vehicleId, VehicleDTO model)
		{
			Vehicle vehicle = _context.Vehicles.Find(vehicleId);
			if (vehicle is not null)
			{
				vehicle.Price = model.Price;
				vehicle.Description = model.Description;
				vehicle.CategoryId = model.CategoryId;
				vehicle.Brand = model.Brand;
				vehicle.Model = model.Model;
				vehicle.ModelYear = model.ModelYear;
				if(_context.SaveChanges() > 0)
				{
					return Ok(model);
				}
			}
			return NotFound();
		}
		[HttpGet("Vehicle/{vehicleId}")]
		public ActionResult GetVehicleById([FromRoute]Guid vehicleId) 
		{
			Vehicle vehicle = _context.Vehicles.Find(vehicleId);
			if (vehicle is not null)
			{
				return Ok(vehicle);
			}
			return NotFound();
		}
		
	}
}
