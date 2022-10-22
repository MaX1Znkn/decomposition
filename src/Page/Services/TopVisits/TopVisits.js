//Блок с популярными сервисами

import TopVisitItem from "./TopVisitItem/TopVisitItem";

const TopVisits = ({ topVisitList }) => {
	return (
		<div>
			<h4>Посещаемое</h4>
			{topVisitList.map((item) => {
				return <TopVisitItem item={item} key={item.id} />;
			})}
		</div>
	);
};

export default TopVisits;
