"use strict";
// enum Role {
//   user = "USER",
//   admin = "ADMIN",
//   guest = "GUEST",
// }
// function accessToDiffUsers(role: Role) {
//   if (role === Role.user) {
//     console.log("Full user access");
//   } else if (role === Role.admin) {
//     console.log("Limited access");
//   } else {
//     console.log("Read only");
//   }
// }
// accessToDiffUsers(Role.admin)
// accessToDiffUsers(Role.guest)
// accessToDiffUsers(Role.user)
// enum Status {
//   SUCCESS = "SUCCESS",
//   ERROR = "ERROR",
//   LOADING = "LOADING",
// }
// function handleStatus(status: Status) {
//   switch (status) {
//     case Status.SUCCESS:
//         console.log("Sucess");
//       break;
//     case Status.ERROR:
//         console.log("Error");
//       break;
//     case Status.LOADING:
//         console.log("Loading");
//       break;
//   }
// }
// handleStatus(Status.ERROR)
// handleStatus(Status.LOADING)
// handleStatus(Status.SUCCESS)
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme || (Theme = {}));
var HTTPMethods;
(function (HTTPMethods) {
    HTTPMethods["GET"] = "get";
    HTTPMethods["POST"] = "post";
    HTTPMethods["DELETE"] = "delete";
    HTTPMethods["PUT"] = "put";
})(HTTPMethods || (HTTPMethods = {}));
var Notifications;
(function (Notifications) {
    Notifications["info"] = "INFO";
    Notifications["warning"] = "WARN";
    Notifications["error"] = "ERROR";
    Notifications["success"] = "SUCCESS";
})(Notifications || (Notifications = {}));
