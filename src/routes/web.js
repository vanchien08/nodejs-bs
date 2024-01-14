const express =require('express');
const router=express.Router(); // thay app = router
const {homeControllers,homeABC,homegoku,creatUser,getCreatusers,getUpdates,postUpdate,postDeleteUsers,getDeleteStatus}=require('../controllers/homeControllers.js')

router.get('/', homeControllers)
  
router.get('/home', homeABC)

router.get('/abc', homegoku)
router.post('/create',creatUser)

router.get('/create',getCreatusers);
router.get('/update/:id',getUpdates);

router.post('/update-user',postUpdate);
router.post('/delete-user/:id',postDeleteUsers);
router.post('/delete-status',getDeleteStatus);
module.exports= router;
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.get('/a', (req, res) => {
//     res.send('<h1>ABC</h1>')
//   })
//   app.get('/abc', (req, res) => {
//     res.render('sample.ejs')
//   })