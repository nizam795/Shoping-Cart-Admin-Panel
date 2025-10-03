export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "employee" | "client" | string;
  avatar?: string;
  creationAt: string;
  updatedAt: string;
};

export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
  employeeId: number;
  joiningDate: string;
  status: string;
};
export type Client = {
  id: number;
  name: string;
  email: string;
  Company_Name: string;
  Phone_Number: string;
  Address: string;
  Client_Type: string;
  Status: string;
  Date: string;
};

export type Order = {
 orderId: number;
  billingName: string;
  date: string;
  paymentStatus: string; // ← changed from `"Paid" | "Pending" | "Failed"` to just string
  paymentMethod: string;
  orderStatus: string;
  total: number;
  product: {
    name: string;
    image: string;
    quantity: number;
    price: number;
    total: number;
  };
  
};

export type Product = {
  _id: string;
  title: string;
 
  reference?: string;
  productSummery?: string;
  images: string[]; // backend expects single string (not array)
  category: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  status: "online" | "offline" | "draft"; // you can keep union for safety
  comment: string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDesc?: string;
  slug: string;
  creationAt: string;
  updatedAt: string;  
  
}
export type CreateProductType = Omit<
  Product,
  "slug" | "creationAt" | "updatedAt"
> & {
  _id?: string; // optional while creating
};
