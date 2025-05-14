export interface Patient {
  id: string; // Unique ID
  fullName: string;
  age: number;
  aadharNumber?: string; // Make Aadhar number optional
  phoneNumber: string;
  allergy?: string;
}

export interface PatientInput {
  fullName: string;
  age: number;
  aadharNumber?: string; // Aadhar number can be optional during creation
  phoneNumber: string;
  allergy?: string;
}
