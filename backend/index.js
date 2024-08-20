import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("MONGO_URI environment variable is not set.");
  process.exit(1); // Exit the application if the MONGO_URI is not set
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("img"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Person = mongoose.model("Person", {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  format: [
    {
      type: String,
      required: true,
    },
  ],
  dateOfRelease: {
    type: Date,
    default: Date.now,
  },
  cast: [
    {
      type: mongoose.Schema.Types.String,
      ref: "Person",
    },
  ],
  crew: {
    director: {
      type: mongoose.Schema.Types.String,
      ref: "Person",
      required: true,
    },
    producer: {
      type: mongoose.Schema.Types.String,
      ref: "Person",
      required: true,
    },
    others: [
      {
        type: mongoose.Schema.Types.String,
        ref: "Person",
      },
    ],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  votes: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  certification: {
    type: String,
    required: true,
  },
});

// Theatre Model
const Theatre = mongoose.model("Theatre", {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  movies: [
    {
      movieId: {
        type: mongoose.Schema.Types.String,
        ref: "Movie",
        required: true,
      },
      availableTickets: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
});


//CRUD Person
app.post("/addPerson", async (req, res) => {
  const person = new Person({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  });

  try {
    await person.save();
    res.json({
      success: true,
      person,
    });
  } catch (error) {
    console.error("Error adding person:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the person",
    });
  }
});

// Update a person
app.put("/updatePerson", async (req, res) => {
  const personId = req.body.id;

  const updatedPerson = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };

  try {
    const person = await Person.findOneAndUpdate(
      { id: personId },
      updatedPerson,
      {
        new: true,
      }
    );

    if (!person) {
      return res
        .status(404)
        .json({ success: false, message: "Person not found" });
    }

    res.json({
      success: true,
      person,
    });
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the person",
    });
  }
});

// Remove a person
app.post("/removePerson", async (req, res) => {
  try {
    await Person.findOneAndDelete({ id: req.body.id });
    res.json({
      success: true,
    });
  } catch (error) {
    console.error("Error removing person:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while removing the person",
    });
  }
});

//CRUD Movies
app.post("/addMovie", async (req, res) => {
  let movies = await Movie.find({});
  let id;
  if (movies.length > 0) {
    let last_movie_array = movies.slice(-1);
    let last_movie = last_movie_array[0];
    id = parseInt(last_movie.id) + 1;
  } else {
    id = 1;
  }
  const movie = new Movie({
    id: id.toString(),
    name: req.body.name,
    banner: req.body.banner,
    poster: req.body.poster,
    genre: req.body.genre,
    format: req.body.format,
    cast: req.body.cast,
    crew: {
      director: req.body.director,
      producer: req.body.producer,
      others: req.body.others,
    },
    ratings: req.body.ratings,
    votes: req.body.votes,
    description: req.body.description,
    languages: req.body.languages,
    certification: req.body.certification,
  });
  console.log(movie);
  await movie.save();
  console.log("Movie saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeMovie", async (req, res) => {
  await Movie.findOneAndDelete({ id: req.body.id });
  console.log("Movie removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allMovies", async (req, res) => {
  let movies = await Movie.find({});
  console.log("All movies fetched");
  res.send(movies);
});

// Update Movie Endpoint
app.put("/updateMovie", async (req, res) => {
  const movieId = req.body.id;

  const updatedMovie = {
    name: req.body.name,
    banner: req.body.banner,
    poster: req.body.poster,
    genre: req.body.genre,
    format: req.body.format,
    cast: req.body.cast, // Array of cast names
    crew: {
      director: req.body.director,
      producer: req.body.producer,
      others: req.body.others, // Array of other crew names
    },
    ratings: req.body.ratings,
    votes: req.body.votes,
    description: req.body.description,
    languages: req.body.languages,
    certification: req.body.certification,
  };

  try {
    const movie = await Movie.findOneAndUpdate({ id: movieId }, updatedMovie, {
      new: true, // Returns the updated document
    });

    if (!movie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    console.log("Movie updated");
    res.json({
      success: true,
      movie,
    });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the movie",
    });
  }
});

// CRUD for Theatres
app.post("/addTheatre", async (req, res) => {
  let theatres = await Theatre.find({});
  let id;
  if (theatres.length > 0) {
    let last_theatre = theatres[theatres.length - 1];
    id = parseInt(last_theatre.id) + 1;
  } else {
    id = 1;
  }
  const theatre = new Theatre({
    id: id.toString(),
    name: req.body.name,
    location: req.body.location,
    capacity: req.body.capacity,
    movies: req.body.movies.map(movie => ({
      movieId: movie.movieId,
      availableTickets: movie.availableTickets,
    })),
  });
  await theatre.save();
  console.log("Theatre saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeTheatre", async (req, res) => {
  await Theatre.findOneAndDelete({ id: req.body.id });
  console.log("Theatre removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allTheatres", async (req, res) => {
  let theatres = await Theatre.find({});
  console.log("All theatres fetched");
  res.send(theatres);
});

// Update Theatre Endpoint
app.put("/updateTheatre", async (req, res) => {
  const theatreId = req.body.id;

  const updatedTheatre = {
    name: req.body.name,
    location: req.body.location,
    capacity: req.body.capacity,
    movies: req.body.movies.map(movie => ({
      movieId: movie.movieId,
      availableTickets: movie.availableTickets,
    })),
  };

  try {
    const theatre = await Theatre.findOneAndUpdate(
      { id: theatreId },
      updatedTheatre,
      {
        new: true,
      }
    );

    if (!theatre) {
      return res
        .status(404)
        .json({ success: false, message: "Theatre not found" });
    }

    console.log("Theatre updated");
    res.json({
      success: true,
      theatre,
    });
  } catch (error) {
    console.error("Error updating theatre:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the theatre",
    });
  }
});


app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
