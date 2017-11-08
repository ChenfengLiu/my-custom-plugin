import { Reaction } from "/client/api";
import { Shops } from "/lib/collections";
import { PromoContainer } from "./index";

Template.MyCustomPromo.onCreated(function () {
  this.settings = ReactiveVar();

  // Initialize settings value for promo component
  this.autorun(() => {
    const promo = Shops.find({});
    console.log(promo);
  });
});

Template.MyCustomPromo.helpers({
  PromoContainer() {
    return PromoContainer;
  }
});
