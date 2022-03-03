<template>
  <div class="container-center-horizontal">
    <div class="page3-aboutus screen">
      <div class="overlap-group3-2">
        <div class="overlap-group-2">
          <img class="cl-bg1-11" :src="clBg111" /><img class="cl-bg1-13" :src="clBg113" /><img
            class="cl-bg1-12"
            :src="clBg112"
          /><img class="cl-bg1-14" :src="clBg114" />
          <div class="bg-fade-1"></div>
        </div>
        <div class="what-to-do animate-enter3" show-on-scroll>
          <div class="title-1 futura-medium-white-90px">{{ title1 }}</div>
        </div>
        <div class="overlap-group1-1 futura-medium-white-30px">
          <div class="infocoinlinecom-2">{{ infoCoinlineCom }}</div>
          <div class="coin-line-2">{{ coinline }}</div>
          <div class="text-3">{{ text3 }}</div>
        </div>
        <div class="surname futura-medium-white-30px animate-enter4">{{ surname }}</div>
        <div class="museums-brooklyn-mu futura-medium-white-30px">{{ museumsBrooklynMu }}</div>
        <img class="josh-miller-t0ke-eud-ofag-unsplash-1" :src="joshMillerT0KeeudofagUnsplash1" />
        <div class="coin-line-refers-t futura-medium-white-30px animate-enter5" show-on-scroll>
          {{ coinLineRefersT }}
        </div>
        <div class="history animate-enter6" show-on-scroll>
          <div class="title-2 futura-medium-white-90px">{{ title2 }}</div>
        </div>
        <img class="festival-1" :src="festival1" />
        <div class="back-contrast"></div>
        <div class="title-3 futura-medium-white-90px animate-enter7" show-on-scroll>{{ title3 }}</div>
        <div class="brooklyn-ny-is-loca futura-medium-white-30px">{{ brooklynNyIsLoca }}</div>
        <div class="welcome-to-coin-line futura-medium-white-30px animate-enter8" show-on-scroll>
          {{ welcomeToCoinLine }}
        </div>
        <img class="image-1" :src="image1" />
      </div>
      <div class="header-3">
        <div class="overlap-group2-1">
          <div class="about-us-2 galvji-bold-white-25px">{{ aboutUs }}</div>
          <router-link to="/page1-homepage" className="align-self-flex-start"
            ><img class="logo-2" :src="logo" /></router-link
          ><router-link to="/page2-shop">
            <div class="shop-2 galvji-bold-white-25px">{{ shop }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page3AboutUs",
  props: [
    "clBg111",
    "clBg113",
    "clBg112",
    "clBg114",
    "title1",
    "infoCoinlineCom",
    "coinline",
    "text3",
    "surname",
    "museumsBrooklynMu",
    "joshMillerT0KeeudofagUnsplash1",
    "coinLineRefersT",
    "title2",
    "festival1",
    "title3",
    "brooklynNyIsLoca",
    "welcomeToCoinLine",
    "image1",
    "aboutUs",
    "logo",
    "shop",
  ],
};
</script>

<style>
.page3-aboutus {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 2746px;
  overflow: hidden;
  width: 1440px;
}

.overlap-group3-2 {
  height: 3240px;
  position: relative;
  width: 1446px;
  z-index: 1;
}

.overlap-group-2 {
  height: 3240px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.cl-bg1-11 {
  height: 810px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 1620px;
  width: 1440px;
}

.cl-bg1-13 {
  height: 810px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 2430px;
  width: 1440px;
}

.cl-bg1-12 {
  height: 810px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.cl-bg1-14 {
  height: 810px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 810px;
  width: 1440px;
}

.bg-fade-1 {
  background-color: var(--loulou-2);
  height: 3072px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.what-to-do {
  height: 120px;
  left: 203px;
  opacity: 0;
  position: absolute;
  top: 1736px;
  width: 1061px;
}

.what-to-do.animate-enter3 {
  animation: animate-enter3-frames 0.7s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.title-1 {
  height: 120px;
  letter-spacing: 0;
  text-align: center;
  width: 1059px;
}

.overlap-group1-1 {
  align-items: flex-end;
  background-color: var(--loulou);
  display: flex;
  height: 75px;
  left: 0;
  min-width: 1440px;
  position: absolute;
  top: 2671px;
}

.infocoinlinecom-2 {
  letter-spacing: 0;
  margin-bottom: 3px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.coin-line-2 {
  letter-spacing: 0;
  margin-left: 121px;
  min-height: 58px;
  text-align: center;
  width: 355px;
}

.text-3 {
  letter-spacing: 0;
  margin-bottom: 3px;
  margin-left: 118px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.surname {
  left: 88px;
  letter-spacing: 0;
  opacity: 0;
  position: absolute;
  top: 2212px;
  width: 670px;
}

.surname.animate-enter4 {
  animation: animate-enter4-frames 1.4s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.museums-brooklyn-mu {
  left: 88px;
  letter-spacing: 0;
  position: absolute;
  top: 2397px;
  width: 670px;
}

.josh-miller-t0ke-eud-ofag-unsplash-1 {
  height: 664px;
  left: 839px;
  object-fit: cover;
  position: absolute;
  top: 1930px;
  width: 443px;
}

.coin-line-refers-t {
  left: 733px;
  letter-spacing: 0;
  opacity: 0;
  position: absolute;
  top: 1296px;
  width: 656px;
}

.coin-line-refers-t.animate-enter5 {
  animation: animate-enter5-frames 1.4s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.history {
  height: 120px;
  left: 357px;
  opacity: 0;
  position: absolute;
  top: 1049px;
  width: 771px;
}

.history.animate-enter6 {
  animation: animate-enter6-frames 0.6s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.title-2 {
  height: 120px;
  letter-spacing: 0;
  text-align: center;
  width: 769px;
}

.festival-1 {
  height: 911px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 92px;
  width: 1440px;
}

.back-contrast {
  background-color: #000000a6;
  height: 578px;
  left: 1px;
  position: absolute;
  top: 209px;
  width: 1439px;
}

.title-3 {
  left: 357px;
  letter-spacing: 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 345px;
}

.title-3.animate-enter7 {
  animation: animate-enter7-frames 0.7s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.brooklyn-ny-is-loca {
  left: 92px;
  letter-spacing: 0;
  position: absolute;
  top: 2006px;
  width: 620px;
}

.welcome-to-coin-line {
  left: 200px;
  letter-spacing: 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 544px;
  width: 1046px;
}

.welcome-to-coin-line.animate-enter8 {
  animation: animate-enter8-frames 1.4s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.image-1 {
  height: 388px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 1234px;
  width: 631px;
}

.header-3 {
  align-items: flex-start;
  display: flex;
  height: 92px;
  left: 0;
  min-width: 1444px;
  position: fixed;
  top: 0;
  z-index: 2;
}

.overlap-group2-1 {
  align-items: center;
  background-color: var(--loulou);
  display: flex;
  height: 92px;
  min-width: 1440px;
  padding: 4px 0;
}

.about-us-2 {
  letter-spacing: 0;
  margin-top: 10.02px;
  min-height: 38px;
  opacity: 0.5;
  text-align: center;
  width: 232px;
}

.logo-2 {
  align-self: flex-start;
  cursor: pointer;
  height: 83px;
  margin-left: 426px;
  object-fit: cover;
  transition: all 0.2s ease;
  width: 130px;
}

.logo-2:hover,
.shop-2:hover {
  opacity: 0.5;
}

.shop-2 {
  cursor: pointer;
  letter-spacing: 0;
  margin-left: 481px;
  margin-top: 0.03px;
  min-height: 32px;
  text-align: center;
  transition: all 0.2s ease;
  width: 130px;
}

@keyframes animate-enter4-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter8-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter7-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter3-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter6-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter5-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
