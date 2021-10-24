import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalBox } from '../../../../shared/components/ModalBox/ModalBox'
import { GroupForm } from '../../components/GroupForm/GroupForm'
import styles from './Groups.module.css'
import { addGroupAsync, getGroupsAsync } from '../../store/actions'
import useAuth from '../../../../hooks/useAuth'
import { GroupList } from '../../components/GroupList/GroupList'

export const Groups: React.FC = () => {
  const [showModalGroup, setShowModalGroup] = useState<boolean>(false)
  const { getUser } = useAuth()
  const dispatch = useDispatch()
  const groups = useSelector(
    (state: IRootState): IGroup[] => state.group.groups
  )

  useEffect(() => {
    if (!groups.length) {
      dispatch(getGroupsAsync(getUser()))
    }
  }, [groups, dispatch, getUser])

  const handleMakeGroup = () => {
    setShowModalGroup((value) => !value)
  }

  const handleGroupForm = (group: string) => {
    const user: IUser = getUser()
    dispatch(addGroupAsync(group, user))
    setShowModalGroup(false)
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
      <div className="container">
        <GroupList groups={groups} />
      </div>
    </>
  )
}
