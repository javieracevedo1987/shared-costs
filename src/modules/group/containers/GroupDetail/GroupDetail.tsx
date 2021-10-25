import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { ModalBox } from '../../../../shared/components/ModalBox/ModalBox'
import { DetailExpenseForm } from '../../components/DetailExpenseForm/DetailExpenseForm'
import { DetailExpenseList } from '../../components/DetailExpenseList/DetailExpenseList'
import { addExpenseAsync, getExpensesAsync } from '../../store/actions'
import styles from './GroupDetail.module.css'

export const GroupDetail: React.FC = () => {
  const { id: groupID } = useParams<{ id: string }>()
  const [showModalExpense, setShowModalExpense] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { getUser } = useAuth()
  const { id: userID } = getUser()
  const expenses = useSelector((state: IRootState) => state.group.expenses)

  useEffect(() => {
    if (!expenses.length) {
      dispatch(getExpensesAsync(+groupID, userID))
    }
  }, [expenses, dispatch, groupID, getUser, userID])

  const handleExpense = () => {
    setShowModalExpense(true)
  }

  const handleExpenseForm = (
    event: any,
    { description, amount }: { description: string; amount: number }
  ) => {
    event.preventDefault()

    const expense: IExpense = {
      description,
      amount,
      userID,
      groupID: +groupID,
      createdDate: new Date(),
    }

    dispatch(addExpenseAsync(expense))
    setShowModalExpense(false)
  }

  return (
    <div className={styles.groupDetail}>
      <div className={styles.options}>
        <button onClick={handleExpense} className="button">
          Add expense
        </button>
        <ModalBox handleModal={setShowModalExpense} canShow={showModalExpense}>
          <DetailExpenseForm handleForm={handleExpenseForm} />
        </ModalBox>
      </div>
      <div className="content">
        <DetailExpenseList expenses={expenses} />
      </div>
    </div>
  )
}
