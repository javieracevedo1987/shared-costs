import React from 'react'
import styles from './GroupCard.module.css'

interface GroupCardProps {
  group: IGroup
  handleCard: Function
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, handleCard }) => {
  return (
    <article onClick={() => handleCard(group)} className={styles.groupCard}>
      <div className={styles.header}>{group.name}</div>
      <div className={styles.body}>1 Member</div>
    </article>
  )
}
