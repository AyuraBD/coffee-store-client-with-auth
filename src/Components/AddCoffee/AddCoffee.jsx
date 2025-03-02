import Swal from 'sweetalert2'
import Header from '../../Header';
const AddCoffee = () => {
  const handleAddCoffee = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name, chef, supplier, taste, category, details, photo}
    
    fetch('https://coffee-store-server-rust-gamma.vercel.app/coffee', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Your coffee addeded successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      form.reset();
    })
    .then(err => console.log(err.message))
    
  }
  return (
    <div className="">
      <Header></Header>
      <h1 className="text-2xl text-center p-6">Add new coffee</h1>
      <div className="lg:p-12 mt-3">
        <form onSubmit={handleAddCoffee} className="lg:w-3/4 md:w-3/5 px-2 m-auto">
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Name</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="name" placeholder="Coffee name" type="text"  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Chef</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="chef" placeholder="Name of chef" type="text"  />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Supplier</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="supplier" placeholder="Name of Supplier" type="text"  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Taste</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="taste" placeholder="Taste" type="text"  />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Category</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="category" placeholder="Category" type="text"  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Details</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="details" placeholder="Details" type="text"  />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span>Photo</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="photo" placeholder="Photo URL" type="text"  />
              </label>
            </div>
          </div>
          <div className="text-center py-4">
            <input className="bg-[#1c6c9b] text-white py-2 px-8 rounded-sm cursor-pointer" type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCoffee