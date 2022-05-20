import { fetchPersonalityType } from '@api/_api/personality'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { AssignResult } from '@interfaces/model'
import SEO from '@utils/components/SEO/SEO'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
	data: AssignResult
}

const Desktop = dynamic(() => import('@components/modules/personality-type/PTypeDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/personality-type/PTypeMobile'), { ssr: false })

const PersonalityType: InferGetStaticPropsType<typeof getStaticProps> = ({ data }: Props) => {
	const isMobile = isMobileDevice();
	const router = useRouter();
	const { t } = useTranslation(['personality-type', 'title', 'routes'])
	return (
		<>
			<SEO
				title={`${data?.code} - ${data?.title}`}
				description={t('seo.description', { code: `${data?.code}` })}
				imgSrc={data?.image_url}
				keywords={t('seo.keywords', { code: `${data?.code}` })}
				seo_title={t('seo.title', { code: `${data?.code}` })}
				url={`https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}${router.asPath}`}
			/>
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


export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
	let data: any = ''
	try {
		const res = await fetchPersonalityType(params && typeof params.type === 'string' ? params.type : '', locale)
		if (res) {
			data = res
		}

	} catch (error) {
		console.log('error', error)
	}
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["personality-type", 'personality-home', "common", "footer", "title", "menu", "button", "routes"])),
			data
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	let paths: any[] = [];
	try {
		if (locales)
			['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'].forEach(block => {
				for (const locale of locales) {
					paths.push({
						params: {
							type: block,
						},
						locale,
					});
				}
			})
		paths = paths.flat();
	} catch (error) {
		console.log('error', error)
	}
	return {
		paths,
		fallback: true
	}
}

export default PersonalityType