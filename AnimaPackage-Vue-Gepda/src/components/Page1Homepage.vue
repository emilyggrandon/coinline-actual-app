<template>
  <div class="container-center-horizontal">
    <div class="page1-homepage screen">
      <div class="overlap-group13">
        <img class="bg" :src="bg" />
        <div class="cast animate-enter" show-on-scroll>
          <div class="artists futura-medium-white-100px">{{ artists }}</div>
        </div>
        <div class="overlap-group-1">
          <img class="hero-image" :src="heroImage" />
          <div class="widget-wrapper"><bg :src="bgProps.src" /></div>
          <img class="front animate-enter1" :src="front" />
        </div>
        <router-link to="/page2-shop">
          <div class="button animate-enter2">
            <div class="overlap-group1">
              <div class="get-tickets-button-text">{{ getticketsButtontext }}</div>
            </div>
          </div></router-link
        >
        <div class="overlap-group2" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
          <img class="rectangle-6-3" :src="rectangle61" />
          <div class="foofighters futura-medium-white-48px">{{ foofighters1 }}</div>
        </div>
        <img class="x05-mgmt-1" :src="x05Mgmt1" />
        <div class="overlap-group3-1" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
          <img class="rectangle-6" :src="rectangle62" />
          <div class="foofighters-1 futura-medium-white-48px" v-html="foofighters2"></div>
        </div>
        <img class="x08-foofighters-1" :src="x08Foofighters1" />
        <div class="overlap-group4-1" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
          <img class="rectangle-6-1" :src="rectangle63" />
          <div class="artic-monkeys futura-medium-white-48px" v-html="articMonkeys1"></div>
        </div>
        <img class="x02-daftpunk-1" :src="x02Daftpunk1" />
        <div class="overlap-group5-1" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
          <img class="rectangle-6-2" :src="rectangle64" />
          <div class="the-chemical-brothers futura-medium-white-48px" v-html="theChemicalBrothers"></div>
        </div>
        <img class="x06-thechemicalbrothers-1" :src="x06Thechemicalbrothers1" />
        <div class="overlap-group6-1" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
          <img class="rectangle-6-4" :src="rectangle65" />
          <div class="artic-monkeys-1 futura-medium-white-48px" v-html="articMonkeys2"></div>
        </div>
        <img class="x07-articmonkeys-1" :src="x07Articmonkeys1" />
        <div class="overlap-group7" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
          <img class="rectangle-6-2" :src="rectangle66" />
          <div class="the-strokes futura-medium-white-48px" v-html="theStrokes"></div>
        </div>
        <img class="x03-thestrokes-1" :src="x03Thestrokes1" />
        <div class="overlap-group8" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
          <img class="rectangle-6" :src="rectangle67" />
          <div class="rhcp futura-medium-white-48px" v-html="rhcp"></div>
        </div>
        <img class="x04-redhotchilipeppers-1" :src="x04Redhotchilipeppers1" />
        <div class="overlap-group9" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
          <img class="rectangle-6-5" :src="rectangle68" />
          <div class="star-bomb futura-medium-white-48px" v-html="starBomb"></div>
        </div>
        <img class="x01-starbomb-1" :src="x01Starbomb1" />
        <div class="overlap-group10" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
          <img class="rectangle-6-1" :src="rectangle69" />
          <div class="cage-the-elephan futura-medium-white-48px" v-html="cagetheelephan"></div>
        </div>
        <img class="cagetheelephant" :src="cagetheelephant" />
        <div class="overlap-group11 futura-medium-white-30px">
          <div class="infocoinlinecom-1">{{ infoCoinlineCom }}</div>
          <div class="coin-line-1">{{ coinline }}</div>
          <div class="text-2">{{ text2 }}</div>
        </div>
      </div>
      <div class="header-2">
        <div class="overlap-group12">
          <router-link to="/page3-aboutus">
            <div class="about-us-1 galvji-bold-white-25px">{{ aboutUs }}</div> </router-link
          ><img class="logo-1" :src="logo" /><router-link to="/page2-shop">
            <div class="shop-1 galvji-bold-white-25px">{{ shop }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bg from "./Bg";
export default {
  name: "Page1Homepage",
  components: {
    Bg,
  },
  props: [
    "bg",
    "artists",
    "heroImage",
    "front",
    "getticketsButtontext",
    "overlapGroup2",
    "rectangle61",
    "foofighters1",
    "x05Mgmt1",
    "overlapGroup3",
    "rectangle62",
    "foofighters2",
    "x08Foofighters1",
    "overlapGroup4",
    "rectangle63",
    "articMonkeys1",
    "x02Daftpunk1",
    "overlapGroup5",
    "rectangle64",
    "theChemicalBrothers",
    "x06Thechemicalbrothers1",
    "overlapGroup6",
    "rectangle65",
    "articMonkeys2",
    "x07Articmonkeys1",
    "overlapGroup7",
    "rectangle66",
    "theStrokes",
    "x03Thestrokes1",
    "overlapGroup8",
    "rectangle67",
    "rhcp",
    "x04Redhotchilipeppers1",
    "overlapGroup9",
    "rectangle68",
    "starBomb",
    "x01Starbomb1",
    "overlapGroup10",
    "rectangle69",
    "cagetheelephan",
    "cagetheelephant",
    "infoCoinlineCom",
    "coinline",
    "text2",
    "aboutUs",
    "logo",
    "shop",
    "bgProps",
  ],
};
</script>

<style>
.page1-homepage {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 2650px;
  overflow: hidden;
  width: 1440px;
}

.overlap-group13 {
  height: 3252px;
  margin-left: -4px;
  margin-top: -297px;
  position: relative;
  width: 1450px;
  z-index: 1;
}

.bg {
  height: 3252px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1448px;
}

.cast {
  height: 133px;
  left: 542px;
  opacity: 0;
  position: absolute;
  top: 1380px;
  width: 380px;
}

.cast.animate-enter {
  animation: animate-enter-frames 0.5s ease-in 0s 1 normal forwards;
  opacity: 0;
}

.artists {
  height: 133px;
  letter-spacing: 0;
  text-align: center;
  width: 378px;
}

.overlap-group-1 {
  height: 928px;
  left: 4px;
  position: absolute;
  top: 398px;
  width: 1440px;
}

.hero-image {
  height: 928px;
  left: 1px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1439px;
}

.widget-wrapper {
  align-items: flex-start;
  display: flex;
  height: 927px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 1439px;
}

.front {
  display: block;
  height: 94px;
  left: 482px;
  opacity: 0;
  position: absolute;
  top: 282px;
  width: 490px;
}

.front.animate-enter1 {
  animation: animate-enter1-frames 1s ease-in-out 0s 1 normal forwards;
  display: block;
  opacity: 0;
}

.button {
  cursor: pointer;
  height: 92px;
  left: 503px;
  opacity: 0;
  position: absolute;
  top: 838px;
  transition: all 0.2s ease;
  width: 440px;
}

.button.animate-enter2 {
  animation: animate-enter2-frames 2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.button:hover {
  transform: scale(1.2);
}

.overlap-group1 {
  align-items: flex-start;
  background-color: var(--west-side);
  border-radius: 24px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 92px;
  justify-content: flex-end;
  min-width: 438px;
  padding: 14.3px 22.2px;
}

.get-tickets-button-text {
  color: var(--white);
  font-family: var(--font-family-futura-medium);
  font-size: 60px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 60px;
  min-height: 56px;
  text-align: center;
  white-space: nowrap;
  width: 391px;
}

.overlap-group2 {
  background-position: 50% 50%;
  background-size: cover;
  height: 350px;
  left: 556px;
  position: absolute;
  top: 1567px;
  width: 350px;
}

.rectangle-6-3 {
  height: 346px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 346px;
}

.foofighters {
  left: 97px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 134px;
  width: 156px;
}

.x05-mgmt-1 {
  cursor: pointer;
  height: 350px;
  left: 556px;
  object-fit: cover;
  position: absolute;
  top: 1567px;
  transition: all 0.2s ease;
  width: 350px;
}

.x05-mgmt-1:hover,
.x08-foofighters-1:hover,
.x02-daftpunk-1:hover,
.x06-thechemicalbrothers-1:hover,
.x07-articmonkeys-1:hover,
.x03-thestrokes-1:hover,
.x04-redhotchilipeppers-1:hover,
.x01-starbomb-1:hover,
.cagetheelephant:hover {
  opacity: 0;
}

.overlap-group3-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 351px;
  left: 962px;
  position: absolute;
  top: 1979px;
  width: 351px;
}

.rectangle-6 {
  height: 348px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 348px;
}

.foofighters-1 {
  left: 91px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 112px;
}

.x08-foofighters-1 {
  cursor: pointer;
  height: 351px;
  left: 962px;
  object-fit: cover;
  position: absolute;
  top: 1979px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group4-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 351px;
  left: 555px;
  position: absolute;
  top: 2391px;
  width: 351px;
}

.rectangle-6-1 {
  height: 348px;
  left: 1px;
  position: absolute;
  top: 2px;
  width: 348px;
}

.artic-monkeys {
  left: 124px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 101px;
}

.x02-daftpunk-1 {
  cursor: pointer;
  height: 351px;
  left: 555px;
  object-fit: cover;
  position: absolute;
  top: 2391px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group5-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 351px;
  left: 135px;
  position: absolute;
  top: 1978px;
  width: 351px;
}

.rectangle-6-2 {
  height: 347px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 347px;
}

.the-chemical-brothers {
  left: 46px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 82px;
  width: 259px;
}

.x06-thechemicalbrothers-1 {
  cursor: pointer;
  height: 352px;
  left: 135px;
  object-fit: cover;
  position: absolute;
  top: 1978px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group6-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 356px;
  left: 962px;
  position: absolute;
  top: 2391px;
  width: 351px;
}

.rectangle-6-4 {
  height: 352px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 347px;
}

.artic-monkeys-1 {
  left: 77px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 114px;
}

.x07-articmonkeys-1 {
  cursor: pointer;
  height: 356px;
  left: 962px;
  object-fit: cover;
  position: absolute;
  top: 2391px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group7 {
  background-position: 50% 50%;
  background-size: cover;
  height: 351px;
  left: 135px;
  position: absolute;
  top: 1567px;
  width: 351px;
}

.the-strokes {
  left: 96px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 108px;
}

.x03-thestrokes-1 {
  cursor: pointer;
  height: 351px;
  left: 135px;
  object-fit: cover;
  position: absolute;
  top: 1567px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group8 {
  background-position: 50% 50%;
  background-size: cover;
  height: 350px;
  left: 964px;
  position: absolute;
  top: 1567px;
  width: 350px;
}

.rhcp {
  left: 33px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 102px;
}

.x04-redhotchilipeppers-1 {
  cursor: pointer;
  height: 350px;
  left: 964px;
  object-fit: cover;
  position: absolute;
  top: 1567px;
  transition: all 0.2s ease;
  width: 350px;
}

.overlap-group9 {
  background-position: 50% 50%;
  background-size: cover;
  height: 351px;
  left: 135px;
  position: absolute;
  top: 2391px;
  width: 351px;
}

.rectangle-6-5 {
  height: 348px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 347px;
}

.star-bomb {
  left: 113px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 111px;
}

.x01-starbomb-1 {
  cursor: pointer;
  height: 351px;
  left: 135px;
  object-fit: cover;
  position: absolute;
  top: 2391px;
  transition: all 0.2s ease;
  width: 351px;
}

.overlap-group10 {
  background-position: 50% 50%;
  background-size: cover;
  height: 350px;
  left: 558px;
  position: absolute;
  top: 1979px;
  width: 350px;
}

.cage-the-elephan {
  left: 80px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 74px;
}

.cagetheelephant {
  cursor: pointer;
  height: 350px;
  left: 558px;
  object-fit: cover;
  position: absolute;
  top: 1979px;
  transition: all 0.2s ease;
  width: 350px;
}

.overlap-group11 {
  align-items: flex-end;
  background-color: var(--loulou);
  display: flex;
  height: 75px;
  left: 4px;
  min-width: 1440px;
  position: absolute;
  top: 2872px;
}

.infocoinlinecom-1 {
  letter-spacing: 0;
  margin-bottom: 3px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.coin-line-1 {
  letter-spacing: 0;
  margin-left: 121px;
  min-height: 58px;
  text-align: center;
  width: 355px;
}

.text-2 {
  letter-spacing: 0;
  margin-bottom: 3px;
  margin-left: 118px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.header-2 {
  align-items: flex-start;
  display: flex;
  height: 101px;
  left: 0;
  min-width: 1444px;
  position: fixed;
  top: 0;
  z-index: 2;
}

.overlap-group12 {
  align-items: center;
  background-color: var(--loulou);
  display: flex;
  height: 101px;
  min-width: 1440px;
}

.about-us-1 {
  cursor: pointer;
  letter-spacing: 0;
  margin-top: 11.02px;
  min-height: 38px;
  text-align: center;
  transition: all 0.2s ease;
  width: 232px;
}

.about-us-1:hover,
.shop-1:hover {
  opacity: 0.5;
}

.logo-1 {
  height: 83px;
  margin-left: 422px;
  object-fit: cover;
  width: 130px;
}

.shop-1 {
  cursor: pointer;
  letter-spacing: 0;
  margin-left: 485px;
  margin-top: 1.03px;
  min-height: 32px;
  text-align: center;
  transition: all 0.2s ease;
  width: 130px;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
