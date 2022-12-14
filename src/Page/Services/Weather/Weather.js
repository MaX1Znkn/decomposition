//Погода

const Weather = ({ watherList }) => {
	return (
		<div>
			<h4>Погода</h4>
			<div className="row">
				<div className="col-6">
					<span className="material-icons">thermostat</span>
					<span style={{ fontSize: "30px" }}>{watherList.now}°</span>
				</div>
				<div className="col-6">
					<div>Утром {watherList.morning}</div>
					<div>Днем {watherList.day}</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
