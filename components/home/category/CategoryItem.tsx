import { SingleTopicContainer, TopicImage, TopicTitle } from "@components/home/topics/TopicStyled";
import { CategoryHome } from "@interfaces/model";
import RenderSmoothImage from "@utils/components/RenderSmoothImage";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface TopicProps {
	item: CategoryHome;
}

const CategoryItem = (props: TopicProps) => {
	const { item } = props;
	const { thumbnail, name, link } = item;
	const { t } = useTranslation(['routes']);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<SingleTopicContainer>
				<Link href={`/${t('category')}/` + link}>
					<a>
						<TopicImage>
							<RenderSmoothImage width="600" height="600" src={thumbnail} alt={item.name} />
						</TopicImage>
					</a>
				</Link>
				<TopicTitle>
					<Link href={`/${t('category')}/` + link}>
						<a style={{ color: 'black' }}>
							{name}
						</a>
					</Link>
				</TopicTitle>
			</SingleTopicContainer>
		</div>
	);
};

export default CategoryItem;

// onClick={() => {
// 	// clickCategoryEvent(name);
// 	// mixpanel.track(`${link}_category_click`)
// }}