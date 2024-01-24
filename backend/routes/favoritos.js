const { Router } = require("express");
const { getFavoritos, postLivroFavorito, deleteFavorito} = require("../controllers/favoritos");

const router = Router();

router.get("/", getFavoritos);
router.post("/:id", postLivroFavorito);
router.delete("/:id", deleteFavorito);

module.exports = router;
