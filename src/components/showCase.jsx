import React from 'react'
import styles from "./../scss/showcase.module.scss";
import airplane from '/airplane.jpg'

function ShowCase() {
  return (
    <div className={styles.first}>
        <div className={styles.second}>
        <h1>LOGISTICS</h1>
        <div className={styles.cards}>
            <div className={styles.card}>
              <img src={airplane} alt="udne wala jahaz" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, vero quasi! Magni debitis, voluptatem velit cum totam repellendus deleniti architecto placeat, nostrum nobis ipsa quam natus, corporis saepe iste dignissimos.
              </p>
            </div>
            <div className={styles.card}>
              <img src={airplane} alt="udne wala jahaz" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, vero quasi! Magni debitis, voluptatem velit cum totam repellendus deleniti architecto placeat, nostrum nobis ipsa quam natus, corporis saepe iste dignissimos.
              </p>
            </div>
            <div className={styles.card}>
              <img src={airplane} alt="udne wala jahaz" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, vero quasi! Magni debitis, voluptatem velit cum totam repellendus deleniti architecto placeat, nostrum nobis ipsa quam natus, corporis saepe iste dignissimos.
              </p>
            </div>
            <div className={styles.card}>
              <img src={airplane} alt="udne wala jahaz" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, vero quasi! Magni debitis, voluptatem velit cum totam repellendus deleniti architecto placeat, nostrum nobis ipsa quam natus, corporis saepe iste dignissimos.
              </p>
            </div>
            <div className={styles.card}>
              <img src={airplane} alt="udne wala jahaz" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, vero quasi! Magni debitis, voluptatem velit cum totam repellendus deleniti architecto placeat, nostrum nobis ipsa quam natus, corporis saepe iste dignissimos.
              </p>
            </div>
            

        </div>
        </div>
    </div>
  )
}

export default ShowCase