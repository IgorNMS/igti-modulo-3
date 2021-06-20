import clientService from "../services/client.service.js"

async function createClient(req, res, next){
    try{
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
            throw new Error("Name, CPF, Phone, Email and Address cannot be null.");
        }
        res.send(await clientService.createClient(client));
        logger.info("Post /client, created new user")
    }catch (err){
        next(err);
    }
}

export default {
    createClient
}