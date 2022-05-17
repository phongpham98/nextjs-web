import { JobModel } from '@interfaces/model';
import React from 'react';
import { AddressDate, CareerPositionContainer, DownloadContainer, DownloadJdBtn, Name } from './CareerPositionStyled';

interface CareerPositionProps {
	job: JobModel;
}

const CareerPosition = ({ job }: CareerPositionProps) => {

	return (
		<CareerPositionContainer>
			<div>
				<Name>
					{job.position}
				</Name>
				<AddressDate>
					<div>
						Ho chi minh city
					</div>
					{/* <div>
						{renderDateFollowLanguage(job.expired_date)}
					</div> */}
				</AddressDate>
			</div>
			<DownloadContainer>
				<DownloadJdBtn href={job.jd_file}>
					Download PDF
				</DownloadJdBtn>
			</DownloadContainer>
		</CareerPositionContainer>
	);
};

export default CareerPosition;