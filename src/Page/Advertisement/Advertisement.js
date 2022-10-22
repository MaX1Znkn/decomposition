/*Реклама*/

const Advertisement = ({ advertisementUrl }) => {
	return (
		<div className="row mt-3">
			<img
				style={{ width: "60.5vw", height: "20vh" }}
				src={advertisementUrl.url}
				alt=""
			/>
		</div>
	);
};

export default Advertisement;
