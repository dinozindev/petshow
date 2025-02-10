import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    name: string;
    link: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link className="home__link" href={props.link}>{props.name}</Link>
  )
}

export default LinkButton