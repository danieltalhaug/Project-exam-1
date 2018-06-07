// JavaScript Document
fetch('https://api.spacexdata.com/v2/launches/latest')
	.then(result => result.json())
	.then((res) => {
	latestFlightNumber(res);
	latestMissionName(res);
	latestLaunchDate(res);
	latestRocketName(res);
	latestPayloadType(res);
	latestPayloadMass(res);
	latestDetailText(res);
})	
.catch(err => console.log(err))

function latestFlightNumber(result){
	var details = document.getElementById('latestFlightNumber');
	details.innerHTML += "<td>Flight Number:" + "</td>";
	details.innerHTML += "<td>" + result.flight_number + "</td>";
}
function latestMissionName(result){
	var details = document.getElementById('latestMissionName');
	details.innerHTML += "<td>Mission Name:" + "</td>";
	details.innerHTML += "<td>" + result.mission_name + "</td>";
}
function latestLaunchDate(result) {
	var details = document.getElementById('latestLaunchDate');
	details.innerHTML += "<td>Launch Date:" + "</td>";
	details.innerHTML += "<td>" + result.launch_date_local + "</td>";
}
function latestRocketName(result) {
	var details = document.getElementById('latestRocketName');
	details.innerHTML +="<td>Rocket Name:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.rocket_name + "</td>";
}
function latestPayloadType(result) {
	var details = document.getElementById('latestPayloadType');
	details.innerHTML +="<td>Payload Type:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.second_stage.payloads[0].payload_type + "</td>";
}
function latestPayloadMass(result) {
	var details = document.getElementById('latestPayloadMass');
	details.innerHTML +="<td>Payload Mass:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.second_stage.payloads[0].payload_mass_kg + " Kg </td>";
}
function latestDetailText(result) {
	var details = document.getElementById('latestDetails');
	details.innerHTML += result.details;
}

// video link: result.links.video_link