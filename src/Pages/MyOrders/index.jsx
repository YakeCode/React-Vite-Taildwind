import { useContext } from "react"
import { Link } from 'react-router-dom'
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../context"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  const orders = context.order

  return (
    <Layout>
      <div className='bg-yellow-400 mb-5'>My Orders</div>
      {
        orders.length > 0 ? (
          orders.map((order, index) => (
            <Link key={index} to={`/my-orders/${order.id}${index}`}>
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        ) : (
          <p>No orders found.</p>
        )
      }
    </Layout>
  )
}

export default MyOrders
