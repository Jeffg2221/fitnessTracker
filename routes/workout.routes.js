const Workout = require('../controllers/workout.controller');


module.exports = app => {
    app.get('/api/workouts', Workout.findAll);
    app.get('/api/workouts/:id', Workout.findOne);
    app.post('/api/workouts', Workout.create);
    app.put('/api/workouts/:id', Workout.Update);
    app.delete('/api/workouts/:id', Workout.delete);
    
}