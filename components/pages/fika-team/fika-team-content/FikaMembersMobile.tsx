import { getMembers } from '@redux/slices/team';
import { RootState } from '@redux/store';
import { Space } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FikaMember from '../fika-member/FikaMember';
import { MembersMobileContainer } from './MemberMobileStyled';

interface IFikaMembersMobileProps {
}

const FikaMembersMobile: React.FunctionComponent<IFikaMembersMobileProps> = (props) => {
	const dispatch = useDispatch();
	const { members, ceo, cto } = useSelector((state: RootState) => state.team);
	React.useEffect(() => {
		dispatch(getMembers());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<MembersMobileContainer>
			<Space style={{ width: "100%" }} size={30} direction="vertical">
				<FikaMember name={ceo?.name} image={ceo? ceo.avatar: ''} position={ceo?.position} />
				<FikaMember name={cto?.name} image={cto? cto.avatar: ''} position={cto?.position} />
				{members && members.map(m => {
					return (
						<FikaMember key={m.id} name={m.name} image={m?.avatar} position={m.position} />
					)
				})
				}
			</Space>
		</MembersMobileContainer>
	);
};

export default FikaMembersMobile;
