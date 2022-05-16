import { MobileDownImage } from '@components/modules/headers/HeaderMobileStyled';
import currentLocale from '@helpers/getCurrentLocale';
import { toglle_menu } from '@redux/slices/home';
import { RootState } from '@redux/store';
import SvgArrowDownMobile from '@svgs/ArrowDownMobile';
import SvgFacebookRound from '@svgs/FacebookRound';
import SvgInstagramRound from '@svgs/InstagramRound';
import SvgLinkedinRound from '@svgs/LinkedinRound';
import SvgTiktokRound from '@svgs/TiktokRound';
import SvgYoutubeRound from '@svgs/YoutubeRound';
import HrLine from '@utils/components/HrLine';
import TranslatedLink from '@utils/components/next-link/TranslateLink';
import { Drawer, Select } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesMenu, ConnectionNavMobile, DivLanguage, DownloadAppContainer, ListMenuContainer, MenuMobileConnectionIcon, MenuMobileContainer, MobileMenuItem, NavMobileDownload } from './MenuMobileStyled';
import SlideMenuItem from './SlideMenuItem';
interface IMenuMobileProps {
}


const MenuMobile: React.FunctionComponent<IMenuMobileProps> = (props) => {
	const { showMenu } = useSelector((state: RootState) => state.home);
	const dispatch = useDispatch();
	const router = useRouter();
	const { t } = useTranslation(['menu', 'routes'])
	const { pathname } = router;
	const { categories } = useSelector((state: RootState) => state.home);
	const [lang, setLang] = useState<"vi" | "en">("vi");
	const isHomePage = pathname === "/"

	useEffect(() => {
		setLang(currentLocale())
	}, [router.locale]);

	const handleClickMenu = () => {
		dispatch(toglle_menu());
	}

	return (
		<Drawer
			placement={"left"}
			onClose={() => {
				let main = document.getElementById("side-main");
				if (main) {
					main.style.transform = "translate3d(0, 0, 0)";
					dispatch(toglle_menu());
				}
			}}
			visible={showMenu}
			closable={false}
			contentWrapperStyle={{
				width: "80%",

			}}
			bodyStyle={{ padding: 0 }}
		>
			<MenuMobileContainer>
				<ConnectionNavMobile>
					<MenuMobileConnectionIcon rel="noreferrer nofollow" href="https://www.facebook.com/keepfika" target="_blank" >
						<SvgFacebookRound />
					</MenuMobileConnectionIcon>
					<MenuMobileConnectionIcon rel="noreferrer nofollow" href="https://www.instagram.com/keep_fika/" target="_blank">
						<SvgInstagramRound />
					</MenuMobileConnectionIcon>
					<MenuMobileConnectionIcon rel="noreferrer nofollow" href="https://www.linkedin.com/company/keepfika/mycompany/" target="_blank">
						<SvgLinkedinRound />
					</MenuMobileConnectionIcon>
					<MenuMobileConnectionIcon rel="noreferrer nofollow" href="https://www.youtube.com/channel/UCtmcZ0-sPoePSt74hWP2Jtg" target="_blank">
						<SvgYoutubeRound />
					</MenuMobileConnectionIcon>
					<MenuMobileConnectionIcon rel="noreferrer nofollow" href="https://www.tiktok.com/@keepfika?lang=en" target="_blank">
						<SvgTiktokRound />
					</MenuMobileConnectionIcon>
				</ConnectionNavMobile>

				<ListMenuContainer>
					<Link href='/'>
						<a onClick={handleClickMenu}>
							<MobileMenuItem>
								{t('home')}
							</MobileMenuItem>
						</a>
					</Link>
					<Link href={t('personality', { ns: 'routes' })}>
						<a onClick={handleClickMenu}>
							<MobileMenuItem>
								{t('personality')}
							</MobileMenuItem>
						</a>
					</Link>
					<Link href={t('connected_story', { ns: 'routes' })}>
						<a onClick={handleClickMenu}>
							<MobileMenuItem>
								{t('connected_story')}
							</MobileMenuItem>
						</a>
					</Link>
					<SlideMenuItem
						href={t('blog', { ns: 'routes' })}
						id={"blog"}
						menuTitle={t('blogs')}
						subMenu={t('blogs_children', { returnObjects: true })}
					/>
					<Link href={t('social_spots', { ns: 'routes' })}>
						<a onClick={handleClickMenu}>
							<MobileMenuItem>
								{t('connected_story')}
							</MobileMenuItem>
						</a>
					</Link>
					<SlideMenuItem
						href={t('news', { ns: 'routes' })}
						id={"news"}
						menuTitle={t('news')}
						subMenu={t('news_children', { returnObjects: true })}
					/>
					<Link href={t('events', { ns: 'routes' })}>
						<a onClick={handleClickMenu}>
							<MobileMenuItem>
								{t('event')}
							</MobileMenuItem>
						</a>
					</Link>
					<SlideMenuItem
						href={t('about_fika', { ns: 'routes' })}
						id={"aboutFika"}
						menuTitle={t('about')}
						subMenu={t('about_children', { returnObjects: true })}
					/>
					{(isHomePage && categories?.length && categories.length > 0) ? (
						<CategoriesMenu>
							{categories.slice(0, 4).map(cate => {
								return (
									<TranslatedLink href={`/category` + cate.link} key={cate.id}>
										<a onClick={handleClickMenu}>
											<MobileMenuItem>
												{cate.name}
											</MobileMenuItem>
										</a>
									</TranslatedLink>
								)
							})}
						</CategoriesMenu>
					) : null}
					<HrLine margin="0" />
					<DivLanguage>
						<Select
							bordered={false}
							value={lang}
							suffixIcon={<SvgArrowDownMobile fontSize={"1.3rem"} />}
							style={{
								color: 'white',
								maxWidth: "120px",
								textTransform: "uppercase",
							}}
							onChange={(value) => {
								dispatch(toglle_menu());
								router.push('/', '/', { locale: value })
							}}
						>
							<Select.Option value="en">English</Select.Option>
							<Select.Option value="vi">Tiếng Việt</Select.Option>
						</Select>
					</DivLanguage>
				</ListMenuContainer>

				<DownloadAppContainer>
					<MobileMenuItem>
						{t("download_app")}
					</MobileMenuItem>
					<NavMobileDownload>
						<MobileDownImage onClick={() => window.open("https://apps.apple.com/app/id1528449006?mt=8")} >
							<img src={'/app-store.png'} width={"100%"} alt='' />
						</MobileDownImage>
						<MobileDownImage onClick={() => window.open("https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US")} >
							<img src={'/play-store.png'} width={"100%"} alt='' />
						</MobileDownImage>
					</NavMobileDownload>
				</DownloadAppContainer>
			</MenuMobileContainer>
		</Drawer >
	);
};

export default MenuMobile;

