import React from 'react';

interface HrLineProps{
	margin?: string;
}

const HrLine = ({margin = '20'}: HrLineProps) => {

	return (
		<div style={{ borderTop: "1px solid #C8C7C7", margin: `0 ${margin}%` }} />
	);
};

export default HrLine;