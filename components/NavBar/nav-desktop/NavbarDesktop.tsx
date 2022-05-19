/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import useDebounce from '@hooks/useDebounce';
import { debounceSearch } from '@redux/slices/search';
import { RootState } from '@redux/store';
import SvgArrowDownMobile from '@svgs/ArrowDownMobile';
import SvgLogoNeonHorizontal from '@svgs/LogoNeonHorizontalLowHigh';
import SvgSearch from '@svgs/Search';
import { LoadingContainer } from '@utils/components/categories-tags/SearchResultsStyled';
import { Dropdown, Menu, Modal, Select } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavMenu from '../NavMenu/NavMenu';
// import "./NavbarDesktop.css";
import { IconSearch, LanguageDiv, LanguageItem, LogoNavBar, ModalSearchContainer, NavConatiner, NavLanguage, SelectLanguageContainer } from './NavbarDesktopStyled';


const NavBarDesktop = () => {
	const router = useRouter();
	const { t } = useTranslation(['common', 'routes']);
	const [modalVisible, setModalVisible] = React.useState<boolean>(false);

	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
	const { results, loading } = useSelector((state: RootState) => state.search);

	const dispatch = useDispatch();
	React.useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(debounceSearch(debouncedSearchTerm))
		} else {
			// dispatch(clear());
		}
	}, [debouncedSearchTerm]);


	const menu = (
		<Menu
			items={[
				{
					key: 'vi',
					label: <Link locale="vi" href={"/"}>
						<a>
							<LanguageItem className='language-item'>
								Tiếng việt
							</LanguageItem>
						</a>
					</Link>
					,
				}, {
					key: 'en',
					label: <Link locale="en" href={"/"}>
						<a>
							<LanguageItem className='language-item'>
								English
							</LanguageItem>
						</a>
					</Link>
					,
				},
			]}
		/>
	);

	return (
		<NavConatiner isHome={router.asPath === '/'} >
			<Link href="/">
				<a>
					<LogoNavBar>
						<SvgLogoNeonHorizontal />
					</LogoNavBar>
				</a>
			</Link>
			<NavMenu />
			<NavLanguage>
				<IconSearch onClick={() => setModalVisible(true)}>
					<SvgSearch />
				</IconSearch>
				<SelectLanguageContainer>
					<Dropdown className='dropdown-select-language' trigger={["click"]} overlay={menu} placement="bottom">
						<LanguageDiv>
							{router.locale === "en" ? "English" : "Tiếng Việt"}
							<SvgArrowDownMobile fontSize={'1rem'} />
						</LanguageDiv>
					</Dropdown>
				</SelectLanguageContainer>
			</NavLanguage>

			<Modal
				style={{ top: 20 }}
				visible={modalVisible}
				width={"70%"}
				footer={null}
				closeIcon={<div>x</div>}
				onCancel={() => setModalVisible(false)}
			>
				<ModalSearchContainer>
					<h1>{t("modal_search.title")}</h1>
					<div className='search-input'>
						<Select
							showSearch
							autoFocus
							bordered={false}
							value={searchTerm}
							onKeyDown={(e: any) => {
								if (e.key === "Enter") {
									router.push({
										pathname: `/${t('search', { ns: 'routes' })}`,
										search: `?value=${searchTerm}`
									})
									setModalVisible(false)
								}
							}}
							placeholder="Tìm kiếm"
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
										router.push(`/${item.search_type === "news" ? `${t('news', { ns: 'routes' })}/${t('detail', { ns: 'routes' })}` : item.search_type === "story" ? `${t('connected_story', { ns: 'routes' })}` : "blog"}/${item.link}`);
										setModalVisible(false)
									}}>{item.title}</div>
								</Select.Option>
							))}
						</Select>
					</div>
				</ModalSearchContainer>
			</Modal>
		</NavConatiner>
	);
};

export default NavBarDesktop;