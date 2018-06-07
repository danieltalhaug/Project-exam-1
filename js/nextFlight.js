// JavaScript Document
fetch('https://api.spacexdata.com/v2/launches/next')
	.then(result => result.json())
	.then((res) => {
	nextFlightNumber(res);
	nextMissionName(res);
	nextLaunchDate(res);
	nextRocketName(res);
	nextPayloadType(res);
	nextPayloadMass(res);
})	

.catch(err => console.log(err))

function nextFlightNumber(result){
	var details = document.getElementById('nextFlightNumber');
	details.innerHTML += "<td>Flight Number:" + "</td>";
	details.innerHTML += "<td>" + result.flight_number + "</td>";
}
function nextMissionName(result){
	var details = document.getElementById('nextMissionName');
	details.innerHTML += "<td>Mission Name:" + "</td>";
	details.innerHTML += "<td>" + result.mission_name + "</td>";
}
function nextLaunchDate(result) {
	var details = document.getElementById('nextLaunchDate');
	details.innerHTML += "<td>Launch Date:" + "</td>";
	details.innerHTML += "<td>" + result.launch_date_local + "</td>";
}
function nextRocketName(result) {
	var details = document.getElementById('nextRocketName');
	details.innerHTML +="<td>Rocket Name:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.rocket_name + "</td>";
}
function nextPayloadType(result) {
	var details = document.getElementById('nextPayloadType');
	details.innerHTML +="<td>Payload Type:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.second_stage.payloads[0].payload_type + "</td>";
}
function nextPayloadMass(result) {
	var details = document.getElementById('nextPayloadMass');
	details.innerHTML +="<td>Payload Mass:" + "</td>";
	details.innerHTML +="<td>" + result.rocket.second_stage.payloads[0].payload_mass_kg + " Kg </td>";
}