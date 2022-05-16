import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollContainer } from './InfiniteScrollStyled';

interface InfiniteScrollPostsProps {
	children: any,
	fetchData?: any,
	hasMore: boolean,
	dataLength: number
}

const InfiniteScrollPosts = ({ children, fetchData, hasMore, dataLength }: InfiniteScrollPostsProps) => {
	return (
		<InfiniteScrollContainer>
			<InfiniteScroll
				dataLength={dataLength} //This is important field to render the next data
				next={fetchData}
				style={{ overflow: "hidden" }}
				hasMore={hasMore}
				loader={<div style={{ textAlign: "center", marginTop: "90px" }}><LoadingOutlined style={{ fontSize: "50px" }} /></div>}
				endMessage={hasMore &&
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{children}
			</InfiniteScroll>
		</InfiniteScrollContainer>
	);
};

export default InfiniteScrollPosts;