//Кнопки навигации

const NavButtons = ({ buttonsList }) => {
	return (
		<ul className="nav">
			{buttonsList.map((item) => {
				return (
					<li className="nav-item" key={item.id}>
						<div className="nav-link active">
							<a href={item.url}>{item.title}</a>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavButtons;
