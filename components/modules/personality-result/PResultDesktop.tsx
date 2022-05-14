import ResultBody from '@components/pages/personality-result/content/ResultBody';
import ResultHeader from '@components/pages/personality-result/header/ResultHeader';
import { getResult } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultContainer } from './PersonalityResultStyled';

interface IPResultDesktopProps {
}

const PResultDesktop: React.FunctionComponent<IPResultDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	let { loading, assign_result } = useSelector((state: RootState) => state.quiz);
	React.useEffect(() => {
		if (typeof id === 'string')
			dispatch(getResult(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
	return (
		<ResultContainer>
			{loading === false && assign_result.length > 0 ? (
				<React.Fragment>
					<ResultHeader />
					<ResultBody />
				</React.Fragment>
			) : null}

		</ResultContainer>
	);
};

export default PResultDesktop;
