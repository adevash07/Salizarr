import React from "react";
import Kitchen from "../home/homeLayouts/homeKitchen/Kitchen";
import Header from "../../components/header/Header";
import Popular from "./homeLayouts/popular/Popular";
import { pizza } from "data/pizza";
let ValueList = [
  "Welcome To The Kitchen Arena",
  "Order Mouth-eatery Dishes",
  "Select Ingredient for your dish below",
];
export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Kitchen ValueList={ValueList} />
      <Popular data={pizza} />
    </div>
  );
}
