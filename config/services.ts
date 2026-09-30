// ============================================================
// RAVERON TECHNOLOGIES — Services Configuration
// ============================================================

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'ai-data' | 'technology';
  enabled: boolean;
}

export interface ServiceCategory {
  id: 'ai-data' | 'technology';
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-data',
    name: 'AI & Data Services',
    tagline: 'Precision Data, At Scale',
    description:
      'Professional data annotation, labeling, and AI training services designed to meet the requirements of machine learning pipelines and AI product development.',
    href: '/services/ai-data',
    icon: 'BrainCircuit',
    services: [
      {
        id: 'data-annotation',
        name: 'Data Annotation',
        shortDescription: 'Accurate, structured annotation for AI training datasets.',
        description:
          'Systematic annotation of structured and unstructured data to support machine learning model development and validation.',
        icon: 'Tag',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'image-annotation',
        name: 'Image Annotation',
        shortDescription: 'Bounding boxes, segmentation, keypoints and classification.',
        description:
          'Image labeling for computer vision projects including object detection, semantic segmentation, and classification tasks.',
        icon: 'ImagePlus',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'video-annotation',
        name: 'Video Annotation',
        shortDescription: 'Frame-level annotation and temporal tracking for video AI.',
        description:
          'Frame-by-frame annotation, object tracking, and event labeling for video-based AI and surveillance applications.',
        icon: 'Film',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'data-labeling',
        name: 'Data Labeling',
        shortDescription: 'Scalable labeling across text, audio, image, and video.',
        description:
          'High-volume, consistent labeling workflows for diverse data types, structured to client-defined guidelines.',
        icon: 'Labels',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'ai-data-training',
        name: 'AI Data Training',
        shortDescription: 'Training-ready datasets for machine learning models.',
        description:
          'End-to-end data preparation — collection, annotation, validation, and formatting — for AI model training.',
        icon: 'Cpu',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'voice-training',
        name: 'Voice Training',
        shortDescription: 'Audio transcription, labeling, and speech dataset preparation.',
        description:
          'Voice data collection, transcription, accent labeling, and audio dataset formatting for speech recognition and NLP models.',
        icon: 'Mic',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'ai-code-training',
        name: 'AI Code Training',
        shortDescription: 'Code dataset preparation and annotation for LLMs.',
        description:
          'Structured code annotation, review, and dataset preparation to support AI code generation and evaluation models.',
        icon: 'Code2',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'multi-turn-ai-training',
        name: 'Multi-Turn AI Training',
        shortDescription: 'Conversational dataset creation for dialogue and chat AI.',
        description:
          'Multi-turn dialogue annotation, conversation labeling, and dataset construction for conversational AI and LLM fine-tuning.',
        icon: 'MessageSquare',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'xml-projects',
        name: 'XML Projects',
        shortDescription: 'Structured XML data processing and transformation.',
        description:
          'XML authoring, transformation, validation, and schema-compliant processing for document and data pipelines.',
        icon: 'FileCode',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'document-processing',
        name: 'HTML/XML/PDF Processing',
        shortDescription: 'Document extraction, conversion, and data preparation.',
        description:
          'Processing of HTML, XML, and PDF documents for data extraction, conversion, structuring, and downstream use.',
        icon: 'FileText',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'quality-checking',
        name: 'Quality Checking & Validation',
        shortDescription: 'Independent review and validation of AI training data.',
        description:
          'Multi-stage quality review, consistency verification, and validation of annotated data before delivery.',
        icon: 'ShieldCheck',
        category: 'ai-data',
        enabled: true,
      },
      {
        id: 'ai-ml-data-services',
        name: 'AI/ML Data Services',
        shortDescription: 'Flexible data services for AI and machine learning projects.',
        description:
          'Broader AI/ML data support including dataset curation, review, cleaning, and preparation for model pipelines.',
        icon: 'Database',
        category: 'ai-data',
        enabled: true,
      },
    ],
  },
  {
    id: 'technology',
    name: 'Technology & Development',
    tagline: 'Built to Last, Built to Scale',
    description:
      'End-to-end technology development services — from requirement analysis to deployment — built with scalability, maintainability, and clear communication.',
    href: '/services/technology',
    icon: 'Layers',
    services: [
      {
        id: 'it-projects',
        name: 'IT Projects',
        shortDescription: 'Technology project delivery from requirement to deployment.',
        description:
          'Scoped and executed IT projects with clear requirement analysis, structured delivery, and post-launch support.',
        icon: 'Monitor',
        category: 'technology',
        enabled: true,
      },
      {
        id: 'web-development',
        name: 'Web Development',
        shortDescription: 'Professional, responsive web solutions built to your specification.',
        description:
          'Custom web application and website development — designed for performance, accessibility, and maintainability.',
        icon: 'Globe',
        category: 'technology',
        enabled: true,
      },
      {
        id: 'mobile-app-development',
        name: 'Mobile App Development',
        shortDescription: 'Cross-platform and native mobile applications.',
        description:
          'Mobile application development for iOS and Android, focused on user experience, performance, and post-launch support.',
        icon: 'Smartphone',
        category: 'technology',
        enabled: true,
      },
      {
        id: 'technology-solutions',
        name: 'Technology Solutions',
        shortDescription: 'Tailored technology solutions for your business requirements.',
        description:
          'Technology architecture, integration, and solution development aligned to specific business and operational requirements.',
        icon: 'Settings',
        category: 'technology',
        enabled: true,
      },
    ],
  },
];

// Helper to get all services flat
export const getAllServices = () =>
  serviceCategories.flatMap((cat) => cat.services.filter((s) => s.enabled));

// Helper to get services by category
export const getServicesByCategory = (categoryId: 'ai-data' | 'technology') =>
  serviceCategories
    .find((c) => c.id === categoryId)
    ?.services.filter((s) => s.enabled) ?? [];
