// ============================================================
// RAVERON TECHNOLOGIES — TypeScript Types: Enquiry
// ============================================================

export type EnquiryStatus =
  | 'new'
  | 'reviewing'
  | 'contacted'
  | 'qualified'
  | 'in_progress'
  | 'converted'
  | 'closed';

export type PreferredContact = 'email' | 'phone' | 'whatsapp';

export interface Enquiry {
  id: string;
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  country: string;
  projectDescription: string;
  expectedScope: string;
  expectedVolume: string;
  expectedTimeline: string;
  preferredContact: PreferredContact;
  additionalRequirements?: string;
  attachmentUrls: string[];
  status: EnquiryStatus;
  source: string; // e.g. 'website', 'referral'
  createdAt: Date;
  updatedAt: Date;
  notes?: string; // admin notes
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  country: string;
  projectDescription: string;
  expectedScope: string;
  expectedVolume: string;
  expectedTimeline: string;
  preferredContact: PreferredContact;
  additionalRequirements?: string;
  consent: boolean;
}
