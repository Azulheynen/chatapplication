import {config} from "dotenv"
config()

import fastify from 'fastify'
import cors from  "@fastify/cors"
import {userRoutes} from "./routes/users"
import axios from 'axios'
import { defineConfig } from 'vite'
import dns from 'dns'
import { fastifyMiddie } from "@fastify/middie"


dns.setDefaultResultOrder('verbatim')

const app = fastify() 
app.register(cors,{ credentials: true, preflight: false}) 
app.register(userRoutes)

app.addHook('preHandler', (req, res, done) => {
  const allowedPaths = ["/login", "singup", "/home", "/"];
  if (allowedPaths.includes(req.routerPath)) {
    console.log("hihihihihihi")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST",);
    res.header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");
  }
})

app.listen({port: parseInt(process.env.PORT!)}, () => console.log("Levantado en puerto ", process.env.PORT))


