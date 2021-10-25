import React from 'react'
import styles from './DetailExpenseCard.module.css'

interface DetailExpenseCardProps {
  expense: IExpense
}

export const DetailExpenseCard: React.FC<DetailExpenseCardProps> = ({
  expense,
}) => {
  return (
    <article key={expense.id} className={styles.detailExpenseCard}>
      <div>
        <span>USER: {expense.userID}</span> <span>{expense.amount} €</span>
      </div>
      <div>
        <span>{expense.description}</span> <span>{expense.createdDate}</span>
      </div>
    </article>
  )
}
