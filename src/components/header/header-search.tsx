import { CSS, Input, Navbar } from '@nextui-org/react'

import { IconSearch } from '../icon'

const itemStyle: CSS = {
  '@xsMax': {
    w: '100%',
    jc: 'center'
  }
}

const inputStyle: CSS = {
  w: '100%',
  '@xsMax': {
    mw: '300px'
  },
  '& .nextui-input-content--left': {
    h: '100%',
    ml: '$4',
    dflex: 'center'
  }
}

export default function HeaderSearch() {
  return (
    <Navbar.Item css={itemStyle}>
      <Input
        placeholder="Поиск"
        contentLeft={
          <IconSearch fill="var(--nextui-colors-accents6)" size={20} />
        }
        contentLeftStyling={false}
        css={inputStyle}
        clearable
      />
    </Navbar.Item>
  )
}
