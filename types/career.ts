// ============================================================
// RAVERON TECHNOLOGIES — TypeScript Types: Jobs & Careers
// ============================================================

export type JobStatus = 'active' | 'paused' | 'closed';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'internship';
export type ApplicationStatus =
  | 'received'
  | 'reviewing'
  | 'shortlisted'
  | 'interviewed'
  | 'offered'
  | 'hired'
  | 'rejected'
  | 'withdrawn';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: EmploymentType;
  description: string;
  responsibilities: string[];
  requirements: string[];
  status: JobStatus;
  applicationDeadline?: Date;
  postedAt: Date;
  updatedAt: Date;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle?: string; // denormalized for display
  fullName: string;
  email: string;
  phone: string;
  coverMessage: string;
  resumeUrl: string;
  portfolioUrl?: string;
  status: ApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
  notes?: string; // admin notes
}

export interface JobApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  coverMessage: string;
  portfolioUrl?: string;
  consent: boolean;
}
