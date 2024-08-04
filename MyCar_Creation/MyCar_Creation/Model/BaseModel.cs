namespace MyCar_Creation.Model
{
    public abstract class BaseModel
    {
        public BaseModel()
        {
            Id = Guid.NewGuid();
            CreatedDate = DateTime.Now;
        }

        public Guid Id {get; set;}

        public DateTime CreatedDate {get; set;}
    }
}
