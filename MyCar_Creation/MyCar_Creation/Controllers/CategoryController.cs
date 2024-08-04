using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCar_Creation.Context;
using MyCar_Creation.Dtos;
using MyCar_Creation.Entities;
using System.Data.Entity;

namespace MyCar_Creation.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CategoryController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		public CategoryController(ApplicationDbContext context)
		{
			_context = context;
		}

		[HttpPost]
		public ActionResult CreateCategory(CategoryDTO model)
		{
			Category category = new()
			{
				CategoryName = model.CategoryName,
				CategoryDescription = model.CategoryDescription,
			}; 
			_context.Categories.Add(category);
			if(_context.SaveChanges() > 0)
			{
				return Ok();
			}
			return NotFound();
		}

		[HttpDelete("{categoryId}")]
		public ActionResult DeleteCategory([FromRoute]Guid categoryId)
		{
			Category category = _context.Categories.Find(categoryId);
			if (category != null)
			{
				_context.Categories.Remove(category);
				if (_context.SaveChanges() > 0)
				{
					return Ok();
				}
			}
			return NotFound();
		}
		[HttpGet]
		public ActionResult GetAllCategory(Guid categoryId)
		{
			List<Category> categories = _context.Categories.ToList();
			if (categories is not null)
			{
				return Ok(categories);
			}
			return BadRequest();
		}
		[HttpPut("{categoryId}")]
		public ActionResult UpdateCategory([FromRoute] Guid categoryId, CategoryDTO model)
		{
			Category category = _context.Categories.Find(categoryId);
			if (category is not null)
			{
				category.CategoryName = model.CategoryName;
				category.CategoryDescription = model.CategoryDescription;
				if (_context.SaveChanges() > 0)
				{
					return Ok(model);
				}
			}
			return NotFound();
		}
		

	}
}


