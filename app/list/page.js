'use client'

import { useState } from "react";

export default function List() {
  let goods = ["Tomatos", "Pasta", "Banana"];
  let [num, numChange] = useState([10,20,40])
  return (
    <div>
      <h4 className="text-title">상품목록</h4>

      {goods.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} alt="상품이지미" className="goods-img" />
            <h4>{product} $40</h4>

            <button onClick={()=>{
             let copy = [...num]
             copy[i]--
             numChange(copy)
            }}>-</button>

            <span>{num[i]}</span>

            <button onClick={()=>{
             let copy = [...num]
             copy[i]++
             numChange(copy)
            }}>+</button>

          </div>
        );
      })}
    </div>
  );
}
