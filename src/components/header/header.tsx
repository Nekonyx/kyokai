import NextLink from 'next/link'

import { Navbar, Text, Tooltip } from '@nextui-org/react'

import { IconRandom } from '../icon'
import HeaderLink from './header-link'
import HeaderSearch from './header-search'

interface IProps {
  className?: string
  currentPath: string
}

export default function Header({ className, currentPath }: IProps) {
  return (
    <Navbar className={className} maxWidth="fluid" shouldHideOnScroll>
      {/* Лого */}
      <Navbar.Brand>
        <NextLink href="/" passHref>
          <Text size="$2xl" weight="extrabold" style={{ letterSpacing: 1 }}>
            KYOKAI
          </Text>
        </NextLink>
      </Navbar.Brand>

      {/* Ссылки */}
      <Navbar.Content activeColor="error" hideIn="xs" variant="highlight">
        <HeaderLink href="/home" currentPath={currentPath}>
          Домашняя
        </HeaderLink>
        <HeaderLink href="/releases" currentPath={currentPath}>
          Релизы
        </HeaderLink>
        <HeaderLink href="/collections" currentPath={currentPath}>
          Коллекции
        </HeaderLink>
      </Navbar.Content>

      {/* Поиск, рандом, и пользователь */}
      <Navbar.Content activeColor="error">
        <HeaderSearch />
        <HeaderLink href="/releases/random" currentPath={currentPath}>
          <Tooltip as="span" content="Рандом" placement="bottom">
            <IconRandom size={20} />
          </Tooltip>
        </HeaderLink>
      </Navbar.Content>
    </Navbar>
  )
}
