import React from 'react'
import styles from './GroupCard.module.css'

interface GroupCardProps {
  group: IGroup
}

export const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  return <article> {group.name} </article>
}
