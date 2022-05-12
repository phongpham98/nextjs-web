import { getCategories } from '@redux/slices/home';
import { RootState } from '@redux/store';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryMobileContainer, CateItem, VrLineMobile } from './CategoryMobileStyled';
interface ICategoryMobileProps {
}

const CategoryMobile: React.FunctionComponent<ICategoryMobileProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { categories } = useSelector((state: RootState) => state.home);

	React.useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	return (
		<React.Fragment>
			<CategoryMobileContainer>
				{categories?.slice(0, 2).map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							<CateItem onClick={() => router.push(`/category/` + item.link)}>
								{item.name}
							</CateItem>
							{idx !== 1 && <VrLineMobile></VrLineMobile>}
						</React.Fragment>
					)
				})}

			</CategoryMobileContainer>
			<CategoryMobileContainer className="no-border-top">
				{categories?.slice(2, 4).map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							<CateItem onClick={() => router.push(`/category/` + item.link)}>
								{item.name}
							</CateItem>
							{idx !== 1 && <VrLineMobile></VrLineMobile>}
						</React.Fragment>
					)
				})}

			</CategoryMobileContainer>
		</React.Fragment>

	);
};

export default CategoryMobile;
