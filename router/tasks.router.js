const router=require('express').Router();
const Task=require('../controller/taskController');


router.post('/task',Task.createTask);
router.get('/task',Task.GetTask);
router.get('/task/filter',Task.FilterTasks);
router.delete('/task/:_id',Task.deleteTask);
router.put('/task/:_id',Task.UpdateTask);


module.exports=router