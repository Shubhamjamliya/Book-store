const express = require('express')
const app = express()
const port = process.env.PORT ||5000
const cors=require('cors')

//middleware
app.use(cors())
app.use(express.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//mongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:5rw9pufanfwS1s21@cluster0.tzkydyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    // create a collection of documents
    const bookCollections=client.db("BookInventory").collection("books");
    const cartCollections=client.db("BookInventory").collection("cart");

    // insert a book to the db: post method
    app.post("/upload-book",async(req,res)=> {
        const data=req.body;
        const result=await bookCollections.insertOne(data);
        res.send(result);
    })

    //get all books from database
    // app.get("/all-books",async(req,res)=>{
    //   const books= bookCollections.find();
    //   const result=await books.toArray();
    //   res.send(result);
    // })

    //Update a book data:patch or update methods
    app.patch("/book/:id",async(req,res)=>{
      const id=req.params.id;
      // console.log(id);
      const updateBookData=req.body;
      const filter={_id:new ObjectId(id)};
      const updateDoc={
        $set: {
          ...updateBookData
        },
      }
      const options={upsert:true};

      //update
      const result=await bookCollections.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    //delete a book data
    app.delete("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollections.deleteOne(filter);
      res.send(result);
    })
    
    //Find by category
    app.get("/all-books",async(req,res)=>{
      let query={};
      if(req.query?.category) {
        query={category:req.query.category}
      }
      const result=await bookCollections.find(query).toArray();
      res.send(result);
    }) 

    // To get a single book data
    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollections.findOne(filter);
      res.send(result);
    })

    // ----------------------------------------------------------------------------------------------------------------
    // insert a book to the db collection cart: post method
    app.post("/upload-cart",async(req,res)=> {
      const data=req.body;
      const result=await cartCollections.insertOne(data);
      res.send(result);
  })

   // To get a single book data from cart collection
   app.get("/cart/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await cartCollections.findOne(filter);
    res.send(result);
  })

  //Find by category
  app.get("/all-cartbooks",async(req,res)=>{
    let query={};
    if(req.query?.category) {
      query={category:req.query.category}
    }
    const result=await cartCollections.find(query).toArray();
    res.send(result);
  }) 

   //delete a book data
   app.delete("/cart/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await cartCollections.deleteOne(filter);
    res.send(result);
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})