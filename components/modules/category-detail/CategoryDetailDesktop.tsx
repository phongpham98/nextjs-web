/* eslint-disable react-hooks/exhaustive-deps */
import CategoryContent from '@components/pages/category-detail/content/CategoryContent';
import CategoryHeader from '@components/pages/category-detail/header/CategoryHeader';
import { getCategorySingle } from '@redux/slices/category';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch } from 'react-redux';

interface ICategoryDetailDesktopProps {
}

const CategoryDetailDesktop: React.FunctionComponent<ICategoryDetailDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { link } = router.query;

	React.useEffect(() => {
		if (typeof link === 'string') {
			dispatch(getCategorySingle(link))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [link]);

	return (
		<GeneralContentWrapper>
			<CategoryHeader />
			<CategoryContent />
		</GeneralContentWrapper>
	);
};

export default CategoryDetailDesktop;
