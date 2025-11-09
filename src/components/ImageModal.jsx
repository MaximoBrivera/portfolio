import React, { useContext, useEffect } from 'react'
import { ImageModalContext } from '../contexts/ImageModalContext'

const ImageModal = () => {
  const { modalOpen, modalImage, modalAlt, closeModal } = useContext(ImageModalContext)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)

    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen, closeModal])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  if (!modalOpen) return null

  return (
    <div
      id="imageModal"
      className={`image-modal ${modalOpen ? 'show' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="image-modal-content">
        <span className="image-modal-close" onClick={closeModal}>
          &times;
        </span>
        <img id="modalImage" src={modalImage} alt={modalAlt} />
      </div>
    </div>
  )
}

export default ImageModal
