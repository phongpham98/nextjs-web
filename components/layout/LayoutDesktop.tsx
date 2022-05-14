import Footer from '@components/modules/footer/Footer'
import NavBarDesktop from '@components/navbar/nav-desktop/NavbarDesktop'
import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode | JSX.Element
}

const LayoutDesktop = ({ children }: Props) => {
	return (
		<>
			<NavBarDesktop />
			{children}
			<Footer />
		</>
	)
}

export default LayoutDesktop