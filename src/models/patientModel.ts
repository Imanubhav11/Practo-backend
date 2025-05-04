import { Patient, PatientInput } from "../types/patientTypes";

// In-memory database for demonstration
let patients: Patient[] = [];

export const addPatient = (patientData: PatientInput): Patient => {
  const newPatient: Patient = {
    ...patientData
  };
  patients.push(newPatient);
  return newPatient;
};

export const getAllPatients = (): Patient[] => {
  return patients;
};

export const getPatientByAadhar = (aadharNumber: string): Patient | undefined => {
  return patients.find(patient => patient.aadharNumber === aadharNumber);
};

export const deletePatientByAadhar = (aadharNumber: string): boolean => {
  const initialLength = patients.length;
  patients = patients.filter(patient => patient.aadharNumber !== aadharNumber);
  return patients.length !== initialLength;
};