const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lhnyl9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const freelancerDB = client.db('freelancerDB').collection('tasks')

       

        // get data with specific email

        app.get('/addUser', async (req, res) => {
            const userEmail = req.query.email;
            const query = userEmail ? { userEmail: userEmail } : {};
            const result = await freelancerDB.find(query).toArray();
            res.send(result);

        });
        app.get('/addUser/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await freelancerDB.findOne(query)
            res.send(result);

        });



        // Show a dynamic list of 6 tasks based on deadlines  (most recent deadlines first). 

        app.get('/featured', async (req, res) => {
            const tasks = await freelancerDB.find({})
                .sort({ deadline: 1 })
                .limit(6)
                .toArray()
            res.send(tasks)
        })

       



        app.post('/addUser', async (req, res) => {
            const user = req.body;
            const result = await freelancerDB.insertOne(user);
            res.send(result);
        });

        // update data
        app.put('/addUser/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updatedData = req.body;
            const updatedDoc = {
                $set: updatedData
            }
            const result = await freelancerDB.updateOne(filter, updatedDoc);
            res.send(result)
        })

        // delete

        app.delete('/tasks/:id', async (req, res)=>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await freelancerDB.deleteOne(query);
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(port, () => {
    console.log(`hello world app listening on port ${port}`);
})