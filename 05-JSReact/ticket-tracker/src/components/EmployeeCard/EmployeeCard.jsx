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
            <h3 className={styles.employeeName}>{name}</h3>
            <h5 className={styles.employeeRole}>{role}</h5>
            <TicketCounter />
        </div>
    )
}

export default EmployeeCard
