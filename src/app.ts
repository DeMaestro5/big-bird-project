import express, {Application, Request, Response} from 'express';

const app: Application = express();

const port : number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Big Bird Baby')
})

app.listen(port, () =>{
    console.log(`Connected successfully on port ${port}`)
});