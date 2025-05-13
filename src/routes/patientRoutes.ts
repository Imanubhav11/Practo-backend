import express from 'express';
import { 
  createPatient, 
  getPatients, 
  getPatient, 
  deletePatient, 
  updatePatientDetails
} from '../controller/patientController';

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:aadharNumber', getPatient);
router.put('/:aadharNumber', updatePatientDetails);
router.delete('/:aadharNumber', deletePatient);

export default router;