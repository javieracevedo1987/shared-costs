import React, { useEffect, useRef, useState } from 'react'
import styles from './GroupForm.module.css'

interface GroupFormProps {
  handleForm: Function
}

export const GroupForm: React.FC<GroupFormProps> = ({ handleForm }) => {
  const [group, setGroup] = useState<string>('')
  const inputGroup = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputGroup.current?.focus()
  }, [inputGroup])

  const handleGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGroup(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleForm(group)
  }

  const isValidForm = () => !!group

  return (
    <form className={styles.groupForm} onSubmit={handleSubmit}>
      <input
        ref={inputGroup}
        onChange={handleGroup}
        type="text"
        name="group"
        placeholder="Add group"
      />
      <button
        disabled={!isValidForm()}
        className={`button ${styles.buttonSubmit}`}
      >
        ADD
      </button>
    </form>
  )
}
