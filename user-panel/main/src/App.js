import React, { useState } from "react";
import Header from "./components/Header";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import Otp from "./components/Otp/Otp"
import Signup from "./components/Signup/Signup";
function App() {
  const [search, setSearch] = useState("");
  return (
    <DataProvider>
    <>
      <Switch>
        <Route>
          <Switch>
            <Route exact path="/"><Signup></Signup></Route>
            <Route exact path="/Login"><Login></Login></Route>
            <Route exact path="/Forgetpassword"><ForgetPassword></ForgetPassword></Route>
            <Route exact path="/Otp"><Otp></Otp></Route>
            <Route exact path="/Home" >
            <Header setSearch={setSearch}/>
              <Home/> 
              <Footer/>
            </Route>
            <Route exact path="/products"><Header setSearch={setSearch}/>
              <Products search={search}/> 
              <Footer/>
              </Route>
            <Route exact path="/products/:id" >
            <Header setSearch={setSearch}/>
              <Details/><Footer/></Route>
          </Switch>
          </Route>
      </Switch>
    </>
  </DataProvider>
  );
}
export default App;
