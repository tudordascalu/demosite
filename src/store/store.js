import Vue from 'vue'
import Vuex from 'vuex';

import _ from 'lodash';

Vue.use(Vuex);

const state = {
    basket: [],
    products: [
      { 
        code: 'A',
        name: "ROSE GOLD",
        boximg: "/static/img/products/watches/box-img.png",
        image2: "/static/img/products/watches/2.png",
        image3: "/static/img/products/watches/3.png",
        image4: "/static/img/products/watches/4.png",
        image: "/static/img/products/watches/1.png",
        category: "watch",
        p1:" MELBOURNE MINIMAL",
        p2: "$95.00",
        p3: "Pretty in peach.",
        p4: "Glamour without the glitz.",
        p5: "Neutral tones with a brushed rose gold casing and peach Italian leather band."
      },
      {
        code: 'B',
        name: "SUNGLASSES",
        boximg: "/static/img/products/sunglasses/box-img.png",
        image2: "/static/img/products/sunglasses/2.jpeg",
        image3: "/static/img/products/sunglasses/3.jpg",
        image: "/static/img/products/sunglasses/1.jpg",
        image4: "",
        category: "sunglasses",
        p1:" MELBOURNE MINIMAL",
        p2: "$95.00",
        p3: "Pretty in peach.",
        p4: "Wide Fit Oxford Brogue Sunglasses In Burgundy Leather.",
        p5: ""
      },
      {
        code: 'C',
        name: "BROGUE SHOES",
        boximg: "/static/img/products/shoes/box-img.png",
        image2: "/static/img/products/shoes/2.png",
        image3: "/static/img/products/shoes/3.png",
        image4: "/static/img/products/shoes/4.png",
        image: "/static/img/products/shoes/1.png",
        category: "shoes",
        p1:" MELBOURNE MINIMAL",
        p2: "$95.00",
        p3: "Color: Burgundy",
        p4: "Wide Fit Oxford Brogue Sunglasses In Burgundy Leather.",
        p5: ""
      }
    ]
  };

const mutations = {
    ADD_TO_BASKET(state, productCode) {
        console.log('this is the '+ productCode);
        // is it in basket
        var itemInBasket = _.find(this.state.basket, { code: productCode });
  
        if(itemInBasket === undefined) {
          // if no: add to basket with 1
          console.log(productCode);
          this.state.basket.push({
            "code": productCode, "qty": 1
          });
        } else {
          // if yes: append quantity 
          itemInBasket.qty += 1;
        }
    },
    REMOVE_FROM_BASKET(state, productCode) {
      delete this.state.basket.productCode;
    }
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getBasket(state) {
    return state.basket;
  }
}

var store = new Vuex.Store({
    state,
    mutations,
    getters
});

export default store;