import { Request, Response } from 'express';
import { PatientInput } from '../types/patientTypes';
import { 
  addPatient, 
  getAllPatients, 
  getPatientByAadhar, 
  deletePatientByAadhar 
} from '../models/patientModel';

export const createPatient = (req: Request, res: Response): void => {
  try {
    const patientData: PatientInput = req.body;
    
    // Basic validation - check if all required fields are present or not
    if (!patientData.fullName || !patientData.age || !patientData.aadharNumber || !patientData.phoneNumber || !patientData.allergy) {
      res.status(400).json({ 
        error: 'Missing required fields' ,
        message: 'All the fields are required',
    });
      return;
    }
    
    const newPatient = addPatient(patientData);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ 
        error: 'Internal server error' 
    });
  }
};

export const getPatients = (req: Request, res: Response): void => {
  try {
    const patients = getAllPatients();
    //console.log(patients);
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ 
        error: 'Internal server error',
        message: 'unable to get all patients'
    });
  }
};

export const getPatient = (req: Request, res: Response): void => {
  try {
    const { aadharNumber } = req.params;
    const patient = getPatientByAadhar(aadharNumber);
    
    if (!patient) {
      res.status(404).json({ 
        error: 'Patient not found',
        message: 'Unable to find the patient'
       });
      return;
    }
    
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ 
        error: 'Internal server error' 
    });
  }
};

export const deletePatient = (req: Request, res: Response): void => {
  try {
    const { aadharNumber } = req.params;
    const isDeleted = deletePatientByAadhar(aadharNumber);
    
    if (!isDeleted) {
      res.status(404).json({ 
        error: 'Patient not found',
        message: 'Patient not found'
      });
      return;
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};