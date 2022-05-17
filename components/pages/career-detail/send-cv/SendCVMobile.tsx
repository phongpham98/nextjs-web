/* eslint-disable react-hooks/exhaustive-deps */
import { SectionTitle, Title } from '@components/pages/connected-story/send-story/SendStoryFormMobileStyled';
import { CVRequest } from '@interfaces/request';
import { sendCV } from '@redux/slices/careerDetail';
import { RootState } from '@redux/store';
import SvgSettingFill from '@svgs/SettingFill';
import { TermDiv } from '@utils/styled-components/GeneralStyled';
import { Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { RcFile } from 'antd/lib/upload';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, SendCVBtn } from './SendCVStyled';
import UploadCV from './UploadCV';

interface ISendCVMobileProps {
}

const SendCVMobile: React.FunctionComponent<ISendCVMobileProps> = (props) => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [file, setFile] = React.useState<RcFile | string>();
	const { jobs, success } = useSelector((state: RootState) => state.careerDetail);

	const handleFinish = async (e: any) => {

		const cvForm: CVRequest = {
			name: e.name,
			content: e.message,
			email: e.email,
			language: "en",
			job_id: e.position,
			file: file,
		};

		dispatch(sendCV(cvForm));
	}

	React.useEffect(() => {
		if (success === true) {
			form.resetFields();
			setFile(undefined);
		}
	}, [success]);

	return (
		<React.Fragment>
			<FormContainer>
				<SectionTitle>
					<SvgSettingFill fontSize="0.5rem" />
					<Title>Send us your cv</Title>
					<SvgSettingFill fontSize="0.5rem" />
				</SectionTitle>
				<Form
					onFinish={handleFinish}

					form={form}
				>
					<Row gutter={[60, 0]}>
						<Col span={24}>
							<Form.Item
								name="name"
								rules={[
									{ required: true, message: "Please enter your name" },
								]}
							>
								<Input placeholder="NAME" />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="email"
								rules={[
									{ required: true, message: "Please enter your email" },
								]}
							>
								<Input placeholder="EMAIL" />
							</Form.Item>
						</Col>

						<Col span={24}>
							<Form.Item
								name="position"

								rules={[
									{ required: true, message: "Please choose your position" },
								]}
							>
								<Select
									placeholder="POSITION"
								>
									{jobs.map(job => {
										return (
											<Select.Option key={job.id} value={job.id}>{job.position}</Select.Option>
										)
									})}
								</Select>
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="message"
							>
								<Input.TextArea rows={4} placeholder="MESSAGE" />
							</Form.Item>
						</Col>
						<Col span={24}>
							<UploadCV setFile={setFile} />
						</Col>
					</Row>
					<TermDiv>
						<Form.Item
							name="agreement"
							valuePropName="checked"
							rules={[
								{
									validator: (_, value) =>
										value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
								},
							]}
						>
							<Checkbox>
								I have read and understand your privacy policy. I agree to receive e-mail communication from Fika
							</Checkbox>
						</Form.Item>
					</TermDiv>
					<SendCVBtn onClick={form.submit}>
						Send your story
					</SendCVBtn>
				</Form>
			</FormContainer>
		</React.Fragment>
	);
};

export default SendCVMobile;
