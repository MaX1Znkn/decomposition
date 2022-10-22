import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import Advertisement from "./Advertisement/Advertisement";
import NavBlock from "./NavBlock/NavBlock";
import NewsBlock from "./NewsBlock/NewsBlock";
import SearchBlock from "./SearchBlock/SearchBlock";
import Services from "./Services/Services";

import data from "../data";

const Page = () => {
	return (
		<div className="container">
			{/*Блок кнопок управления новостями.*/}
			<NavBlock />
			{/*Блок с новостями*/}
			<NewsBlock newsList={data.newsList} />
			{/*Блок кнопок навигации*/}
			<ButtonsBlock buttonsList={data.buttonsList} />
			{/*Блок поиска*/}
			<SearchBlock />
			{/*Блок с рекламой*/}
			<Advertisement advertisementUrl={data.advertisementUrl} />
			{/*Блок с сервисами*/}
			<Services
				topVisitList={data.topVisitList}
				tvList={data.tvList}
				aetherList={data.aetherList}
				watherList={data.watherList}
			/>
		</div>
	);
};

export default Page;
