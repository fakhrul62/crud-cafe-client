import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {name, chef, supplier, taste, category, details, photo};
    console.log(updatedCoffee);
    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Coffee Updated!",
                icon: "success"
              });
        }
    })
    form.reset();
}
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-5">Update Coffee</h2>
      <div className="mt-5">
      <form className="grid grid-cols-2 gap-5 w-10/12 mx-auto" onSubmit={handleUpdateCoffee}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={name}
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Chef</span>
          </div>
          <input
            type="text"
            placeholder="Chef"
            defaultValue={chef}
            name="chef"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Supplier</span>
          </div>
          <input
            type="text"
            placeholder="Supplier"
            name="supplier"
            defaultValue={supplier}
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Taste</span>
          </div>
          <input
            type="text"
            placeholder="Taste"
            name="taste"
            defaultValue={taste}
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input
            type="text"
            placeholder="Category"
            name="category"
            defaultValue={category}
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Details</span>
          </div>
          <input
            type="text"
            defaultValue={details}
            placeholder="Details"
            name="details"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control col-span-2 w-full ">
          <div className="label">
            <span className="label-text">Photo</span>
          </div>
          <input
            type="text"
            placeholder="Photo"
            name="photo"
            defaultValue={photo}
            className="input input-bordered w-full "
          />
        </label>
        <div className="col-span-2">
        <button type="submit" className="btn w-full bg-zinc-900 text-white py-3 rounded-md hover:bg-zinc-200 hover:text-black hover:border">Update Coffee</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
