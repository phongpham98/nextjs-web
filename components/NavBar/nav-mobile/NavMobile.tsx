/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import { colors } from '@configs/globalStyles';
import useDebounce from '@hooks/useDebounce';
import { Tag } from '@interfaces/posts';
import { toglle_menu } from '@redux/slices/home';
import { debounceSearch } from '@redux/slices/search';
import { RootState } from '@redux/store';
import SvgIconMenuMobile from '@svgs/IconMenuMobile';
import SvgSearch from '@svgs/Search';
import { LoadingContainer } from '@utils/components/SearchResultsStyled';
import { LoadingTag, TagItem } from '@utils/components/TagStyled';
import { Select } from 'antd';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentNav, InputContainer, MenuIcon, NavMobileContainer, SearchIcon, TagCaption, TagMobileContainer } from './NavMobileStyled';

interface INavMobileProps {
	hasSearchFirst?: boolean;
	tags?: Tag[];
	hasMarginBottom?: boolean;
	isLoading?: boolean;
}

const NavMobile: React.FunctionComponent<INavMobileProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { pathname } = router
	const [currentType, setCurrentType] = React.useState<string>("");
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
	const { results, loading, searchValue } = useSelector((state: RootState) => state.search);

	React.useEffect(() => {
		setCurrentType(pathname.split("/")[2])
	}, [pathname])


	const [isSticky, setIsSticky] = React.useState(false)
	const ref = React.useRef<any>()

	const { hasSearchFirst = false, tags, hasMarginBottom = false, isLoading = false } = props;

	// mount 
	React.useEffect(() => {
		const cachedRef = ref.current,
			observer = new IntersectionObserver(
				([e]) => setIsSticky(e.intersectionRatio < 1),
				{ threshold: [1] }
			)

		if (cachedRef)
			observer.observe(cachedRef)

		// unmount
		return function () {
			observer.unobserve(cachedRef)
		}
	}, [])

	React.useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(debounceSearch(debouncedSearchTerm))
		} else {
			// dispatch(clear());
		}
	}, [debouncedSearchTerm]);

	return (
		<NavMobileContainer className={hasMarginBottom ? 'mb' : ''} color={isSticky || hasSearchFirst ? colors.primary : "white"} ref={ref}>
			<MenuIcon color={isSticky || hasSearchFirst ? "white" : "black"} onClick={() => {
				let main = document.getElementById("side-main");
				if (main) {
					main.style.transition = "all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1)"
					dispatch(toglle_menu());
				}

			}}>
				<SvgIconMenuMobile />
			</MenuIcon>
			<ContentNav>
				{isSticky ? <React.Fragment>
					<InputContainer>
						<Select
							showSearch
							bordered={false}
							value={searchTerm}
							placeholder="search"
							defaultActiveFirstOption={false}
							dropdownClassName="dropdown-search"
							showArrow={false}
							onKeyDown={(e: any) => {
								if (e.key === "Enter") {
									router.push({
										pathname: `/search`,
										search: `?value=${searchValue}`
									})
								}
							}}
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
										router.push(`/${item.search_type === "news" ? 'news/detail' : item.search_type === "story" ? "love-stories" : "blog"}/${item.link}`)

									}}>{item.title}</div>
								</Select.Option>
							))}
						</Select>
					</InputContainer>
					<SearchIcon onClick={() => {
						router.push({
							pathname: `/search`,
							search: `?value=${searchValue}`
						})
					}}>
						<SvgSearch />
					</SearchIcon>
				</React.Fragment> : (
					hasSearchFirst ? (<React.Fragment >
						<InputContainer>
							<Select
								showSearch
								bordered={false}
								value={searchTerm}
								placeholder="search"
								defaultActiveFirstOption={false}
								dropdownClassName="dropdown-search"
								showArrow={false}
								onKeyDown={(e: any) => {
									if (e.key === "Enter") {
										router.push({
											pathname: `/search`,
											search: `?value=${searchValue}`
										})
									}
								}}
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
											router.push(`/{item.search_type === "news" ? 'news/detail' : item.search_type === "story" ? "love-stories" : "blog"}/${item.link}`)
										}}>{item.title}</div>
									</Select.Option>
								))}
							</Select>
							{/* <Input placeholder="Search" bordered={false} /> */}
						</InputContainer>
						<SearchIcon onClick={() => {
							router.push({
								pathname: `/search`,
								search: `?value=${searchValue}`
							})
						}}>
							<SvgSearch />
						</SearchIcon>
					</React.Fragment>) : (
						<React.Fragment>
							<TagCaption>
								Tags
							</TagCaption>
							<TagMobileContainer>
								{isLoading ? <React.Fragment>
									{[1, 2, 3, 4].map(tag => (
										<LoadingTag>Loading tag</LoadingTag>
									))}
								</React.Fragment> : <React.Fragment>
									{tags?.map(tag => {
										return (
											<TagItem onClick={() => { router.push(`/${currentType}`)}} key={tag.id} >{tag.name}</TagItem>
										)
									})}
								</React.Fragment>}
							</TagMobileContainer>

						</React.Fragment>
					)
				)}

			</ContentNav>
		</NavMobileContainer >
	);
};

export default NavMobile;
