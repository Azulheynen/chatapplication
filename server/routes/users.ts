import {FastifyInstance} from "fastify"


export async function userRoutes(app: FastifyInstance){
    app.post<{Body: {id: string; name: string; image?: string}}> ("/signup", async (req,res) => {
        const {id , name, image} = req.body
         res.header("Access-Control-Allow-Origin", "*");
         res.header("Access-Control-Allow-Methods", "POST");
         res.header("Access-Control-Allow-Headers",  "*");
        if(id ===null || id === "" || name ===null || name === ""){
            return res.status(400).send()

        }

    })}