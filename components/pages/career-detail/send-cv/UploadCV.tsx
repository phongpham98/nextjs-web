import { DeleteFileIcon, FileNameContainer, UploadCaption, UploadIcon, UploadImagesContainer } from '@components/pages/connected-story/send-story/SendStoryStyled';
import { RootState } from '@redux/store';
import SvgCloseThin from '@svgs/CloseThin';
import SvgPlus from '@svgs/Plus';
import { Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import * as React from 'react';
import { useSelector } from 'react-redux';

interface IUploadCVProps {
	setFile: any;
}

const UploadCV: React.FunctionComponent<IUploadCVProps> = ({ setFile }) => {
	const [fileName, setFileName] = React.useState<any>();

	const beforeUpload = (file: RcFile) => {
		const isPdf = file.type === "application/pdf";
		if (!isPdf) {
		}
		const isLt2M = file.size / 1024 / 1024 < 5;
		if (!isLt2M) {
		}
		if (!isPdf || !isLt2M) {
			return false;
		}
		setFileName(file);
		setFile(file)
		const reader = new FileReader();
		reader.onload = (e: any) => {
			// setFile(e.target.result as string);
		};
		reader.readAsDataURL(file);

		return false;
	};

	const renderFile = (source: any) => {
		return (
			<React.Fragment>
				{source && <FileNameContainer>
					{source.name}
					<DeleteFileIcon onClick={() => {
						setFileName(null);
						setFile();
					}}>
						<SvgCloseThin color="black" />
					</DeleteFileIcon>
				</FileNameContainer>}
			</React.Fragment>
		);

	};
	const { success } = useSelector((state: RootState) => state.careerDetail);
	React.useEffect(() => {
		if (success === true) {
			setFileName(undefined);
		}
	}, [success]);

	return (
		<UploadImagesContainer>
			<UploadCaption>
				Upload YOUR THE CV or PORTFOLIO (IF ANY)
				<UploadIcon>
					<SvgPlus />
					<Upload.Dragger
						maxCount={1}
						showUploadList={false}
						multiple={false}
						beforeUpload={beforeUpload}
					>
					</Upload.Dragger>
				</UploadIcon>
			</UploadCaption>
			{renderFile(fileName)}
		</UploadImagesContainer>
	);
};

export default UploadCV;
