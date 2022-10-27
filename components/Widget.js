import React from 'react'
import styles from '../styles/widget.module.css'

const Widget = (props) => {
  return (
    <div className={styles.widget}>
        <div className={styles.left}>
            <span className={styles.title}>{props.type}</span>
            <span className={styles.counter}>{props.value}</span>
            <span className={styles.link}>See all {props.type}</span>
        </div>
        <div className={styles.right}>
            <div className={styles.percentage}>
                <p>^</p>
                20%
            </div>
            <span className={styles.icon}></span>
        </div>
    </div>
  )
}

export default Widget