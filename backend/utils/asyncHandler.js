// This function is a wrapper for all functions that use promises.
// If the promise resolves successfully, it returns the result as is.
// If an error occurs, it catches the error and passes it to the next middleware.
// This approach simplifies error handling compared to using try-catch blocks in every function.

const asyncHandler = (reqfunction) => {
  return (req, res, next) => {
    Promise.resolve(reqfunction(req, res, next)).catch((err) => next(err));
  };
};

export {asyncHandler};

// ==> data ==> function ==> data ==>

// const asyncHandlerone = (fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
