import React from 'react'
import styles from './checkout.module.css'
import { useState, useEffect } from 'react';
function CheckoutPaymentDetails() {
    let [PaymentToMake, setPaymentToMake] = useState(0);
    useEffect(() => {
      let cartdata= JSON.parse(localStorage.getItem("cart"))|| [];
      let Data=0
       cartdata?.map((el)=>{
         Data+=(Number(el.qty)* Number( el.price));
       })
       
        setPaymentToMake(Data);
      }, []);

  return (
    <>
          <div className={styles.PaymentDetailsSubDiv}>
            <div>
              <div>
                <p>Sub Total</p>
                <p>₹ {PaymentToMake}</p>
              </div>
              <div style={{ color: "rgb(252, 100, 134)" }}>
                <p>Discount</p>
                <p>-₹ 30</p>
              </div>
              <div>
                <p>Donation</p>
                <p>₹ 10</p>
              </div>
            </div>
            <div className={styles.CheckoutTotal}>
              <p>Total</p>
              <p>₹ {PaymentToMake-40}</p>
            </div>
          </div>
    </>
  )
}

export default CheckoutPaymentDetails