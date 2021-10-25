import React from 'react'

interface DetailExpenseCardProps {
  expense: IExpense
}

export const DetailExpenseCard: React.FC<DetailExpenseCardProps> = ({
  expense,
}) => {
  return (
    <article key={expense.id}>
      <div>
        USER ID {expense.userID} - {expense.amount}
      </div>
      <div>
        {expense.description} - {expense.createdDate}
      </div>
    </article>
  )
}
