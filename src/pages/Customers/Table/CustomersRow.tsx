import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchUsers } from "../../../store/slice/userSlice";
import { MdDelete } from "react-icons/md";

const CustomersRow = () => {
  const dispatch = useDispatch<AppDispatch>();
  const customers = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      {customers.map((item, index) => (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 border-1 "
            />
          </td>
          <td className="">
            <div className="flex items-center gap-2">
              <img
                src={item.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-1 border-gray-300"
              />
              <p className="m-0">{item.name}</p>
            </div>
          </td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.creationAt}</td>
          <td>{item.updatedAt}</td>
          <td>
            <div className="flex gap-3 justify-center">
              <MdDelete className="text-red-400 text-xl" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CustomersRow;
