const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("INICIO");
});

app.get("/products", (req, res) => {
    res.json(db);
});

app.get("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const getProducts = db.find((product)=> product.id === id);

    res.json(getProducts);
});

app.post("/products", (req, res) =>{
    const {id, name, quantity, price} = req.body;

    const newProduct = db.push({id:id, name:name, quantity:quantity, price:price})

    console.log(newProduct);

    res.json({message: "The new product has been created: ",newProduct})
});

app.put("/products/:id", (req, res) =>{

    const id = parseInt(req.params.id);

    const {name, quantity, price} = req.body;

    const productFind = db.find((product) => product.id === id);

    productFind.name,quantity,price = name,quantity,price
    res.json({message: "Product updated"})
});

app.delete("/products/:id", (req, res) =>{

    const id = parseInt(req.params.id);

    const productFind = db.find((product) => product.id === id);

    const productInd = db.indexOf(productFind);

    const deletedProduct = db.splice(productInd, 1);

    res.json({message: "The product has been deleted: "})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor en puerto ${PORT}`));