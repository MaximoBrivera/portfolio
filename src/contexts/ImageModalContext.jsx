import React, { createContext, useState } from 'react'

export const ImageModalContext = createContext()

export const ImageModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalAlt, setModalAlt] = useState('')

  const openModal = (imageSrc, imageAlt) => {
    setModalImage(imageSrc)
    setModalAlt(imageAlt)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage('')
    setModalAlt('')
  }

  return (
    <ImageModalContext.Provider value={{ modalOpen, modalImage, modalAlt, openModal, closeModal }}>
      {children}
    </ImageModalContext.Provider>
  )
}
