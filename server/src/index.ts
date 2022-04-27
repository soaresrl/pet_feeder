import express from "express";
import { spawn } from "child_process";

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/feed', (req, res) => {
    console.log('called process');

    const execProcess = spawn("python", ["server/src/servo.py"]);
    
    execProcess.stdout.on('spawn', ()=>{
        console.log('spawn on spawn');
    });
    
    execProcess.stdout.on('data', (data)=>{
        console.log(`spawn stdout ${data}`);
    });
    
    execProcess.stderr.on('data', (data)=>{
        console.log(`spawn error ${data}`);
    });

    res.status(201).json({msg: 'feeded your pet successfully'});

});

app.listen(PORT, ()=>{
    console.log('server listening on port: 3001');
});