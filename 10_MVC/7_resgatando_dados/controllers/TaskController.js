const Task = require('../models/Task')

module.exports = class TaskController {

    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const { title, description } = req.body

        const task = {
            title,
            description,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async showTask(req, res) {
        const task = await Task.findAll({ raw: true })
        res.render('tasks/all', { task })

    }

}