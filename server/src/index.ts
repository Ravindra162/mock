import express, {Express, Request, Response} from "express"
const PORT = 3000;

const app = express ()


app.get("/",(req: Request, res: Response)=>{
    res.json({
        msg:"Hello from ts server"
    })
} )



app.listen(PORT,()=>{
    console.log("Server running on port "+PORT);
})