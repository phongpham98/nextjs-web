import { clickTagEvent } from '@helpers/customGTM';
import { Tag } from '@interfaces/posts';
import { useRouter } from 'next/router';
import React from 'react';
import { TagContainer, TagContent, TagItem, TagTitle } from './TagStyled';
export interface TagsProps {
	tags: Tag[];
}

const Tags = ({ tags }: TagsProps) => {
	const router = useRouter();
	const { pathname } = router;
	const [currentType, setCurrentType] = React.useState<string>("");

	// let params: IParams = useParams();
	React.useEffect(() => {
		// cón
	}, [pathname])

	return (
		<TagContainer>
			<TagTitle>Tags</TagTitle>
			<TagContent>
				{
					tags.map(tag => {
						return <TagItem className="tags" onClick={() => {
							clickTagEvent(tag.name);
							// router.push(`/${currentType === "category" ? "category/" + params.link : currentType}`, { tags: [tag] })
						}} key={tag.id} >{tag.name}</TagItem>
					})
				}
			</TagContent>
		</TagContainer>
	);
};

export default Tags;