const router = require("express").Router();
const Book = require("../models/Book");

router.post("/", async (req, res) => {
  const { name, category, description, image, year, author } = req.body;

  if (!name || !category || !description || !image || !year || !author) {
    res.status(422).json({ error: "propriedade obrigatória" });
    return;
  }

  const book = {
    name,
    category,
    description,
    image,
    year,
    author,
  };

  try {
    await Book.create(book);

    res.status(201).json({
      message: "Livro adicionado",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOne({ _id: id });

    if (!book) {
      res.status(422).json({
        message: "Livro não encontrado",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, category, description, image, year, author } = req.body;

  const book = {
    name,
    category,
    description,
    image,
    year,
    author,
  };

  try {
    const updatedPerson = await Book.updateOne({ _id: id }, book);

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({
        message: "Livro não encontrado",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findOne({ _id: id });

  if (!book) {
    res.status(422).json({
      message: "Livro não encontrado",
    });
  }

  try {
    await Book.deleteOne({ _id: id });

    res.status(201).json({
      message: "Livro deletado",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

module.exports = router;
