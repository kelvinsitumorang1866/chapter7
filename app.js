const express = require('express');
const app = express();
const port = 3000;
const dbModel = require('./db.js');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/books",  async (req,res) => {
    try {
        const allData = await dbModel("books").select("*");
        res.status(200).json(allData); 
    } catch (error) {
        res.status(500).json(error);
    }
    
})
app.post("/books", async (req,res) => {
    const{title} = req.body;
    const currentDate = new Date();
    const userInput ={
        title,
        created_at : currentDate,
        updated_at : currentDate
    }
    try {
        const addData = await dbModel("books").insert(userInput).returning("id");
        res.status(201).json(addData);
        
    } catch (error) {
        res.status(500).json(error);
        
    }
})

app.put('/books/:id', async (req, res) => {
    const { title } = req.body;
    const id_input = req.params.id; 

    const currentDate = new Date();
    const userInput = {
        title,
        updated_at: currentDate
    }

    try {
        const updateData = await dbModel('books') 
            .where({ id: id_input })
            .update(userInput)
            .returning("title");

        res.status(200).json(updateData);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.delete("/books/:id", async (req,res) => {
    const id_input = req.params.id; 
    try {
        const deleteData = await dbModel("books").where({id:id_input}).del();
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json(error);
        
    }
    
})





app.listen(port, () => {
    console.log(`I love U ${port}`);
})