import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ModalBox } from '../../../../shared/components/ModalBox/ModalBox'
import { GroupForm } from '../../components/GroupForm/GroupForm'
import styles from './Groups.module.css'
import { addGroupAsync } from '../../store/actions'

export const Groups: React.FC = () => {
  const [showModalGroup, setShowModalGroup] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleMakeGroup = () => {
    setShowModalGroup((value) => !value)
  }

  const handleGroupForm = (group: string) => {
    console.log('SUBMITED', group)
    dispatch(addGroupAsync(group))
  }

  return (
    <>
      <div className={styles.options}>
        <button onClick={handleMakeGroup} className="button">
          Make Group
        </button>
        <ModalBox handleModal={setShowModalGroup} canShow={showModalGroup}>
          <GroupForm handleForm={handleGroupForm} />
        </ModalBox>
      </div>
    </>
  )
}
