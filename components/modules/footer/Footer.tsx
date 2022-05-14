import { faMapMarkerAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPresses } from '@redux/slices/press';
import { RootState } from '@redux/store';
import SvgLogoNeonHorizontal from '@svgs/LogoNeonHorizontal';
import ConnectionIcons from '@utils/components/ConnectionIcons';
import HrLine from '@utils/components/HrLine';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckLocation, ConnectionText, CopyRight, DownloadImage, FooterAddress, FooterAddressDetail, FooterConnection, FooterContainer, FooterContent, ImageLogo, LatestNew, PhoneUs, PressContent, PressDetail, PressTitle, VrLine } from './FooterStyled';

const Footer = () => {
	const { magazines } = useSelector((state: RootState) => state.press);
	const dispatch = useDispatch();
	const { t } = useTranslation(['footer', 'title']);
	useEffect(() => {
		dispatch(getPresses());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FooterContainer id="footer">
			<FooterContent >
				<FooterAddress >
					<ImageLogo>
						<SvgLogoNeonHorizontal />
					</ImageLogo>
					<FooterAddressDetail >
						<div>{t("holding")}</div>
						<div> {t("address")}</div>
						<PhoneUs >{t("contact_text")}: <span>{t("phone_number")}</span></PhoneUs>
						<CheckLocation onClick={() => window.open(t("map_link"))}>
							<FontAwesomeIcon icon={faMapMarkerAlt} />
							<span>{t("location_text")}</span>
						</CheckLocation>
					</FooterAddressDetail>
				</FooterAddress>
				<VrLine />
				<LatestNew>
					<Link href={`/fika-in-the-press`}>
						<a>
							<PressTitle>{t('press_fika', {
								ns: 'title'
							})}</PressTitle>
						</a>
					</Link>
					{magazines?.slice(0, 2)?.map((item) => {
						return (
							<PressContent key={item.id}>
								<div style={{ paddingTop: "2px" }}>
									<FontAwesomeIcon icon={faPenAlt} />
								</div>
								<PressDetail onClick={() => window.open(item.link)}>
									<span>{item.author}</span> - {item.title}
								</PressDetail>
							</PressContent>
						)
					})}
				</LatestNew>
				<VrLine />
				<FooterConnection>
					<ConnectionText>{t("connection_text")}</ConnectionText>
					<ConnectionIcons />
					<ConnectionText >{t("download_text")}</ConnectionText>
					<DownloadImage>
						<a aria-label={'download fika'} style={{ width: "120px" }} href="https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US" target="_blank" rel="noreferrer nofollow">
							<img src={'/play-store.png'} width="100%" alt="download fika" />
						</a>
						<a aria-label={'download fika'} href="https://apps.apple.com/app/id1528449006?mt=8" rel="noreferrer nofollow" target="_blank" >
							<img src={'/app-store.png'} width="120px" alt="download fika" />
						</a>
					</DownloadImage>
				</FooterConnection>
			</FooterContent>
			<HrLine margin={"0"} />
			<CopyRight>Copyright © 2020 FIKA. All Rights Reserved</CopyRight>
		</FooterContainer>
	);
};

export default Footer;