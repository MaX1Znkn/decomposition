//Блок с сервисами

import Aether from "./Aether/Aether";
import MapOf from "./MapOf/MapOf";
import TopVisits from "./TopVisits/TopVisits";
import TVProgram from "./TVProgram/TVProgram";
import Weather from "./Weather/Weather";

const Services = ({ topVisitList, tvList, aetherList, watherList }) => {
	return (
		<div className="row">
			<div className="col-4">
				{/*Компонент с погодой*/}
				<Weather watherList={watherList} />
				{/*Компонент с поп. сервисами*/}
				<TopVisits topVisitList={topVisitList} />
			</div>

			<div className="col-4">
				{/*Компонент с картой*/}
				<MapOf />
				{/*Компонент с тв программой*/}
				<TVProgram tvList={tvList} />
			</div>

			<div className="col-4">
				{/*Компонент с эфирами*/}
				<Aether aetherList={aetherList} />
			</div>
		</div>
	);
};

export default Services;
