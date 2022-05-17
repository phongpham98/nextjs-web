/* eslint-disable react-hooks/exhaustive-deps */
import { StoryRequest } from '@interfaces/request';
import { sendStory } from '@redux/slices/sendStory';
import { RootState } from '@redux/store';
import SvgSettingFill from '@svgs/SettingFill';
import { Checkbox, Col, Form, Input, Row } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, SectionTitle, SendStoryBtn, TermDiv, Title } from './SendStoryFormMobileStyled';
import { TextDivCenter } from './SendStoryStyled';
import UploadImages from './UploadImages';

const SendStoryFormMobile = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [files, setFiles] = React.useState<string[] | RcFile[]>();
	const { success } = useSelector((state: RootState) => state.sendStory);

	const handleFinish = async (e: any) => {
		const form: StoryRequest = {
			user_a: e.user_a,
			user_b: e.user_b,
			email: e.email,
			title: e.title,
			other: e.other,
			content: e.story,
			files: files,
		};
		dispatch(sendStory(form));
	}

	React.useEffect(() => {
		if (success === true) {
			form.resetFields();
			setFiles([]);
		}
	}, [success])


	return (
		<FormContainer>
			<SectionTitle>
				<SvgSettingFill fontSize="0.5rem" />
				<Title>Send us your story</Title>
				<SvgSettingFill fontSize="0.5rem" />
			</SectionTitle>
			<Form
				onFinish={handleFinish}
				form={form}
			>
				<Row gutter={0}>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
							name="story"
							rules={[
								{ required: true, message: "Please enter your story" },
							]}
						>
							<Input.TextArea rows={3} placeholder="YOUR STORY" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<UploadImages setFiles={setFiles} />
					</Col>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
							name="user_a"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input placeholder="NAME" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
						>
							<TextDivCenter>and</TextDivCenter>
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
							name="user_b"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input placeholder="NAME" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
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
							style={{
								marginBottom: 10,
							}}
							name="title"
							rules={[
								{ required: true, message: "Please enter your title" },
							]}
						>
							<Input placeholder="TITLE" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 10,
							}}
							name="other"
						>
							<Input placeholder="OTHER" />
						</Form.Item>
					</Col>
				</Row>
				<TermDiv>
					<Checkbox>Save my name, email, and website in this browser for the next time I comment.</Checkbox>
				</TermDiv>
				<SendStoryBtn onClick={form.submit}>
					Send your story
				</SendStoryBtn>
			</Form>
		</FormContainer>
	);
};

export default SendStoryFormMobile;