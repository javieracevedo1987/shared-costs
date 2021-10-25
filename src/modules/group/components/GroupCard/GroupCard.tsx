import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './GroupCard.module.css'

interface GroupCardProps {
  group: IGroup
}

export const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const history = useHistory()

  const handleCard = () => {
    history.push(`/groups/${group.id}`)
  }

  return (
    <article onClick={handleCard} className={styles.groupCard}>
      <div className={styles.header}>{group.name}</div>
      <div className={styles.body}>1 Member</div>
    </article>
  )
}
