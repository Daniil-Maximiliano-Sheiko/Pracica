const router = require("express").Router();

const pushs = {
    push: [
        { id: 1, type: "SUCCESS", title: "SUCCESS", content: "Выполнено!"},
        { id: 2, type: "WARNING", title: "WARNING", content: "Предупреждение!"},
        { id: 3, type: "FAIL", title: "FAIL", content: "ОШИБКА!"}

    ]
};

router.get('/api/notifications', (req, res) => {});
router.post('/api/notifications', (req, res) => {});
router.put('/api/notifications/{id}', (req, res) => {});
router.delete('/api/notifications/{id} =', (req, res) => {});