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
router.get('/:id', getPatient); // Use 'id' instead of 'aadharNumber'
router.put('/:id', updatePatientDetails); // Use 'id' instead of 'aadharNumber'
router.delete('/:id', deletePatient); // Use 'id' instead of 'aadharNumber'

export default router;
