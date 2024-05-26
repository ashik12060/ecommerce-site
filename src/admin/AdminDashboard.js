import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "../pages/axiosInstance";
import Header from "../components/Shared/Header/Header";
import { CartProvider } from "../hooks";
import OrderSingle from "./OrderSingle";
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [comments, setComments] = useState([]);

  // Fetch orders from server
  const fetchOrders = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/orders`
      );
      setOrders(data.orders);
      console.log(orders);
      console.log(orders.orderItems.price);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // display post
  const displayPost = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/posts/show`
      );
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    displayPost();
  }, []);

  // display item
  const displayItem = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/items/show`
      );
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayItem();
  }, []);

  //display products
  const displayProduct = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/products/show`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayProduct();
  }, []);

  //   //display gallery
  const displayGallery = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/galleries/show`
      );
      setGalleries(data.galleries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayGallery();
  }, []);

  //   //delete post by Id
  const deletePostById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/post/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("post deleted");
          displayPost();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };
  //delete item by Id
  const deleteItemById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/item/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Item deleted");
          displayItem();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  //delete product by Id
  const deleteProductById = async (e, id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        //
        const { data } = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/product/${id}`
        );
        if (data.success === true) {
          toast.success(data.message);
          displayProduct();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };
  //delete product by Id
  const deleteGalleryById = async (e, id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        //
        const { data } = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/gallery/${id}`
        );
        if (data.success === true) {
          toast.success(data.message);
          displayGallery();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete order by ID
  const deleteOrderById = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/orders/${orderId}`
        );
        if (response?.data?.success) {
          toast.success("Order deleted successfully");
          fetchOrders();
        }
      } catch (error) {
        console.error("Error deleting order:", error);
        toast.error("Failed to delete order");
      }
    }
  };

  //   // post columns
  const PostColumns = [
    {
      field: "_id",
      headerName: "Post ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Post title",
      width: 150,
    },

    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    {
      field: "likes",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      valueGetter: (data) => data.row.postedBy.name,
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Link to={`/admin/post/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deletePostById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];
  //   // Item columns
  const ItemColumns = [
    {
      field: "_id",
      headerName: "Item ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Item title",
      width: 150,
    },

    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    {
      field: "likes",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      valueGetter: (data) => data.row.postedBy.name,
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Link to={`/admin/item/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteItemById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];
  // // items end

  //   //products columns add extra
  const ProductColumns = [
    {
      field: "_id",
      headerName: "Post ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Post title",
      width: 150,
    },

    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => <img width="40%" src={params.row.image.url} />,
    },
    {
      field: "likes",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      valueGetter: (data) => data.row.postedBy.name,
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Link to={`/admin/product/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteProductById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  //    // Gallery columns
  const GalleryColumns = [
    {
      field: "_id",
      headerName: "Gallery ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Gallery title",
      width: 150,
    },

    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    // {
    //   field: "likes",
    //   headerName: "Likes",
    //   width: 150,
    //   renderCell: (params) => params.row.likes.length,
    // },
    // {
    //   field: "comments",
    //   headerName: "Comments",
    //   width: 150,
    //   renderCell: (params) => params.row.comments.length,
    // },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      valueGetter: (data) => data.row.postedBy.name,
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Link to={`/admin/gallery/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteGalleryById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  // order columns
  const orderColumns = [
    { field: "_id", headerName: "Order ID", width: 150 },
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "orderDate", headerName: "Order Date", width: 200 },
    { field: "orders", headerName: "Quantity", width: 200 },
    // Add more columns as needed
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={() => deleteOrderById(params.row._id)}
            aria-label="delete"
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];
  const orderItems = [
    { field: "_id", headerName: "Order ID", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    // Add more columns as needed
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={() => deleteOrderById(params.row._id)}
            aria-label="delete"
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <div>
      <CartProvider>
        <Header />
      </CartProvider>

      <div class="d-flex align-items-start mt-3 ">
        <div
          className="nav flex-column nav-pills w-25 border border-1 rounded me-4 dashboard-nav-size 5 px-2  pt-4"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active border border-1"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Total Sales
          </button>
          <button
            class="nav-link border border-1 mt-3"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Products Info
          </button>
         
          <button
            class="nav-link border border-1 mt-3"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Blog Posts
          </button>
          <button
            class="nav-link border border-1 mt-3"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Seller Products
          </button>
        </div>
        <div className=" w-75 tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <OrderSingle />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            {/* Products  */}
      <Box>
        <Typography variant="h4" sx={{ color: "black", mt: 5 }}>
          PRODUCTS
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/product/create"
            >
              Add Products
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgColor: "white",
                },
              }}
              rows={products}
              columns={ProductColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box>
          </div>
          
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
          {/* post  */}
      <Box className="mt-5">
        <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
          Blog Posts
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            sx={{
              fontSize: "1rem",
              padding: "8px 16px",
              "@media (max-width: 768px)": {
                fontSize: "0.9rem",
                padding: "6px 12px",
              },
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/post/create"
            >
              Create Post
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgColor: "white",
                },
              }}
              rows={posts}
              columns={PostColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
             <Box>
        <Typography variant="h4" sx={{ color: "black", pb: 3, mt: 5 }}>
          Seller Products
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            sx={{
              fontSize: "1rem",
              padding: "8px 16px",
              "@media (max-width: 768px)": {
                fontSize: "0.9rem",
                padding: "6px 12px",
              },
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/item/create"
            >
              Add Item
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgcolor: "white",
                },
              }}
              rows={items}
              columns={ItemColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box>
          </div>
        </div>
      </div>

      <div>
        {/* <OrderSingle /> */}
      </div>
      {/* <div>
    
        <Box>
          <Typography variant="h4" sx={{ color: "black", mt: 5 }}>
            Orders
           
          </Typography>
          <Paper sx={{ bgColor: "white" }}>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={orders}
                columns={orderColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id} />
            </Box>
          </Paper>
        </Box>
      </div> */}

      {/* Products  */}
      {/* <Box>
        <Typography variant="h4" sx={{ color: "black", mt: 5 }}>
          PRODUCTS
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/product/create"
            >
              Add Products
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgColor: "white",
                },
              }}
              rows={products}
              columns={ProductColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box> */}

      {/* post  */}
      {/* <Box className="mt-5">
        <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
          Blog Posts
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            sx={{
              fontSize: "1rem",
              padding: "8px 16px",
              "@media (max-width: 768px)": {
                fontSize: "0.9rem",
                padding: "6px 12px",
              },
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/post/create"
            >
              Create Post
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgColor: "white",
                },
              }}
              rows={posts}
              columns={PostColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box> */}

      {/* ITEMS  */}
      {/* <Box>
        <Typography variant="h4" sx={{ color: "black", pb: 3, mt: 5 }}>
          Seller Products
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            sx={{
              fontSize: "1rem",
              padding: "8px 16px",
              "@media (max-width: 768px)": {
                fontSize: "0.9rem",
                padding: "6px 12px",
              },
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/item/create"
            >
              Add Item
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgcolor: "white",
                },
              }}
              rows={items}
              columns={ItemColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box> */}

      {/* Gallery  */}
      {/* <Box>
        <Typography variant="h4" sx={{ color: "black",  mt:5}}>
          Gallery
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/admin/gallery/create"
            >
              ADD A PHOTO
            </Link>{" "}
          </Button>
        </Box>
        <Paper sx={{ bgColor: "white" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              sx={{
                "& .MuiTablePagination-displayedRows": {
                  color: "black",
                },
                color: "black",
                [`& .${gridClasses.row}`]: {
                  bgColor: "white",
                },
              }}
              rows={galleries}
              columns={GalleryColumns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box> */}
      {/* <Box sx={{ width: 200, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Sections
        </Typography>
        <Button
          variant={currentSection === "products" ? "contained" : "outlined"}
          onClick={() => handleSectionChange("products")}
        >
          Products
        </Button>
        <Button
          variant={currentSection === "posts" ? "contained" : "outlined"}
          onClick={() => handleSectionChange("posts")}
        >
          Blog Posts
        </Button>
        <Button
          variant={currentSection === "items" ? "contained" : "outlined"}
          onClick={() => handleSectionChange("items")}
        >
          Surgical Items
        </Button>
      </Box> */}

      {/* Render the selected section */}
      {/* <Box sx={{ marginLeft: 220 }}>
        {renderSection()}
      </Box>
       */}
    </div>
  );
};

export default AdminDashboard;
