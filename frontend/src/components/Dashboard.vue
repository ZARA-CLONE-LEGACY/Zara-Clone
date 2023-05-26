<template>
    <div>
    
      <div>
        <h1>Collections</h1>
        <div class="coll">
          <router-link to="/menAdmin" >
            <button class="z" type="submit" id="m">MEN</button>
          </router-link>
          <router-link to="/womanAdmin">
            <button class="z" id="w">Woman</button>
          </router-link>
          <router-link to="/kidAdmin">
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
#w {
  position: relative;
  left: 100px;
}

#k {
  position: relative;
  left: 200px;
}

#o {
  position: relative;
  left: 300px;
}

  </style>
  