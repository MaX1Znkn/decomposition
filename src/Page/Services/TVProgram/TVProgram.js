//Блок с тв программой

import TVProgramItem from "./TVProgramItem/TVProgramItem";

const TVProgram = ({ tvList }) => {
	return (
		<div>
			<h4>Телепрограмма</h4>
			{tvList.map((item) => {
				return <TVProgramItem item={item} key={item.id} />;
			})}
		</div>
	);
};

export default TVProgram;
