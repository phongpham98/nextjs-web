import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/pause-delete/DeleteAccountMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/pause-delete/DeleteAccountDesktop'), { ssr: false })

const PauseOrDeleteAccount: InferGetStaticPropsType<typeof getStaticProps> = (props: Props) => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation('title')
	return (
		<>
			<Head>
				<title>{t('delete_account')}</title>
			</Head>
			{isMobile ? <React.Fragment>
				<Mobile />
				<FooterMobile />
			</React.Fragment> :
				<React.Fragment>
					<LayoutDesktop>
						<Desktop />
					</LayoutDesktop>
				</React.Fragment>
			}

		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["account", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
	};
}

export default PauseOrDeleteAccount