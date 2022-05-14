import { useRouter } from 'next/router'
import Link from 'next/link'
import { Url } from 'url'

interface TranslatedLinkProps {
	href: string
	children: any;
}

interface PathTranslation {

	[key: string]: {
		[key: string]: string
	}
}

const pathTranslations: PathTranslation = {
	en: {
		'/ve-fika': '/ve-fika',
		'/quiz-tinh-cach': '/personality'
	}
}

const TranslatedLink = ({ href, children }: TranslatedLinkProps) => {
	const { locale } = useRouter()
	// Get translated route for non-default locales
	const translatedPath = pathTranslations[locale ? locale : 'en']?.[href]
	// Set `as` prop to change displayed URL in browser
	const as = translatedPath ? `/${locale}${translatedPath}` : undefined

	return (
		<Link href={href} as={as}>
			{children}
		</Link>
	)
}

export const useTranslatedLink = (href: string) => {
	const { locale } = useRouter();
	const translatedPath = pathTranslations[locale ? locale : 'en']?.[href]
	// Set `as` prop to change displayed URL in browser
	const as = translatedPath ? `/${locale}${translatedPath}` : undefined
	return as;
}

export default TranslatedLink