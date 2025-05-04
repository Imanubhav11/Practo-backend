export interface Patient {
    fullName: string;
    age: number;
    aadharNumber: string;
    phoneNumber: string;
    allergy?: string;
  }
  
  export interface PatientInput {
    fullName: string;
    age: number;
    aadharNumber: string;
    phoneNumber: string;
    allergy?: string;
  }