//Кнопки навигации над новостями

const NavNews = () => {
	return (
		<div className="row">
			<nav className="nav">
				<a href="/" className="nav-link">
					Сейчас в СМИ
				</a>
				<a href="/" className="nav-link">
					В Германии
				</a>
				<a href="/" className="nav-link">
					Рекомендуем
				</a>
				<a href="/" className="nav-link disabled">
					31 июля среда 02 32
				</a>
			</nav>
		</div>
	);
};

export default NavNews;
