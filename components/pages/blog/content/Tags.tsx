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
	const { pathname } = router
	const [currentType, setCurrentType] = React.useState<string>("");
	React.useEffect(() => {
		let type: string = '';
		if (router.locale === "vi") {
			type = pathname.split("/")[1]

		} else {
			type = pathname.split('/')[2]
		}
		if (type === "blog") {
			setCurrentType('blog');
		} else
			setCurrentType(type)
	}, [pathname])

	return (
		<TagContainer>
			<TagTitle>Tags</TagTitle>
			<TagContent>
				{
					tags.map(tag => {
						return <TagItem className="tags" onClick={() => {
							clickTagEvent(tag.name);
							// router.push(`/${currentType === "category" ? "category/" + params.link : currentType}`,)
						}} key={tag.id} >{tag.name}</TagItem>
					})
				}
			</TagContent>
		</TagContainer>
	);
};

export default Tags;