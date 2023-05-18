import Image from "next/image";

export default function List() {
  let goods = ["Tomatos", "Pasta", "Banana"];
  let newarrpay = [2, 3, 4];
  newarrpay.map((a, i) => {
    return 10;
  });

  return (
    <div>
      <h4 className="text-title">상품목록</h4>
      {goods.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} alt="상품이지미" className="goods-img" />
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
