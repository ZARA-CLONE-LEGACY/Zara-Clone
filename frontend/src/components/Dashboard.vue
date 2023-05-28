<template>
  <div class="navbar">
    <router-link to="/menAdmin" class="navbar-item">
      <div class="image-container">
        <img src="https://cdn.vox-cdn.com/thumbor/KS8grOLs_fZZFRPLomsMLkTVOcg=/480x0/cdn.vox-cdn.com/uploads/chorus_asset/file/4212109/ZARA_MAN_STUDIO_CAPSULE_COLLECTION_1.0.jpg" alt="Men" class="navbar-item-image">
        <div class="image-name">Men</div>
      </div>
    </router-link>
    <router-link to="/womanAdmin" class="navbar-item">
      <div class="image-container">
        <img src="https://static.zara.net/photos///2023/V/0/1/p/2335/008/822/2/w/826/2335008822_1_1_1.jpg?ts=1684927144759" alt="Woman" class="navbar-item-image">
        <div class="image-name">Woman</div>
      </div>
    </router-link>
    <router-link to="/kidAdmin" class="navbar-item">
      <div class="image-container">
        <img src="https://static.zara.net/photos///2023/V/1/3/p/2660/130/002/2/w/242/2660130002_1_1_1.jpg?ts=1680621987239" alt="Kids" class="navbar-item-image">
        <div class="image-name">Kids</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-item {
  text-decoration: none;
  margin-right: 80px;
  margin-top: 180px;
}

.image-container {
  position: relative;
}

.navbar-item-image {
  width: 300px;
  height: 340px;
  margin-left: 50px;

}

.image-name {
  position: absolute;
  bottom: 180px;
  left: -12px;
  right: -12px;
  text-align: center;
  color: rgb(31, 30, 30);
  font-size: 25px;
  font-weight: bold;
  background-color: #fdf9f9;
  padding: 8px;
  border-radius: 5px;
  margin-left: 60px;  
  
}

.navbar-item-image:hover {
  opacity: 0.8;
}

.navbar-item.active .navbar-item-image {
  border: 2px solid #333;


}
</style>
