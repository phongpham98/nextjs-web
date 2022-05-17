import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { JobModel } from '@interfaces/model';
import { getJobs } from '@redux/slices/careerDetail';
import { RootState } from '@redux/store';
import SvgPencil from '@svgs/Pencil';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CareerPosition from '../position/CareerPosition';
import SendCVMobile from '../send-cv/SendCVMobile';
import { PositionContainer } from './CareerDetailContentStyled';

interface IJobMobileProps {
}

const JobMobile: React.FunctionComponent<IJobMobileProps> = (props) => {
	const dispatch = useDispatch();
	const { jobs_by_department } = useSelector((state: RootState) => state.careerDetail);
	React.useEffect(() => {
		dispatch(getJobs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={40} direction="vertical">
					{jobs_by_department && Object.keys(jobs_by_department).map(function (key, index) {
						return (
							<div>
								<SectionTitle marginBottom="20" title={key} icon={<SvgPencil />} />
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
					<SendCVMobile />
				</Space>
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default JobMobile;
