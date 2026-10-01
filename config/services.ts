// ============================================================
// RAVERON TECHNOLOGIES — Services Configuration
// ============================================================

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'engineering' | 'domains';
  enabled: boolean;
}

export interface ServiceCategory {
  id: 'engineering' | 'domains';
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'engineering',
    name: 'Engineering & Technology',
    tagline: 'Elite Tech Teams, Ready to Build',
    description:
      'We provide highly experienced tech teams across modern stacks. From custom web and mobile apps to scalable cloud architectures and cutting-edge Agentic AI solutions.',
    href: '/services/engineering',
    icon: 'Terminal',
    services: [
      {
        id: 'full-stack',
        name: 'Full Stack Development',
        shortDescription: 'End-to-end web applications built with modern frameworks.',
        description:
          'Highly experienced full stack teams delivering robust, scalable, and secure web applications using React, Next.js, Node, and more.',
        icon: 'Code2',
        category: 'engineering',
        enabled: true,
      },
      {
        id: 'android-flutter',
        name: 'Mobile Apps (Flutter)',
        shortDescription: 'High-performance cross-platform applications.',
        description:
          'Expert Android and cross-platform mobile development using Flutter, ensuring a seamless user experience across devices.',
        icon: 'Smartphone',
        category: 'engineering',
        enabled: true,
      },
      {
        id: 'cloud-aws-azure-gcp',
        name: 'Cloud (AWS, Azure, GCP)',
        shortDescription: 'Scalable cloud infrastructure and migrations.',
        description:
          'Architecting, deploying, and managing robust cloud infrastructures on AWS, Azure, and GCP for optimal performance and cost.',
        icon: 'Cloud',
        category: 'engineering',
        enabled: true,
      },
      {
        id: 'ai-development',
        name: 'AI Development',
        shortDescription: 'Agentic AI, generative models, and voice call analyzers.',
        description:
          'Building advanced AI solutions including autonomous Agentic AI, custom LLMs, and highly specialized voice call analysis systems.',
        icon: 'BrainCircuit',
        category: 'engineering',
        enabled: true,
      },
      {
        id: 'devops',
        name: 'DevOps',
        shortDescription: 'CI/CD pipelines, automation, and infrastructure.',
        description:
          'Streamlining development lifecycles with continuous integration, continuous deployment, and infrastructure automation.',
        icon: 'Settings',
        category: 'engineering',
        enabled: true,
      },
      {
        id: 'mlops',
        name: 'MLOps',
        shortDescription: 'Machine learning operations and lifecycle management.',
        description:
          'Deploying, monitoring, and maintaining machine learning models in production to ensure reliability and scalability.',
        icon: 'Activity',
        category: 'engineering',
        enabled: true,
      },
    ],
  },
  {
    id: 'domains',
    name: 'Domain Expertise',
    tagline: 'Deep Industry Knowledge',
    description:
      'Our consultancy brings specialized domain expertise to deliver tailored software solutions that solve complex, industry-specific challenges.',
    href: '/services/domains',
    icon: 'Briefcase',
    services: [
      {
        id: 'healthcare',
        name: 'Healthcare',
        shortDescription: 'HIPAA-compliant platforms and telehealth solutions.',
        description:
          'Delivering secure, compliant, and patient-centric healthcare applications, from EHR integrations to telemedicine platforms.',
        icon: 'HeartPulse',
        category: 'domains',
        enabled: true,
      },
      {
        id: 'agritech',
        name: 'Agritech',
        shortDescription: 'Smart farming and agricultural supply chain tech.',
        description:
          'Building technology solutions for agriculture, including IoT integrations, farm management systems, and yield prediction tools.',
        icon: 'Sprout',
        category: 'domains',
        enabled: true,
      },
      {
        id: 'crm',
        name: 'CRM Solutions',
        shortDescription: 'Custom CRM and customer engagement platforms.',
        description:
          'Designing and developing custom CRM systems to optimize sales pipelines, customer support, and operational workflows.',
        icon: 'Users',
        category: 'domains',
        enabled: true,
      },
      {
        id: 'warehouse-automation',
        name: 'Warehouse Automation',
        shortDescription: 'Robot-based warehouse management systems.',
        description:
          'Developing advanced WMS with robot-based automation, inventory tracking, and logistics optimization.',
        icon: 'Package',
        category: 'domains',
        enabled: true,
      },
      {
        id: 'mortgage-finance',
        name: 'Mortgage Finance',
        shortDescription: 'Fintech solutions for lending and mortgage.',
        description:
          'Creating secure, scalable financial software for mortgage processing, lending workflows, and risk assessment.',
        icon: 'Landmark',
        category: 'domains',
        enabled: true,
      },
    ],
  },
];

// Helper to get all services flat
export const getAllServices = () =>
  serviceCategories.flatMap((cat) => cat.services.filter((s) => s.enabled));

// Helper to get services by category
export const getServicesByCategory = (categoryId: 'engineering' | 'domains') =>
  serviceCategories
    .find((c) => c.id === categoryId)
    ?.services.filter((s) => s.enabled) ?? [];
