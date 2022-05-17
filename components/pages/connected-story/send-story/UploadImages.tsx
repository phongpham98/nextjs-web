import { RootState } from '@redux/store';
import SvgClose from '@svgs/Close';
import SvgPlus from '@svgs/Plus';
import { Col, Row } from 'antd';
import { forEach } from 'lodash';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { DeleteIcon, ImageContainer, UploadCaption, UploadIcon, UploadImage, UploadImagesContainer } from './SendStoryStyled';

interface IUploadImagesProps {
	setFiles: any;
}

const UploadImages: React.FunctionComponent<IUploadImagesProps> = ({ setFiles }) => {
	const [selectedFiles, setSelectedFiles] = React.useState<any[]>([]);
	const handleImageChange = (e: any) => {
		let canUpload = true;
		forEach(e.target.files, file => {
			const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
			if (!isJpgOrPng) {
				console.log("You can only upload JPG/PNG file!");
			}
			const isLt2M = file.size / 1024 / 1024 < 2;
			if (!isLt2M) {
				console.log("Image must smaller than 2MB!");
			}
			if (!isJpgOrPng || !isLt2M) {
				canUpload = false
			}
		})
		if (canUpload) {
			setFiles(e.target.files);
			if (e.target.files) {
				const filesArray = Array.from(e.target.files).map((file: any) =>
					URL.createObjectURL(file)
				);

				setSelectedFiles((prevImages) => prevImages.concat(filesArray));
				Array.from(e.target.files).map(
					(file: any) => URL.revokeObjectURL(file)
				);
			}
		}

	};
	const { success } = useSelector((state: RootState) => state.sendStory);
	React.useEffect(() => {
		if (success === true) {
			setSelectedFiles([]);
		}
	}, [success])

	const renderPhotos = (source: any) => {
		return (
			<Row gutter={[20, 20]}>
				{source.map((photo: string, idx: number) => {
					return <Col xs={10} sm={4} key={photo}>
						<ImageContainer>
							<UploadImage src={photo} alt="fika" />
							<DeleteIcon onClick={() => {
								const s = source.filter((item: any, index: number) => index !== idx);
								setSelectedFiles(s);
							}}>
								<SvgClose />
							</DeleteIcon>
						</ImageContainer>
					</Col>
				})}

			</Row>
		);

	};

	return (
		<UploadImagesContainer>
			<UploadCaption>
				upload the images of your story
				<UploadIcon>
					<SvgPlus />
					<input type="file" id="file" multiple onChange={handleImageChange} />
				</UploadIcon>
			</UploadCaption>
			{renderPhotos(selectedFiles)}
		</UploadImagesContainer>

	);
};

export default UploadImages;
