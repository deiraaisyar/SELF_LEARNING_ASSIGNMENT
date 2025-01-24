import mongoose from 'mongoose';
import mangoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please provide a title for this task.'],
            unique: true,
        },

        description: {
            type: String,
            default: 'No description provided',
        },

        dueDate: {
            type: Date,
            default: Date.now(),
        },

        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        },

        completed: {
            type: Boolean,
            default: false,
        },

        prioriy: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium',
        },

        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
    }, 
    { timestamps: true }
);

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;