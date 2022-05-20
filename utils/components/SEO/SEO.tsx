import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
	title?: string;
	seo_title?: string;
	url?: string;
	description?: string;
	imgSrc?: string;
	keywords?: string;
	hasBreadCrumb?: boolean;
	public_date?: any;
	updated_at?: any;
	author_name?: string;
	parent_url?: string;
	parent_name?: string;
}

const SEO = ({ title, seo_title, url, description, imgSrc, keywords, hasBreadCrumb = false, public_date, updated_at, author_name, parent_url, parent_name }: Props) => {
	const { t } = useTranslation(['title'])
	const router = useRouter();
	return (
		<Head>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta content={url} property="og:url" />
			<meta name="description" content={description} />
			<meta
				content={seo_title}
				name="og:title" />
			<meta content={seo_title} property="og:title" name="title" />
			<meta
				content={description}
				name="og:description" />
			<meta
				content={description}
				property="og:description" name="description" />
			<meta content={imgSrc} property="og:image" name="image" />
			<meta content={imgSrc} name="og:image" />
			{/* TWITTER  */}

			<meta content={url} property="twitter:url" />
			<meta content={seo_title} property="twitter:title" />
			<meta content={imgSrc} property="twitter:image" />
			<meta
				content={description}
				property="twitter:description" />
			{/* KEYWORD */}
			<meta name="keywords" content={keywords} />
			{/* Canoniccal */}
			<link rel="canonical" href={url} />
			{hasBreadCrumb ? <>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": [{
							"@type": "ListItem",
							"position": 1,
							"name": `${t('home')}`,
							"item": `https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}`
						}, {
							"@type": "ListItem",
							"position": 2,
							"name": `${parent_name}`,
							"item": `${parent_url}`
						}, {
							"@type": "ListItem",
							"position": 3,
							"name": `${seo_title}`,
							"item": `${url}`
						}]
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "NewsArticle",
						"mainEntityOfPage": {
							'@type': "Webpage",
							"@id": `${url}`
						},
						"headline": `${seo_title}`,
						"image": {
							"@type": "ImageObject",
							"url": `${imgSrc}`,
							"width": 760,
							"height": 442
						},
						"description": `${description}`,
						"keywords": keywords,
						"name": `${seo_title}`,
						"datePublished": `${public_date}`,
						"dateModified": `${updated_at}`,
						"author": {
							"@type": "Person",
							"name": `${author_name}`
						},
						"publisher": {
							"@type": "Organization",
							"name": `Fika Connects`
						}
					})}
				</script>
			</> : null}

		</Head>
	)
}

export default SEO