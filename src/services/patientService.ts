import { Patient, PatientInput } from "../types/patientTypes";
import { patients } from "../models/patientModel";
import { v4 as uuidv4 } from 'uuid'; // Importing uuid for unique ID generation

export const addPatient = (patientData: PatientInput): Patient => {
  const newPatient: Patient = {
    id: uuidv4(), // Generate unique ID for each patient
    ...patientData
  };
  patients.push(newPatient);
  return newPatient;
};

export const getAllPatients = (): Patient[] => {
  return patients;
};

export const getPatientById = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

export const updatePatient = (id: string, updateData: PatientInput): Patient => {
  const patientIndex = patients.findIndex(p => p.id === id);

  if (patientIndex === -1) {
    throw new Error("No patient with this ID exists");
  }

  // Update Aadhar number if needed
  if (updateData.aadharNumber && updateData.aadharNumber !== patients[patientIndex].aadharNumber) {
    patients[patientIndex].aadharNumber = updateData.aadharNumber;
  }

  const updatedPatient: Patient = {
    id,
    fullName: updateData.fullName,
    age: updateData.age,
    aadharNumber: updateData.aadharNumber || patients[patientIndex].aadharNumber, // Keep existing if not provided
    phoneNumber: updateData.phoneNumber,
    allergy: updateData.allergy
  };

  patients[patientIndex] = updatedPatient;
  return updatedPatient;
};

export const deletePatientById = (id: string): boolean => {
  const index = patients.findIndex(patient => patient.id === id);
  if (index !== -1) {
    patients.splice(index, 1);
    return true;
  }
  return false;
};
