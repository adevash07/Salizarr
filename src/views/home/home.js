import React from "react";
import Kitchen from "../home/homeLayouts/homeKitchen/Kitchen";
import Content from "../home/homeLayouts/content/Content";
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
      <Kitchen ValueList={ValueList} />
      <Popular data={pizza} />
      <Content />
    </div>
  );
}
