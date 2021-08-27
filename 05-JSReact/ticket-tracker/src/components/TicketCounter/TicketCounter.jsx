import React, { useState } from 'react'
import styles from './TicketCounter.module.scss'

const TicketCounter = () => {
    let [counter, updateCounter] = useState(0);

    return (
        <div className={styles.counterContainer}>
            <h6 className={styles.counterTitle}>Tickets Completed:</h6>
            <section className={styles.buttons}>
                <button className={styles.button} onClick={() => updateCounter(counter+1)}>+</button>
                <span className={styles.counterValue}>{ counter }</span>
                <button className={styles.button} onClick={() => updateCounter(counter-1)}>-</button>
            </section>
        </div>
    )
}

export default TicketCounter
