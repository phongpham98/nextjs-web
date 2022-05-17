/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import { LatestPostTitleH3 } from '@components/pages/blog/content/LatestPostsStyled';
import Tags from '@components/pages/blog/content/Tags';
import { clickCategoryEvent } from '@helpers/customGTM';
import { getMobileOperatingSystem } from '@helpers/detectMobilePlatform';
import useDebounce from '@hooks/useDebounce';
import { Tag } from '@interfaces/posts';
import { getCategories } from '@redux/slices/home';
import { debounceSearch } from '@redux/slices/search';
import { RootState } from '@redux/store';
import SvgHandPointRight from '@svgs/HandPointRight';
import SvgSearch from '@svgs/Search';
import { Select } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DownloadButton from '../DownloadButton';
import { BtnDownLoadContainer, DivContainer, FikaButtonContainer, FikaInvestorBtn, FikaPressBtn, HandLeftIcon, IconSearch, InvestorWrapper, SearchContainer, SearchWithIcon, StickyContainer, TopicContainer } from './CateAndTagsStyled';
import { LoadingContainer } from './SearchResultsStyled';

export type PostType = "blog" | "news" | "connected-stories" | "q&a";

export interface CategoriesAndTagsProps {
	hasLatestPosts?: boolean;
	hasDownloadButton?: boolean;
	hasCategory?: boolean;
	hasInvestorBtn?: boolean;
	latestPosts: any[];
	tags: Tag[];
	type?: PostType;
}

const CategoriesAndTags = ({
	type,
	tags,
	latestPosts,
	hasCategory = true,
	hasLatestPosts = true,
	hasDownloadButton = true,
	hasInvestorBtn = false }: CategoriesAndTagsProps) => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: RootState) => state.home);
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
	const { results, loading, searchValue } = useSelector((state: RootState) => state.search);
	const { t } = useTranslation(['button', 'routes', 'title']);
	const router = useRouter();

	useEffect(() => {
		if (hasCategory === true)
			dispatch(getCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(debounceSearch(debouncedSearchTerm))
		} else {
			// dispatch(clear());
		}
	}, [debouncedSearchTerm]);

	return (
		<DivContainer>
			<SearchContainer>
				<span>Search</span>
				<SearchWithIcon>
					<Select
						allowClear
						showSearch
						bordered={false}
						onKeyDown={(e: any) => {
							if (e.key === "Enter") {
								router.push({
									pathname: `/${t('search')}`,
									search: `?q=${searchValue}`
								})
							}
						}}
						value={searchTerm}
						defaultActiveFirstOption={false}
						dropdownClassName="dropdown-search"
						showArrow={false}
						filterOption={false}
						onSearch={(e: any,) => {
							setSearchTerm(e)
						}}
						notFoundContent={null}
					>
						{loading === true ? <Select.Option value="">
							<LoadingContainer>
								<LoadingOutlined style={{ fontSize: 24 }} spin />
							</LoadingContainer>
						</Select.Option> : results.map(item => (
							<Select.Option value={item.id} key={item.id}>
								<div onClick={() => {
									router.push(`/${item.search_type === "news" ? `/${t('news')}/${t('detail')}/` : item.search_type === "story" ? `${t('connected_story')}` : "blog"}/${item.link}`)
								}}>{item.title}</div>
							</Select.Option>
						))}
					</Select>
					<IconSearch onClick={() => {
						if (searchValue) {
							router.push({
								pathname: `/${t('search')}`,
								search: `?q=${searchValue}`
							})
						}
					}}>
						<SvgSearch />
					</IconSearch>
				</SearchWithIcon>
			</SearchContainer>
			{hasCategory && <div>
				<LatestPostTitleH3>{t('category', { ns: 'title' })}</LatestPostTitleH3>
				<TopicContainer>
					{categories?.map(topic => {
						return (
							<Link href={`/${t('category')}/` + topic.link}>
								<a>
									<div onClick={() => {
										clickCategoryEvent(topic.name);
									}} className="topic categories" key={topic.id}>{topic.name}</div>
								</a>
							</Link>

						);
					})}
				</TopicContainer>
			</div>}
			<StickyContainer>
				{hasLatestPosts && <LatestPosts type={type ? type : "blog"} posts={latestPosts} />}

				<Tags tags={tags} />
				{hasDownloadButton && <BtnDownLoadContainer>
					<DownloadButton href={getMobileOperatingSystem()} />
				</BtnDownLoadContainer>}

				{hasInvestorBtn && <FikaButtonContainer>
					<InvestorWrapper>
						<Link href={`/${t('investor')}`}>
							<a>
								<FikaInvestorBtn>
									{t("investor", { ns: 'button' })}
								</FikaInvestorBtn>
							</a>
						</Link>
						<HandLeftIcon>
							<SvgHandPointRight />
						</HandLeftIcon>
					</InvestorWrapper>
					<Link href={`/${t('fika_in_the_press')}`}>
						<a>
							<FikaPressBtn>
								{t("fika_in_the_press", { ns: 'button' })}
							</FikaPressBtn>
						</a>
					</Link>
				</FikaButtonContainer>}
			</StickyContainer>
		</DivContainer>
	);
};

export default CategoriesAndTags;