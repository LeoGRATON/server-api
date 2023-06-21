const Works = require("../models/Works");

const worksController =  {
    async showAll(req, res, next) {
        try {
          const works = await Works.findAll();
          res.json(works);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      },
    async deleteOne(req,res,next) {
      try{
        const id = req.params.id;
        const deletedWork = await Works.deleteWork(id);
        if (!deletedWork) {
          return res.status(404).json({ msg: 'Work not found' });
        }
        res.json({ msg: 'Work removed', deletedWork });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    },
    async createOne(req, res, next){
      try {
        // ajoute le nouveau projet en utilisant la méthode addWork de la classe Works
        console.log(req.body)
        const works = await Works.addWork(req.body);
        // renvoie le nouveau projet ajouté
        res.status(201).json(works);
      } catch (err) {
        console.error(err.message);
        // passe l'erreur au middleware suivant pour le traitement des erreurs
        res.status(500).send('Server Error'); 
      }
    },
    async updateLikesController(req, res) {
      const {id} = req.params;
      const {likes} = req.body;
      try{
        const updatedWork = await Works.updateLikes(id, likes);
        res.json(updatedWork);
      }catch (error){
        console.error(error);
      }
    }
}

module.exports = worksController;