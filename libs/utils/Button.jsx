import React from "react"

export const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  )
}
