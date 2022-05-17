import { JobModel } from '@interfaces/model';
import { getJobs } from '@redux/slices/careerDetail';
import { RootState } from '@redux/store';
import SvgPencil from '@svgs/Pencil';
import HrLine from '@utils/components/HrLine';
import SectionTitle from '@utils/components/SectionTitle';
import { Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CareerPosition from '../position/CareerPosition';
import SendCVForm from '../send-cv/SendCV';
import { PositionContainer, CareerDetailContentContainer } from './CareerDetailContentStyled';

const CareerDetailContent = () => {
	const dispatch = useDispatch();
	const { jobs_by_department } = useSelector((state: RootState) => state.careerDetail);
	React.useEffect(() => {
		dispatch(getJobs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<CareerDetailContentContainer>
			<Space style={{ width: "100%" }} size={100} direction="vertical">
				{jobs_by_department && Object.keys(jobs_by_department).map(function (key, index) {
					return (
						<div>
							<SectionTitle title={key} icon={<SvgPencil />} />
							<PositionContainer>
								{jobs_by_department[key].map((item: JobModel) => {
									return (
										<CareerPosition key={item.id} job={item} />
									)
								})}
							</PositionContainer>
						</div>
					)
				})}
				<HrLine margin="20" />
				<SendCVForm />
			</Space>
		</CareerDetailContentContainer>
	);
};

export default CareerDetailContent;