
const connection =require('../config/database')
const getAllUsers = async() =>
{
    let[result,fields]= await connection.execute('select * from Users');
    return result;
}
const insertUserById=async(email,name,city)=>{

    

    // connection.query(
    //     `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    //     [email,name,city],
    //     function (err, results) {
    //       console.log(results); // results contains rows returned by server
    //       //console.log(fields); // fields contains extra meta data about results, if available
    //       res.send('created user')
    //     }
    //   );
    
    try {
        let [result, fields] = await connection.execute(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
            [email, name, city]
        );
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error; // Throw the error to be handled by the calling function or middleware
    }

}

const selectUserById= async(id)=>{
  
    try {
        let [result, fields] = await connection.execute('select * from Users where id=?', [id]);
        let user = result && result.length > 0 ? result[0] : {};
        return user;
    } catch (error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
}
module.exports={
    getAllUsers,insertUserById,selectUserById};