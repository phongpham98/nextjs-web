/* eslint-disable react-hooks/exhaustive-deps */
import { StoryRequest } from '@interfaces/request';
import { toggle_modal } from '@redux/slices/connectedStoriesSlice';
import { sendStory } from '@redux/slices/sendStory';
import { RootState } from '@redux/store';
import SvgSetting from '@svgs/Setting';
import FikaButton from '@utils/components/FikaButton';
import SectionTitle from '@utils/components/SectionTitle';
import { Checkbox, Col, Form, Input, Row } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, TermDiv, TextDivCenter } from './SendStoryStyled';
import UploadImages from './UploadImages';

const SendStoryForm = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [files, setFiles] = React.useState<string[] | RcFile[]>();
	const { success } = useSelector((state: RootState) => state.sendStory);
	const { isOpenModal } = useSelector((state: RootState) => state.loveStory);

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
			if (isOpenModal === true) {
				dispatch(toggle_modal());
			}
		}
	}, [success])


	return (
		<FormContainer>
			<SectionTitle marginBottom={"30"} icon={<SvgSetting />} title={"send us your story"} />
			<Form
				onFinish={handleFinish}
				form={form}
			>
				<Row gutter={[20, 20]}>
					<Col span={24}>
						<Form.Item
							style={{
								marginBottom: 0,
							}}
							name="story"
							rules={[
								{ required: true, message: "Please enter your story" },
							]}
						>
							<Input.TextArea rows={4} placeholder="YOUR STORY" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<UploadImages setFiles={setFiles} />
					</Col>
					<Col span={8}>
						<Form.Item
							name="user_a"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="NAME" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
						>
							<TextDivCenter>and</TextDivCenter>
						</Form.Item>
					</Col>

					<Col span={8}>
						<Form.Item
							name="user_b"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="NAME" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: "Please enter your email" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="EMAIL" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							name="title"
							rules={[
								{ required: true, message: "Please enter your title" },
							]}
						>
							<Input style={{ padding: "10px" }} placeholder="TITLE" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							name="other"
						>
							<Input style={{ padding: "10px" }} placeholder="OTHER" />
						</Form.Item>
					</Col>
				</Row>
				<TermDiv className="term">
					<Checkbox>Save my name, email, and website in this browser for the next time I comment.</Checkbox>
				</TermDiv>
				<div style={{ marginTop: "2rem" }}>
					<FikaButton onClick={form.submit} name="Send story" />
				</div>
			</Form>
		</FormContainer>
	);
};

export default SendStoryForm;