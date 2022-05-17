import { toggle_modal } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import SvgCloseThin from '@svgs/CloseThin';
import { CloseIcon } from '@utils/styled-components/GeneralStyled';
import { Modal } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SendStoryForm from '../send-story/SendStoryForm';

interface ISendStoryModalProps {
}

const SendStoryModal: React.FunctionComponent<ISendStoryModalProps> = (props) => {

	const { isOpenModal } = useSelector((state: RootState) => state.loveStory);

	const dispatch = useDispatch();

	return (
		<div>
			<Modal
				centered
				visible={isOpenModal}
				onOk={() => dispatch(toggle_modal())}
				onCancel={() => dispatch(toggle_modal())}
				footer={null}
				width={"60%"}
				closeIcon={<CloseIcon>
					<SvgCloseThin color="white" fontSize={20} />
				</CloseIcon>}
			>
				<SendStoryForm />
			</Modal>
		</div>
	);
};

export default SendStoryModal;
