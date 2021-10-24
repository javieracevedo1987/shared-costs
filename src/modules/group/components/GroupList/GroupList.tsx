import React from 'react'
import { GroupCard } from './GroupCard'
import styles from './GroupList.module.css'

interface GroupListProps {
  groups: IGroup[]
}

export const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  return (
    <section className={styles.groupList}>
      {groups.map((group: IGroup) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </section>
  )
}
