import FeedMobile from '@components/mobile/story-feed/FeedMobile'
import NavMobile from '@components/navbar/nav-mobile/NavMobile'
import { clickDownloadEvent } from '@helpers/customGTM'
import { RootState } from '@redux/store'
import DownloadFika from '@utils/components/DownloadFika'
import HrLine from '@utils/components/HrLine'
import { Space } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import EmptySearchResult from './EmptySearchResult'
import { SearchResultMobileContainer } from './SearchPageStyled'

type Props = {}

const SearchMobile = (props: Props) => {
	const { results } = useSelector((state: RootState) => state.search);
	const { t } = useTranslation('routes')
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<SearchResultMobileContainer>
				{results && results
					.length > 0 ? <Space style={{ width: "100%" }} size={20} direction="vertical">
					{results.slice(1, 4).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedMobile
									url={`/${blog.search_type === "news" ? `${t('news')}/${t('detail')}` : blog.search_type === "story" ? `${t('connected_story')}` : "blog"}/${blog.link}`}
									blog={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<DownloadFika onClick={() => clickDownloadEvent('Search Page')} />
				</Space> : <EmptySearchResult />}
			</SearchResultMobileContainer>
		</React.Fragment>
	)
}

export default SearchMobile