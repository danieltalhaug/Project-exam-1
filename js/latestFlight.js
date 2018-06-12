// JavaScript Document
fetch('https://api.spacexdata.com/v2/launches/latest')
	.then(latest => latest.json())
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

function latestFlightNumber(latest){
	var details = document.getElementById('latestFlightNumber');
	details.innerHTML += "<td>Flight Number:" + "</td>";
	details.innerHTML += "<td>" + latest.flight_number + "</td>";
}
function latestMissionName(latest){
	var details = document.getElementById('latestMissionName');
	details.innerHTML += "<td>Mission Name:" + "</td>";
	details.innerHTML += "<td>" + latest.mission_name + "</td>";
}
function latestLaunchDate(latest) {
	var details = document.getElementById('latestLaunchDate');
	details.innerHTML += "<td>Launch Date:" + "</td>";
	details.innerHTML += "<td>" + latest.launch_date_local + "</td>";
}
function latestRocketName(latest) {
	var details = document.getElementById('latestRocketName');
	details.innerHTML +="<td>Rocket Name:" + "</td>";
	details.innerHTML +="<td>" + latest.rocket.rocket_name + "</td>";
}
function latestPayloadType(latest) {
	var details = document.getElementById('latestPayloadType');
	details.innerHTML +="<td>Payload Type:" + "</td>";
	details.innerHTML +="<td>" + latest.rocket.second_stage.payloads[0].payload_type + "</td>";
}
function latestPayloadMass(latest) {
	var details = document.getElementById('latestPayloadMass');
	details.innerHTML +="<td>Payload Mass:" + "</td>";
	details.innerHTML +="<td>" + latest.rocket.second_stage.payloads[0].payload_mass_kg + " Kg </td>";
}
function latestDetailText(latest) {
	var details = document.getElementById('latestDetails');
	details.innerHTML += latest.details;
}

// video link: latest.links.video_link


fetch('https://api.spacexdata.com/v2/launches/next')
	.then(next => next.json())
	.then((res) => {
	nextFlightNumber(res);
	nextMissionName(res);
	nextLaunchDate(res);
	nextRocketName(res);
	nextPayloadType(res);
	nextPayloadMass(res);
})	

.catch(err => console.log(err))

function nextFlightNumber(next){
	var details = document.getElementById('nextFlightNumber');
	details.innerHTML += "<td>Flight Number:" + "</td>";
	details.innerHTML += "<td>" + next.flight_number + "</td>";
}
function nextMissionName(next){
	var details = document.getElementById('nextMissionName');
	details.innerHTML += "<td>Mission Name:" + "</td>";
	details.innerHTML += "<td>" + next.mission_name + "</td>";
}
function nextLaunchDate(next) {
	var details = document.getElementById('nextLaunchDate');
	details.innerHTML += "<td>Launch Date:" + "</td>";
	details.innerHTML += "<td>" + next.launch_date_local + "</td>";
}
function nextRocketName(next) {
	var details = document.getElementById('nextRocketName');
	details.innerHTML +="<td>Rocket Name:" + "</td>";
	details.innerHTML +="<td>" + next.rocket.rocket_name + "</td>";
}
function nextPayloadType(next) {
	var details = document.getElementById('nextPayloadType');
	details.innerHTML +="<td>Payload Type:" + "</td>";
	details.innerHTML +="<td>" + next.rocket.second_stage.payloads[0].payload_type + "</td>";
}
function nextPayloadMass(next) {
	var details = document.getElementById('nextPayloadMass');
	details.innerHTML +="<td>Payload Mass:" + "</td>";
	details.innerHTML +="<td>" + next.rocket.second_stage.payloads[0].payload_mass_kg + " Kg </td>";
}