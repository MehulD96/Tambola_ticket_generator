import Tambola from "../models/tambolaSchema.js";
import { tambolaGenerator } from "../middleware/ticketGenerator.js";


export const tambolaTicket = async(req,res,next)=>{
    
    let set  = req.params.set;
    console.log("set",set, typeof set);
    let ticket = [];
    let tickets ={};
    
    for(let i =0; i<(set*6); i++){
        console.log("in for loop")
        ticket = await tambolaGenerator();
        console.log("ticket array",ticket)
        tickets = new Tambola({tickets:ticket});
        await tickets.save();
    }
    next();
}

export const getTambola = async(req,res)=>{
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 12;
    let skip = (page - 1) * limit;
    const newtambola = await Tambola.find({},{tickets:1}).skip(skip).limit(limit);
    return res.status(200).json({
        
        message: "data returned",
        data: { newtambola },
        totalTickets: newtambola.length
    });
    
    
}

