module.exports=(error,req,res,next)=>{
    res.status(500).send({
    code:500,
    route:req.path,
    message:`Server error :${error.message}`,
    
    
    
    })
    
    }