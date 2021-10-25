import React from 'react'
import { DetailExpenseCard } from '../DetailExpenseCard/DetailExpenseCard'
import styles from './DetailExpenseList.module.css'
interface DetailExpenseListProps {
  expenses: IExpense[]
}

export const DetailExpenseList: React.FC<DetailExpenseListProps> = ({
  expenses,
}) => {
  return (
    <div className={styles.detailExpenseList}>
      {expenses.map((expense) => (
        <DetailExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  )
}
