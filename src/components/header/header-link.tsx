import NextLink from 'next/link'

import { Navbar, NavbarLinkProps } from '@nextui-org/react'

interface IProps extends NavbarLinkProps {
  currentPath: string
  href: string
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'inherit'
}

export default function HeaderLink({
  children,
  href,
  currentPath,
  ...props
}: IProps) {
  const isActive = href === currentPath

  return (
    <Navbar.Link as="span" isActive={isActive} href={href} {...props}>
      <NextLink href={href} style={linkStyle}>
        {children}
      </NextLink>
    </Navbar.Link>
  )
}
