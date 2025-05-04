import express from 'express';
import { 
  createPatient, 
  getPatients, 
  getPatient, 
  deletePatient 
} from '../controller/patientController';

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:aadharNumber', getPatient);
router.delete('/:aadharNumber', deletePatient);

export default router;