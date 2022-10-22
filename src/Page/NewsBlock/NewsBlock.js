//Блок с новостями и рекламой

import Adv from "./Adv";
import News from "./News/News";

const NewsBlock = ({ newsList }) => {
	return (
		<div className="row">
			<News newsList={newsList} />
			<Adv />
		</div>
	);
};

export default NewsBlock;
