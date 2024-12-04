import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  PiMagnifyingGlassDuotone,
  PiNotePencilDuotone,
  PiTrashDuotone,
} from "react-icons/pi";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

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
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((us) => us._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-5">Users</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Password</th>
                <th>Last Login Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index+1}</th>
                  <td>{user.email}</td>
                  <td>{user.lastSignInTime}</td>
                  <td>{user.password}</td>
                  <td className="flex gap-4">
                    <button className="bg-blue-200 text-blue-500 border-blue-700 hover:bg-blue-500 hover:text-white p-2 text-xl rounded-lg border duration-300">
                      <PiMagnifyingGlassDuotone />
                    </button>
                    <Link to={`/update-user/${user._id}`}>
                      <button className="bg-emerald-200 text-emerald-500 border-emerald-700 hover:bg-emerald-500 hover:text-white p-2 text-xl rounded-lg border  duration-300">
                        <PiNotePencilDuotone />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-200 text-red-500 border-red-700 hover:bg-red-500 hover:text-white p-2 text-xl rounded-lg border  duration-300"
                    >
                      <PiTrashDuotone />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
