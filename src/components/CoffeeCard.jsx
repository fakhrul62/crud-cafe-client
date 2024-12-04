import React from "react";
import { Card } from "flowbite-react";
import {
  PiMagnifyingGlassDuotone,
  PiNotePencilDuotone,
  PiTrashDuotone,
} from "react-icons/pi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffeeCollection, setCoffeeColection }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  //delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#848489",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              })
              const remaining = coffeeCollection.filter(cof=>  cof._id !== _id);
              setCoffeeColection(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Card className="max-w-sm bg-[#f7f6f8]">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            height="96"
            src={photo}
            width="96"
            className="mb-3"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex gap-5">
            <h3>
              <span className="font-semibold">Taste:</span> {taste}
            </h3>
            <h3>
              <span className="font-semibold">Category:</span> {category}
            </h3>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <button className="bg-blue-200 text-blue-500 border-blue-700 hover:bg-blue-500 hover:text-white p-2 text-xl rounded-lg border duration-300">
              <PiMagnifyingGlassDuotone />
            </button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="bg-emerald-200 text-emerald-500 border-emerald-700 hover:bg-emerald-500 hover:text-white p-2 text-xl rounded-lg border  duration-300">
                <PiNotePencilDuotone />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-200 text-red-500 border-red-700 hover:bg-red-500 hover:text-white p-2 text-xl rounded-lg border  duration-300"
            >
              <PiTrashDuotone />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CoffeeCard;
