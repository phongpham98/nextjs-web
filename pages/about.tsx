import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
	<>
		<Head>
			<meta content="https://fikaconnects.com" property="og:url" />
			<link rel="canonical" href="https://fikaconnects.com" />
		</Head>
		<Layout title="About | Next.js + TypeScript Example">
			<h1>About</h1>
			<p>This is the about page</p>
			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</Layout>
	</>
)

export default AboutPage
