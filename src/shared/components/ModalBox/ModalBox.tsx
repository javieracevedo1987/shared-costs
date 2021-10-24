import React from 'react'
import styles from './ModalBox.module.css'

interface ModalBoxProps {
  canShow: boolean
  handleModal: Function
}

export const ModalBox: React.FC<ModalBoxProps> = ({
  children,
  canShow,
  handleModal,
}) => {
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    handleModal(false)
  }

  return canShow ? (
    <div className={styles.modalBox}>
      <div className={styles.modal}>{children}</div>
      <div onClick={handleBackdrop} className={styles.backdrop} />
    </div>
  ) : null
}
