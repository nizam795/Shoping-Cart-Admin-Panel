import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserManagement from "./pages/UserManagement/UserManagement";
// import RoleManagement from "./pages/RoleManagement/RoleManagement";
import DashboardLayout from "./components/DashboardLayout";
// import Employee from "./pages/Employee/Employee";
// import { useSelector } from "react-redux";
// import type { RootState } from "./store/store";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/auth/Login";
// import SignUp from "./pages/auth/SignUp";
// import EmployeeForm from "./components/ExtraComp/EmployeeForm";
// import ClientForm from "./components/ExtraComp/ClientForm";

// import EmployeeData from "./pages/EmployeeData/EmployeeData";
// import ClientData from "./pages/ClientData.tsx/ClientData";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductList from "./pages/ProductList/ProductList";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CreateProduct from "./pages/CreateProduct.tsx/CreateProduct";
import Customers from "./pages/Customers/Customers";
import Orders from "./pages/Orders/Orders";
import OrderDetails from "./pages/Orderdetails/OrderDetails";

function App() {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <DashboardLayout />
              // </ProtectedRoute>
            }
          >
            {/* <Route index element={<UserManagement />} /> */}
            {/* <Route path="/roles" element={<RoleManagement />} /> */}
            {/* <Route path="/employee-form" element={<EmployeeForm />} /> */}
            {/* <Route path="/client-form" element={<ClientForm />} /> */}
            {/* <Route path="/employee-data" element={<EmployeeData />} /> */}
            {/* <Route path="/client-data" element={<ClientData/>} /> */}
            <Route path="/" element={<Dashboard/>} />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/product-grid" element={<ProductGrid/>} />
            <Route path="/productDetials/:id" element={<ProductDetails/>} />
            <Route path="/create-product" element={<CreateProduct/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/orders/:id" element={<OrderDetails/>} />
          </Route>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
