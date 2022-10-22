//Блок с кнопками навигации

import NavButtons from "./NavButtons/NavButtons";

const ButtonsBlock = ({ buttonsList }) => {
	return (
		<div>
			<NavButtons buttonsList={buttonsList} />
		</div>
	);
};

export default ButtonsBlock;
