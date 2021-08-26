import React, { useState } from 'react'
import styles from './TicketCounter.module.scss'

const TicketCounter = () => {
    let [counter, updateCounter] = useState(0);

    return (
        <div className={styles.counterContainer}>
            <h5>Counter</h5>
            <span>{ counter }</span><br></br>
            <button onClick={() => updateCounter(counter+1)}>+</button>
            <button onClick={() => updateCounter(counter-1)}>-</button>
        </div>
    )
}

export default TicketCounter
