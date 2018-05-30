// JavaScript Document
		function toggleNav() {
			var nav = document.getElementById("mobileNav");
			if (nav.className === "nav-container") {
				nav.className += " open";
			} else {
				nav.className = "nav-container"
			}
		}