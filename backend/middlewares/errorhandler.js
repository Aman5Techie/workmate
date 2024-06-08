// function errorHandler(err, req, res, next) {
//     console.log("a----------------------------");
//     console.log(err.code);
//     // console.error("Error:", err); // Log the error for debugging

//   // Send an appropriate error response based on the error code
//   if (err.code === "P2002") {
//     res.status(400).json({ status: false, msg: "Username not unique" });
//   } else {
//     res.status(500).json({ status: false, msg: "Internal server error" });
//   }
// }
function errorHandler(err, res) {
  console.log(err);
  if (err.code === "P2002" && err.meta?.target?.includes("username")) {
    res.status(400).json({ status: false, msg: "Username not unique" });
  } else if (err.code === "P2002" && err.meta?.target?.includes("email")) {
    res.status(500).json({ status: false, msg: "Email not unique" });
  }
}


module.exports = { errorHandler };
