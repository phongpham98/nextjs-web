import { toglle_menu } from '@redux/slices/home';
import SvgArrowDownMobile from '@svgs/ArrowDownMobile';
import $ from 'jquery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { MobileMenuItem, SurfixIcon } from './MenuMobileStyled';
import { MobileSubMenuItem, SlideMenuItemContainer, SubMenuContent } from './SlideMenuItemStyled';
export interface subMenuMobile {
	name: string
	link: string;
}

interface ISlideMenuItemProps {
	id: string;
	menuTitle: string | any;
	subMenu: subMenuMobile[];
	href: string;
}

const SlideMenuItem: React.FunctionComponent<ISlideMenuItemProps> = ({ id, menuTitle, subMenu, href }) => {
	const [open, setOpen] = React.useState<boolean>(false);
	const router = useRouter();
	const dispatch = useDispatch();
	const handleClickMenu = () => {
		dispatch(toglle_menu())
	}
	return (
		<SlideMenuItemContainer>
			<MobileMenuItem>
				<Link href={href}>
					<a onClick={handleClickMenu}>
						<MobileMenuItem>
							{menuTitle}
						</MobileMenuItem>
					</a>
				</Link>
				<SurfixIcon onClick={(e) => {
					setOpen(!open)
					e.stopPropagation();
					if (!open) {
						$("#" + id).slideDown();
					} else {
						$("#" + id).slideUp();
					}
				}} className={open ? "rotate" : ""}>
					<SvgArrowDownMobile />
				</SurfixIcon>

			</MobileMenuItem>
			<SubMenuContent id={id} style={{ display: "none" }}>
				{subMenu.map((item, idx) => {
					return (
						<Link key={idx} href={item.link}>
							<a onClick={handleClickMenu}>
								<MobileSubMenuItem>
									{item.name}
								</MobileSubMenuItem>
							</a>
						</Link>
					)
				})}
			</SubMenuContent>

		</SlideMenuItemContainer>
	);
};

export default SlideMenuItem;
