import React from 'react'

interface DetailExpenseFormProps {
  handleForm: Function
}

export const DetailExpenseForm: React.FC<DetailExpenseFormProps> = ({
  handleForm,
}) => {
  const [description, setDescription] = React.useState<string>('')
  const [amount, setAmount] = React.useState<number>(0)

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value)
  }

  const isValidForm = () => !!description && amount > 0

  return (
    <div className="detailExpenseForm">
      <form onSubmit={(e) => handleForm(e, { description, amount })}>
        <div className="form-group">
          <input
            type="text"
            name="description"
            onChange={handleDescription}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            onChange={handleAmount}
            placeholder="Amount"
          />
        </div>
        <button className="button" disabled={!isValidForm()}>
          ADD
        </button>
      </form>
    </div>
  )
}
