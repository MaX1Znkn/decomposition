//Блок с поиском и лого

import Logo from "./Logo/Logo";
import Search from "./Search/Search";

const SearchBlock = () => {
	return (
		<div className="row">
			<Logo />
			<Search />
		</div>
	);
};

export default SearchBlock;
