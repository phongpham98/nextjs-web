import { faMapMarkerAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPresses } from '@redux/slices/press';
import { RootState } from '@redux/store';
import SvgFacebookRound from '@svgs/FacebookRound';
import SvgInstagramRound from '@svgs/InstagramRound';
import SvgLinkedinRound from '@svgs/LinkedinRound';
import SvgLogoNeonHorizontal from '@svgs/LogoNeonHorizontal';
import SvgTiktokRound from '@svgs/TiktokRound';
import SvgYoutubeRound from '@svgs/YoutubeRound';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AddressDetail, CheckLocation, ConnectionFooter, ConnectionIconsFooter, ContactMobile, CopyRightFooter, DownLoadFooter, FooterMobileContainer, FooterMobileIconConnection, LogoFooterMobile, PressContent, PressFikaFooter, TitleFooter } from './FooterMobileStyled';
import { PressDetail } from './FooterStyled';
import SvgMap from '@svgs/Map';
import SvgPenAlt from '@svgs/PenAlt';
import Link from 'next/link';

interface IFooterMobileProps {
}

const FooterMobile: React.FunctionComponent<IFooterMobileProps> = (props) => {

	const { magazines } = useSelector((state: RootState) => state.press);
	const dispatch = useDispatch();
	const { t } = useTranslation(['footer', 'title']);
	const [display, setDisplay] = React.useState<boolean>(false)
	React.useEffect(() => {
		dispatch(getPresses()); setTimeout(() => {
			setDisplay(true)
		}, 2000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (!display)
		return null

	return (
		<footer style={{ marginTop: '1rem' }}>
			<FooterMobileContainer>
				<Space style={{ width: "100%" }} size={15} direction="vertical">
					<ContactMobile>
						<Link href={'/'}>
							<a>
								<LogoFooterMobile>
									<SvgLogoNeonHorizontal />
								</LogoFooterMobile>
							</a>
						</Link>
						<AddressDetail>
							<div>{t("holding")}</div>
							<div>{t("address")}</div>
							<div>{t("contact_text")} <b>{t("phone_number")}</b></div>
							<CheckLocation onClick={() => window.open(t("map_link"))}>
								<SvgMap style={{ fontSize: "1rem" }} />
								<span>{t("location_text")}</span>
							</CheckLocation>
						</AddressDetail>
					</ContactMobile>
					<HrLine margin="0" />
					<PressFikaFooter>
						<TitleFooter>{t('fika_in_the_press', { ns: 'title' })}</TitleFooter>
						{magazines?.slice(0, 2).map((item) => {
							return (
								<PressContent key={item.id}>
									<div style={{ paddingTop: "4px" }}>
										<SvgPenAlt />
									</div>
									<PressDetail href={item.link} target="_blank" rel="noreferrer nofollow">
										<span>{item.author}</span> - {item.title}
									</PressDetail>
								</PressContent>
							)
						})}
					</PressFikaFooter>
					<HrLine margin="0" />
					<ConnectionFooter>
						<TitleFooter>{t("connection_text")}</TitleFooter>
						<ConnectionIconsFooter>
							<FooterMobileIconConnection aria-label='contact-us' rel="noreferrer nofollow" href="https://www.facebook.com/keepfika" target="_blank" >
								<SvgFacebookRound />
							</FooterMobileIconConnection>
							<FooterMobileIconConnection aria-label='contact-us' rel="noreferrer nofollow" href="https://instagram.com/fikaconnects?utm_medium=copy_link" target="_blank">
								<SvgInstagramRound />
							</FooterMobileIconConnection>
							<FooterMobileIconConnection aria-label='contact-us' rel="noreferrer nofollow" href="https://www.linkedin.com/company/keepfika/mycompany/" target="_blank">
								<SvgLinkedinRound />
							</FooterMobileIconConnection>
							<FooterMobileIconConnection aria-label='contact-us' rel="noreferrer nofollow" href="https://www.youtube.com/channel/UCtmcZ0-sPoePSt74hWP2Jtg" target="_blank">
								<SvgYoutubeRound />
							</FooterMobileIconConnection>
							<FooterMobileIconConnection aria-label='contact-us' rel="noreferrer nofollow" href="https://www.tiktok.com/@fikaconnects?" target="_blank">
								<SvgTiktokRound />
							</FooterMobileIconConnection>
						</ConnectionIconsFooter>
					</ConnectionFooter>
					<ConnectionFooter>
						<TitleFooter>{t("download_text")}</TitleFooter>
						<DownLoadFooter>
							<div style={{ width: "43%" }}>
								<img width={"100%"} alt="" onClick={() => window.open("https://apps.apple.com/app/id1528449006?mt=8")} src={'/app-store.png'} />
							</div>
							<div style={{ width: "43%" }}>
								<img width={"100%"} alt="" onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US") }} src={'/play-store.png'} />
							</div>
						</DownLoadFooter>
					</ConnectionFooter>
				</Space>
			</FooterMobileContainer>
			<CopyRightFooter>Copyright © 2020 FIKA. All Rights Reserved</CopyRightFooter>
		</footer>
	);
};

export default FooterMobile;
