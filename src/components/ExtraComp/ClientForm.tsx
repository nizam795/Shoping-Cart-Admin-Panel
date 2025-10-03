import { useForm } from "react-hook-form";
// import "./style/clientform.css";
import type { Client } from "../../types/types";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/slice/clientSlice";

const ClientForm = () => {
  const { register ,handleSubmit} = useForm<Client>();
  const dispatch = useDispatch()
  const handleAddData = (data:Omit<Client,"id">)=>{
    const newClient = {
      ...data,
      id:Date.now()
    }
    dispatch(addClient(newClient))
    console.log("client data",data)
     alert("data added successfully")
    
  }
  
  return (
    <div className="client-form">
      <h3>Client Form</h3>
      <form onSubmit={handleSubmit(handleAddData)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {/* {errors.name && <p className="error">{errors.name.message}</p>} */}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            },
          })}
        />
        {/* {errors.email && <p className="error">{errors.email.message}</p>} */}

        <input
          type="text"
          placeholder="Company Name"
          {...register("Company_Name", { required: "Company name is required" })}
        />
        {/* {errors.company && <p className="error">{errors.company.message}</p>} */}

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("Phone_Number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone must be 10 digits",
            },
          })}
        />
        {/* {errors.phone && <p className="error">{errors.phone.message}</p>} */}

        <textarea
          placeholder="Address"
          {...register("Address", { required: "Address is required" })}
        ></textarea>
        {/* {errors.address && <p className="error">{errors.address.message}</p>} */}

        <select
          {...register("Client_Type", { required: "Client Type is required" })}
        >
          <option value="">Select Client Type</option>
          <option value="individual">Individual</option>
          <option value="corporate">Corporate</option>
          <option value="government">Government</option>
        </select>
        {/* {errors.clientType && <p className="error">{errors.clientType.message}</p>} */}

        <select {...register("Status", { required: "Status is required" })}>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="prospect">Prospect</option>
        </select>
        {/* {errors.status && <p className="error">{errors.status.message}</p>} */}

        <input
          type="date"
          {...register("Date", { required: "Joining Date is required" })}
        />
        {/* {errors.joiningDate && <p className="error">{errors.joiningDate.message}</p>} */}

        <button type="submit">Submit</button>
      </form>
       
    </div>
  );
};

export default ClientForm;
