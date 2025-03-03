import { BsEye } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, photo, chef, details, name, supplier, category, taste} = coffee;
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`https://coffee-store-server-two-ruddy.vercel.app/coffee/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                        });
                    const remaining = coffees.filter(coffee => coffee._id !== id);
                    setCoffees(remaining);
                }
              })        
            }
          });
    }
    return (
    <div className="hero bg-base-200">
      <div className="hero-content justify-between w-full flex-col lg:flex-row">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-xl"><span className="font-bold">Name: </span>{name}</h1>
          <h2 className="text-xl"><span className="font-bold">Chef: </span>{chef}</h2>
          <h2 className="text-xl"><span className="font-bold">Taste: </span>{taste}</h2>
        </div>
        <div className="flex gap-4 justify-between items-center flex-col">
            <button className="text-white p-2 bg-[#D2B48C] rounded-md"><BsEye></BsEye></button>
            <Link to={`/updateCoffee/${_id}`} className="text-white p-2 bg-[#3C393B] rounded-md"><MdEdit></MdEdit></Link>
            <button onClick={()=> handleDelete(_id)} className="text-white p-2 bg-[#EA4744] rounded-md"><MdDelete></MdDelete></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
