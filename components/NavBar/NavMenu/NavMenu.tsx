/* eslint-disable react-hooks/exhaustive-deps */
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import i18next from 'i18next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NavMenuContainer } from './NavMenuStyled';


// const userAgent = navigator.userAgent.toLowerCase();
// const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);



const NavMenu = () => {
	const [currentMenu, setCurrentMenu] = useState<string>(`/`);
	const { t } = useTranslation(['menu', 'routes'])
	const router = useRouter();

	const handleClick = (e: any) => {
		setCurrentMenu(e.key);
	};

	useEffect(() => {
		let menu = router.asPath.split("/")[1]
		setCurrentMenu(menu);
	}, [router.asPath])
	// const menuItems: ItemType[] = 

	return (
		<NavMenuContainer className="nav-menu-container">
			<Menu
				items={[
					{
						key: '',
						label: <Link aria-label='Fika - Ứng dụng hẹn hò kết bạn tốt nhất hiện nay' className='menu-item' href={`/`}>
							<a>
								{t('home')}
							</a>
						</Link>
					},
					{
						key: `${t('personality', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('personality', { ns: 'routes' })}`}>
							<a>
								{t('personality')}
							</a>
						</Link>
					},
					{
						key: `${t('connected_story', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('connected_story', { ns: 'routes' })}`}>
							<a>
								{t('connected_story')}
							</a>
						</Link>
					},
					{
						key: `${t('blogs', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('blogs', { ns: 'routes' })}`}>
							<a>
								{t('blogs')}
							</a>
						</Link>,
						children: [
							// {
							// 	key: `${t('blogs', { ns: 'routes' })}`,
							// 	label: <Link aria-label='Personality' className='menu-item' href={`/${t('blogs', { ns: 'routes' })}`}>
							// 		<a>
							// 			{t('fika_blogs')}
							// 		</a>
							// 	</Link>,
							// },
							{
								key: `${t('ceo', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('ceo', { ns: 'routes' })}`}>
									<a>
										{t('ceo')}
									</a>
								</Link>,
							},
							{
								key: `${t('cto', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('cto', { ns: 'routes' })}`}>
									<a>
										{t('cto')}
									</a>
								</Link>,
							}
						]
					},
					{
						key: `${t('social_spots', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('social_spots', { ns: 'routes' })}`}>
							<a>
								{t('social_spots')}
							</a>
						</Link>
					},
					{
						key: `${t('news', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('news', { ns: 'routes' })}`}>
							<a>
								{t('news')}
							</a>
						</Link>,
						children: [
							{
								key: `${t('investor', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('investor', { ns: 'routes' })}`}>
									<a>
										{t('investor')}
									</a>
								</Link>,
							},
							{
								key: `${t('fika_in_the_press', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('fika_in_the_press', { ns: 'routes' })}`}>
									<a>
										{t('fika_in_the_press')}
									</a>
								</Link>,
							}
						]
					},
					{
						key: `${t('event', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('event', { ns: 'routes' })}`}>
							<a>
								{t('event')}
							</a>
						</Link>
					},
					{
						key: `${t('about', { ns: 'routes' })}`,
						label: <Link aria-label='Personality' className='menu-item' href={`/${t('about', { ns: 'routes' })}`}>
							<a>
								{t('about')}
							</a>
						</Link>,
						children: [
							{
								key: `${t('fika_team', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('fika_team', { ns: 'routes' })}`}>
									<a>
										{t('fika_team')}
									</a>
								</Link>,
							},
							{
								key: `${t('faq', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('faq', { ns: 'routes' })}`}>
									<a>
										{t('faq')}
									</a>
								</Link>,
							},
							{
								key: `${t('career', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('career', { ns: 'routes' })}`}>
									<a>
										{t('career')}
									</a>
								</Link>,
							},
							{
								key: `${t('contact', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('contact', { ns: 'routes' })}`}>
									<a>
										{t('contact')}
									</a>
								</Link>,
							},
							{
								key: `${t('privacy_policy', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('privacy_policy', { ns: 'routes' })}`}>
									<a>
										{t('privacy_policy')}
									</a>
								</Link>,
							},
							{
								key: `${t('account', { ns: 'routes' })}`,
								label: <Link aria-label='Personality' className='menu-item' href={`/${t('account', { ns: 'routes' })}`}>
									<a>
										{t('account')}
									</a>
								</Link>,
							}
			
						]
					},
				]}
				triggerSubMenuAction={"hover"}
				// onClick={handleClick}
				selectedKeys={[currentMenu]}
				mode="horizontal">
			</Menu>
		</NavMenuContainer >
	);
};

export default NavMenu;