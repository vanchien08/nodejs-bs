const connection =require('../config/database');

const {getAllUsers,insertUserById,selectUserById} =require('../services/CRUDservice')

const homeControllers =(req,res)=>{
    res.send('Hello World!');

}
const homeABC = async(req,res)=>{
    
    //console.log(getAllUsers);
    
    let result= await getAllUsers();
    return res.render('homepage.ejs',{
        listUsers:result
        
    });
    

}
const homegoku =(req,res)=>{
    res.render('sample.ejs');
}
const creatUser= async (req,res)=>{
  //  console.log('req-body', req.body)
  let email=req.body.email;
  let name=req.body.name;
  let city=req.body.City;
    await insertUserById(email,name,city);
      
      res.send('created user')
}
const getCreatusers=(req,res)=>{
    return res.render('createUsers.ejs');
}
const getUpdates= async (req,res)=>{
    
    const id=req.params.id;
    let user= await selectUserById(id);
    
    //console.log("result>>",result)
    //console.log('req.body>>>',req.body)
    
    
   //let[rs,fd] = await connection.execute(' update Users set email=?, name=?, city=? where id=?',[email,name,city,id])
     res.render('update.ejs',{userEdit : user});

}
const postUpdate= async(req,res)=>{
    console.log('req.body>>>',req.body);
    let name=req.body.name;
    let email=req.body.email;
    let city=req.body.City;
    let id=req.body.id;
//    const id=req.params.id;
   console.log('id>>>',id)
    let[rs,fd] = await connection.execute(' update Users set email=?, name=?, city=? where id=?',[email,name,city,id])
    res.send('update success');
}
const postDeleteUsers=async(req,res)=>{
    const id=req.params.id;
    //let user= result && result.length > 0 ? result[0] : {};
    // let[result,fields]= await connection.execute('select * from Users where id=?',[id]);
    // let user= result && result.length > 0 ? result[0] : {};
    let user= await selectUserById(id);
    res.render('delete.ejs',{userDelete : user});
}
const getDeleteStatus= async(req,res)=>{
    let id=req.body.id;
    console.log('idd>>>>',req.body)
    let[rs,fd]= await connection.execute('delete from Users where id=?',[id]);
    res.redirect('/home');
}

module.exports={
    homeControllers,homeABC,homegoku,creatUser,getCreatusers,getUpdates,postUpdate,postDeleteUsers,getDeleteStatus
}

// INSERT INTO Users (email,name,city)
// VALUES ("test","chien","bthanh")