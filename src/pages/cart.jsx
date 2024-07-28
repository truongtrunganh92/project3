import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/cart-tile"

export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)
    const { cart } = useSelector(state => state)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])
    console.log(cart, totalCart)
    return <div>
        {
            cart && cart.length ? (
                <>
                    <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6x1 mx-auto">
                        <div className="flex flex-col justify-center items-center p-3">
                            {cart.map(cartItem => <CartTile cartItem={cartItem} />)}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                        <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                        <p className="text-gray-800 font-bold">Total Item</p>
                        <span> {cart.length}</span>
                        <p className="text-gray-800 font-bold">Total Amonut</p>
                        <span> {totalCart}</span>
                    </div>
                </>) : (<div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                    <Link to={'/'}>
                        <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">SHOP NOW</button>
                    </Link>
                </div>)
        }
    </div>
}