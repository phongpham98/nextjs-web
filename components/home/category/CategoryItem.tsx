import { SingleTopicContainer, TopicImage, TopicTitle } from "@components/home/topics/TopicStyled";
import { CategoryHome } from "@redux/states";
import RenderSmoothImage from "@utils/components/RenderSmoothImage";
import Link from "next/link";

interface TopicProps {
	item: CategoryHome;
}

const CategoryItem = (props: TopicProps) => {
	const { item } = props;
	const { thumbnail, name, link } = item;

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<SingleTopicContainer>
				<Link href={`/category/` + link}>
					<a>
						<TopicImage>
							<RenderSmoothImage width="600" height="600" src={thumbnail} alt={item.name} />
						</TopicImage>
					</a>
				</Link>
				<TopicTitle>
					<Link href={`/category/` + link}>
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