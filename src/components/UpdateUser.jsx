import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, email, password } = user;
  const handleUpdateUser = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const updatedUser = {email, password};
    console.log(updatedUser);
    //send data to the server
    fetch(`http://localhost:5000/user/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                title: "User Updated!",
                icon: "success"
              });
        }
    })
    form.reset();
}
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-5">Update User</h2>
      <div className="mt-5">
      <form className="grid grid-cols-2 gap-5 w-10/12 mx-auto" onSubmit={handleUpdateUser}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="email"
            name="email"
            defaultValue={email}
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="text"
            placeholder="Password"
            defaultValue={password}
            name="password"
            className="input input-bordered w-full "
          />
        </label>
 
        <div className="col-span-2">
        <button type="submit" className="btn w-full bg-zinc-900 text-white py-3 rounded-md hover:bg-zinc-200 hover:text-black hover:border">Update User</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateUser;
