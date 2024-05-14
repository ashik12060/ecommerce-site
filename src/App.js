import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import NotFound from './pages/NotFound/NotFound';
import Manufacture from './pages/Manufacture/SisterConcerns';
import Leadership from './pages/Leadership/Leadership';
import { QualityPolicy } from './pages/QualityPolicy/QualityPolicy';
import Values from './pages/Values/Values';
// import ScrollButton from "./components/ScrollButton/ScrollButton";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminDashboard from "./admin/AdminDashboard";
// import AdminDashboardTwo from "./admin/AdminDashboardTwo";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import CreatePost from "./admin/CreatePost";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Layout from "./admin/global/Layout";
import EditPost from "./admin/EditPost";
import UserDashboard from "./user/UserDashboard";
import SinglePost from "./pages/SinglePost";
//main
import BlogHome from "./pages/BlogHome";
// import ProductBuying from "./components/Products/ProductBuying";
import BlogPro from "./pages/BlogPro";
import SinglePro from "./pages/SinglePro";
import CreateProduct from "./admin/CreateProduct";
import EditProduct from "./admin/EditProduct";
import BuyContact from "./components/BuyContact";
import MemberDetail from './pages/BoardMembers/MemberDetail';
import { useEffect, useState } from 'react';
import Members from './pages/BoardMembers/Members';
import ItemsHome from './pages/ItemsHome';
import CreateItem from './admin/CreateItem';
import EditItem from './admin/EditItem';
import Products from './pages/Products';
import SurgicalItems from './pages/SurgicalItems';
import SingleItem from './pages/SingleItem';
import Partners from './components/Partners/Partners';
import GalleryHome from './pages/GalleryHome';
import SingleGallery from './pages/SingleGallery';
import CreateGallery from './admin/CreateGallery';
import EditGallery from './admin/EditGallery';
import Mission from './pages/Mission/Mission';
import CompanyStructure from './pages/CompanyStructure/CompanyStructure';
import SisterConcerns from './pages/Manufacture/SisterConcerns';
import ProductSample from './components/Products/ProductSample';
import ProductCart from './components/Products/ProductCart';
import { getAuth,signOut  } from "firebase/auth";
import AdminLogin from './pages/AdminLogin';
import LoginUser from './pages/LoginSeller';
import CheckOut from './pages/CheckOut';
import Bkash from './pages/Bkash';
import ShowUsers from './pages/ShowUsers';
import SellerAc from './pages/SellerAc';
//HOC
const AdminDashboardHOC = Layout(AdminDashboard);

const CreatePostHOC = Layout(CreatePost);
const CreateItemHOC = Layout(CreateItem);
const CreateProductHOC = Layout(CreateProduct);
const CreateGalleryHOC = Layout(CreateGallery);
const EditPostHOC = Layout(EditPost);
const EditItemHOC = Layout(EditItem);
const EditProductHOC = Layout(EditProduct);
const EditGalleryHOC = Layout(EditGallery)
const UserDashboardHOC = Layout(UserDashboard);



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
    <ToastContainer />
    <Provider store={store}>
    <ProSidebarProvider>
      <BrowserRouter>
     
      {/* <ScrollButton /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route path='/companyprofile' element={<CompanyProfile/>}></Route> */}
        {/* <Route path='/sisterconcerns' element={<SisterConcerns/>}></Route> */}
        {/* <Route path='/leadership' element={<Leadership/>}></Route> */}
        <Route path='/seller-login' element={<LoginUser/>}></Route>
        <Route path='/seller-account' element={<SellerAc/>}></Route>
        <Route path='/bkash-payment' element={<Bkash/>}></Route>

        {/* <Route path='/mission' element={<Mission/>}></Route> */}
        {/* <Route path='/companystructure' element={<CompanyStructure/>}></Route> */}
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/show-users' element={<ShowUsers/>}></Route>
 

        {/* blog  */}
        <Route path="members" element={<Members />} />



        <Route path="/" element={<BlogHome />} />              
              <Route path="/bloghome" element={<BlogHome />} />
              <Route path="/buycontact" element={<BuyContact />} />
              <Route path="/product-sample" element={<ProductCart />} />
              <Route path="/checkout/:id/:totalPrice" element={<CheckOut  />} />
              
              
              <Route path="/login" element={<LogIn  element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/post/:id" element={<SinglePost />} />

               <Route path="/medicine" element = {<Products />} />
              <Route path="/product/:id" element={<SinglePro />} />

              <Route path='/items' element={<SurgicalItems />}/>
              <Route path="/item/:id" element={<SingleItem />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/gallery" element={<GalleryHome />} />


              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              
              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/item/create"
                element={
                  <AdminRoute>
                    <CreateItemHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/product/create"
                element={
                  <AdminRoute>
                    <CreateProductHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/gallery/create"
                element={
                  <AdminRoute>
                    <CreateGalleryHOC />
                  </AdminRoute>
                }
              />




              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/item/edit/:id"
                element={
                  <AdminRoute>
                    <EditItemHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/product/edit/:id"
                element={
                  <AdminRoute>
                    <EditProductHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/gallery/edit/:id"
                element={
                  <AdminRoute>
                    <EditGalleryHOC />
                  </AdminRoute>
                }
              />


              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route path='*' element={<NotFound />}></Route>

      </Routes>

      </BrowserRouter>
      </ProSidebarProvider>
      </Provider>
    </>
  );
}

export default App;
