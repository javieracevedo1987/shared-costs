import React from 'react'
import { DetailExpenseCard } from '../DetailExpenseCard/DetailExpenseCard'

interface DetailExpenseListProps {
  expenses: IExpense[]
}

export const DetailExpenseList: React.FC<DetailExpenseListProps> = ({
  expenses,
}) => {
  return (
    <div className="detailExpenseList">
      {expenses.map((expense) => (
        <DetailExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  )
}
