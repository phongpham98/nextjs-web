/* eslint-disable react-hooks/exhaustive-deps */
import { getCeoBlogs, getCTOBlogs } from '@redux/slices/discoverBlogs';
import { RootState } from '@redux/store';
import SvgPen from '@svgs/Pen';
import FikaButton from '@utils/components/FikaButton';
import SectionTitle from '@utils/components/SectionTitle';
import SVGIcon from '@utils/components/SVGIcon';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CeoBlog from './CeoBlog';
import { ExploreAll } from './CeoBlogStyled';

const DiscoverBlogs = () => {
	const { blogs, ctoBlogs } = useSelector((state: RootState) => state.discover);
	const { t } = useTranslation(['button', 'home']);
	const dispatch = useDispatch();
	const router = useRouter()
	React.useEffect(() => {
		dispatch(getCeoBlogs());
		dispatch(getCTOBlogs());
	}, []);
	return (
		<div >
			{(blogs && ctoBlogs) ? (
				<React.Fragment>
					<SectionTitle icon={<SvgPen />} title={t('section_title.discover_blog', { ns: 'home' })} />
					<Row justify="space-between" gutter={30}>
						<Col sm={24} md={8}>
							<div>
								{blogs.length > 0 ? <CeoBlog blog={blogs[0]} /> : null}
							</div>
						</Col>
						<Col sm={24} md={8}>
							<div>
								<CeoBlog blog={ctoBlogs} />
							</div>
						</Col>
						<Col sm={24} md={8}>
							<div>
								{blogs.length > 1 ? <CeoBlog blog={blogs[1]} /> : null}
							</div>
						</Col>
					</Row>
					<ExploreAll>
						<FikaButton onClick={() => router.push(`/blog`)} name={t('explore_all')} />
					</ExploreAll>
				</React.Fragment>
			) : <div></div>}
		</div>
	);
};

export default DiscoverBlogs;