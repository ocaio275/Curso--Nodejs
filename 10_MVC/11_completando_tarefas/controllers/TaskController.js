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

    static async removeTask(req, res) {
        const id = req.body.id

        await Task.destroy({ where: { id: id } })

        res.redirect('/tasks')
    }

    static async updataTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne({ where: { id: id }, raw: true })

        res.render('tasks/edit', { task })
    }

    static async updataTaskPost(req, res) {
        const { id, title, description } = req.body
        const task = {
            title,
            description
        }
        await Task.update(task, { where: { id: id } })

        res.redirect('/tasks')
    }

    static async toggleTaskSatus(req, res) {
        const {id, done } = req.body
        const task ={
            done: done === '0' ? true : false
        }

        await Task.update(task,{where: {id: id}})

        res.redirect('/tasks')
    }
}