/* eslint-disable react-hooks/exhaustive-deps */
import SvgLogoNeonHorizontal from '@svgs/LogoNeonHorizontalLowHigh';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// import "./NavbarDesktop.css";
import { LogoNavBar, NavConatiner } from './NavbarDesktopStyled';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from 'next-i18next';


const NavBarDesktop = () => {
	const router = useRouter();
	const { t } = useTranslation("common");
	// const location = useLocation();
	// const { pathname } = location;
	// const isHomePage = location.pathname === "/" || location.pathname === "/en/" || location.pathname === "/en";
	// const { t, i18n } = useTranslation();
	// const history = useHistory();
	// const [searchTerm, setSearchTerm] = React.useState<string>('');
	// const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
	// const { results, loading } = useSelector((state: RootState) => state.search);
	// const [lang, setLang] = React.useState<string>("");
	// const [modalVisible, setModalVisible] = React.useState<boolean>(false);

	// const { tail } = useRedirect(i18n.language);

	// const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	if (!pathname.includes('/en')) {
	// 		setLang('vi')
	// 	} else {
	// 		setLang('en')
	// 	}
	// }, [pathname]);
	// React.useEffect(() => {
	// 	if (debouncedSearchTerm) {
	// 		dispatch(debounceSearch(debouncedSearchTerm))
	// 	} else {
	// 		// dispatch(clear());
	// 	}
	// }, [debouncedSearchTerm]);

	return (
		<NavConatiner isHome={router.asPath === '/'} >
			<Link href="/">
				<a>
					<LogoNavBar>
						<SvgLogoNeonHorizontal />
					</LogoNavBar>
				</a>
			</Link>
			<Link href={"/"} >
				<a>
					{t("greeting")}
				</a>
			</Link>
			{/* <NavMenu /> */}
			{/* <NavLanguage>
				<IconSearch onClick={() => setModalVisible(true)}>
					<SvgSearch />
				</IconSearch>
				<label style={{ display: 'none' }} htmlFor="language"></label>
				<Select
					bordered={false}
					value={lang}
					suffixIcon={<SvgArrowDownMobile className='arrown-down-language' />}
					className="language"
					onChange={(value) => {
						localStorage.setItem("lang", value);
						i18n.changeLanguage(value);
						if (value === "vi")
							history.push('/');
						else
							history.push('/' + value);

						window.location.reload();
					}}
				>
					<Select.Option value="en">English</Select.Option>
					<Select.Option value="vi">Tiếng Việt</Select.Option>
				</Select>
			</NavLanguage> */}
			{/* <Modal
				style={{ top: 20 }}
				visible={modalVisible}
				width={"70%"}
				footer={null}
				closeIcon={<div>x</div>}
				onCancel={() => setModalVisible(false)}
			>
				<div className='modal-search-container'>
					<h1>{t("modal_search.title")}</h1>
					<div className='search-input'>
						<Select
							showSearch
							autoFocus
							bordered={false}
							value={searchTerm}
							onKeyDown={(e: any) => {
								if (e.key === "Enter") {
									history.push({
										pathname: `${tail}search`,
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
										history.push(`${tail}${item.search_type === "news" ? 'news/detail' : item.search_type === "story" ? "love-stories" : "blog"}/${item.link}`, { id: item.id });
										setModalVisible(false)
									}}>{item.title}</div>
								</Select.Option>
							))}
						</Select>
					</div>
				</div>
			</Modal> */}
		</NavConatiner>
	);
};

export default NavBarDesktop;