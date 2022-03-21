var express = require('express');
const { getMaxListeners } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/marksheet', function(req, res) {
  res.render("marksheet",{msg:''})
});

router.get("/reged", function(req,res){
    if(req.query.email=="india@gmail.com" && req.query.pwd=="123"){
        res.render('marksheet',{msg:''})
    }
    else
        {res.render("login",{msg:"Invalid  ENTRY CHECK AGAIN"})
    }
})

    router.get("/checked",function(req,res){
        
        
        
        
       
        if(req.query.H>=100){res.render("marksheet",{msg:"Invalid  ENTRY CHECK AGAIN"})}
        else if(req.query.H>35 && req.query.H<55){H1="D"}
        else if(req.query.H>55 && req.query.H<75){H1="B"}
       else if(req.query.H>75 && req.query.H<100){H1="A"}
        else{H1="FAIL"}
        
        if(req.query.E>=100){res.render("marksheet",{msg:"Invalid  ENTRY CHECK AGAIN"})}
        else if(req.query.E>35 && req.query.E<55){H2="D"}
        else if(req.query.E>55 && req.query.E<75){H2="B"}
       else if(req.query.E>75 && req.query.E<100){H2="A"}
        else{H2="FAIL"}

        if(req.query.P>=100){res.render("marksheet",{msg:"Invalid  ENTRY CHECK AGAIN"})}
        else if(req.query.P>35 && req.query.P<55){H3="D"}
        else if(req.query.P>55 && req.query.P<75){H3="B"}
       else if(req.query.P>75 && req.query.P<100){H3="A"}
    else{H3="FAIL"}


if(req.query.C>=100){res.render("marksheet",{msg:"Invalid  ENTRY CHECK AGAIN"})}
        else if(req.query.C>35 && req.query.C<55){H4="D"}
        else if(req.query.C>55 && req.query.C<75){H4="B"}
       else if(req.query.C>75 && req.query.C<100){H4="A"}
        else{H4="FAIL"}

        if(req.query.M>=100){res.render("marksheet",{msg:"Invalid  ENTRY CHECK AGAIN"})}

        else if(req.query.M>35 && req.query.M<55){H5="D"}
        else if(req.query.M>55 && req.query.M<75){H5="B"}
       else if(req.query.M>75 && req.query.M<100){H5="A"}
        else{H5="FAIL"}



        to=parseInt(req.query.H)+parseInt(req.query.E)+parseInt(req.query.P)+parseInt(req.query.C)+parseInt(req.query.M)
PR=(to*100)/500
if(PR>=45){RST="PASS"}
else{RST="FAIL"}


if(req.query.ML=='MALE')
 {
sn=req.query.sn+' S/O '+req.query.fn}
else{sn=req.query.sn+' D/O '+req.query.fn}

res.render('certificate',{ML:req.query.ML,msg:req.query.msg,gender:req.query.gender,fn:req.query.fn,ML:req.query.ML,
    H:req.query.H,E:req.query.E,P:req.query.P,C:req.query.C,M:req.query.M,sn:sn,stn:req.query.stn
    ,H1:H1,H2:H2,H3:H3,H4:H4,H5:H5,rn:req.query.rn,dob:req.query.dob,PR:PR,RST:RST,to:to})
    
    })

module.exports = router;