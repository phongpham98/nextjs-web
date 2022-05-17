import { CommentRequest } from '@interfaces/request';
import { getCommentsById, sendComment } from '@redux/slices/comment';
import { RootState } from '@redux/store';
import { TermDiv } from '@utils/styled-components/GeneralStyled';
import { Checkbox, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FikaButton from '../FikaButton';
import { CommentContainer } from './CommentStyled';

interface Props {
	postId: string;
}

const Comment = ({ postId }: Props) => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { success, commentId, isReply } = useSelector((state: RootState) => state.comment);
	const { t } = useTranslation(['common', 'button']);

	const inputRef = React.useRef<any>(null)

	const handleFinish = (e: any) => {
		let id: string = '';
		if (isReply) {
			id = commentId;
		} else {
			id = postId;
		}
		const form: CommentRequest = {
			email: e.email,
			name: e.name,
			post_id: id,
			comments: e.message,
		};
		dispatch(sendComment(form));
	}

	React.useEffect(() => {
		if (isReply === true) {
			inputRef.current && inputRef.current.focus();
		}
	}, [isReply])

	React.useEffect(() => {
		if (success === true) {
			form.resetFields();
			dispatch(getCommentsById(postId));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [success])
	return (
		<CommentContainer>
			<Form
				onFinish={handleFinish}
				form={form}
			>
				<Row gutter={[20, 20]}>
					<Col sm={12} xs={24}>
						<Form.Item
							name="name"
							rules={[
								{ required: true, message: "Please enter your name" },
							]}
						>
							<Input ref={inputRef} placeholder={t("comment.place_holder.name")} />
						</Form.Item>
					</Col>
					<Col sm={12} xs={24}>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: "Please enter your  email" },
							]}
						>
							<Input placeholder={t("comment.place_holder.email")} />
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item
							name="message"
							rules={[
								{ required: true, message: "Please enter your comment" },
							]}
						>
							<Input.TextArea rows={4} placeholder={t("comment.place_holder.comment")} />
						</Form.Item>
					</Col>
				</Row>
				<TermDiv className="term">
					<Form.Item
						name="agreement"
						valuePropName="checked"
					>
						<Checkbox>{t("comment.save_name_email")}</Checkbox>
					</Form.Item>
				</TermDiv>
				<div style={{ marginTop: "2rem", textAlign: "center" }}>
					<FikaButton onClick={form.submit} name={t("post_comment", { ns: 'button' })} />
				</div>
			</Form>
		</CommentContainer>
	);
};

export default Comment;