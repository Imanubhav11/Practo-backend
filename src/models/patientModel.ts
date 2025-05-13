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

export const updatePatient = (aadharNumber: string, updateData: PatientInput): Patient => {
    const patientIndex = patients.findIndex(p => p.aadharNumber === aadharNumber);
    // console.log(patientIndex);

    if (patientIndex === -1) {
        throw new Error('No patient with this Aadhar number exists'); // Updated error message
    }
    
  
    // Don't allow changing Aadhar number (unique identifier)
    if (updateData.aadharNumber && updateData.aadharNumber !== aadharNumber) {
      throw new Error('Aadhar number cannot be changed');
    }
  
    const updatedPatient: Patient = {
      fullName: updateData.fullName,
      age: updateData.age,
      aadharNumber: aadharNumber, // Keep original Aadhar number
      phoneNumber: updateData.phoneNumber,
      allergy: updateData.allergy
    };
  
    patients[patientIndex] = updatedPatient;
    return updatedPatient;
  };

export const deletePatientByAadhar = (aadharNumber: string): boolean => {
  const initialLength = patients.length;
  patients = patients.filter(patient => patient.aadharNumber !== aadharNumber);
  return patients.length !== initialLength;
};