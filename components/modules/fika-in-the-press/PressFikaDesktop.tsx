import BrandMagazine from '@components/pages/fika-in-the-press/brand-magazines/BrandMagazine';
import Enquires from '@components/pages/fika-in-the-press/enquires/Enquires';
import PressFikaHeader from '@components/pages/fika-in-the-press/header/PressFikaHeader';
import MagsPressFika from '@components/pages/fika-in-the-press/mags-press-fika/MagsPressFika';
import { Space } from 'antd';
import React from 'react';
import { PressFikaContainer } from './PressFikaStyled';

interface IPressFikaDesktopProps {
}

const PressFikaDesktop: React.FunctionComponent<IPressFikaDesktopProps> = (props) => {
	return (
		<PressFikaContainer>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<PressFikaHeader />
				<MagsPressFika />
				<Enquires />
				<BrandMagazine />
			</Space>
		</PressFikaContainer>
	);
};

export default PressFikaDesktop;
