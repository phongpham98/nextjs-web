import CountDown from '@utils/components/count-down/CountDown'
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled'
import { useTranslation } from 'next-i18next'
import React from 'react'

type Props = {}

const SocialSpotsDesktop = (props: Props) => {
	const { t } = useTranslation('social-spots');
	return (
		<GeneralContentWrapper>
			<CountDown description={t('header_desc')} />
		</GeneralContentWrapper>
	)
}

export default SocialSpotsDesktop