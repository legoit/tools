import React from 'react'

interface PropTypes {
  title: string

  children?: React.ReactNode
}

export function Header({ title, children }: PropTypes): JSX.Element {
  return (
    <header className="px-4 py-2 border-b mb-4 border-b-gray-300 flex justify-between items-center">
      <h6 className="font-medium leading-tight text-base mb-0">{title}</h6>
      {children}
    </header>
  )
}
