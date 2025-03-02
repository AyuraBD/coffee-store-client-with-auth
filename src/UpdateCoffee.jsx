import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, photo, chef, details, name, supplier, category, taste} = coffee;


    const handleEditCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, chef, supplier, taste, category, details, photo}
        Swal.fire({
          title: "Are you sure?",
          text: "You want to update this coffee details?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://coffee-store-server-rust-gamma.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
          })
          .then(res => res.json())
          .then(data => {
              if(data.modifiedCount > 0){
                Swal.fire({
                  title: "Updated!",
                  text: "Coffee updated successfully.",
                  icon: "success"
                });
              }
          })
          .catch(err => {
              console.log(err.message);
          })
          }
        });

        
        
    }
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center p-6">Update existing coffee details</h1>
      <p className='text-center lg:px-48'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <div className="lg:px-12 mt-5">
        <form onSubmit={handleEditCoffee} className="lg:w-3/4 md:w-3/5 px-2 m-auto">
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Name</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="name" placeholder="Coffee name" type="text" defaultValue={name}  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Chef</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="chef" placeholder="Name of chef" type="text" defaultValue={chef}  />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Supplier</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="supplier" placeholder="Name of Supplier" type="text" defaultValue={supplier}  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Taste</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="taste" placeholder="Taste" type="text" defaultValue={taste} />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Category</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="category" placeholder="Category" type="text" defaultValue={category}  />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label htmlFor="" className="label">
                <span>Details</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="details" placeholder="Details" type="text" defaultValue={details} />
              </label>
            </div>
          </div>
          <div className="lg:flex w-full gap-4">
            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span>Photo</span>
              </label>
              <label htmlFor="" className="input-group w-full">
                <input className="input input-bordered w-full" name="photo" placeholder="Photo URL" type="text" defaultValue={photo}  />
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

export default UpdateCoffee