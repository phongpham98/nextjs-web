/* eslint-disable react-hooks/exhaustive-deps */
import CategoryMobileContent from '@components/pages/category-detail/content/CategoryMobileContent';
import { getCategorySingle, update_cate } from '@redux/slices/category';
import { RootState } from '@redux/store';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContent, Image, ImageContainer, RelationShipTitle } from '../blog/BlogMobileStyled';
interface ICategoryDetailMobileProps {
}

const CategoryDetailMobile: React.FunctionComponent<ICategoryDetailMobileProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { link } = router.query;
	const { t } = useTranslation();
	const { category } = useSelector((state: RootState) => state.category);
	React.useEffect(() => {
		if (typeof link === 'string') {
			dispatch(getCategorySingle(link))
		} 
		// else {
		// 	let categoryName = location.pathname.split('/').slice(-1)[0];
		// 	let link: string = '';
		// 	if (categoryName === "ceo-denise-sandquist-blogs") {
		// 		link = t("category.link.ceo");
		// 	} else {
		// 		link = t("category.link.cto");
		// 	}
		// 	dispatch(getCategorySingle(link))
		// }
		return () => {
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [link]);

	React.useEffect(() => {
		if (category) {
			sessionStorage.setItem('category', JSON.stringify(category))
		}
	}, [category]);


	React.useEffect(() => {
		const cate = sessionStorage.getItem('category');
		if (cate) {
			dispatch(update_cate(JSON.parse(cate)))
		}
	}, []);
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				{category ? <HeaderContent>
					<RelationShipTitle>{category.name}</RelationShipTitle>
				</HeaderContent> : null}
				<ImageContainer>
					<Image src={category?.thumbnail} alt={category?.name} />
				</ImageContainer>
			</GeneralHeaderMobileContainer>
			<CategoryMobileContent />
		</React.Fragment>
	)
};

export default CategoryDetailMobile;
