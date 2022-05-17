/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FormContainer } from './SendCVStyled';
import { Checkbox, Col, Form, Input, Row, Select } from 'antd';
import UploadCV from './UploadCV';
import { RootState } from '@redux/store';
import { useDispatch } from 'react-redux';
import { RcFile } from 'antd/lib/upload';
import { useSelector } from 'react-redux';
import { CVRequest } from '@interfaces/request';
import { sendCV } from '@redux/slices/careerDetail';
import SectionTitle from '@utils/components/SectionTitle';
import SvgBriefcase from '@svgs/Briefcase';
import { TermDiv } from '@utils/styled-components/GeneralStyled';
import FikaButton from '@utils/components/FikaButton';

const SendCVForm = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [file, setFile] = React.useState<RcFile | string>();
	const { jobs, success } = useSelector((state: RootState) => state.careerDetail);

	const handleFinish = async (e: any) => {
		let lang = localStorage.getItem("lang");
		const cvForm: CVRequest = {
			name: e.name,
			content: e.message,
			email: e.email,
			language: lang ? lang : "en",
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
		<FormContainer>
			<SectionTitle icon={<SvgBriefcase />} title={"send us your cv"} />
			<Form
				onFinish={handleFinish}

				form={form}
			>
				<Row gutter={[60, 0]}>
					<Col span={12}>
						<Form.Item
							name="name"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="NAME" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: "Please enter your email" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="EMAIL" />
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
				<FikaButton onClick={form.submit} name="Send your application" />
			</Form>
		</FormContainer>
	);
};

export default SendCVForm;