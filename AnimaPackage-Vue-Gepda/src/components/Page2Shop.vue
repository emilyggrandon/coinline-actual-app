<template>
  <div class="container-center-horizontal">
    <div class="page2-shop screen">
      <div class="overlap-group6">
        <div class="overlap-group">
          <img class="cl-bg1-2" :src="clBg12" /><img class="cl-bg1-3" :src="clBg13" /><img
            class="cl-bg1-4"
            :src="clBg14"
          /><img class="cl-bg1-5" :src="clBg15" />
          <div class="bg-fade"></div>
        </div>
        <div class="merchlist">
          <h1 class="title futura-medium-white-100px">{{ title }}</h1>
        </div>
        <div class="ticketlist">
          <div class="tickets futura-medium-white-100px">{{ tickets }}</div>
          <div class="overlap-group-container">
            <div class="ticket-container">
              <div class="ticket1"></div>
              <div class="standard-ticket-19999 futura-medium-white-50px" v-html="standardTicket19999"></div>
            </div>
            <div class="ticket-container-1">
              <div class="ticket2"></div>
              <div class="vip-ticket-39999 futura-medium-white-50px" v-html="vipTicket39999"></div>
            </div>
            <div class="overlap-group3">
              <div class="ticket3"></div>
              <div class="backstage-pass-69999 futura-medium-white-50px" v-html="backstagePass69999"></div>
            </div>
          </div>
        </div>
        <div class="overlap-group4 futura-medium-white-30px">
          <div class="infocoinlinecom">{{ infoCoinlineCom }}</div>
          <div class="coin-line">{{ coinline }}</div>
          <div class="text-1">{{ text1 }}</div>
        </div>
        <img class="x02-01-hat1-1" :src="x0201Hat11" /><img class="x02-03-shirt4-1" :src="x0203Shirt41" /><img
          class="x02-05-1"
          :src="x02051"
        /><img class="x02-04-sticker-1" :src="x0204Sticker1" /><img class="x02-06-1" :src="x02061" /><img
          class="x02-02-1"
          :src="x02021"
        />
        <div class="price futura-medium-white-40px">{{ price1 }}</div>
        <div class="price-1 futura-medium-white-40px">{{ price2 }}</div>
        <div class="price-2 futura-medium-white-40px">{{ price3 }}</div>
        <div class="price-3 futura-medium-white-40px">{{ price4 }}</div>
        <div class="price-4 futura-medium-white-40px">{{ price5 }}</div>
        <div class="price-5 futura-medium-white-40px">{{ price6 }}</div>
      </div>
      <div class="header">
        <div class="overlap-group5">
          <div class="header-1"></div>
          <div class="shop galvji-bold-white-25px">{{ shop }}</div>
          <router-link to="/page1-homepage"><img class="logo" :src="logo" /></router-link
          ><router-link to="/page3-aboutus">
            <div class="about-us galvji-bold-white-25px">{{ aboutUs }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page2Shop",
  props: [
    "clBg12",
    "clBg13",
    "clBg14",
    "clBg15",
    "title",
    "tickets",
    "standardTicket19999",
    "vipTicket39999",
    "backstagePass69999",
    "infoCoinlineCom",
    "coinline",
    "text1",
    "x0201Hat11",
    "x0203Shirt41",
    "x02051",
    "x0204Sticker1",
    "x02061",
    "x02021",
    "price1",
    "price2",
    "price3",
    "price4",
    "price5",
    "price6",
    "shop",
    "logo",
    "aboutUs",
  ],
};
</script>

<style>
.page2-shop {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 2294px;
  overflow: hidden;
  width: 1440px;
}

.overlap-group6 {
  height: 3232px;
  position: relative;
  width: 1446px;
  z-index: 1;
}

.overlap-group {
  height: 3232px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.cl-bg1-2 {
  height: 808px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 808px;
  width: 1440px;
}

.cl-bg1-3 {
  height: 808px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.cl-bg1-4 {
  height: 808px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 1616px;
  width: 1440px;
}

.cl-bg1-5 {
  height: 808px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 2424px;
  width: 1440px;
}

.bg-fade {
  background-color: var(--loulou-2);
  height: 3072px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.merchlist {
  display: flex;
  height: 133px;
  left: 545px;
  position: absolute;
  top: 873px;
  width: 359px;
}

.title {
  height: 133px;
  letter-spacing: 0;
  text-align: center;
  width: 357px;
}

.ticketlist {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 136px;
  min-height: 519px;
  position: absolute;
  top: 169px;
  width: 1181px;
}

.tickets {
  letter-spacing: 0;
  margin-right: 7px;
  min-height: 133px;
  min-width: 380px;
  text-align: center;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-right: 8px;
  margin-top: 74px;
  min-width: 1173px;
}

.ticket-container {
  border-radius: 26px;
  height: 312px;
  position: relative;
  width: 314px;
}

.ticket1 {
  background-color: #3a91ef;
  border-radius: 26px;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  height: 312px;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 314px;
}

.ticket1:hover,
.ticket2:hover,
.ticket3:hover,
.x02-01-hat1-1:hover,
.x02-03-shirt4-1:hover,
.x02-05-1:hover,
.x02-04-sticker-1:hover,
.x02-06-1:hover,
.x02-02-1:hover {
  transform: scale(1.1);
}

.standard-ticket-19999 {
  left: 35px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 55px;
  width: 228px;
}

.ticket-container-1 {
  border-radius: 24px;
  height: 312px;
  margin-left: 115px;
  position: relative;
  width: 315px;
}

.ticket2 {
  background-color: var(--west-side);
  border-radius: 24px;
  cursor: pointer;
  height: 312px;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 315px;
}

.vip-ticket-39999 {
  left: 55px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 53px;
  width: 203px;
}

.overlap-group3 {
  border-radius: 25px;
  height: 312px;
  margin-left: 115px;
  position: relative;
  width: 314px;
}

.ticket3 {
  background-color: #e65084;
  border-radius: 25px;
  cursor: pointer;
  height: 312px;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 314px;
}

.backstage-pass-69999 {
  left: 29px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 54px;
  width: 256px;
}

.overlap-group4 {
  align-items: flex-end;
  background-color: var(--loulou);
  display: flex;
  height: 75px;
  left: 0;
  min-width: 1440px;
  position: absolute;
  top: 2219px;
}

.infocoinlinecom {
  letter-spacing: 0;
  margin-bottom: 3px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.coin-line {
  letter-spacing: 0;
  margin-left: 121px;
  min-height: 58px;
  text-align: center;
  width: 355px;
}

.text-1 {
  letter-spacing: 0;
  margin-bottom: 3px;
  margin-left: 118px;
  min-height: 58px;
  text-align: center;
  width: 423px;
}

.x02-01-hat1-1 {
  cursor: pointer;
  height: 364px;
  left: 539px;
  object-fit: cover;
  position: absolute;
  top: 1104px;
  transition: all 0.2s ease;
  width: 366px;
}

.x02-03-shirt4-1 {
  cursor: pointer;
  height: 367px;
  left: 537px;
  object-fit: cover;
  position: absolute;
  top: 1670px;
  transition: all 0.2s ease;
  width: 367px;
}

.x02-05-1 {
  cursor: pointer;
  height: 367px;
  left: 992px;
  object-fit: cover;
  position: absolute;
  top: 1669px;
  transition: all 0.2s ease;
  width: 367px;
}

.x02-04-sticker-1 {
  cursor: pointer;
  height: 366px;
  left: 83px;
  object-fit: cover;
  position: absolute;
  top: 1671px;
  transition: all 0.2s ease;
  width: 367px;
}

.x02-06-1 {
  cursor: pointer;
  height: 363px;
  left: 85px;
  object-fit: cover;
  position: absolute;
  top: 1106px;
  transition: all 0.2s ease;
  width: 365px;
}

.x02-02-1 {
  cursor: pointer;
  height: 376px;
  left: 990px;
  object-fit: cover;
  position: absolute;
  top: 1104px;
  transition: all 0.2s ease;
  width: 375px;
}

.price {
  left: 605px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 2082px;
  width: 229px;
}

.price-1 {
  left: 170px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 2079px;
  width: 187px;
}

.price-2 {
  left: 1062px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 1501px;
  width: 227px;
}

.price-3 {
  left: 1065px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 2082px;
  width: 226px;
}

.price-4 {
  left: 179px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 1497px;
  width: 177px;
}

.price-5 {
  left: 613px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 1505px;
  width: 213px;
}

.header {
  align-items: flex-start;
  display: flex;
  height: 101px;
  left: 0;
  min-width: 1444px;
  position: fixed;
  top: 0;
  z-index: 2;
}

.overlap-group5 {
  height: 101px;
  margin-left: -1px;
  position: relative;
  width: 1441px;
}

.header-1 {
  background-color: var(--loulou);
  height: 101px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 1440px;
}

.shop {
  left: 1270px;
  letter-spacing: 0;
  opacity: 0.5;
  position: absolute;
  text-align: center;
  text-shadow: 0px 4px 4px #00000040;
  top: 35px;
  width: 130px;
}

.logo {
  cursor: pointer;
  height: 83px;
  left: 656px;
  object-fit: cover;
  position: absolute;
  top: 9px;
  transition: all 0.2s ease;
  width: 130px;
}

.logo:hover,
.about-us:hover {
  opacity: 0.5;
}

.about-us {
  -webkit-text-stroke: 1px var(--black);
  cursor: pointer;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  text-shadow: 0px 4px 4px #00000040;
  top: 36px;
  transition: all 0.2s ease;
  width: 232px;
}
</style>
