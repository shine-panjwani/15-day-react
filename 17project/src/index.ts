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

enum Theme{
    Light = "light",
    Dark = "dark"
}
enum HTTPMethods{
    GET = "get",
    POST = "post",
    DELETE  = "delete",
    PUT = "put"
}
enum Notifications{
    info ="INFO",
    warning = "WARN",
    error = "ERROR",
    success = "SUCCESS"
}
