import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import Link from "next/link";
const DetailOrder = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders, auth } = state;

  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const newArr = orders.filter((order) => order._id === router.query.id);
    setOrderDetail(newArr);
  }, [orders]);

  return (
    <div className="my-3">
      <Head>
        <title>Detail Order</title>
      </Head>
      <div>
        <button className="btn btn-dark" onClick={() => router.back()}>
          <i className="fas fa-long-arrow-alt-left" aria-hidden></i> Go Back
        </button>
      </div>
      <div style={{ maxWidth: "600px", margin: "20px auto" }}>
        {orderDetail.map((order) => (
          <div key={order._id} className="text-uppercase my-3">
            <h2 className="text-break">Order {order._id}</h2>
            <div className="mt-4 text-secondary">
              <h4>Shipping</h4>
              <p>Name: {order.user.name}</p>
              <p>Email: {order.user.email}</p>
              <p>Address: {order.address}</p>
              <p>Mobile: {order.mobile}</p>

              <div
                className={`alert ${
                  order.delivered ? "alert-success" : "alert-danger"
                } d-flex justify-content-between align-items-center`}
                role="alert">
                {order.delivered
                  ? `Delivered on ${order.updateAt}`
                  : "Not Delivered"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailOrder;
