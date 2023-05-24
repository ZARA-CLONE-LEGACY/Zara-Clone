<template>
    <div>
      <div class="container">
        <div class="left">
          <h2>MATERIALS, CARE AND ORIGIN</h2>
          <h3>JOIN LIFE</h3>
          <p>Care for water produced using less water.</p>
          <br />
          <p>
            COMPOSITION & CARE To assess compliance, we have developed a programme
            of audits and continuous improvement plans.
          </p>
          <br />
  
          <h2>MATERIALS</h2>
          <p>
            We work with monitoring programmes to ensure compliance with our
            social, environmental and health and safety standards for our
            garments.
          </p>
          <br />
          <p>
            The Green to Wear 2.0 standard aims to minimize the environmental
            impact.
          </p>
          <a href="">
            <p>View more</p>
          </a>
        </div>
        <div class="containerprod">
          <div class="img1">
            <img class="centerimgprod" :src="data[0].image" alt="Product Image" />
          </div>
        </div>
        <div>
          <div class="right">
            <h2>{{ data[0].name }}</h2>
            <h3>
              Lapelless blazer made of a linen blend fabric. Long sleeves. Flap
              pockets on the front. Tie belt in the same fabric. Matching lining.
              Double-breasted fastening with hidden button.
            </h3>
            <br />
  
            <span><p class="pricetag">{{ data[0].price }}$</p></span>
            <p>MRP incl. of all taxes</p>
            <br />
            <p>{{ data[0].color }} | 0647/301</p>
            <br />
            <select name="" id="prodsize">
              <option value="null">Select your size</option>
              <option value="EU 36 (UK 29)">EU 36 (UK 29)</option>
              <option value="EU 38 (UK 38)">EU 38 (UK 38)</option>
              <option value="EU 40 (UK 40)">EU 40 (UK 40)</option>
              <option value="EU 42 (UK 42)">EU 42 (UK 42)</option>
              <option value="EU 44 (UK 34)">EU 44 (UK 34)</option>
            </select>
  
            <button>Process order</button>
  
            <p>CHECK IN-STORE AVAILABILITY DELIVERY, EXCHANGES AND RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import axios from "axios";
  
  interface Product {
    image: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    color: string;
  }
  
  export default defineComponent({
    data() {
      return {
        data: [] as Product[],
      };
    },
    mounted() {
      const name = window.location.pathname.split("/")[2];
      if (name) {
        axios
          .get<Product[]>(`http://localhost:3000/api/product/${name}`)
          .then((res) => {
            this.data = res.data;
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
  });
  </script>
  
  <style>
  .container {
    padding-top: 140px;
    display: flex;
    justify-content: space-between;
  }
  
  .centerimgprod {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .img1 {
    margin: auto;
    margin-top: 5%;
    max-width: 350px;
  }
  
  .right {
    margin-top: 70px;
    width: 230px;
    height: 320px;
    padding-top: 100px;
    flex-basis: 30%;
  }
  
  .left {
    margin-top: 70px;
    width: 230px;
    height: 320px;
    padding-top: 100px;
    flex-basis: 30%;
    margin-right: 40px;
  }
  
  .right,
  .left,
  h3,
  p {
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .right span p {
    display: inline;
  }
  
  .right button {
    background-color: rgb(61, 59, 59);
    color: white;
    width: 100%;
    cursor: pointer;
    height: 30px;
    margin: 8px 0px;
  }
  
  .right select {
    background: transparent;
    padding: 5px;
    width: 100%;
  }
  
  .right h3 {
    word-spacing: 2px;
    line-height: 12px;
  }
  
  /* when add to bag click visibility block */
  .right button ~ button {
    visibility: hidden;
  }
  
  /* Additional CSS styles */
  header {
    padding: 12px 20px;
    display: flex;
    position: fixed;
  }
  
  .fa-bars {
    font-size: 25px;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
    margin-left: 4%;
    margin-top: -55px;
    padding-left: 15%;
  }
  
  .rightnavlogin {
    margin-top: -16px;
    display: flex;
    padding-left: 194%;
  }
  
  a {
    color: black;
    user-select: none;
    box-sizing: border-box;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Neue-Helvetica, Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 26px;
    font-stretch: semi-condensed;
    margin-right: 20px;
  }
  
  .price,
  .new {
    margin: 4px;
    margin-left: 1px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: bold;
    font-stretch: semi-condensed;
  }
  </style>
  