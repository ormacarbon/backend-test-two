import { Router } from 'express';
import BreweryController from '../controller/Controllerbrewery';
import ViewsController from '../controller/ControllerViews';

const router = Router();

router.get('/', ViewsController.index);
router.post('/', BreweryController.store);
router.get('/:id', BreweryController.show);
router.patch('/:id', BreweryController.update);
router.delete('/:id', BreweryController.delete);

module.exports = router;
