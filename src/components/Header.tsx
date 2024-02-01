import React, { PropsWithChildren } from 'react'
type Image = { src: string; alt: string };
type HeaderProps = PropsWithChildren<{ image: Image}>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
    <img src={image.src} alt={image.alt} />
    {children}
    </header>
  )
}
