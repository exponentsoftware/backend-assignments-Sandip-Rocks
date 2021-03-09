const express=require('express');
const router=express.Router();
const {getAllTasks,getTaskById, addTask}=require('../controllers/taskController');

//GET Home page

router.get('/tasks',getAllTasks);

router.get('/tasks/:id',getTaskById);
router.post('/tasks',addTask);
module.exports=router;
