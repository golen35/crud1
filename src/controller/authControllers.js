import asyncHandler from 'express-async-handler'


// Display list of all Authors.
exports.signugControllers = asyncHandler(async (req, res, next) => {
    res.send("AAAAAA")
  });

// export const dol = async (req, res) => {
//     res.send("olas");
// };