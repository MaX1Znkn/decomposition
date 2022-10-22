//Блок с эфирами

import AetherItem from "./AetherItem/AetherItem";

const Aether = ({ aetherList }) => {
	return (
		<div>
			<h4>Эфир</h4>
			{aetherList.map((item) => {
				return <AetherItem item={item} key={item.id} />;
			})}
		</div>
	);
};

export default Aether;
