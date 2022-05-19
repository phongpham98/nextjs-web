import FeedContent from '@components/home/news-feed/FeedContent'
import Line from '@components/pages/blog/content/Line'
import FeedItem from '@components/pages/blog/feed-item/FeedItem'
import { getLatestNews } from '@redux/slices/news'
import { debounceSearch } from '@redux/slices/search'
import { RootState } from '@redux/store'
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags'
import { Col, Row, Space } from 'antd'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import EmptySearchResult from './EmptySearchResult'
import { SearchPageContainer } from './SearchPageStyled'

type Props = {}

const SearchDesktop = (props: Props) => {
	const { results } = useSelector((state: RootState) => state.search);
	const { t } = useTranslation('routes')
	const dispatch = useDispatch();
	const router = useRouter();
	const { latestNews } = useSelector((state: RootState) => state.news);
	const { value } = router.query
	React.useEffect(() => {
		dispatch(getLatestNews());
	}, [])

	React.useEffect(() => {
		if (typeof value === 'string')
			dispatch(debounceSearch(value))
	}, [value]);
	return (
		<SearchPageContainer>
			<Row gutter={60}>
				<Col span={16}>
					{results && results
						.length > 0 ?
						<Space style={{ width: "100%" }} size={60} direction="vertical">
							{results.map(blog => {
								return (
									<React.Fragment key={blog.id}>
										<FeedItem
											image={blog.thumbnail}
											url={`/${blog.search_type === "news" ? `${t('news')}/${t('detail')}` : blog.search_type === "story" ? `${t('connected_story')}` : "blog"}/${blog.link}`}
											feedContent={<FeedContent
												url={`/${blog.search_type === "news" ? `${t('news')}/${t('detail')}` : blog.search_type === "story" ? `${t('connected_story')}` : "blog"}/${blog.link}`}
												bigTitle={true}
												showDate={false}
												small={true}
												story={blog} />}
										/>
										<Line marginRight="5%" />
									</React.Fragment>
								)
							})}
						</Space>
						: <EmptySearchResult />}
				</Col>

				<Col span={8}>
					<CategoriesAndTags type="news" tags={results.length > 0 && results[0].tags ? results[0].tags : []} latestPosts={latestNews ? latestNews : []} hasCategory={false} hasInvestorBtn={false} />
				</Col>
			</Row>
		</SearchPageContainer>
	)
}

export default SearchDesktop