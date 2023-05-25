<template>
    <div>
    
      <div>
        <h1>Collections</h1>
        <div class="coll">
          <router-link to="/Men">
            <button class="z" type="submit" id="m">MEN</button>
          </router-link>
          <router-link to="/Woman">
            <button class="z" id="w">WOMEN</button>
          </router-link>
          <router-link to="/kid">
            <button class="z" id="k">KIDS</button>
          </router-link>
      
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  }
  </script>
  
  <style scoped>

  </style>
  