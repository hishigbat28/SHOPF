import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { useState } from 'react'
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  {
    props.orders.forEach((el) => (summa += Number.parseFloat(el.price)))
  }

  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="summa">
        Нийт үнийн дүн {new Intl.NumberFormat().format(summa)} ₮
      </p>
    </div>
  )
}
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Бараа алга...</h2>
    </div>
  )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div>
        <span className="logo">Гэрийн тавилгууд</span>
        <ul className="nav">
          <li>Бидний тухай</li>
          <li>Контакт</li>
          <li>Кабинет</li>
        </ul>
        <FaBasketShopping
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
