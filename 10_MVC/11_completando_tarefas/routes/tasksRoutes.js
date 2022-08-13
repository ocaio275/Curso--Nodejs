const router = require('express').Router()

const TaskController = require('../controllers/TaskController')


router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updataTask)
router.post('/edit', TaskController.updataTaskPost)
router.post('/updatestatus', TaskController.toggleTaskSatus)
router.get('/', TaskController.showTask)

module.exports = router