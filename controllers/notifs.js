const Notif = require("../DB/Schema/Notif")


exports.getAllNoti = async(req,res)=>{
    const notifs = await Notif.find().sort({ createdAt: -1 })
    res.json(notifs)
}

exports.deleteAllNotif = async(req,res)=>{
    await Notif.deleteMany()
    res.json({message : "notification delected"})
}