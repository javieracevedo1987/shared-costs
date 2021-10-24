import React from 'react'
import { GroupCard } from '../GroupCard/GroupCard'
import styles from './GroupList.module.css'

interface GroupListProps {
  groups: IGroup[]
}

export const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  const handleCard = (group: IGroup) => {
    console.log('GROUP', group)
  }

  return (
    <section className={styles.groupList}>
      {groups.map((group: IGroup) => (
        <GroupCard key={group.id} group={group} handleCard={handleCard} />
      ))}
    </section>
  )
}
