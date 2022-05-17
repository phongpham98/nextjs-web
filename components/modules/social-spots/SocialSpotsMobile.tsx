import NavMobile from '@components/navbar/nav-mobile/NavMobile'
import CountDown from '@utils/components/count-down/CountDown'
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled'
import { useTranslation } from 'next-i18next'
import React from 'react'

type Props = {}

const SocialSpotsMobile = (props: Props) => {
	const { t } = useTranslation('social-spots');
	return (
		<div>
			<NavMobile hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<CountDown description={t('header_desc')} />
			</GeneralPaddingMobile>
		</div>
	)
}

export default SocialSpotsMobile