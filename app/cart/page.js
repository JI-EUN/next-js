import text from './../data.js'

export default function Cart() {
  let cart = ['Tomata','pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <p>{text}</p>
      <CartItem name={cart[0]}/>
      <CartItem name={cart[1]}/>
      <Banner cardname="삼성"/>
      <Banner cardname="현대"/>
      <Btn color="red"/>
      <Btn color="blue"/>
    </div>
  );
}

function Banner(props){
  return <h5>{props.cardname}카드 결제 행사중</h5>
}

function Btn (props){
  return <button style={{background:props.color}}>버튼</button>
}

function CartItem(props){
  return (
    <div className="cart-item">
        <p>{props.name}</p>
        <p>$40</p>
        <p>1개</p>
    </div>
  )
}