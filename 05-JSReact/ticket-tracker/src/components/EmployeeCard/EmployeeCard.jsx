import React from 'react'
import styles from './EmployeeCard.module.scss'
import TicketCounter from '../TicketCounter'

const EmployeeCard = (props) => {

    const {
        name,
        role
    } = props.employee

    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <h5>{role}</h5>
            <TicketCounter />
        </div>
    )
}

export default EmployeeCard
