const router = require("express").Router();
const hello = require("../controllers/hellowController")



const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');

router.get("/hello", hello)

// Blog Routes
router.get('/blogs/create', blogController.create);
router.get('/blogs/:id', blogController.read);
router.get('/blogs/:id/update', blogController.update);
router.get('/blogs/:id/delete', blogController.delete);

// Comment Routes
router.get('/comments/create', commentController.create);
router.get('/comments/:id', commentController.read);
router.get('/comments/:id/update', commentController.update);
router.get('/comments/:id/delete', commentController.delete);

// Message Routes
router.get('/messages/create', messageController.create);
router.get('/messages/:id', messageController.read);
router.get('/messages/:id/update', messageController.update);
router.get('/messages/:id/delete', messageController.delete);

// Portfolio Routes
router.get('/portfolios/create', portfolioController.create);
router.get('/portfolios/:id', portfolioController.read);
router.get('/portfolios/:id/update', portfolioController.update);
router.get('/portfolios/:id/delete', portfolioController.delete);

// Product Routes
router.get('/products/create', productController.create);
router.get('/products/:id', productController.read);
router.get('/products/:id/update', productController.update);
router.get('/products/:id/delete', productController.delete);

module.exports = router;


