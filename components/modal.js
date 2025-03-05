'use client'

import { useRef, useEffect } from 'react'
import { CARD_CATEGORIES_COLOR, CARD_CATEGORIES_LABEL } from '@/libs/enum'

export default function Modal({ info, onClose }) {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current
    modal.showModal()
  }, [])

  return (
    <dialog ref={dialog} className="modal" onClose={onClose}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">
            ✕
          </button>
        </form>
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-1">{info.name}</h2>
          <span
            className={`badge text-white bg-${
              CARD_CATEGORIES_COLOR[info.category]
            }`}
          >
            {CARD_CATEGORIES_LABEL[info.category]}
          </span>
        </div>
        <p className="mt-4">{info.description}</p>
        {info.note && (
          <p className="mt-4">
            <strong>使用心得：</strong>
            {info.note}
          </p>
        )}
      </div>
    </dialog>
  )
}
