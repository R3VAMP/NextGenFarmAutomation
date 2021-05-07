// Sidebar Toggle Codes
var sidebarOpen = false;
var sidebar = document.querySelector("#sidebar");
var sidebarCloseIcon = document.querySelector("#sidebarIcon");

function toggleSidebar() {
	if (!sidebarOpen) {
		sidebar.classList.add("sidebar_responsive");
		sidebarOpen = true;
	}
}

function closeSidebar() {
	if (sidebarOpen) {
		sidebar.classList.remove("sidebar_responsive");
		sidebarOpen = false;
	}
}

/* *********Firebase Connections*************** */

var firebaseConfig = {
	apiKey: "AIzaSyAKpXoGIz-h3WR4jy47b8BFhhRsgZe2EIE",
	authDomain: "nextgenfarmautomationfinal.firebaseapp.com",
	databaseURL: "https://nextgenfarmautomationfinal-default-rtdb.firebaseio.com",
	projectId: "nextgenfarmautomationfinal",
	storageBucket: "nextgenfarmautomationfinal.appspot.com",
	messagingSenderId: "939742735387",
	appId: "1:939742735387:web:19e8815276b36f49f99cbe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * 1. Selecting the data from the Firebase Realtime Database
 * 2. Function showData() to store the data in variables
 * 3. Function addData() to add values to respective ID selectors
 */

// console.log(firebase);
let x = 30;
const showData = () => {
	firebase
		.database()
		.ref()
		.on("value", (givenName) => {
			givenName.forEach((element) => {
				var showTemp = element.val().tempValue;
				var showHumid = element.val().humidityValue;
				var showMoist = element.val().moisturePercentage;
				var showMotor = element.val().motorStatus;
				var showLed = element.val().ldrStatus;
				addItem(showTemp, showHumid, showMoist, showMotor, showLed);
			});
		});
};
window.onload = showData;

const addItem = (showTemp, showHumid, showMoist, showMotor, showLed) => {
	document.querySelector("#temperature").innerText = showTemp;
	document.querySelector("#humidity").innerText = showHumid;
	document.querySelector("#moisture").innerText = showMoist;
	document.querySelector("#pump-status").innerText = showMotor;
	document.querySelector("#growing-led").innerText = showLed;
};
