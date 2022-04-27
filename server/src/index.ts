import express from "express";
import { spawn } from "child_process";

const app = express();

app.use(express.json());

const PORT = 3001;

function scheduleExecution(scheduledHours: string[], callback: ()=>void) {
    const maxInterval = 60 * 1000;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const timeString = `${hours}:${minutes}:00`;

    scheduledHours.forEach((time: string, index)=>{
        if(timeString === time){
            console.log('runned function');

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
        }
    });

    setTimeout(() => scheduleExecution(scheduledHours, callback), maxInterval);
}

const scheduledHours = ["08:00:00", "12:00:00", "20:00:00"];

scheduleExecution(scheduledHours, ()=>{console.log('runned')});

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

    res.status(201).json({msg: 'feeded your pet manually successfully'});

});

app.listen(PORT, ()=>{
    console.log('server listening on port: 3001');
});