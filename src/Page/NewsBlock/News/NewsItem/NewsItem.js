//Новости

const NewsItem = ({ note }) => {
	return (
		<li className="list-group-item border-0 p-0 mt-1">
			<img
				style={{ width: "15px", marginRight: "10px" }}
				src={note.icon}
				alt=""
			/>
			<a className="text-dark" href={note.url}>
				{note.title}
			</a>
		</li>
	);
};

export default NewsItem;
