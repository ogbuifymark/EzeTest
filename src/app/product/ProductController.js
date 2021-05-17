import ProductService from './ProductService';

class ProductController {
  
  loadExcel (req, res) {
    ProductService.loadExcel()
      .then((result) => res.status(200).send({ users: result }))
      .catch((err) => res.status(500).send({ error: err.message }));
  }

  
}

export default new ProductController();
