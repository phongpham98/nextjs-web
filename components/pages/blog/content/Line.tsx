import React from 'react';

interface LineProps {
	marginRight?: string;
}

const Line = ({ marginRight = '0' }: LineProps) => {

	return (
		<div style={{ borderTop: "1px solid #C8C7C7", margin: `0 ${marginRight} 0 0` }} />
	);
};

export default Line;