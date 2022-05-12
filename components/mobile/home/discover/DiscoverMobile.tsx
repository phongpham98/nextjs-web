import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { ButtonDisContainer, DiscoverBoldText, DiscoverMobileContainer, DiscoverSubText } from './DiscoverMobileStyled';

interface IDiscoverMobileProps {
}

const DiscoverMobile: React.FunctionComponent<IDiscoverMobileProps> = (props) => {
	const { t} = useTranslation('button');
	const router = useRouter();
	return (
		<DiscoverMobileContainer>
			<DiscoverBoldText>
				{t("matched.title", {ns: 'home'})}
			</DiscoverBoldText>
			<DiscoverSubText>
				{/* {t("homepage.matched.sub_title")} */}
			</DiscoverSubText>
			<ButtonDisContainer>
				<FikaButtonMobile onClick={() => router.push(`/personality/quiz/free-personality-test`)} >{t("discover")}</FikaButtonMobile>
			</ButtonDisContainer>
		</DiscoverMobileContainer>
	);
};

export default DiscoverMobile;
