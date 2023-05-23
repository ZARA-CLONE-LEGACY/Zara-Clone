<template>
  <div>
    <div class="App" :style="appStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: "",
      slideDirection: 1,
      slideInterval: 3000,
      images: [
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1366/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997",
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1366/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276",
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-girl/subhome-xmedia-20//w/1366/IMAGE-landscape-default-fill-5e86991a-50e0-4d02-9b8c-f31ffb8f4b76-default_0.jpg?ts=1684417760360",
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-beauty-new/subhome-xmedia-16//w/1366/IMAGE-landscape-default-fill-d06d0c41-fb7d-423f-96be-d9a4510cdab8-default_0.jpg?ts=1682077253385"
      ]
    };
  },
  created() {
    this.startSlideShow();
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    startSlideShow() {
      this.slideBackgroundImage();
      this.interval = setInterval(this.slideBackgroundImage, this.slideInterval);
    },
    slideBackgroundImage() {
      const currentIndex = this.images.indexOf(this.backgroundImage);
      let nextIndex = currentIndex + this.slideDirection;

      if (nextIndex >= this.images.length) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = this.images.length - 1;
      }

      this.backgroundImage = this.images[nextIndex];
    }
  },
  computed: {
    appStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      };
    }
  }
};
</script>

<style>

</style>
