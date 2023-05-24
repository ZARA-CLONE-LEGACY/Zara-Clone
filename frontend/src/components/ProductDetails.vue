<template>
    <div>
      <div class="container">
        <div class="left">
          <h2>MATERIALS, CARE AND ORIGIN</h2>
          <h3>JOIN LIFE</h3>
          <p>Care for water produced using less water.</p>
          <br />
          <p>
            COMPOSITION & CARE
            To assess compliance, we have developed a programme of audits and continuous improvement plans.
          </p>
          <br />
  
          <h2>MATERIALS</h2>
          <p>
            We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.
          </p>
          <br />
          <p>The Green to Wear 2.0 standard aims to minimize the environmental impact.</p>
          <a href="">
            <p>View more</p>
          </a>
        </div>
        <div class="containerprod">
          <div class="img1">
            <img class="centerimgprod" :src="data[0].productimage" alt="Product Image" />
          </div>
        </div>
        <div>
          <div class="right" style="marginRight: 40px;">
            <h2 class="cat">{{ data[0].productname }}</h2>
            <h3>
              Lapelless blazer made of a linen blend fabric. Long sleeves. Flap pockets on the front. Tie belt in the same fabric. Matching lining.
              Double-breasted fastening with hidden button.
            </h3>
            <br />
  
            <span><p class="pricetag">{{ data[0].productprice }}$</p></span>
            <p>MRP incl. of all taxes</p>
            <br />
            <p>{{ data[0].productcolor }} | 0647/301</p>
            <br />
            <select name="" id="prodsize">
              <option value="null">Select your size</option>
              <option value="EU 36 (UK 29)">EU 36 (UK 29)</option>
              <option value="EU 38 (UK 38)">EU 38 (UK 38)</option>
              <option value="EU 40 (UK 40)">EU 40 (UK 40)</option>
              <option value="EU 42 (UK 42)">EU 42 (UK 42)</option>
              <option value="EU 44 (UK 34)">EU 44 (UK 34)</option>
            </select>
  
            <button @click="handleAdd">Add to bag</button>
  
            <button>Process order</button>
  
            <p>
              CHECK IN-STORE AVAILABILITY
              DELIVERY, EXCHANGES AND RETURNS
            </p>
          </div>
        </div>
      </div>
  
      <!-- Comment Section -->
      <div class="comment-section">
        <h2>Comments</h2>
        <div v-for="comment in comments" :key="comment.id">
          <p>{{ comment.text }}</p>
          <hr />
        </div>
        <div>
          <input type="text" v-model="newComment" placeholder="Add a comment" />
          <button @click="addComment">Submit</button>
        </div>
      </div>
  
      <!-- Review Section -->
      <div class="review-section">
        <h2>Reviews</h2>
        <div class="stars">
          <span
            class="star"
            v-for="star in 5"
            :key="star"
            :class="{ 'selected': star <= selectedRating }"
            @mouseover="hoverRating(star)"
            @mouseleave="resetRating"
            @click="selectedRating(star)"
          >
            ★
          </span>
        </div>
        <p>Selected Rating: {{ selectedRating }}</p>
      </div>
    </div>
  </template>
  

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { addComment } from "@babel/types";

interface Product {
  productname: string;
  productprice: number;
  productquantity: number;
  productcolor: string;
  productcategory: string;
  "productsub-category": string;
  "productsub-sub-category": string;
  productimage: string;
  orderid: number;
}

interface Comment {
  id: string;
  text: string;
}

export default defineComponent({
  data() {
    return {
      data: [] as Product[],
      comments: [] as Comment[],
      newComment: "",
      selectedRating: 0,
    };
  },
  mounted() {
    const name = window.location.pathname.split("/")[2];
    if (name) {
      axios
        .get<Product[]>(`http://localhost:5000/api/products/one/${name}`)
        .then((res) => {
          this.data = res.data;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  },
  methods: {
    handleAdd() {
      console.log("Add to bag button clicked");
      const prod: Product = {
        productname: this.data[0]?.productname || "",
        productprice: this.data[0]?.productprice || 0,
        productquantity: this.data[0]?.productquantity || 0,
        productcolor: this.data[0]?.productcolor || "",
        productcategory: this.data[0]?.productcategory || "",
        "productsub-category": this.data[0]?.["productsub-category"] || "",
        "productsub-sub-category":
          this.data[0]?.["productsub-sub-category"] || "",
        productimage: this.data[0]?.productimage || "",
        orderid: 0, // Set the order ID as per your logic
      };
      this.postData(prod);
    },
    postData(prod: Product) {
      axios
        .post("http://localhost:5000/api/products/", prod)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  ddComment() {
    const comment: Comment = {
      id: "comment-" + Date.now().toString(), // Generate a unique ID for the comment
      text: this.newComment,
    };
    this.comments.push(comment);
    this.newComment = ""; // Clear the input field after submitting the comment
  },

  // Method to handle hovering over stars for review
  hoverRating(star: number) {
    this.selectedRating = star;
  },

  // Method to reset the selected rating
  resetRating() {
    this.selectedRating = 0;
  },

  // Method to select the rating
  selectRating(star: number) {
    this.selectedRating = star;
  },
});
</script>

<style>
/* Add your CSS styles here */
</style>
