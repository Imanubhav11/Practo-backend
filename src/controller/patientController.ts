import { Request, Response } from 'express';
import { PatientInput } from '../types/patientTypes';
import {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatientById
} from '../services/patientService'; // ✅ use service, not model

export const createPatient = (req: Request, res: Response): void => {
  try {
    const patientData: PatientInput = req.body;

    if (!patientData.fullName || !patientData.age || !patientData.aadharNumber || !patientData.phoneNumber || !patientData.allergy) {
      res.status(400).json({
        error: 'Missing required fields',
        message: 'All the fields are required',
      });
      return;
    }

    const newPatient = addPatient(patientData);
    res.status(201).json(newPatient);
  } catch (error: any) {
    res.status(500).json({
      error: error.message || 'Internal server error',
    });
  }
};

export const getPatients = (req: Request, res: Response): void => {
  try {
    const patients = getAllPatients();
    res.status(200).json(patients);
  } catch (error: any) {
    res.status(500).json({
      error: error.message || 'Internal server error',
      message: 'Unable to get all patients',
    });
  }
};

export const getPatient = (req: Request, res: Response): void => {
  try {
    const { id } = req.params; // Fetch by unique ID
    const patient = getPatientById(id);

    if (!patient) {
      res.status(404).json({
        error: 'Patient not found',
        message: 'Unable to find the patient',
      });
      return;
    }

    res.status(200).json(patient);
  } catch (error: any) {
    res.status(500).json({
      error: error.message || 'Internal server error',
    });
  }
};

export const updatePatientDetails = (req: Request, res: Response): void => {
  try {
    const { id } = req.params; // Fetch by unique ID
    const patientData: PatientInput = req.body;

    if (!patientData.fullName || !patientData.age || !patientData.phoneNumber || !patientData.allergy) {
      res.status(400).json({
        error: 'Missing required fields',
        message: 'All fields are required for update',
      });
      return;
    }

    const updatedPatient = updatePatient(id, patientData);
    res.status(200).json(updatedPatient);
  } catch (error: any) {
    res.status(500).json({
      error: error.message || 'Internal server error',
      message: 'Failed to update patient',
    });
  }
};

export const deletePatient = (req: Request, res: Response): void => {
  try {
    const { id } = req.params; // Fetch by unique ID
    const isDeleted = deletePatientById(id);

    if (!isDeleted) {
      res.status(404).json({
        error: 'Patient not found',
        message: 'No patient with this ID exists',
      });
      return;
    }

    res.status(204).send(); // or change to 200 + message if preferred
  } catch (error: any) {
    res.status(500).json({
      error: error.message || 'Internal server error',
      message: 'Delete failed',
    });
  }
};
