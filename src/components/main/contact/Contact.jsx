import "./Styles.css";
import "./ResponsiveContact.css";
import "./Style.css";
import ContactPic from "../../../assets/map.jpg";
import {useState, useEffect} from "react";


export const Contact = () => {
  const [Name, setname]=useState();
  const [Email, setemail]=useState();
  const [Dish, setdish]=useState();
  
  function upload()
  {
    alert("Order Successful!!! Check your mail to confirm the order")
  }
  return (
    <section className="contact">
      <div className="contatWrapper">
        <div className="leftContact">x
          <div className="infosContact">
          <form action="POST" method="https://landingpage-802695915.development.catalystserverless.com/server/insertData/add">
        <div class="banner" id="banner">
          <h1>Order Details</h1>
        </div>
        <div class="item">
          <label for="name">Name <span>*</span></label>
          <input id="name" type="text" name="Name" onChange={(e)=>setname(e.target.value)} required/>
        </div>
        <div class="item">
          <label for="email">Email Address <span>*</span></label>
          <input id="email" type="email" name="Email" onChange={(e)=>setemail(e.target.value)} required/>
        </div>
        <div class="item">
          <label for="address">Item to be ordered <span>*</span></label>x
          <p></p>
          <select onChange={(e)=>setdish(e.target.value)}>
            <option selected value="" disabled></option>
            <option value="course-type" >Belgian Waffle with Maple Syrup</option>
            <option value="short-courses">Croissant</option>
            <option value="featured-courses">Choco Truffle Cake</option>
            <option value="undergraduate">Brownie</option>
          </select>
        </div>
        <div class="btn-block">
          <button onClick={upload} href="/">SUBMIT</button>
        </div>
      </form>
            </div>
          </div>
        </div>
        <div className="rigthContact">
          <img src={ContactPic} alt="draw of two persons doing a hand shek" />
        </div>
    </section>
  );
  
};
