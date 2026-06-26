const buckets = [
  ["Methods", "#70b8af"],
  ["Research", "#78acd5"],
  ["Analysis", "#929cd5"],
  ["Conclusion", "#bc9bd4"],
  ["Simulation", "#d69bb9"],
  ["Strategy", "#e1a37e"],
  ["Design", "#d8b062"],
  ["Evaluation", "#9bbd78"],
  ["Presentations", "#8ab6c9"]
].map(([name, color]) => ({ name, color }));

const tagGroups = {
  "Urban categories": ["Historical development", "Demographics", "Mobility", "Morphology", "Land use", "Public space", "Environment"],
  "Content type": ["Code", "Dataset", "Description", "Diagram", "Drawing", "Geospatial information", "Image", "Interview / survey", "Literature", "Map", "Video", "Presentation"],
  "Scale": ["Macro", "Meso", "Micro"],
  "Source": ["Author", "AI-assisted", "Academic", "Grey", "Handbook", "Policy"],
  "Author": ["Raneem", "Lara", "Niels", "Hilda", "Tim", "Daniel", "Cas", "Milana", "Vera"],
  "Project group": ["Group 1: Responsive Neighbourhood", "Group 2: Living Superblocks", "Group 3: Health Islands"],
  "Impact health domain": ["Physical", "Mental", "Social", "Environmental", "Economic", "Promotion", "Facilitation", "Protection"]
};

const projectGroups = {
  "Group 1: Responsive Neighbourhood": ["Niels", "Lara", "Raneem"],
  "Group 2: Living Superblocks": ["Daniel", "Tim", "Hilda"],
  "Group 3: Health Islands": ["Milana", "Cas", "Vera"]
};
const examples = [
  {
    "id": "agent-based-modelling",
    "title": "Agent-based Modelling.pptx",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Mobility",
      "Public space",
      "Description",
      "Presentation",
      "Meso",
      "Author",
      "Academic",
      "Cas"
    ],
    "date": "",
    "source": "",
    "fileName": "Agent-based Modelling.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/agent-based-modelling.pptx",
    "group": "",
    "files": [
      {
        "title": "Agent-based Modelling.pptx",
        "fileName": "Agent-based Modelling.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/agent-based-modelling.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "definition-of-health",
    "title": "Definition of health.png",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Diagram",
      "Macro",
      "Author",
      "Raneem",
      "Mental",
      "Social",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Definition of health.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/definition-of-health.png",
    "group": "",
    "files": [
      {
        "title": "Definition of health.png",
        "fileName": "Definition of health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/definition-of-health.png",
        "source": ""
      }
    ]
  },
  {
    "id": "dynamic-urban-deprivation-monitoring",
    "title": "Dynamic Urban Deprivation Monitoring.pptx",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Public space",
      "Description",
      "Presentation",
      "Meso",
      "Author",
      "Academic",
      "Milana"
    ],
    "date": "",
    "source": "",
    "fileName": "Dynamic Urban Deprivation Monitoring.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/dynamic-urban-deprivation-monitoring.pptx",
    "group": "",
    "files": [
      {
        "title": "Dynamic Urban Deprivation Monitoring.pptx",
        "fileName": "Dynamic Urban Deprivation Monitoring.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/dynamic-urban-deprivation-monitoring.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "health-effect-assessment-of-landscape-heal",
    "title": "Health Effect Assessment of Landscape (HEAL)​.pptx",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Description",
      "Literature",
      "Presentation",
      "Macro",
      "Meso",
      "Author",
      "Academic",
      "Vera",
      "Physical",
      "Mental",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Health Effect Assessment of Landscape (HEAL)​.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-effect-assessment-of-landscape-heal.pptx",
    "group": "",
    "files": [
      {
        "title": "Health Effect Assessment of Landscape (HEAL)​.pptx",
        "fileName": "Health Effect Assessment of Landscape (HEAL)​.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-effect-assessment-of-landscape-heal.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "methodology-wheel-first-phase",
    "title": "Methodology wheel first phase.png",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Mental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Methodology wheel first phase.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methodology-wheel-first-phase.png",
    "group": "",
    "files": [
      {
        "title": "Methodology wheel first phase.png",
        "fileName": "Methodology wheel first phase.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methodology-wheel-first-phase.png",
        "source": ""
      }
    ]
  },
  {
    "id": "q3-week-3-novel-technology-daniel",
    "title": "Q3 Week 3 (Novel Technology) - Daniel.pptx",
    "bucket": "Methods",
    "description": "0",
    "tags": [
      "Presentation",
      "Author",
      "Daniel"
    ],
    "date": "0",
    "source": "0",
    "fileName": "Q3 Week 3 (Novel Technology) - Daniel.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-daniel.pptx",
    "group": "",
    "files": [
      {
        "title": "Q3 Week 3 (Novel Technology) - Daniel.pptx",
        "fileName": "Q3 Week 3 (Novel Technology) - Daniel.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-daniel.pptx",
        "source": "0"
      }
    ]
  },
  {
    "id": "q3-week-3-novel-technology-hilda",
    "title": "Q3 Week 3 (Novel Technology) - Hilda.pdf",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Presentation",
      "Author",
      "Hilda"
    ],
    "date": "",
    "source": "",
    "fileName": "Q3 Week 3 (Novel Technology) - Hilda.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-hilda.pdf",
    "group": "",
    "files": [
      {
        "title": "Q3 Week 3 (Novel Technology) - Hilda.pdf",
        "fileName": "Q3 Week 3 (Novel Technology) - Hilda.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-hilda.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "q3-week-3-novel-technology-tim",
    "title": "Q3 Week 3 (Novel Technology) - Tim.pptx",
    "bucket": "Methods",
    "description": "",
    "tags": [
      "Presentation",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "Q3 Week 3 (Novel Technology) - Tim.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-tim.pptx",
    "group": "",
    "files": [
      {
        "title": "Q3 Week 3 (Novel Technology) - Tim.pptx",
        "fileName": "Q3 Week 3 (Novel Technology) - Tim.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-3-novel-technology-tim.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "buurtatlas-2012",
    "title": "Buurtatlas 2012.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Dataset",
      "Macro",
      "Meso",
      "Grey",
      "Social",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurtatlas 2012.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurtatlas-2012.xlsx",
    "group": "",
    "files": [
      {
        "title": "Buurtatlas 2012.xlsx",
        "fileName": "Buurtatlas 2012.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurtatlas-2012.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "buurtatlas-2024",
    "title": "Buurtatlas 2024.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Dataset",
      "Macro",
      "Meso",
      "Grey",
      "Social",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurtatlas 2024.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurtatlas-2024.xlsx",
    "group": "",
    "files": [
      {
        "title": "Buurtatlas 2024.xlsx",
        "fileName": "Buurtatlas 2024.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurtatlas-2024.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "gebiedsprofiel-kanaleneiland-noord",
    "title": "Gebiedsprofiel Kanaleneiland Noord.pdf",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Environment",
      "Dataset",
      "Meso",
      "Grey",
      "Physical",
      "Mental",
      "Social",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Gebiedsprofiel Kanaleneiland Noord.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gebiedsprofiel-kanaleneiland-noord.pdf",
    "group": "",
    "files": [
      {
        "title": "Gebiedsprofiel Kanaleneiland Noord.pdf",
        "fileName": "Gebiedsprofiel Kanaleneiland Noord.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gebiedsprofiel-kanaleneiland-noord.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "gebiedsprofiel-kanaleneiland-zuid",
    "title": "Gebiedsprofiel Kanaleneiland Zuid.pdf",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Environment",
      "Dataset",
      "Meso",
      "Grey",
      "Physical",
      "Mental",
      "Social",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Gebiedsprofiel Kanaleneiland Zuid.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gebiedsprofiel-kanaleneiland-zuid.pdf",
    "group": "",
    "files": [
      {
        "title": "Gebiedsprofiel Kanaleneiland Zuid.pdf",
        "fileName": "Gebiedsprofiel Kanaleneiland Zuid.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gebiedsprofiel-kanaleneiland-zuid.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "health-concept-who-factors",
    "title": "Health concept WHO factors.png",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Description",
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Health concept WHO factors.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-concept-who-factors.png",
    "group": "",
    "files": [
      {
        "title": "Health concept WHO factors.png",
        "fileName": "Health concept WHO factors.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-concept-who-factors.png",
        "source": ""
      }
    ]
  },
  {
    "id": "historical-development",
    "title": "Historical Development.docx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Historical development",
      "Literature",
      "Macro",
      "Grey"
    ],
    "date": "",
    "source": "",
    "fileName": "Historical Development.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/historical-development.docx",
    "group": "",
    "files": [
      {
        "title": "Historical Development.docx",
        "fileName": "Historical Development.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/historical-development.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "index-wheel",
    "title": "Index Wheel",
    "bucket": "Research",
    "description": "5 related files grouped from the framework table.",
    "tags": [
      "Public space",
      "Environment",
      "Diagram",
      "Meso",
      "Author",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Demographics",
      "Mobility",
      "Land use"
    ],
    "date": "",
    "source": "",
    "fileName": "Green space indices.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-space-indices.pdf",
    "group": "R_IW_G3",
    "files": [
      {
        "title": "Green space indices.pdf",
        "fileName": "Green space indices.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-space-indices.pdf",
        "source": ""
      },
      {
        "title": "Health indices.pdf",
        "fileName": "Health indices.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-indices.pdf",
        "source": ""
      },
      {
        "title": "Spatial indices.pdf",
        "fileName": "Spatial indices.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/spatial-indices.pdf",
        "source": ""
      },
      {
        "title": "Street profile indices.pdf",
        "fileName": "Street profile indices.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-profile-indices.pdf",
        "source": ""
      },
      {
        "title": "Third place indices.pdf",
        "fileName": "Third place indices.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/third-place-indices.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "indicators",
    "title": "Indicators.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Dataset",
      "Meso",
      "Author",
      "Policy",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Indicators.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/indicators.xlsx",
    "group": "",
    "files": [
      {
        "title": "Indicators.xlsx",
        "fileName": "Indicators.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/indicators.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "mca-rivm-public-space",
    "title": "MCA_RIVM_public_space.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Description",
      "Author",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "MCA_RIVM_public_space.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mca-rivm-public-space.xlsx",
    "group": "",
    "files": [
      {
        "title": "MCA_RIVM_public_space.xlsx",
        "fileName": "MCA_RIVM_public_space.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mca-rivm-public-space.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "pitch-week-6",
    "title": "Pitch week 6.pdf",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Presentation",
      "Meso",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Pitch week 6.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-6.pdf",
    "group": "",
    "files": [
      {
        "title": "Pitch week 6.pdf",
        "fileName": "Pitch week 6.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-6.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "residents-testimonials",
    "title": "Residents testimonials.pdf",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Public space",
      "Interview / survey",
      "Meso",
      "Micro",
      "Author",
      "Cas",
      "Milana",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Residents testimonials.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/residents-testimonials.pdf",
    "group": "",
    "files": [
      {
        "title": "Residents testimonials.pdf",
        "fileName": "Residents testimonials.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/residents-testimonials.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "social-cohesion-subwijk-scale",
    "title": "Social Cohesion Subwijk Scale.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Dataset",
      "Macro",
      "Meso",
      "Grey",
      "Mental",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Social Cohesion Subwijk Scale.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/social-cohesion-subwijk-scale.xlsx",
    "group": "",
    "files": [
      {
        "title": "Social Cohesion Subwijk Scale.xlsx",
        "fileName": "Social Cohesion Subwijk Scale.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/social-cohesion-subwijk-scale.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "surface-material-shading-impact-on-uhi",
    "title": "Surface Material & Shading Impact on UHI.docx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Literature",
      "Academic",
      "Grey",
      "Handbook",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Surface Material & Shading Impact on UHI.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/surface-material-shading-impact-on-uhi.docx",
    "group": "",
    "files": [
      {
        "title": "Surface Material & Shading Impact on UHI.docx",
        "fileName": "Surface Material & Shading Impact on UHI.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/surface-material-shading-impact-on-uhi.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "tree-ecosystemservices",
    "title": "Tree Ecosystemservices.webp",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Diagram",
      "Grey",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Tree Ecosystemservices.webp",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/tree-ecosystemservices.webp",
    "group": "",
    "files": [
      {
        "title": "Tree Ecosystemservices.webp",
        "fileName": "Tree Ecosystemservices.webp",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/tree-ecosystemservices.webp",
        "source": ""
      }
    ]
  },
  {
    "id": "uhi-survey-form",
    "title": "UHI survey form.pdf",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Interview / survey",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "UHI survey form.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-form.pdf",
    "group": "",
    "files": [
      {
        "title": "UHI survey form.pdf",
        "fileName": "UHI survey form.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-form.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "uhi-survey-responses-filtered",
    "title": "UHI survey responses- filtered.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Interview / survey",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "UHI survey responses- filtered.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-responses-filtered.xlsx",
    "group": "",
    "files": [
      {
        "title": "UHI survey responses- filtered.xlsx",
        "fileName": "UHI survey responses- filtered.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-responses-filtered.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "uhi-survey-responses-unfiltered",
    "title": "UHI survey responses- unfiltered.xlsx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Interview / survey",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "UHI survey responses- unfiltered.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-responses-unfiltered.xlsx",
    "group": "",
    "files": [
      {
        "title": "UHI survey responses- unfiltered.xlsx",
        "fileName": "UHI survey responses- unfiltered.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/uhi-survey-responses-unfiltered.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "websites-and-texts",
    "title": "Websites and Texts.docx",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Demographics",
      "Mobility",
      "Morphology",
      "Land use",
      "Public space",
      "Environment",
      "Description",
      "Literature",
      "Macro",
      "Meso",
      "Micro",
      "Grey"
    ],
    "date": "",
    "source": "",
    "fileName": "Websites and Texts.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/websites-and-texts.docx",
    "group": "",
    "files": [
      {
        "title": "Websites and Texts.docx",
        "fileName": "Websites and Texts.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/websites-and-texts.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "wijkgedachte",
    "title": "Wijkgedachte.png",
    "bucket": "Research",
    "description": "",
    "tags": [
      "Historical development",
      "Mobility",
      "Morphology",
      "Land use",
      "Public space",
      "Environment",
      "Description",
      "Meso",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Wijkgedachte.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijkgedachte.png",
    "group": "",
    "files": [
      {
        "title": "Wijkgedachte.png",
        "fileName": "Wijkgedachte.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijkgedachte.png",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-095019",
    "title": "20260207_095019.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_095019.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-095019.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_095019.jpg",
        "fileName": "20260207_095019.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-095019.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-095054",
    "title": "20260207_095054.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_095054.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-095054.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_095054.jpg",
        "fileName": "20260207_095054.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-095054.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-100352",
    "title": "20260207_100352.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_100352.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-100352.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_100352.jpg",
        "fileName": "20260207_100352.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-100352.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-102825",
    "title": "20260207_102825.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_102825.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-102825.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_102825.jpg",
        "fileName": "20260207_102825.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-102825.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-102839",
    "title": "20260207_102839.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_102839.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-102839.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_102839.jpg",
        "fileName": "20260207_102839.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-102839.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104350",
    "title": "20260207_104350.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104350.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104350.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104350.jpg",
        "fileName": "20260207_104350.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104350.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104354",
    "title": "20260207_104354.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104354.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104354.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104354.jpg",
        "fileName": "20260207_104354.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104354.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104524",
    "title": "20260207_104524.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104524.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104524.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104524.jpg",
        "fileName": "20260207_104524.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104524.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104554",
    "title": "20260207_104554.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104554.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104554.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104554.jpg",
        "fileName": "20260207_104554.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104554.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104601",
    "title": "20260207_104601.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104601.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104601.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104601.jpg",
        "fileName": "20260207_104601.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104601.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104837",
    "title": "20260207_104837.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104837.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104837.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104837.jpg",
        "fileName": "20260207_104837.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104837.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-104859",
    "title": "20260207_104859.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_104859.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104859.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_104859.jpg",
        "fileName": "20260207_104859.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-104859.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-105039",
    "title": "20260207_105039.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_105039.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-105039.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_105039.jpg",
        "fileName": "20260207_105039.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-105039.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-111226",
    "title": "20260207_111226.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_111226.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-111226.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_111226.jpg",
        "fileName": "20260207_111226.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-111226.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-112829",
    "title": "20260207_112829.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_112829.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112829.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_112829.jpg",
        "fileName": "20260207_112829.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112829.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-112833",
    "title": "20260207_112833.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_112833.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112833.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_112833.jpg",
        "fileName": "20260207_112833.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112833.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-112953",
    "title": "20260207_112953.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_112953.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112953.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_112953.jpg",
        "fileName": "20260207_112953.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112953.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-112958",
    "title": "20260207_112958.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_112958.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112958.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_112958.jpg",
        "fileName": "20260207_112958.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-112958.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113212",
    "title": "20260207_113212.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113212.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113212.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113212.jpg",
        "fileName": "20260207_113212.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113212.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113440",
    "title": "20260207_113440.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113440.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113440.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113440.jpg",
        "fileName": "20260207_113440.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113440.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113555",
    "title": "20260207_113555.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113555.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113555.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113555.jpg",
        "fileName": "20260207_113555.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113555.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113717",
    "title": "20260207_113717.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113717.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113717.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113717.jpg",
        "fileName": "20260207_113717.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113717.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113936",
    "title": "20260207_113936.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113936.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113936.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113936.jpg",
        "fileName": "20260207_113936.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113936.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-113948",
    "title": "20260207_113948.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_113948.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113948.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_113948.jpg",
        "fileName": "20260207_113948.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-113948.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114314",
    "title": "20260207_114314.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114314.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114314.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114314.jpg",
        "fileName": "20260207_114314.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114314.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114325",
    "title": "20260207_114325.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114325.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114325.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114325.jpg",
        "fileName": "20260207_114325.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114325.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114338",
    "title": "20260207_114338.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114338.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114338.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114338.jpg",
        "fileName": "20260207_114338.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114338.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114905",
    "title": "20260207_114905.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114905.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114905.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114905.jpg",
        "fileName": "20260207_114905.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114905.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114917",
    "title": "20260207_114917.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114917.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114917.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114917.jpg",
        "fileName": "20260207_114917.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114917.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-114933",
    "title": "20260207_114933.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_114933.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114933.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_114933.jpg",
        "fileName": "20260207_114933.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-114933.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115246",
    "title": "20260207_115246.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115246.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115246.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115246.jpg",
        "fileName": "20260207_115246.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115246.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115250",
    "title": "20260207_115250.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115250.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115250.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115250.jpg",
        "fileName": "20260207_115250.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115250.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115255",
    "title": "20260207_115255.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115255.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115255.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115255.jpg",
        "fileName": "20260207_115255.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115255.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115516",
    "title": "20260207_115516.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115516.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115516.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115516.jpg",
        "fileName": "20260207_115516.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115516.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115557",
    "title": "20260207_115557.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115557.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115557.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115557.jpg",
        "fileName": "20260207_115557.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115557.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115800",
    "title": "20260207_115800.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115800.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115800.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115800.jpg",
        "fileName": "20260207_115800.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115800.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115803",
    "title": "20260207_115803.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115803.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115803.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115803.jpg",
        "fileName": "20260207_115803.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115803.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-115810",
    "title": "20260207_115810.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_115810.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115810.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_115810.jpg",
        "fileName": "20260207_115810.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-115810.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-120936",
    "title": "20260207_120936.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_120936.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120936.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_120936.jpg",
        "fileName": "20260207_120936.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120936.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-120945",
    "title": "20260207_120945.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_120945.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120945.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_120945.jpg",
        "fileName": "20260207_120945.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120945.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-120950",
    "title": "20260207_120950.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_120950.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120950.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_120950.jpg",
        "fileName": "20260207_120950.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-120950.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-121005",
    "title": "20260207_121005.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_121005.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121005.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_121005.jpg",
        "fileName": "20260207_121005.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121005.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-121610",
    "title": "20260207_121610.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_121610.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121610.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_121610.jpg",
        "fileName": "20260207_121610.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121610.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-121752",
    "title": "20260207_121752.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_121752.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121752.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_121752.jpg",
        "fileName": "20260207_121752.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121752.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-121922",
    "title": "20260207_121922.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_121922.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121922.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_121922.jpg",
        "fileName": "20260207_121922.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-121922.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-122234",
    "title": "20260207_122234.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_122234.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122234.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_122234.jpg",
        "fileName": "20260207_122234.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122234.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-122237",
    "title": "20260207_122237.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_122237.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122237.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_122237.jpg",
        "fileName": "20260207_122237.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122237.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-122240",
    "title": "20260207_122240.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_122240.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122240.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_122240.jpg",
        "fileName": "20260207_122240.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122240.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-122853",
    "title": "20260207_122853.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_122853.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122853.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_122853.jpg",
        "fileName": "20260207_122853.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122853.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-122858",
    "title": "20260207_122858.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_122858.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122858.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_122858.jpg",
        "fileName": "20260207_122858.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-122858.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-123508",
    "title": "20260207_123508.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_123508.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123508.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_123508.jpg",
        "fileName": "20260207_123508.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123508.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-123512",
    "title": "20260207_123512.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_123512.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123512.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_123512.jpg",
        "fileName": "20260207_123512.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123512.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-123639",
    "title": "20260207_123639.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_123639.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123639.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_123639.jpg",
        "fileName": "20260207_123639.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-123639.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-142311",
    "title": "20260207_142311.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_142311.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142311.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_142311.jpg",
        "fileName": "20260207_142311.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142311.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-142749",
    "title": "20260207_142749.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_142749.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142749.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_142749.jpg",
        "fileName": "20260207_142749.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142749.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-142752",
    "title": "20260207_142752.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_142752.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142752.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_142752.jpg",
        "fileName": "20260207_142752.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142752.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-142928",
    "title": "20260207_142928.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_142928.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142928.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_142928.jpg",
        "fileName": "20260207_142928.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142928.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-142933",
    "title": "20260207_142933.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_142933.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142933.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_142933.jpg",
        "fileName": "20260207_142933.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-142933.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-143050",
    "title": "20260207_143050.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_143050.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-143050.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_143050.jpg",
        "fileName": "20260207_143050.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-143050.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-143610",
    "title": "20260207_143610.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_143610.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-143610.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_143610.jpg",
        "fileName": "20260207_143610.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-143610.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-144305",
    "title": "20260207_144305.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_144305.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-144305.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_144305.jpg",
        "fileName": "20260207_144305.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-144305.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-150052",
    "title": "20260207_150052.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_150052.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-150052.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_150052.jpg",
        "fileName": "20260207_150052.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-150052.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-150527",
    "title": "20260207_150527.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_150527.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-150527.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_150527.jpg",
        "fileName": "20260207_150527.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-150527.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-151530",
    "title": "20260207_151530.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_151530.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151530.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_151530.jpg",
        "fileName": "20260207_151530.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151530.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-151536",
    "title": "20260207_151536.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_151536.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151536.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_151536.jpg",
        "fileName": "20260207_151536.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151536.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-151816",
    "title": "20260207_151816.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_151816.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151816.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_151816.jpg",
        "fileName": "20260207_151816.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-151816.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-153111",
    "title": "20260207_153111.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_153111.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-153111.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_153111.jpg",
        "fileName": "20260207_153111.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-153111.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-153205",
    "title": "20260207_153205.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_153205.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-153205.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_153205.jpg",
        "fileName": "20260207_153205.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-153205.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-154024",
    "title": "20260207_154024.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_154024.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-154024.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_154024.jpg",
        "fileName": "20260207_154024.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-154024.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-155102",
    "title": "20260207_155102.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_155102.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-155102.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_155102.jpg",
        "fileName": "20260207_155102.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-155102.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "20260207-155319",
    "title": "20260207_155319.jpg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "20260207_155319.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-155319.jpg",
    "group": "",
    "files": [
      {
        "title": "20260207_155319.jpg",
        "fileName": "20260207_155319.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/20260207-155319.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "access-to-green-context",
    "title": "access_to_green_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "access_to_green_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/access-to-green-context.png",
    "group": "",
    "files": [
      {
        "title": "access_to_green_context.png",
        "fileName": "access_to_green_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/access-to-green-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "access-to-green-plot",
    "title": "access_to_green_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "access_to_green_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/access-to-green-plot.png",
    "group": "",
    "files": [
      {
        "title": "access_to_green_plot.png",
        "fileName": "access_to_green_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/access-to-green-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "active-frontages-context",
    "title": "active_frontages_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "active_frontages_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-frontages-context.png",
    "group": "",
    "files": [
      {
        "title": "active_frontages_context.png",
        "fileName": "active_frontages_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-frontages-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "active-frontages-plot",
    "title": "active_frontages_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "active_frontages_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-frontages-plot.png",
    "group": "",
    "files": [
      {
        "title": "active_frontages_plot.png",
        "fileName": "active_frontages_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-frontages-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "air-pollution-context",
    "title": "air_pollution_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "air_pollution_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/air-pollution-context.png",
    "group": "",
    "files": [
      {
        "title": "air_pollution_context.png",
        "fileName": "air_pollution_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/air-pollution-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "air-pollution-plot",
    "title": "air_pollution_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "air_pollution_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/air-pollution-plot.png",
    "group": "",
    "files": [
      {
        "title": "air_pollution_plot.png",
        "fileName": "air_pollution_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/air-pollution-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "barrier-effect-context",
    "title": "barrier_effect_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "barrier_effect_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/barrier-effect-context.png",
    "group": "",
    "files": [
      {
        "title": "barrier_effect_context.png",
        "fileName": "barrier_effect_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/barrier-effect-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "barrier-effect-plot",
    "title": "barrier_effect_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "barrier_effect_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/barrier-effect-plot.png",
    "group": "",
    "files": [
      {
        "title": "barrier_effect_plot.png",
        "fileName": "barrier_effect_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/barrier-effect-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-buildings",
    "title": "Buurt Scale 1_15.000 Buildings.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Morphology",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Buildings.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-buildings.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Buildings.png",
        "fileName": "Buurt Scale 1_15.000 Buildings.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-buildings.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-construction-year",
    "title": "Buurt Scale 1_15.000 Construction Year.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Morphology",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Construction Year.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-construction-year.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Construction Year.png",
        "fileName": "Buurt Scale 1_15.000 Construction Year.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-construction-year.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-cooling-effect",
    "title": "Buurt Scale 1_15.000 Cooling Effect.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Cooling Effect.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-cooling-effect.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Cooling Effect.png",
        "fileName": "Buurt Scale 1_15.000 Cooling Effect.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-cooling-effect.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-functions",
    "title": "Buurt Scale 1_15.000 Functions.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Land use",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Functions.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-functions.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Functions.png",
        "fileName": "Buurt Scale 1_15.000 Functions.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-functions.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-infrastructure",
    "title": "Buurt Scale 1_15.000 Infrastructure.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Mobility",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Infrastructure.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-infrastructure.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Infrastructure.png",
        "fileName": "Buurt Scale 1_15.000 Infrastructure.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-infrastructure.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-landscape",
    "title": "Buurt Scale 1_15.000 Landscape.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Landscape.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-landscape.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Landscape.png",
        "fileName": "Buurt Scale 1_15.000 Landscape.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-landscape.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-landuse",
    "title": "Buurt Scale 1_15.000 Landuse.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Land use",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Landuse.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-landuse.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Landuse.png",
        "fileName": "Buurt Scale 1_15.000 Landuse.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-landuse.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-no2",
    "title": "Buurt Scale 1_15.000 NO2.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 NO2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-no2.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 NO2.png",
        "fileName": "Buurt Scale 1_15.000 NO2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-no2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-noise-all",
    "title": "Buurt Scale 1_15.000 Noise All.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Noise All.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-noise-all.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Noise All.png",
        "fileName": "Buurt Scale 1_15.000 Noise All.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-noise-all.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-noise-traffic",
    "title": "Buurt Scale 1_15.000 Noise Traffic.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Noise Traffic.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-noise-traffic.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Noise Traffic.png",
        "fileName": "Buurt Scale 1_15.000 Noise Traffic.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-noise-traffic.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-pm-2-5",
    "title": "Buurt Scale 1_15.000 PM 2.5.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 PM 2.5.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-pm-2-5.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 PM 2.5.png",
        "fileName": "Buurt Scale 1_15.000 PM 2.5.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-pm-2-5.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-temperature",
    "title": "Buurt Scale 1_15.000 Temperature.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 Temperature.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-temperature.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 Temperature.png",
        "fileName": "Buurt Scale 1_15.000 Temperature.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-temperature.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-15-000-uhi",
    "title": "Buurt Scale 1_15.000 UHI.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_15.000 UHI.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-uhi.png",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_15.000 UHI.png",
        "fileName": "Buurt Scale 1_15.000 UHI.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-15-000-uhi.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buurt-scale-1-8-000-a0-energy-labels",
    "title": "Buurt Scale 1_8.000 A0 Energy Labels.pdf",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Morphology",
      "Geospatial information",
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Buurt Scale 1_8.000 A0 Energy Labels.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-8-000-a0-energy-labels.pdf",
    "group": "",
    "files": [
      {
        "title": "Buurt Scale 1_8.000 A0 Energy Labels.pdf",
        "fileName": "Buurt Scale 1_8.000 A0 Energy Labels.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buurt-scale-1-8-000-a0-energy-labels.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-alcohol",
    "title": "City Scale 1_75.000 Alcohol.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Alcohol.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-alcohol.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Alcohol.png",
        "fileName": "City Scale 1_75.000 Alcohol.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-alcohol.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-buildings",
    "title": "City Scale 1_75.000 Buildings.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Morphology",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Buildings.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-buildings.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Buildings.png",
        "fileName": "City Scale 1_75.000 Buildings.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-buildings.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-cool-down-inside",
    "title": "City Scale 1_75.000 Cool Down Inside.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Morphology",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Cool Down Inside.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-cool-down-inside.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Cool Down Inside.png",
        "fileName": "City Scale 1_75.000 Cool Down Inside.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-cool-down-inside.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-cool-down-outside",
    "title": "City Scale 1_75.000 Cool Down Outside.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Cool Down Outside.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-cool-down-outside.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Cool Down Outside.png",
        "fileName": "City Scale 1_75.000 Cool Down Outside.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-cool-down-outside.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-good-perceived-health",
    "title": "City Scale 1_75.000 Good Perceived Health.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Good Perceived Health.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-good-perceived-health.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Good Perceived Health.png",
        "fileName": "City Scale 1_75.000 Good Perceived Health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-good-perceived-health.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-greenery-proportion",
    "title": "City Scale 1_75.000 Greenery Proportion.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Greenery Proportion.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-greenery-proportion.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Greenery Proportion.png",
        "fileName": "City Scale 1_75.000 Greenery Proportion.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-greenery-proportion.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-greenery-types",
    "title": "City Scale 1_75.000 Greenery Types.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Greenery Types.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-greenery-types.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Greenery Types.png",
        "fileName": "City Scale 1_75.000 Greenery Types.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-greenery-types.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-infrastructure",
    "title": "City Scale 1_75.000 Infrastructure.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Mobility",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Infrastructure.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-infrastructure.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Infrastructure.png",
        "fileName": "City Scale 1_75.000 Infrastructure.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-infrastructure.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-landscape",
    "title": "City Scale 1_75.000 Landscape.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Landscape.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-landscape.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Landscape.png",
        "fileName": "City Scale 1_75.000 Landscape.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-landscape.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-loneliness",
    "title": "City Scale 1_75.000 Loneliness.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Loneliness.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-loneliness.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Loneliness.png",
        "fileName": "City Scale 1_75.000 Loneliness.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-loneliness.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-overweight",
    "title": "City Scale 1_75.000 Overweight.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Overweight.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-overweight.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Overweight.png",
        "fileName": "City Scale 1_75.000 Overweight.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-overweight.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-physical-activity",
    "title": "City Scale 1_75.000 Physical Activity.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Physical Activity.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-physical-activity.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Physical Activity.png",
        "fileName": "City Scale 1_75.000 Physical Activity.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-physical-activity.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-quality-of-life-absolute-score",
    "title": "City Scale 1_75.000 Quality of Life - Absolute Score.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Quality of Life - Absolute Score.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-quality-of-life-absolute-score.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Quality of Life - Absolute Score.png",
        "fileName": "City Scale 1_75.000 Quality of Life - Absolute Score.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-quality-of-life-absolute-score.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-satisfaction-dwelling",
    "title": "City Scale 1_75.000 Satisfaction Dwelling.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Morphology",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Satisfaction Dwelling.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-dwelling.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Satisfaction Dwelling.png",
        "fileName": "City Scale 1_75.000 Satisfaction Dwelling.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-dwelling.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-satisfaction-green-spaces",
    "title": "City Scale 1_75.000 Satisfaction Green Spaces.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Satisfaction Green Spaces.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-green-spaces.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Satisfaction Green Spaces.png",
        "fileName": "City Scale 1_75.000 Satisfaction Green Spaces.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-green-spaces.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-satisfaction-neighbourhood",
    "title": "City Scale 1_75.000 Satisfaction Neighbourhood.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Public space",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Satisfaction Neighbourhood.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-neighbourhood.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Satisfaction Neighbourhood.png",
        "fileName": "City Scale 1_75.000 Satisfaction Neighbourhood.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-satisfaction-neighbourhood.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-shadow-paths",
    "title": "City Scale 1_75.000 Shadow Paths.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Mobility",
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Shadow Paths.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-shadow-paths.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Shadow Paths.png",
        "fileName": "City Scale 1_75.000 Shadow Paths.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-shadow-paths.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-smoking",
    "title": "City Scale 1_75.000 Smoking.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Smoking.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-smoking.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Smoking.png",
        "fileName": "City Scale 1_75.000 Smoking.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-smoking.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-stress",
    "title": "City Scale 1_75.000 Stress.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Stress.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-stress.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Stress.png",
        "fileName": "City Scale 1_75.000 Stress.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-stress.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-scale-1-75-000-suicidal-thoughts",
    "title": "City Scale 1_75.000 Suicidal Thoughts.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "City Scale 1_75.000 Suicidal Thoughts.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-suicidal-thoughts.png",
    "group": "",
    "files": [
      {
        "title": "City Scale 1_75.000 Suicidal Thoughts.png",
        "fileName": "City Scale 1_75.000 Suicidal Thoughts.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-scale-1-75-000-suicidal-thoughts.png",
        "source": ""
      }
    ]
  },
  {
    "id": "cycling-access-context",
    "title": "cycling_access_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "cycling_access_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cycling-access-context.png",
    "group": "",
    "files": [
      {
        "title": "cycling_access_context.png",
        "fileName": "cycling_access_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cycling-access-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "cycling-access-plot",
    "title": "cycling_access_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "cycling_access_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cycling-access-plot.png",
    "group": "",
    "files": [
      {
        "title": "cycling_access_plot.png",
        "fileName": "cycling_access_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cycling-access-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "daily-amenities-context",
    "title": "daily_amenities_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "daily_amenities_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/daily-amenities-context.png",
    "group": "",
    "files": [
      {
        "title": "daily_amenities_context.png",
        "fileName": "daily_amenities_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/daily-amenities-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "daily-amenities-plot",
    "title": "daily_amenities_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "daily_amenities_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/daily-amenities-plot.png",
    "group": "",
    "files": [
      {
        "title": "daily_amenities_plot.png",
        "fileName": "daily_amenities_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/daily-amenities-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "district-new-developments",
    "title": "District new developments.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Historical development",
      "Map",
      "Macro",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "District new developments.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-new-developments.png",
    "group": "",
    "files": [
      {
        "title": "District new developments.png",
        "fileName": "District new developments.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-new-developments.png",
        "source": ""
      }
    ]
  },
  {
    "id": "education-access-context",
    "title": "education_access_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "education_access_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/education-access-context.png",
    "group": "",
    "files": [
      {
        "title": "education_access_context.png",
        "fileName": "education_access_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/education-access-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "education-access-plot",
    "title": "education_access_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "education_access_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/education-access-plot.png",
    "group": "",
    "files": [
      {
        "title": "education_access_plot.png",
        "fileName": "education_access_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/education-access-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "food-environment-context",
    "title": "food_environment_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "food_environment_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/food-environment-context.png",
    "group": "",
    "files": [
      {
        "title": "food_environment_context.png",
        "fileName": "food_environment_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/food-environment-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "food-environment-plot",
    "title": "food_environment_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "food_environment_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/food-environment-plot.png",
    "group": "",
    "files": [
      {
        "title": "food_environment_plot.png",
        "fileName": "food_environment_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/food-environment-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "functional-mix-context",
    "title": "functional_mix_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "functional_mix_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functional-mix-context.png",
    "group": "",
    "files": [
      {
        "title": "functional_mix_context.png",
        "fileName": "functional_mix_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functional-mix-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "functional-mix-plot",
    "title": "functional_mix_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "functional_mix_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functional-mix-plot.png",
    "group": "",
    "files": [
      {
        "title": "functional_mix_plot.png",
        "fileName": "functional_mix_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functional-mix-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "general-framework-healthy-city-perspective",
    "title": "General Framework - Healthy City Perspective.xlsx",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Dataset",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "General Framework - Healthy City Perspective.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/general-framework-healthy-city-perspective.xlsx",
    "group": "",
    "files": [
      {
        "title": "General Framework - Healthy City Perspective.xlsx",
        "fileName": "General Framework - Healthy City Perspective.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/general-framework-healthy-city-perspective.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "gevoelstemperatuur-2022",
    "title": "Gevoelstemperatuur 2022.pdf",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Physical",
      "Mental",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Gevoelstemperatuur 2022.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gevoelstemperatuur-2022.pdf",
    "group": "",
    "files": [
      {
        "title": "Gevoelstemperatuur 2022.pdf",
        "fileName": "Gevoelstemperatuur 2022.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/gevoelstemperatuur-2022.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "green-coverage-context",
    "title": "green_coverage_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "green_coverage_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-coverage-context.png",
    "group": "",
    "files": [
      {
        "title": "green_coverage_context.png",
        "fileName": "green_coverage_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-coverage-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "green-coverage-plot",
    "title": "green_coverage_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "green_coverage_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-coverage-plot.png",
    "group": "",
    "files": [
      {
        "title": "green_coverage_plot.png",
        "fileName": "green_coverage_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-coverage-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "health-data",
    "title": "Health Data",
    "bucket": "Analysis",
    "description": "1 related files grouped from the framework table.",
    "tags": [
      "Demographics",
      "Dataset",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "data_health.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/data-health.xlsx",
    "group": "S_DA_G3",
    "files": [
      {
        "title": "data_health.xlsx",
        "fileName": "data_health.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/data-health.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "healthcare-access-context",
    "title": "healthcare_access_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "healthcare_access_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthcare-access-context.png",
    "group": "",
    "files": [
      {
        "title": "healthcare_access_context.png",
        "fileName": "healthcare_access_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthcare-access-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "healthcare-access-plot",
    "title": "healthcare_access_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "healthcare_access_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthcare-access-plot.png",
    "group": "",
    "files": [
      {
        "title": "healthcare_access_plot.png",
        "fileName": "healthcare_access_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthcare-access-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "heat-context",
    "title": "heat_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "heat_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/heat-context.png",
    "group": "",
    "files": [
      {
        "title": "heat_context.png",
        "fileName": "heat_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/heat-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "heat-plot",
    "title": "heat_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "heat_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/heat-plot.png",
    "group": "",
    "files": [
      {
        "title": "heat_plot.png",
        "fileName": "heat_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/heat-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "image0",
    "title": "image0.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image0.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image0.jpeg",
    "group": "",
    "files": [
      {
        "title": "image0.jpeg",
        "fileName": "image0.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image0.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image10",
    "title": "image10.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image10.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image10.jpeg",
    "group": "",
    "files": [
      {
        "title": "image10.jpeg",
        "fileName": "image10.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image10.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image11",
    "title": "image11.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image11.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image11.jpeg",
    "group": "",
    "files": [
      {
        "title": "image11.jpeg",
        "fileName": "image11.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image11.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image12",
    "title": "image12.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image12.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image12.jpeg",
    "group": "",
    "files": [
      {
        "title": "image12.jpeg",
        "fileName": "image12.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image12.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image14",
    "title": "image14.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image14.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image14.jpeg",
    "group": "",
    "files": [
      {
        "title": "image14.jpeg",
        "fileName": "image14.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image14.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image15",
    "title": "image15.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image15.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image15.jpeg",
    "group": "",
    "files": [
      {
        "title": "image15.jpeg",
        "fileName": "image15.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image15.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image16",
    "title": "image16.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image16.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image16.jpeg",
    "group": "",
    "files": [
      {
        "title": "image16.jpeg",
        "fileName": "image16.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image16.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image17",
    "title": "image17.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image17.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image17.jpeg",
    "group": "",
    "files": [
      {
        "title": "image17.jpeg",
        "fileName": "image17.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image17.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image18",
    "title": "image18.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image18.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image18.jpeg",
    "group": "",
    "files": [
      {
        "title": "image18.jpeg",
        "fileName": "image18.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image18.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image19",
    "title": "image19.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image19.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image19.jpeg",
    "group": "",
    "files": [
      {
        "title": "image19.jpeg",
        "fileName": "image19.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image19.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image2",
    "title": "image2.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image2.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image2.jpeg",
    "group": "",
    "files": [
      {
        "title": "image2.jpeg",
        "fileName": "image2.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image2.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image20",
    "title": "image20.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image20.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image20.jpeg",
    "group": "",
    "files": [
      {
        "title": "image20.jpeg",
        "fileName": "image20.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image20.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image21",
    "title": "image21.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image21.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image21.jpeg",
    "group": "",
    "files": [
      {
        "title": "image21.jpeg",
        "fileName": "image21.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image21.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image22",
    "title": "image22.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image22.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image22.jpeg",
    "group": "",
    "files": [
      {
        "title": "image22.jpeg",
        "fileName": "image22.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image22.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image23",
    "title": "image23.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image23.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image23.jpeg",
    "group": "",
    "files": [
      {
        "title": "image23.jpeg",
        "fileName": "image23.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image23.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image24",
    "title": "image24.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image24.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image24.jpeg",
    "group": "",
    "files": [
      {
        "title": "image24.jpeg",
        "fileName": "image24.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image24.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image25",
    "title": "image25.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image25.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image25.jpeg",
    "group": "",
    "files": [
      {
        "title": "image25.jpeg",
        "fileName": "image25.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image25.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image26",
    "title": "image26.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image26.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image26.jpeg",
    "group": "",
    "files": [
      {
        "title": "image26.jpeg",
        "fileName": "image26.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image26.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image27",
    "title": "image27.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image27.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image27.jpeg",
    "group": "",
    "files": [
      {
        "title": "image27.jpeg",
        "fileName": "image27.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image27.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image3",
    "title": "image3.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image3.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image3.jpeg",
    "group": "",
    "files": [
      {
        "title": "image3.jpeg",
        "fileName": "image3.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image3.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image4",
    "title": "image4.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image4.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image4.jpeg",
    "group": "",
    "files": [
      {
        "title": "image4.jpeg",
        "fileName": "image4.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image4.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image5",
    "title": "image5.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image5.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image5.jpeg",
    "group": "",
    "files": [
      {
        "title": "image5.jpeg",
        "fileName": "image5.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image5.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image6",
    "title": "image6.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image6.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image6.jpeg",
    "group": "",
    "files": [
      {
        "title": "image6.jpeg",
        "fileName": "image6.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image6.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image7",
    "title": "image7.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image7.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image7.jpeg",
    "group": "",
    "files": [
      {
        "title": "image7.jpeg",
        "fileName": "image7.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image7.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image8",
    "title": "image8.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image8.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image8.jpeg",
    "group": "",
    "files": [
      {
        "title": "image8.jpeg",
        "fileName": "image8.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image8.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "image9",
    "title": "image9.jpeg",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "image9.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image9.jpeg",
    "group": "",
    "files": [
      {
        "title": "image9.jpeg",
        "fileName": "image9.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/image9.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "intersection-density-context",
    "title": "intersection_density_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "intersection_density_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/intersection-density-context.png",
    "group": "",
    "files": [
      {
        "title": "intersection_density_context.png",
        "fileName": "intersection_density_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/intersection-density-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "intersection-density-plot",
    "title": "intersection_density_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "intersection_density_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/intersection-density-plot.png",
    "group": "",
    "files": [
      {
        "title": "intersection_density_plot.png",
        "fileName": "intersection_density_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/intersection-density-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "lighting-context",
    "title": "lighting_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "lighting_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/lighting-context.png",
    "group": "",
    "files": [
      {
        "title": "lighting_context.png",
        "fileName": "lighting_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/lighting-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "lighting-plot",
    "title": "lighting_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "lighting_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/lighting-plot.png",
    "group": "",
    "files": [
      {
        "title": "lighting_plot.png",
        "fileName": "lighting_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/lighting-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mobility-context",
    "title": "mobility_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "mobility_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mobility-context.png",
    "group": "",
    "files": [
      {
        "title": "mobility_context.png",
        "fileName": "mobility_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mobility-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-basic-edu-noneu",
    "title": "MP2- basic_edu_noneu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- basic_edu_noneu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-basic-edu-noneu.png",
    "group": "",
    "files": [
      {
        "title": "MP2- basic_edu_noneu.png",
        "fileName": "MP2- basic_edu_noneu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-basic-edu-noneu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-crimes-cities",
    "title": "MP2- crimes cities.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- crimes cities.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-cities.png",
    "group": "",
    "files": [
      {
        "title": "MP2- crimes cities.png",
        "fileName": "MP2- crimes cities.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-cities.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-high-edu-income",
    "title": "MP2- high_edu_income.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- high_edu_income.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-high-edu-income.png",
    "group": "",
    "files": [
      {
        "title": "MP2- high_edu_income.png",
        "fileName": "MP2- high_edu_income.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-high-edu-income.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-uhi-diagrams-03",
    "title": "MP2- UHI DIAGRAMS-03.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Tim",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- UHI DIAGRAMS-03.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-uhi-diagrams-03.png",
    "group": "",
    "files": [
      {
        "title": "MP2- UHI DIAGRAMS-03.png",
        "fileName": "MP2- UHI DIAGRAMS-03.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-uhi-diagrams-03.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-uhi-diagrams-04",
    "title": "MP2- UHI DIAGRAMS-04.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Tim",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- UHI DIAGRAMS-04.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-uhi-diagrams-04.png",
    "group": "",
    "files": [
      {
        "title": "MP2- UHI DIAGRAMS-04.png",
        "fileName": "MP2- UHI DIAGRAMS-04.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-uhi-diagrams-04.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-crimes-total",
    "title": "MP2-crimes total.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-crimes total.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-total.png",
    "group": "",
    "files": [
      {
        "title": "MP2-crimes total.png",
        "fileName": "MP2-crimes total.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-total.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-crimes-utrecht",
    "title": "MP2-crimes utrecht.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Physical",
      "Mental"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-crimes utrecht.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-utrecht.png",
    "group": "",
    "files": [
      {
        "title": "MP2-crimes utrecht.png",
        "fileName": "MP2-crimes utrecht.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-crimes-utrecht.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-mindmap-causality-01",
    "title": "MP2-mindmap causality-01.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Tim",
      "Physical",
      "Mental",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-mindmap causality-01.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-mindmap-causality-01.png",
    "group": "",
    "files": [
      {
        "title": "MP2-mindmap causality-01.png",
        "fileName": "MP2-mindmap causality-01.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-mindmap-causality-01.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-mindmap-causality-02",
    "title": "MP2-mindmap causality-02.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Tim",
      "Physical",
      "Mental",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-mindmap causality-02.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-mindmap-causality-02.png",
    "group": "",
    "files": [
      {
        "title": "MP2-mindmap causality-02.png",
        "fileName": "MP2-mindmap causality-02.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-mindmap-causality-02.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-basic-edu",
    "title": "MP2_dist_basic_edu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_basic_edu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-basic-edu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_basic_edu.png",
        "fileName": "MP2_dist_basic_edu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-basic-edu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-eu",
    "title": "MP2_dist_eu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_eu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-eu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_eu.png",
        "fileName": "MP2_dist_eu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-eu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-high-edu",
    "title": "MP2_dist_high_edu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_high_edu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-high-edu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_high_edu.png",
        "fileName": "MP2_dist_high_edu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-high-edu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-income-map",
    "title": "MP2_dist_Income_map.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_Income_map.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-income-map.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_Income_map.png",
        "fileName": "MP2_dist_Income_map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-income-map.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-native",
    "title": "MP2_dist_native.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_native.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-native.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_native.png",
        "fileName": "MP2_dist_native.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-native.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-noneu",
    "title": "MP2_dist_noneu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_noneu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-noneu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_noneu.png",
        "fileName": "MP2_dist_noneu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-noneu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-dist-sec-edu",
    "title": "MP2_dist_sec_edu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_dist_sec_edu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-sec-edu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_dist_sec_edu.png",
        "fileName": "MP2_dist_sec_edu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-dist-sec-edu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-high-edu-noneu",
    "title": "MP2_high_edu_noneu.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Demographics",
      "Image",
      "Macro",
      "Author",
      "Tim",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2_high_edu_noneu.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-high-edu-noneu.png",
    "group": "",
    "files": [
      {
        "title": "MP2_high_edu_noneu.png",
        "fileName": "MP2_high_edu_noneu.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-high-edu-noneu.png",
        "source": ""
      }
    ]
  },
  {
    "id": "neighbourhood-scale-analysis",
    "title": "Neighbourhood Scale Analysis",
    "bucket": "Analysis",
    "description": "9 related files grouped from the framework table.",
    "tags": [
      "Land use",
      "Map",
      "Meso",
      "Author",
      "Vera",
      "Public space",
      "Environment",
      "Mobility",
      "Historical development",
      "Morphology"
    ],
    "date": "",
    "source": "",
    "fileName": "Facilities.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/facilities.png",
    "group": "A_NS_G3",
    "files": [
      {
        "title": "Facilities.png",
        "fileName": "Facilities.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/facilities.png",
        "source": ""
      },
      {
        "title": "Greenery 300m catchment.png",
        "fileName": "Greenery 300m catchment.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/greenery-300m-catchment.png",
        "source": ""
      },
      {
        "title": "Road hierarchy.png",
        "fileName": "Road hierarchy.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/road-hierarchy.png",
        "source": ""
      },
      {
        "title": "Stamps.png",
        "fileName": "Stamps.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stamps.png",
        "source": ""
      },
      {
        "title": "Stamps and typologies.png",
        "fileName": "Stamps and typologies.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stamps-and-typologies.png",
        "source": ""
      },
      {
        "title": "Streets to be redesigned.png",
        "fileName": "Streets to be redesigned.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/streets-to-be-redesigned.png",
        "source": ""
      },
      {
        "title": "Strengthen green connections.png",
        "fileName": "Strengthen green connections.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/strengthen-green-connections.png",
        "source": ""
      },
      {
        "title": "Typologies.png",
        "fileName": "Typologies.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/typologies.png",
        "source": ""
      },
      {
        "title": "Walking catchment area.png",
        "fileName": "Walking catchment area.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walking-catchment-area.png",
        "source": ""
      }
    ]
  },
  {
    "id": "noise-context",
    "title": "noise_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "noise_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-context.png",
    "group": "",
    "files": [
      {
        "title": "noise_context.png",
        "fileName": "noise_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "noise-plot",
    "title": "noise_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "noise_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-plot.png",
    "group": "",
    "files": [
      {
        "title": "noise_plot.png",
        "fileName": "noise_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "notes",
    "title": "Notes.docx",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Public space",
      "Description",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Notes.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/notes.docx",
    "group": "",
    "files": [
      {
        "title": "Notes.docx",
        "fileName": "Notes.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/notes.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "pitch-week-2",
    "title": "Pitch week 2.pdf",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Historical development",
      "Demographics",
      "Mobility",
      "Morphology",
      "Land use",
      "Public space",
      "Environment",
      "Presentation",
      "Meso",
      "Author",
      "Cas",
      "Milana",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Pitch week 2.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-2.pdf",
    "group": "",
    "files": [
      {
        "title": "Pitch week 2.pdf",
        "fileName": "Pitch week 2.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-2.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "play-sports-context",
    "title": "play_sports_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "play_sports_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/play-sports-context.png",
    "group": "",
    "files": [
      {
        "title": "play_sports_context.png",
        "fileName": "play_sports_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/play-sports-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "play-sports-plot",
    "title": "play_sports_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "play_sports_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/play-sports-plot.png",
    "group": "",
    "files": [
      {
        "title": "play_sports_plot.png",
        "fileName": "play_sports_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/play-sports-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "priority-zones-context",
    "title": "priority_zones_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "priority_zones_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/priority-zones-context.png",
    "group": "",
    "files": [
      {
        "title": "priority_zones_context.png",
        "fileName": "priority_zones_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/priority-zones-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "priority-zones-plot",
    "title": "priority_zones_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "priority_zones_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/priority-zones-plot.png",
    "group": "",
    "files": [
      {
        "title": "priority_zones_plot.png",
        "fileName": "priority_zones_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/priority-zones-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "pt-access-context",
    "title": "pt_access_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "pt_access_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pt-access-context.png",
    "group": "",
    "files": [
      {
        "title": "pt_access_context.png",
        "fileName": "pt_access_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pt-access-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "public-space-context",
    "title": "public_space_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "public_space_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/public-space-context.png",
    "group": "",
    "files": [
      {
        "title": "public_space_context.png",
        "fileName": "public_space_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/public-space-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "public-space-plot",
    "title": "public_space_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "public_space_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/public-space-plot.png",
    "group": "",
    "files": [
      {
        "title": "public_space_plot.png",
        "fileName": "public_space_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/public-space-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "safety-context",
    "title": "Safety_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Safety_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/safety-context.png",
    "group": "",
    "files": [
      {
        "title": "Safety_context.png",
        "fileName": "Safety_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/safety-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "safety-plot",
    "title": "Safety_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Safety_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/safety-plot.png",
    "group": "",
    "files": [
      {
        "title": "Safety_plot.png",
        "fileName": "Safety_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/safety-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "service-diversity-context",
    "title": "service_diversity_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "service_diversity_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/service-diversity-context.png",
    "group": "",
    "files": [
      {
        "title": "service_diversity_context.png",
        "fileName": "service_diversity_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/service-diversity-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "service-diversity-plot",
    "title": "service_diversity_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "service_diversity_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/service-diversity-plot.png",
    "group": "",
    "files": [
      {
        "title": "service_diversity_plot.png",
        "fileName": "service_diversity_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/service-diversity-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "spatial-domain-data",
    "title": "Spatial Domain Data",
    "bucket": "Analysis",
    "description": "1 related files grouped from the framework table.",
    "tags": [
      "Demographics",
      "Environment",
      "Dataset",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "data_spatial_domain.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/data-spatial-domain.xlsx",
    "group": "S_DA_G4",
    "files": [
      {
        "title": "data_spatial_domain.xlsx",
        "fileName": "data_spatial_domain.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/data-spatial-domain.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "sport-access-context",
    "title": "sport_access_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "sport_access_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sport-access-context.png",
    "group": "",
    "files": [
      {
        "title": "sport_access_context.png",
        "fileName": "sport_access_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sport-access-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "sport-access-plot",
    "title": "sport_access_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Economic",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "sport_access_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sport-access-plot.png",
    "group": "",
    "files": [
      {
        "title": "sport_access_plot.png",
        "fileName": "sport_access_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sport-access-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "stay-quality-context",
    "title": "stay_quality_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "stay_quality_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stay-quality-context.png",
    "group": "",
    "files": [
      {
        "title": "stay_quality_context.png",
        "fileName": "stay_quality_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stay-quality-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "stay-quality-plot",
    "title": "stay_quality_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "stay_quality_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stay-quality-plot.png",
    "group": "",
    "files": [
      {
        "title": "stay_quality_plot.png",
        "fileName": "stay_quality_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stay-quality-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "traffic-intensity-context",
    "title": "traffic_intensity_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "traffic_intensity_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/traffic-intensity-context.png",
    "group": "",
    "files": [
      {
        "title": "traffic_intensity_context.png",
        "fileName": "traffic_intensity_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/traffic-intensity-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "traffic-intensity-plot",
    "title": "traffic_intensity_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "traffic_intensity_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/traffic-intensity-plot.png",
    "group": "",
    "files": [
      {
        "title": "traffic_intensity_plot.png",
        "fileName": "traffic_intensity_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/traffic-intensity-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "walkability-context",
    "title": "walkability_context.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "walkability_context.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-context.png",
    "group": "",
    "files": [
      {
        "title": "walkability_context.png",
        "fileName": "walkability_context.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-context.png",
        "source": ""
      }
    ]
  },
  {
    "id": "walkability-plot",
    "title": "walkability_plot.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "walkability_plot.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-plot.png",
    "group": "",
    "files": [
      {
        "title": "walkability_plot.png",
        "fileName": "walkability_plot.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-plot.png",
        "source": ""
      }
    ]
  },
  {
    "id": "wijk-scale-1-30-000-buildings",
    "title": "Wijk Scale 1_30.000 Buildings.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Morphology",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Wijk Scale 1_30.000 Buildings.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-buildings.png",
    "group": "",
    "files": [
      {
        "title": "Wijk Scale 1_30.000 Buildings.png",
        "fileName": "Wijk Scale 1_30.000 Buildings.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-buildings.png",
        "source": ""
      }
    ]
  },
  {
    "id": "wijk-scale-1-30-000-infrasturcture",
    "title": "Wijk Scale 1_30.000 Infrasturcture.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Mobility",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel"
    ],
    "date": "",
    "source": "",
    "fileName": "Wijk Scale 1_30.000 Infrasturcture.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-infrasturcture.png",
    "group": "",
    "files": [
      {
        "title": "Wijk Scale 1_30.000 Infrasturcture.png",
        "fileName": "Wijk Scale 1_30.000 Infrasturcture.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-infrasturcture.png",
        "source": ""
      }
    ]
  },
  {
    "id": "wijk-scale-1-30-000-landscape",
    "title": "Wijk Scale 1_30.000 Landscape.png",
    "bucket": "Analysis",
    "description": "",
    "tags": [
      "Environment",
      "Geospatial information",
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Wijk Scale 1_30.000 Landscape.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-landscape.png",
    "group": "",
    "files": [
      {
        "title": "Wijk Scale 1_30.000 Landscape.png",
        "fileName": "Wijk Scale 1_30.000 Landscape.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wijk-scale-1-30-000-landscape.png",
        "source": ""
      }
    ]
  },
  {
    "id": "after-conclusion-picture",
    "title": "After conclusion picture.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "After conclusion picture.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/after-conclusion-picture.png",
    "group": "",
    "files": [
      {
        "title": "After conclusion picture.png",
        "fileName": "After conclusion picture.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/after-conclusion-picture.png",
        "source": ""
      }
    ]
  },
  {
    "id": "bad-health-diagrams",
    "title": "Bad Health Diagrams",
    "bucket": "Conclusion",
    "description": "4 related files grouped from the framework table.",
    "tags": [
      "Demographics",
      "Diagram",
      "Meso",
      "Author",
      "AI-assisted",
      "Vera",
      "Social",
      "Mental",
      "Physical",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Bad social health.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-bad-social-health.png",
    "group": "C_BHD_G3",
    "files": [
      {
        "title": "1. Bad social health.png",
        "fileName": "1. Bad social health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-bad-social-health.png",
        "source": ""
      },
      {
        "title": "2. Bad mental health.png",
        "fileName": "2. Bad mental health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-bad-mental-health.png",
        "source": ""
      },
      {
        "title": "3. Bad physical health.png",
        "fileName": "3. Bad physical health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-bad-physical-health.png",
        "source": ""
      },
      {
        "title": "4. Trouble making ends meet.png",
        "fileName": "4. Trouble making ends meet.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/4-trouble-making-ends-meet.png",
        "source": ""
      }
    ]
  },
  {
    "id": "before-conclusion-picture",
    "title": "Before conclusion picture.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Before conclusion picture.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/before-conclusion-picture.png",
    "group": "",
    "files": [
      {
        "title": "Before conclusion picture.png",
        "fileName": "Before conclusion picture.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/before-conclusion-picture.png",
        "source": ""
      }
    ]
  },
  {
    "id": "building-stamp",
    "title": "Building Stamp.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "Building Stamp.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/building-stamp.png",
    "group": "",
    "files": [
      {
        "title": "Building Stamp.png",
        "fileName": "Building Stamp.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/building-stamp.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-conclusions",
    "title": "City conclusions.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Mobility",
      "Environment",
      "Map",
      "Macro",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "City conclusions.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-conclusions.png",
    "group": "",
    "files": [
      {
        "title": "City conclusions.png",
        "fileName": "City conclusions.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-conclusions.png",
        "source": ""
      }
    ]
  },
  {
    "id": "city-opportunities",
    "title": "City opportunities.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Mobility",
      "Environment",
      "Map",
      "Macro",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "City opportunities.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-opportunities.png",
    "group": "",
    "files": [
      {
        "title": "City opportunities.png",
        "fileName": "City opportunities.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/city-opportunities.png",
        "source": ""
      }
    ]
  },
  {
    "id": "conclusion-diagrams",
    "title": "Conclusion Diagrams",
    "bucket": "Conclusion",
    "description": "5 related files grouped from the framework table.",
    "tags": [
      "Mobility",
      "Public space",
      "Diagram",
      "Meso",
      "Author",
      "AI-assisted",
      "Vera",
      "Environment",
      "Land use",
      "Morphology",
      "Demographics"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Car-dominated.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-car-dominated.png",
    "group": "C_CD_G3",
    "files": [
      {
        "title": "1. Car-dominated.png",
        "fileName": "1. Car-dominated.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-car-dominated.png",
        "source": ""
      },
      {
        "title": "2. Underutilized green space.png",
        "fileName": "2. Underutilized green space.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-underutilized-green-space.png",
        "source": ""
      },
      {
        "title": "3. Passive ground floors.png",
        "fileName": "3. Passive ground floors.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-passive-ground-floors.png",
        "source": ""
      },
      {
        "title": "4. Low sense of ownership.png",
        "fileName": "4. Low sense of ownership.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/4-low-sense-of-ownership.png",
        "source": ""
      },
      {
        "title": "5. Low bridging cohesion.png",
        "fileName": "5. Low bridging cohesion.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/5-low-bridging-cohesion.png",
        "source": ""
      }
    ]
  },
  {
    "id": "conclusion-maps",
    "title": "Conclusion Maps",
    "bucket": "Conclusion",
    "description": "16 related files grouped from the framework table.",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Vera",
      "Mobility",
      "Public space",
      "Environment",
      "Cas",
      "Morphology",
      "Land use"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Base map.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-base-map.png",
    "group": "C_CM_G3",
    "files": [
      {
        "title": "1. Base map.png",
        "fileName": "1. Base map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-base-map.png",
        "source": ""
      },
      {
        "title": "2. Tram.png",
        "fileName": "2. Tram.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-tram.png",
        "source": ""
      },
      {
        "title": "3. Bus.png",
        "fileName": "3. Bus.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-bus.png",
        "source": ""
      },
      {
        "title": "4. Bike path.png",
        "fileName": "4. Bike path.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/4-bike-path.png",
        "source": ""
      },
      {
        "title": "5. Car roads.png",
        "fileName": "5. Car roads.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/5-car-roads.png",
        "source": ""
      },
      {
        "title": "6. Parking.png",
        "fileName": "6. Parking.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/6-parking.png",
        "source": ""
      },
      {
        "title": "7. Green space.png",
        "fileName": "7. Green space.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/7-green-space.png",
        "source": ""
      },
      {
        "title": "8. Neglected green space.png",
        "fileName": "8. Neglected green space.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/8-neglected-green-space.png",
        "source": ""
      },
      {
        "title": "9. Flooding.png",
        "fileName": "9. Flooding.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/9-flooding.png",
        "source": ""
      },
      {
        "title": "10. Environmental risk.png",
        "fileName": "10. Environmental risk.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/10-environmental-risk.png",
        "source": ""
      },
      {
        "title": "11. UHI effect.png",
        "fileName": "11. UHI effect.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/11-uhi-effect.png",
        "source": ""
      },
      {
        "title": "12. Active ground floors.png",
        "fileName": "12. Active ground floors.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/12-active-ground-floors.png",
        "source": ""
      },
      {
        "title": "13. Passive ground floors.png",
        "fileName": "13. Passive ground floors.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/13-passive-ground-floors.png",
        "source": ""
      },
      {
        "title": "14. Stamps.png",
        "fileName": "14. Stamps.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/14-stamps.png",
        "source": ""
      },
      {
        "title": "15. Littering.png",
        "fileName": "15. Littering.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/15-littering.png",
        "source": ""
      },
      {
        "title": "16. Appropriation of space.png",
        "fileName": "16. Appropriation of space.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/16-appropriation-of-space.png",
        "source": ""
      }
    ]
  },
  {
    "id": "conclusion-who-indicators",
    "title": "Conclusion WHO indicators.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Meso",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Conclusion WHO indicators.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/conclusion-who-indicators.png",
    "group": "",
    "files": [
      {
        "title": "Conclusion WHO indicators.png",
        "fileName": "Conclusion WHO indicators.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/conclusion-who-indicators.png",
        "source": ""
      }
    ]
  },
  {
    "id": "construction-years-buurt",
    "title": "Construction Years Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "Construction Years Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/construction-years-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Construction Years Buurt.png",
        "fileName": "Construction Years Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/construction-years-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "cooling-effect-buurt",
    "title": "Cooling Effect Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Cooling Effect Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cooling-effect-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Cooling Effect Buurt.png",
        "fileName": "Cooling Effect Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/cooling-effect-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "district-conclusions",
    "title": "District conclusions.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Mobility",
      "Map",
      "Macro",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "District conclusions.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-conclusions.png",
    "group": "",
    "files": [
      {
        "title": "District conclusions.png",
        "fileName": "District conclusions.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-conclusions.png",
        "source": ""
      }
    ]
  },
  {
    "id": "district-opportunities",
    "title": "District opportunities.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Historical development",
      "Mobility",
      "Morphology",
      "Land use",
      "Environment",
      "Map",
      "Macro",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "District opportunities.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-opportunities.png",
    "group": "",
    "files": [
      {
        "title": "District opportunities.png",
        "fileName": "District opportunities.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/district-opportunities.png",
        "source": ""
      }
    ]
  },
  {
    "id": "energy-labels-buurt",
    "title": "Energy Labels Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Energy Labels Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/energy-labels-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Energy Labels Buurt.png",
        "fileName": "Energy Labels Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/energy-labels-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "environmental-conclusion-map",
    "title": "Environmental conclusion map.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Tim",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Environmental conclusion map.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/environmental-conclusion-map.png",
    "group": "",
    "files": [
      {
        "title": "Environmental conclusion map.png",
        "fileName": "Environmental conclusion map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/environmental-conclusion-map.png",
        "source": ""
      }
    ]
  },
  {
    "id": "figure-ground-plan-city",
    "title": "Figure Ground Plan City.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Figure Ground Plan City.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/figure-ground-plan-city.png",
    "group": "",
    "files": [
      {
        "title": "Figure Ground Plan City.png",
        "fileName": "Figure Ground Plan City.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/figure-ground-plan-city.png",
        "source": ""
      }
    ]
  },
  {
    "id": "functions-buurt",
    "title": "Functions Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Functions Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functions-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Functions Buurt.png",
        "fileName": "Functions Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/functions-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "future-projects-buurt",
    "title": "Future Projects Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Future Projects Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/future-projects-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Future Projects Buurt.png",
        "fileName": "Future Projects Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/future-projects-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "health-burger-conclusion-map",
    "title": "Health burger conclusion map.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Diagram",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Health burger conclusion map.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-burger-conclusion-map.png",
    "group": "",
    "files": [
      {
        "title": "Health burger conclusion map.png",
        "fileName": "Health burger conclusion map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-burger-conclusion-map.png",
        "source": ""
      }
    ]
  },
  {
    "id": "infrastructure-buurt",
    "title": "Infrastructure Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Infrastructure Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/infrastructure-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Infrastructure Buurt.png",
        "fileName": "Infrastructure Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/infrastructure-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "infrastructure-city",
    "title": "Infrastructure City.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Infrastructure City.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/infrastructure-city.png",
    "group": "",
    "files": [
      {
        "title": "Infrastructure City.png",
        "fileName": "Infrastructure City.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/infrastructure-city.png",
        "source": ""
      }
    ]
  },
  {
    "id": "landscape-buurt",
    "title": "Landscape Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Landscape Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/landscape-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Landscape Buurt.png",
        "fileName": "Landscape Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/landscape-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "landscape-city",
    "title": "Landscape City.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Macro",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Landscape City.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/landscape-city.png",
    "group": "",
    "files": [
      {
        "title": "Landscape City.png",
        "fileName": "Landscape City.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/landscape-city.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-stakeholder-diagram-01",
    "title": "MPU-stakeholder diagram-01.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Diagram",
      "Macro",
      "Author",
      "Tim",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU-stakeholder diagram-01.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-stakeholder-diagram-01.png",
    "group": "",
    "files": [
      {
        "title": "MPU-stakeholder diagram-01.png",
        "fileName": "MPU-stakeholder diagram-01.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-stakeholder-diagram-01.png",
        "source": ""
      }
    ]
  },
  {
    "id": "neighbourhood-conclusions",
    "title": "Neighbourhood conclusions.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Mobility",
      "Morphology",
      "Map",
      "Meso",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Neighbourhood conclusions.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/neighbourhood-conclusions.png",
    "group": "",
    "files": [
      {
        "title": "Neighbourhood conclusions.png",
        "fileName": "Neighbourhood conclusions.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/neighbourhood-conclusions.png",
        "source": ""
      }
    ]
  },
  {
    "id": "neighbourhood-opportunities",
    "title": "Neighbourhood opportunities.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Mobility",
      "Public space",
      "Map",
      "Meso",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Neighbourhood opportunities.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/neighbourhood-opportunities.png",
    "group": "",
    "files": [
      {
        "title": "Neighbourhood opportunities.png",
        "fileName": "Neighbourhood opportunities.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/neighbourhood-opportunities.png",
        "source": ""
      }
    ]
  },
  {
    "id": "noise-buurt",
    "title": "Noise Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Noise Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Noise Buurt.png",
        "fileName": "Noise Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/noise-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "pitch-week-4",
    "title": "Pitch week 4.pdf",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Historical development",
      "Demographics",
      "Mobility",
      "Morphology",
      "Land use",
      "Public space",
      "Environment",
      "Presentation",
      "Meso",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Pitch week 4.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-4.pdf",
    "group": "",
    "files": [
      {
        "title": "Pitch week 4.pdf",
        "fileName": "Pitch week 4.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-week-4.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "spatial-conclusion-map",
    "title": "Spatial conclusion map.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Spatial conclusion map.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/spatial-conclusion-map.png",
    "group": "",
    "files": [
      {
        "title": "Spatial conclusion map.png",
        "fileName": "Spatial conclusion map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/spatial-conclusion-map.png",
        "source": ""
      }
    ]
  },
  {
    "id": "stakeholders-conclusion",
    "title": "Stakeholders conclusion.jpg",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Diagram",
      "Meso",
      "Author",
      "Lara",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Stakeholders conclusion.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholders-conclusion.jpg",
    "group": "",
    "files": [
      {
        "title": "Stakeholders conclusion.jpg",
        "fileName": "Stakeholders conclusion.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholders-conclusion.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "temperature-buurt",
    "title": "Temperature Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Temperature Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/temperature-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Temperature Buurt.png",
        "fileName": "Temperature Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/temperature-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "urban-heat-island-effect-buurt",
    "title": "Urban Heat Island Effect Buurt.png",
    "bucket": "Conclusion",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Urban Heat Island Effect Buurt.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/urban-heat-island-effect-buurt.png",
    "group": "",
    "files": [
      {
        "title": "Urban Heat Island Effect Buurt.png",
        "fileName": "Urban Heat Island Effect Buurt.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/urban-heat-island-effect-buurt.png",
        "source": ""
      }
    ]
  },
  {
    "id": "health-simulation-tool",
    "title": "Health Simulation Tool",
    "bucket": "Simulation",
    "description": "1 related files grouped from the framework table.",
    "tags": [
      "Code",
      "AI-assisted",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Health_simulation_tool_final.ipynb",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-simulation-tool-final.ipynb",
    "group": "S_DA_G5",
    "files": [
      {
        "title": "Health_simulation_tool_final.ipynb",
        "fileName": "Health_simulation_tool_final.ipynb",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-simulation-tool-final.ipynb",
        "source": ""
      }
    ]
  },
  {
    "id": "midterm-group-3",
    "title": "Midterm group 3.pdf",
    "bucket": "Simulation",
    "description": "",
    "tags": [
      "Historical development",
      "Demographics",
      "Mobility",
      "Morphology",
      "Land use",
      "Public space",
      "Environment",
      "Presentation",
      "Meso",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Midterm group 3.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/midterm-group-3.pdf",
    "group": "",
    "files": [
      {
        "title": "Midterm group 3.pdf",
        "fileName": "Midterm group 3.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/midterm-group-3.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "sensor-explanation",
    "title": "Sensor explanation.png",
    "bucket": "Simulation",
    "description": "",
    "tags": [
      "Description",
      "Micro",
      "Author",
      "AI-assisted",
      "Raneem",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Sensor explanation.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sensor-explanation.png",
    "group": "",
    "files": [
      {
        "title": "Sensor explanation.png",
        "fileName": "Sensor explanation.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sensor-explanation.png",
        "source": ""
      }
    ]
  },
  {
    "id": "simulation-app-explanation",
    "title": "Simulation app explanation.png",
    "bucket": "Simulation",
    "description": "",
    "tags": [
      "Description",
      "Diagram",
      "Meso",
      "Author",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Simulation app explanation.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/simulation-app-explanation.png",
    "group": "",
    "files": [
      {
        "title": "Simulation app explanation.png",
        "fileName": "Simulation app explanation.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/simulation-app-explanation.png",
        "source": ""
      }
    ]
  },
  {
    "id": "simulation-indicators",
    "title": "Simulation Indicators",
    "bucket": "Simulation",
    "description": "7 related files grouped from the framework table.",
    "tags": [
      "Public space",
      "Environment",
      "Diagram",
      "Micro",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Land use",
      "Mobility"
    ],
    "date": "",
    "source": "",
    "fileName": "Biodiversity.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/biodiversity.png",
    "group": "S_ID_G3",
    "files": [
      {
        "title": "Biodiversity.png",
        "fileName": "Biodiversity.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/biodiversity.png",
        "source": ""
      },
      {
        "title": "Food third place.png",
        "fileName": "Food third place.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/food-third-place.png",
        "source": ""
      },
      {
        "title": "Green share.png",
        "fileName": "Green share.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-share.png",
        "source": ""
      },
      {
        "title": "Street width.png",
        "fileName": "Street width.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-width.png",
        "source": ""
      },
      {
        "title": "Traffic calming elements.png",
        "fileName": "Traffic calming elements.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/traffic-calming-elements.png",
        "source": ""
      },
      {
        "title": "Tree canopy coverage.png",
        "fileName": "Tree canopy coverage.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/tree-canopy-coverage.png",
        "source": ""
      },
      {
        "title": "Urban furniture.png",
        "fileName": "Urban furniture.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/urban-furniture.png",
        "source": ""
      }
    ]
  },
  {
    "id": "simulation-matrix",
    "title": "Simulation Matrix",
    "bucket": "Simulation",
    "description": "3 related files grouped from the framework table.",
    "tags": [
      "Demographics",
      "Diagram",
      "Meso",
      "Author",
      "Vera",
      "Social",
      "Mental",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Matrix social health positive 0.2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-matrix-social-health-positive-0-2.png",
    "group": "S_M_G3",
    "files": [
      {
        "title": "1. Matrix social health positive 0.2.png",
        "fileName": "1. Matrix social health positive 0.2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-matrix-social-health-positive-0-2.png",
        "source": ""
      },
      {
        "title": "2. Matrix mental health positive 0.2.png",
        "fileName": "2. Matrix mental health positive 0.2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-matrix-mental-health-positive-0-2.png",
        "source": ""
      },
      {
        "title": "3. Matrix physical health positive 0.2.png",
        "fileName": "3. Matrix physical health positive 0.2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-matrix-physical-health-positive-0-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "simulation-routes",
    "title": "Simulation routes.mov",
    "bucket": "Simulation",
    "description": "",
    "tags": [
      "Video",
      "Meso",
      "Author",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Simulation routes.mov",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/simulation-routes.mov",
    "group": "",
    "files": [
      {
        "title": "Simulation routes.mov",
        "fileName": "Simulation routes.mov",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/simulation-routes.mov",
        "source": ""
      }
    ]
  },
  {
    "id": "1-before",
    "title": "1 before.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "1 before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-before.png",
    "group": "",
    "files": [
      {
        "title": "1 before.png",
        "fileName": "1 before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "1-2-after",
    "title": "1.2 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "1.2 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-2-after.png",
    "group": "",
    "files": [
      {
        "title": "1.2 after.png",
        "fileName": "1.2 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-2-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "1-3-after",
    "title": "1.3 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "1.3 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-3-after.png",
    "group": "",
    "files": [
      {
        "title": "1.3 after.png",
        "fileName": "1.3 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-3-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "2-before",
    "title": "2 before.jpg",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "2 before.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-before.jpg",
    "group": "",
    "files": [
      {
        "title": "2 before.jpg",
        "fileName": "2 before.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-before.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "2-1-after",
    "title": "2.1 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "2.1 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-1-after.png",
    "group": "",
    "files": [
      {
        "title": "2.1 after.png",
        "fileName": "2.1 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-1-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "2-2-after",
    "title": "2.2 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "2.2 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-2-after.png",
    "group": "",
    "files": [
      {
        "title": "2.2 after.png",
        "fileName": "2.2 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-2-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "2-3-after",
    "title": "2.3 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "2.3 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-3-after.png",
    "group": "",
    "files": [
      {
        "title": "2.3 after.png",
        "fileName": "2.3 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-3-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-1-after",
    "title": "3.1 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.1 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-1-after.png",
    "group": "",
    "files": [
      {
        "title": "3.1 after.png",
        "fileName": "3.1 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-1-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-1-before",
    "title": "3.1 before.jpeg",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.1 before.jpeg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-1-before.jpeg",
    "group": "",
    "files": [
      {
        "title": "3.1 before.jpeg",
        "fileName": "3.1 before.jpeg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-1-before.jpeg",
        "source": ""
      }
    ]
  },
  {
    "id": "3-2-after",
    "title": "3.2 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.2 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-2-after.png",
    "group": "",
    "files": [
      {
        "title": "3.2 after.png",
        "fileName": "3.2 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-2-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-2-before",
    "title": "3.2 before.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.2 before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-2-before.png",
    "group": "",
    "files": [
      {
        "title": "3.2 before.png",
        "fileName": "3.2 before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-2-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-3-after",
    "title": "3.3 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.3 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-3-after.png",
    "group": "",
    "files": [
      {
        "title": "3.3 after.png",
        "fileName": "3.3 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-3-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-3-4-before",
    "title": "3.3-4 before.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.3-4 before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-3-4-before.png",
    "group": "",
    "files": [
      {
        "title": "3.3-4 before.png",
        "fileName": "3.3-4 before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-3-4-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "3-4-after",
    "title": "3.4 after.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "AI-assisted",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "3.4 after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-4-after.png",
    "group": "",
    "files": [
      {
        "title": "3.4 after.png",
        "fileName": "3.4 after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-4-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "final-concept-of-health",
    "title": "Final concept of health.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Final concept of health.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/final-concept-of-health.png",
    "group": "",
    "files": [
      {
        "title": "Final concept of health.png",
        "fileName": "Final concept of health.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/final-concept-of-health.png",
        "source": ""
      }
    ]
  },
  {
    "id": "health-scenario-simulations",
    "title": "Health Scenario Simulations",
    "bucket": "Strategy",
    "description": "3 related files grouped from the framework table.",
    "tags": [
      "Public space",
      "Environment",
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Vera",
      "Mental",
      "Physical",
      "Social"
    ],
    "date": "",
    "source": "",
    "fileName": "Mental scenario.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mental-scenario.png",
    "group": "S_HSW_G3",
    "files": [
      {
        "title": "Mental scenario.png",
        "fileName": "Mental scenario.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mental-scenario.png",
        "source": ""
      },
      {
        "title": "Physical scenario.png",
        "fileName": "Physical scenario.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/physical-scenario.png",
        "source": ""
      },
      {
        "title": "Social scenario.png",
        "fileName": "Social scenario.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/social-scenario.png",
        "source": ""
      }
    ]
  },
  {
    "id": "integrated-process-diagram",
    "title": "Integrated process diagram.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Integrated process diagram.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/integrated-process-diagram.png",
    "group": "",
    "files": [
      {
        "title": "Integrated process diagram.png",
        "fileName": "Integrated process diagram.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/integrated-process-diagram.png",
        "source": ""
      }
    ]
  },
  {
    "id": "kanaleneiland-future",
    "title": "Kanaleneiland future.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Kanaleneiland future.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/kanaleneiland-future.png",
    "group": "",
    "files": [
      {
        "title": "Kanaleneiland future.png",
        "fileName": "Kanaleneiland future.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/kanaleneiland-future.png",
        "source": ""
      }
    ]
  },
  {
    "id": "kanaleneiland-today",
    "title": "Kanaleneiland today.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Kanaleneiland today.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/kanaleneiland-today.png",
    "group": "",
    "files": [
      {
        "title": "Kanaleneiland today.png",
        "fileName": "Kanaleneiland today.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/kanaleneiland-today.png",
        "source": ""
      }
    ]
  },
  {
    "id": "methodology-wheel-second-phase",
    "title": "Methodology wheel second phase.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Methodology wheel second phase.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methodology-wheel-second-phase.png",
    "group": "",
    "files": [
      {
        "title": "Methodology wheel second phase.png",
        "fileName": "Methodology wheel second phase.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methodology-wheel-second-phase.png",
        "source": ""
      }
    ]
  },
  {
    "id": "process-diagram",
    "title": "Process diagram.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Process diagram.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/process-diagram.png",
    "group": "",
    "files": [
      {
        "title": "Process diagram.png",
        "fileName": "Process diagram.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/process-diagram.png",
        "source": ""
      }
    ]
  },
  {
    "id": "promotion-who-indicators-table",
    "title": "Promotion WHO indicators table.jpg",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Promotion WHO indicators table.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/promotion-who-indicators-table.jpg",
    "group": "",
    "files": [
      {
        "title": "Promotion WHO indicators table.jpg",
        "fileName": "Promotion WHO indicators table.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/promotion-who-indicators-table.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "protection-who-indicators-table",
    "title": "Protection WHO indicators table.jpg",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Protection WHO indicators table.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/protection-who-indicators-table.jpg",
    "group": "",
    "files": [
      {
        "title": "Protection WHO indicators table.jpg",
        "fileName": "Protection WHO indicators table.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/protection-who-indicators-table.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "stakeholder-diagrams",
    "title": "Stakeholder Diagrams",
    "bucket": "Strategy",
    "description": "1 related files grouped from the framework table.",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Meso",
      "Author",
      "AI-assisted",
      "Milana",
      "Vera"
    ],
    "date": "",
    "source": "",
    "fileName": "Stakeholder diagram.svg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholder-diagram.svg",
    "group": "S_SD_G3",
    "files": [
      {
        "title": "Stakeholder diagram.svg",
        "fileName": "Stakeholder diagram.svg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholder-diagram.svg",
        "source": ""
      }
    ]
  },
  {
    "id": "strategy-examples",
    "title": "Strategy examples.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Public space",
      "Environment",
      "Diagram",
      "Meso",
      "Author",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental"
    ],
    "date": "",
    "source": "",
    "fileName": "Strategy examples.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/strategy-examples.png",
    "group": "",
    "files": [
      {
        "title": "Strategy examples.png",
        "fileName": "Strategy examples.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/strategy-examples.png",
        "source": ""
      }
    ]
  },
  {
    "id": "strategy-table-of-the-5-responses",
    "title": "Strategy table of the 5 responses.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Diagram",
      "Author",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Strategy table of the 5 responses.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/strategy-table-of-the-5-responses.png",
    "group": "",
    "files": [
      {
        "title": "Strategy table of the 5 responses.png",
        "fileName": "Strategy table of the 5 responses.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/strategy-table-of-the-5-responses.png",
        "source": ""
      }
    ]
  },
  {
    "id": "who-indicators-and-framework-principles",
    "title": "Who indicators and framework principles.png",
    "bucket": "Strategy",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Macro",
      "Author",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Who indicators and framework principles.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/who-indicators-and-framework-principles.png",
    "group": "",
    "files": [
      {
        "title": "Who indicators and framework principles.png",
        "fileName": "Who indicators and framework principles.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/who-indicators-and-framework-principles.png",
        "source": ""
      }
    ]
  },
  {
    "id": "active-route-and-responsive-mobility-system",
    "title": "Active Route and Responsive Mobility System",
    "bucket": "Design",
    "description": "5 related files grouped from the framework table.",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Environmental",
      "Promotion",
      "Image",
      "AI-assisted",
      "Lara",
      "Micro",
      "Mental",
      "Social",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Active Route axonometric design.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-route-axonometric-design.png",
    "group": "G5",
    "files": [
      {
        "title": "Active Route axonometric design.png",
        "fileName": "Active Route axonometric design.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-route-axonometric-design.png",
        "source": ""
      },
      {
        "title": "Active Route design.png",
        "fileName": "Active Route design.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-route-design.png",
        "source": ""
      },
      {
        "title": "Active route pushups example.png",
        "fileName": "Active route pushups example.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/active-route-pushups-example.png",
        "source": ""
      },
      {
        "title": "Responsive Mobility System street section.png",
        "fileName": "Responsive Mobility System street section.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/responsive-mobility-system-street-section.png",
        "source": ""
      },
      {
        "title": "Responsive Mobility System street section render.png",
        "fileName": "Responsive Mobility System street section render.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/responsive-mobility-system-street-section-render.png",
        "source": ""
      }
    ]
  },
  {
    "id": "adaptive-street-transformation",
    "title": "Adaptive Street Transformation",
    "bucket": "Design",
    "description": "2 related files grouped from the framework table.",
    "tags": [
      "Image",
      "Micro",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Protection",
      "Dataset",
      "Diagram",
      "Author",
      "Lara"
    ],
    "date": "",
    "source": "",
    "fileName": "Adaptive Street Transformation after render.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/adaptive-street-transformation-after-render.png",
    "group": "G1",
    "files": [
      {
        "title": "Adaptive Street Transformation after render.png",
        "fileName": "Adaptive Street Transformation after render.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/adaptive-street-transformation-after-render.png",
        "source": ""
      },
      {
        "title": "Adaptive Street Transformation street section.png",
        "fileName": "Adaptive Street Transformation street section.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/adaptive-street-transformation-street-section.png",
        "source": ""
      }
    ]
  },
  {
    "id": "axonometric-design",
    "title": "Axonometric design.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Social",
      "Environmental",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Axonometric design.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/axonometric-design.png",
    "group": "",
    "files": [
      {
        "title": "Axonometric design.png",
        "fileName": "Axonometric design.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/axonometric-design.png",
        "source": ""
      }
    ]
  },
  {
    "id": "axonometric-of-parking",
    "title": "Axonometric of parking.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Lara",
      "Niels",
      "Physical",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Axonometric of parking.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/axonometric-of-parking.png",
    "group": "",
    "files": [
      {
        "title": "Axonometric of parking.png",
        "fileName": "Axonometric of parking.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/axonometric-of-parking.png",
        "source": ""
      }
    ]
  },
  {
    "id": "buslane-axonometric-design",
    "title": "Buslane axonometric design.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Social",
      "Environmental",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Buslane axonometric design.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buslane-axonometric-design.png",
    "group": "",
    "files": [
      {
        "title": "Buslane axonometric design.png",
        "fileName": "Buslane axonometric design.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/buslane-axonometric-design.png",
        "source": ""
      }
    ]
  },
  {
    "id": "cas-individual-design",
    "title": "Cas Individual Design",
    "bucket": "Design",
    "description": "14 related files grouped from the framework table.",
    "tags": [
      "Public space",
      "Image",
      "Author",
      "AI-assisted",
      "Cas",
      "Environmental",
      "Protection",
      "Demographics",
      "Mobility",
      "Morphology",
      "Environment",
      "Presentation",
      "Land use",
      "Map",
      "Drawing",
      "Macro",
      "Historical development"
    ],
    "date": "",
    "source": "",
    "fileName": "Dynamic_murals.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/dynamic-murals.png",
    "group": "D_ID_C",
    "files": [
      {
        "title": "Dynamic_murals.png",
        "fileName": "Dynamic_murals.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/dynamic-murals.png",
        "source": ""
      },
      {
        "title": "Individuals_Conclusion_map.png",
        "fileName": "Individuals_Conclusion_map.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/individuals-conclusion-map.png",
        "source": ""
      },
      {
        "title": "pitch_individual_design_protection.pptx",
        "fileName": "pitch_individual_design_protection.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/pitch-individual-design-protection.pptx",
        "source": ""
      },
      {
        "title": "Projection_mapping.png",
        "fileName": "Projection_mapping.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/projection-mapping.png",
        "source": ""
      },
      {
        "title": "section_1_location_rooseveltlaan.png",
        "fileName": "section_1_location_rooseveltlaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-1-location-rooseveltlaan.png",
        "source": ""
      },
      {
        "title": "section_1_Rooseveltlaan.png",
        "fileName": "section_1_Rooseveltlaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-1-rooseveltlaan.png",
        "source": ""
      },
      {
        "title": "section_2_ Beneluxlaan.png",
        "fileName": "section_2_ Beneluxlaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-2-beneluxlaan.png",
        "source": ""
      },
      {
        "title": "section_2_location_Beneluxlaan.png",
        "fileName": "section_2_location_Beneluxlaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-2-location-beneluxlaan.png",
        "source": ""
      },
      {
        "title": "section_3.1_ Marshallaan.png",
        "fileName": "section_3.1_ Marshallaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-3-1-marshallaan.png",
        "source": ""
      },
      {
        "title": "section_3.2_Marshallaan.png",
        "fileName": "section_3.2_Marshallaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-3-2-marshallaan.png",
        "source": ""
      },
      {
        "title": "section_3_location_Marshallaan.png",
        "fileName": "section_3_location_Marshallaan.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/section-3-location-marshallaan.png",
        "source": ""
      },
      {
        "title": "visio_blue_green.png",
        "fileName": "visio_blue_green.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/visio-blue-green.png",
        "source": ""
      },
      {
        "title": "vision_history.png",
        "fileName": "vision_history.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/vision-history.png",
        "source": ""
      },
      {
        "title": "vision_road_hierarchy.png",
        "fileName": "vision_road_hierarchy.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/vision-road-hierarchy.png",
        "source": ""
      }
    ]
  },
  {
    "id": "community-nodes",
    "title": "Community Nodes",
    "bucket": "Design",
    "description": "3 related files grouped from the framework table.",
    "tags": [
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Raneem",
      "Social",
      "Promotion",
      "Facilitation",
      "Lara",
      "Diagram"
    ],
    "date": "",
    "source": "",
    "fileName": "Community Nodes render after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/community-nodes-render-after.png",
    "group": "G4",
    "files": [
      {
        "title": "Community Nodes render after.png",
        "fileName": "Community Nodes render after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/community-nodes-render-after.png",
        "source": ""
      },
      {
        "title": "Community Nodes render before.png",
        "fileName": "Community Nodes render before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/community-nodes-render-before.png",
        "source": ""
      },
      {
        "title": "Community Nodes street section.png",
        "fileName": "Community Nodes street section.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/community-nodes-street-section.png",
        "source": ""
      }
    ]
  },
  {
    "id": "crossing-bike-pedestrian-car-after-v1",
    "title": "Crossing Bike-Pedestrian-Car after V1.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Crossing Bike-Pedestrian-Car after V1.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-after-v1.png",
    "group": "",
    "files": [
      {
        "title": "Crossing Bike-Pedestrian-Car after V1.png",
        "fileName": "Crossing Bike-Pedestrian-Car after V1.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-after-v1.png",
        "source": ""
      }
    ]
  },
  {
    "id": "crossing-bike-pedestrian-car-after-v2",
    "title": "Crossing Bike-Pedestrian-Car after V2.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Crossing Bike-Pedestrian-Car after V2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-after-v2.png",
    "group": "",
    "files": [
      {
        "title": "Crossing Bike-Pedestrian-Car after V2.png",
        "fileName": "Crossing Bike-Pedestrian-Car after V2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-after-v2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "crossing-bike-pedestrian-car-before-v1",
    "title": "Crossing Bike-Pedestrian-Car before V1.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Crossing Bike-Pedestrian-Car before V1.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-before-v1.png",
    "group": "",
    "files": [
      {
        "title": "Crossing Bike-Pedestrian-Car before V1.png",
        "fileName": "Crossing Bike-Pedestrian-Car before V1.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-before-v1.png",
        "source": ""
      }
    ]
  },
  {
    "id": "crossing-bike-pedestrian-car-before-v2",
    "title": "Crossing Bike-Pedestrian-Car before V2.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Crossing Bike-Pedestrian-Car before V2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-before-v2.png",
    "group": "",
    "files": [
      {
        "title": "Crossing Bike-Pedestrian-Car before V2.png",
        "fileName": "Crossing Bike-Pedestrian-Car before V2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/crossing-bike-pedestrian-car-before-v2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "design-intervention-diagrams",
    "title": "Design Intervention Diagrams",
    "bucket": "Design",
    "description": "5 related files grouped from the framework table.",
    "tags": [
      "Mobility",
      "Public space",
      "Diagram",
      "Meso",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection",
      "Environment",
      "Land use",
      "Micro"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Prioritizing active mobility.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-prioritizing-active-mobility.png",
    "group": "D_DID_G3",
    "files": [
      {
        "title": "1. Prioritizing active mobility.png",
        "fileName": "1. Prioritizing active mobility.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-prioritizing-active-mobility.png",
        "source": ""
      },
      {
        "title": "2. Activating ecological network.png",
        "fileName": "2. Activating ecological network.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-activating-ecological-network.png",
        "source": ""
      },
      {
        "title": "3. Flexible third places.png",
        "fileName": "3. Flexible third places.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-flexible-third-places.png",
        "source": ""
      },
      {
        "title": "4. Health spine and islands.png",
        "fileName": "4. Health spine and islands.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/4-health-spine-and-islands.png",
        "source": ""
      },
      {
        "title": "5. WellWay health interface.png",
        "fileName": "5. WellWay health interface.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/5-wellway-health-interface.png",
        "source": ""
      }
    ]
  },
  {
    "id": "design-video",
    "title": "Design video.mp4",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Video",
      "Micro",
      "Author",
      "Niels",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Design video.mp4",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/design-video.mp4",
    "group": "",
    "files": [
      {
        "title": "Design video.mp4",
        "fileName": "Design video.mp4",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/design-video.mp4",
        "source": ""
      }
    ]
  },
  {
    "id": "exploded-rivm-health-layers",
    "title": "Exploded RIVM health layers.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Diagram",
      "Meso",
      "Author",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Exploded RIVM health layers.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/exploded-rivm-health-layers.png",
    "group": "",
    "files": [
      {
        "title": "Exploded RIVM health layers.png",
        "fileName": "Exploded RIVM health layers.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/exploded-rivm-health-layers.png",
        "source": ""
      }
    ]
  },
  {
    "id": "exploded-urban-layers",
    "title": "Exploded urban layers.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Diagram",
      "Meso",
      "Author",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Exploded urban layers.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/exploded-urban-layers.png",
    "group": "",
    "files": [
      {
        "title": "Exploded urban layers.png",
        "fileName": "Exploded urban layers.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/exploded-urban-layers.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-1-blank",
    "title": "Framework 1 blank.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 1 blank.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-1-blank.png",
    "group": "",
    "files": [
      {
        "title": "Framework 1 blank.png",
        "fileName": "Framework 1 blank.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-1-blank.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-11-street-types",
    "title": "Framework 11 street types.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 11 street types.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-11-street-types.png",
    "group": "",
    "files": [
      {
        "title": "Framework 11 street types.png",
        "fileName": "Framework 11 street types.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-11-street-types.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-3-outline",
    "title": "Framework 3 outline.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 3 outline.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-3-outline.png",
    "group": "",
    "files": [
      {
        "title": "Framework 3 outline.png",
        "fileName": "Framework 3 outline.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-3-outline.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-4-buildings-ke",
    "title": "Framework 4 buildings KE.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 4 buildings KE.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-4-buildings-ke.png",
    "group": "",
    "files": [
      {
        "title": "Framework 4 buildings KE.png",
        "fileName": "Framework 4 buildings KE.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-4-buildings-ke.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-5-roads",
    "title": "Framework 5 roads.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 5 roads.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-5-roads.png",
    "group": "",
    "files": [
      {
        "title": "Framework 5 roads.png",
        "fileName": "Framework 5 roads.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-5-roads.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-6-hierarchy",
    "title": "Framework 6 hierarchy.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 6 hierarchy.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-6-hierarchy.png",
    "group": "",
    "files": [
      {
        "title": "Framework 6 hierarchy.png",
        "fileName": "Framework 6 hierarchy.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-6-hierarchy.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-7-1-ov",
    "title": "Framework 7 (1) OV.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 7 (1) OV.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-7-1-ov.png",
    "group": "",
    "files": [
      {
        "title": "Framework 7 (1) OV.png",
        "fileName": "Framework 7 (1) OV.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-7-1-ov.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-7-2-ov-highlight",
    "title": "Framework 7 (2) OV Highlight.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 7 (2) OV Highlight.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-7-2-ov-highlight.png",
    "group": "",
    "files": [
      {
        "title": "Framework 7 (2) OV Highlight.png",
        "fileName": "Framework 7 (2) OV Highlight.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-7-2-ov-highlight.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-8-clustering",
    "title": "Framework 8 clustering.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 8 clustering.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-8-clustering.png",
    "group": "",
    "files": [
      {
        "title": "Framework 8 clustering.png",
        "fileName": "Framework 8 clustering.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-8-clustering.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-9-hubs",
    "title": "Framework 9 hubs.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework 9 hubs.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-9-hubs.png",
    "group": "",
    "files": [
      {
        "title": "Framework 9 hubs.png",
        "fileName": "Framework 9 hubs.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-9-hubs.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-exploded-axonometry-1",
    "title": "Framework Exploded Axonometry (1).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Exploded Axonometry (1).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-1.png",
    "group": "",
    "files": [
      {
        "title": "Framework Exploded Axonometry (1).png",
        "fileName": "Framework Exploded Axonometry (1).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-1.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-exploded-axonometry-2",
    "title": "Framework Exploded Axonometry (2).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Exploded Axonometry (2).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-2.png",
    "group": "",
    "files": [
      {
        "title": "Framework Exploded Axonometry (2).png",
        "fileName": "Framework Exploded Axonometry (2).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-exploded-axonometry-3",
    "title": "Framework Exploded Axonometry (3).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Exploded Axonometry (3).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-3.png",
    "group": "",
    "files": [
      {
        "title": "Framework Exploded Axonometry (3).png",
        "fileName": "Framework Exploded Axonometry (3).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-3.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-exploded-axonometry-4",
    "title": "Framework Exploded Axonometry (4).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Exploded Axonometry (4).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-4.png",
    "group": "",
    "files": [
      {
        "title": "Framework Exploded Axonometry (4).png",
        "fileName": "Framework Exploded Axonometry (4).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-exploded-axonometry-4.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-hilda-adjusted-1",
    "title": "Framework Hilda adjusted (1).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Social",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Hilda adjusted (1).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-1.png",
    "group": "",
    "files": [
      {
        "title": "Framework Hilda adjusted (1).png",
        "fileName": "Framework Hilda adjusted (1).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-1.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-hilda-adjusted-2",
    "title": "Framework Hilda adjusted (2).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Social",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Hilda adjusted (2).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-2.png",
    "group": "",
    "files": [
      {
        "title": "Framework Hilda adjusted (2).png",
        "fileName": "Framework Hilda adjusted (2).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-hilda-adjusted-3",
    "title": "Framework Hilda adjusted (3).png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Social",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Hilda adjusted (3).png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-3.png",
    "group": "",
    "files": [
      {
        "title": "Framework Hilda adjusted (3).png",
        "fileName": "Framework Hilda adjusted (3).png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-hilda-adjusted-3.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-tim-adjusted",
    "title": "Framework Tim adjusted.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Mental",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Tim adjusted.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-tim-adjusted.png",
    "group": "",
    "files": [
      {
        "title": "Framework Tim adjusted.png",
        "fileName": "Framework Tim adjusted.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-tim-adjusted.png",
        "source": ""
      }
    ]
  },
  {
    "id": "framework-tim-original",
    "title": "Framework Tim original.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Mental",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Framework Tim original.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-tim-original.png",
    "group": "",
    "files": [
      {
        "title": "Framework Tim original.png",
        "fileName": "Framework Tim original.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/framework-tim-original.png",
        "source": ""
      }
    ]
  },
  {
    "id": "future-healthy-cities-ai-generated-cover",
    "title": "Future healthy cities- AI generated cover.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Macro",
      "AI-assisted",
      "Tim",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Future healthy cities- AI generated cover.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/future-healthy-cities-ai-generated-cover.png",
    "group": "",
    "files": [
      {
        "title": "Future healthy cities- AI generated cover.png",
        "fileName": "Future healthy cities- AI generated cover.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/future-healthy-cities-ai-generated-cover.png",
        "source": ""
      }
    ]
  },
  {
    "id": "green-buffer-network",
    "title": "Green Buffer Network",
    "bucket": "Design",
    "description": "3 related files grouped from the framework table.",
    "tags": [
      "Diagram",
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Lara",
      "Physical",
      "Mental",
      "Environmental",
      "Protection",
      "Map",
      "Meso",
      "Raneem",
      "Niels"
    ],
    "date": "",
    "source": "",
    "fileName": "Green Buffer Network street section.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-buffer-network-street-section.png",
    "group": "G2",
    "files": [
      {
        "title": "Green Buffer Network street section.png",
        "fileName": "Green Buffer Network street section.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-buffer-network-street-section.png",
        "source": ""
      },
      {
        "title": "Green Neighborhood Axis axonometric design.jpg",
        "fileName": "Green Neighborhood Axis axonometric design.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-neighborhood-axis-axonometric-design.jpg",
        "source": ""
      },
      {
        "title": "Green Neighborhood Axis design.jpg",
        "fileName": "Green Neighborhood Axis design.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/green-neighborhood-axis-design.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "groundfloor-activation-locations-design",
    "title": "Groundfloor Activation Locations design.tif",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Social",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Groundfloor Activation Locations design.tif",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/groundfloor-activation-locations-design.tif",
    "group": "",
    "files": [
      {
        "title": "Groundfloor Activation Locations design.tif",
        "fileName": "Groundfloor Activation Locations design.tif",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/groundfloor-activation-locations-design.tif",
        "source": ""
      }
    ]
  },
  {
    "id": "health-islands-final-presentation",
    "title": "Health Islands - final presentation.pdf",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Presentation",
      "Meso",
      "Micro",
      "Author",
      "Cas",
      "Milana",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Health Islands - final presentation.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-islands-final-presentation.pdf",
    "group": "",
    "files": [
      {
        "title": "Health Islands - final presentation.pdf",
        "fileName": "Health Islands - final presentation.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-islands-final-presentation.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "healthier-main-traffic-corridors",
    "title": "Healthier Main Traffic Corridors",
    "bucket": "Design",
    "description": "2 related files grouped from the framework table.",
    "tags": [
      "Image",
      "Micro",
      "Author",
      "Lara",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Healthier Main Traffic Corridors street section.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthier-main-traffic-corridors-street-section.png",
    "group": "G3",
    "files": [
      {
        "title": "Healthier Main Traffic Corridors street section.png",
        "fileName": "Healthier Main Traffic Corridors street section.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthier-main-traffic-corridors-street-section.png",
        "source": ""
      },
      {
        "title": "Healthier Main Traffic Corridors street section render.png",
        "fileName": "Healthier Main Traffic Corridors street section render.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/healthier-main-traffic-corridors-street-section-render.png",
        "source": ""
      }
    ]
  },
  {
    "id": "impression-video",
    "title": "Impression video.mp4",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Video",
      "Author",
      "Hilda",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Impression video.mp4",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/impression-video.mp4",
    "group": "",
    "files": [
      {
        "title": "Impression video.mp4",
        "fileName": "Impression video.mp4",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/impression-video.mp4",
        "source": ""
      }
    ]
  },
  {
    "id": "integration",
    "title": "Integration.xlsx",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Description",
      "Meso",
      "Author",
      "Cas",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Integration.xlsx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/integration.xlsx",
    "group": "",
    "files": [
      {
        "title": "Integration.xlsx",
        "fileName": "Integration.xlsx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/integration.xlsx",
        "source": ""
      }
    ]
  },
  {
    "id": "methods-of-transfer-design",
    "title": "Methods Of Transfer design.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Methods Of Transfer design.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methods-of-transfer-design.png",
    "group": "",
    "files": [
      {
        "title": "Methods Of Transfer design.png",
        "fileName": "Methods Of Transfer design.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/methods-of-transfer-design.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-blue-corridor-before-07",
    "title": "MP2- BLUE CORRIDOR BEFORE-07.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- BLUE CORRIDOR BEFORE-07.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-blue-corridor-before-07.png",
    "group": "",
    "files": [
      {
        "title": "MP2- BLUE CORRIDOR BEFORE-07.png",
        "fileName": "MP2- BLUE CORRIDOR BEFORE-07.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-blue-corridor-before-07.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-technology-cool-mode",
    "title": "MP2- technology cool mode.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Micro",
      "AI-assisted",
      "Tim",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- technology cool mode.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-technology-cool-mode.png",
    "group": "",
    "files": [
      {
        "title": "MP2- technology cool mode.png",
        "fileName": "MP2- technology cool mode.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-technology-cool-mode.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-technology-hot-mode",
    "title": "MP2- technology hot mode.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Micro",
      "AI-assisted",
      "Tim",
      "Physical",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2- technology hot mode.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-technology-hot-mode.png",
    "group": "",
    "files": [
      {
        "title": "MP2- technology hot mode.png",
        "fileName": "MP2- technology hot mode.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-technology-hot-mode.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-blue-corridor-after-09",
    "title": "MP2-BLUE CORRIDOR AFTER-09.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-BLUE CORRIDOR AFTER-09.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-blue-corridor-after-09.png",
    "group": "",
    "files": [
      {
        "title": "MP2-BLUE CORRIDOR AFTER-09.png",
        "fileName": "MP2-BLUE CORRIDOR AFTER-09.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-blue-corridor-after-09.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-green-corridor-before-04",
    "title": "MP2-GREEN CORRIDOR BEFORE-04.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-GREEN CORRIDOR BEFORE-04.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-green-corridor-before-04.png",
    "group": "",
    "files": [
      {
        "title": "MP2-GREEN CORRIDOR BEFORE-04.png",
        "fileName": "MP2-GREEN CORRIDOR BEFORE-04.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-green-corridor-before-04.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mp2-urban-framework-final-03",
    "title": "MP2-URBAN FRAMEWORK FINAL-03.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Meso",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MP2-URBAN FRAMEWORK FINAL-03.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-urban-framework-final-03.png",
    "group": "",
    "files": [
      {
        "title": "MP2-URBAN FRAMEWORK FINAL-03.png",
        "fileName": "MP2-URBAN FRAMEWORK FINAL-03.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mp2-urban-framework-final-03.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-before-primary-01",
    "title": "MPU- before primary-01.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Tim",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- before primary-01.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-before-primary-01.png",
    "group": "",
    "files": [
      {
        "title": "MPU- before primary-01.png",
        "fileName": "MPU- before primary-01.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-before-primary-01.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-before-tertiary-01",
    "title": "MPU- before tertiary-01.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Tim",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- before tertiary-01.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-before-tertiary-01.png",
    "group": "",
    "files": [
      {
        "title": "MPU- before tertiary-01.png",
        "fileName": "MPU- before tertiary-01.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-before-tertiary-01.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-design-effects-table",
    "title": "MPU- design effects table.docx",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Dataset",
      "Micro",
      "Author",
      "Tim",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- design effects table.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-design-effects-table.docx",
    "group": "",
    "files": [
      {
        "title": "MPU- design effects table.docx",
        "fileName": "MPU- design effects table.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-design-effects-table.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-elevation-shaded-04",
    "title": "MPU- elevation shaded-04.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Tim",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- elevation shaded-04.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-elevation-shaded-04.png",
    "group": "",
    "files": [
      {
        "title": "MPU- elevation shaded-04.png",
        "fileName": "MPU- elevation shaded-04.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-elevation-shaded-04.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-elevation-sunny-05",
    "title": "MPU- elevation sunny-05.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Tim",
      "Physical"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- elevation sunny-05.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-elevation-sunny-05.png",
    "group": "",
    "files": [
      {
        "title": "MPU- elevation sunny-05.png",
        "fileName": "MPU- elevation sunny-05.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-elevation-sunny-05.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-individual-plan",
    "title": "MPU- individual plan.docx",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Description",
      "Meso",
      "Author",
      "Tim",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- individual plan.docx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-individual-plan.docx",
    "group": "",
    "files": [
      {
        "title": "MPU- individual plan.docx",
        "fileName": "MPU- individual plan.docx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-individual-plan.docx",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-tech-integration",
    "title": "MPU- tech integration.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Meso",
      "Author",
      "Tim",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU- tech integration.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-tech-integration.png",
    "group": "",
    "files": [
      {
        "title": "MPU- tech integration.png",
        "fileName": "MPU- tech integration.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-tech-integration.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-intersections-final-01",
    "title": "MPU-intersections final-01.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Tim",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU-intersections final-01.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-intersections-final-01.png",
    "group": "",
    "files": [
      {
        "title": "MPU-intersections final-01.png",
        "fileName": "MPU-intersections final-01.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-intersections-final-01.png",
        "source": ""
      }
    ]
  },
  {
    "id": "mpu-intersections-final-02",
    "title": "MPU-intersections final-02.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Tim",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "MPU-intersections final-02.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-intersections-final-02.png",
    "group": "",
    "files": [
      {
        "title": "MPU-intersections final-02.png",
        "fileName": "MPU-intersections final-02.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/mpu-intersections-final-02.png",
        "source": ""
      }
    ]
  },
  {
    "id": "parking-design",
    "title": "Parking design.jpg",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Parking design.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/parking-design.jpg",
    "group": "",
    "files": [
      {
        "title": "Parking design.jpg",
        "fileName": "Parking design.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/parking-design.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "promotion-vera",
    "title": "Promotion_Vera.pdf",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Public space",
      "Presentation",
      "Meso",
      "Micro",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Promotion_Vera.pdf",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/promotion-vera.pdf",
    "group": "",
    "files": [
      {
        "title": "Promotion_Vera.pdf",
        "fileName": "Promotion_Vera.pdf",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/promotion-vera.pdf",
        "source": ""
      }
    ]
  },
  {
    "id": "q4-week-4-individual-pitch-daniel",
    "title": "Q4 Week 4 - Individual Pitch Daniel.pptx",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Presentation",
      "Meso",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Q4 Week 4 - Individual Pitch Daniel.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q4-week-4-individual-pitch-daniel.pptx",
    "group": "",
    "files": [
      {
        "title": "Q4 Week 4 - Individual Pitch Daniel.pptx",
        "fileName": "Q4 Week 4 - Individual Pitch Daniel.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q4-week-4-individual-pitch-daniel.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "q4-week-4-individual-pitch-tim",
    "title": "Q4 Week 4 - Individual Pitch Tim.pptx",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Presentation",
      "Meso",
      "Micro",
      "Author",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Q4 Week 4 - Individual Pitch Tim.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q4-week-4-individual-pitch-tim.pptx",
    "group": "",
    "files": [
      {
        "title": "Q4 Week 4 - Individual Pitch Tim.pptx",
        "fileName": "Q4 Week 4 - Individual Pitch Tim.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q4-week-4-individual-pitch-tim.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "render-active-ground-floor-and-front-gardens-neighborhood",
    "title": "Render active ground floor and front gardens neighborhood.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Micro",
      "Author",
      "AI-assisted",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Render active ground floor and front gardens neighborhood.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/render-active-ground-floor-and-front-gardens-neighborhood.png",
    "group": "",
    "files": [
      {
        "title": "Render active ground floor and front gardens neighborhood.png",
        "fileName": "Render active ground floor and front gardens neighborhood.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/render-active-ground-floor-and-front-gardens-neighborhood.png",
        "source": ""
      }
    ]
  },
  {
    "id": "route-explanation-video",
    "title": "Route explanation video.mp4",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Video",
      "Micro",
      "Author",
      "AI-assisted",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Route explanation video.mp4",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/route-explanation-video.mp4",
    "group": "",
    "files": [
      {
        "title": "Route explanation video.mp4",
        "fileName": "Route explanation video.mp4",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/route-explanation-video.mp4",
        "source": ""
      }
    ]
  },
  {
    "id": "spine-language",
    "title": "Spine language.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Public space",
      "Image",
      "Meso",
      "Micro",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Spine language.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/spine-language.png",
    "group": "",
    "files": [
      {
        "title": "Spine language.png",
        "fileName": "Spine language.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/spine-language.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-bike-after",
    "title": "Street Sections Bike after.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Bike after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-bike-after.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Bike after.png",
        "fileName": "Street Sections Bike after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-bike-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-bike-before",
    "title": "Street Sections Bike before.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Bike before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-bike-before.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Bike before.png",
        "fileName": "Street Sections Bike before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-bike-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-car-after",
    "title": "Street Sections Car after.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Car after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-car-after.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Car after.png",
        "fileName": "Street Sections Car after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-car-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-car-before",
    "title": "Street Sections Car before.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Car before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-car-before.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Car before.png",
        "fileName": "Street Sections Car before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-car-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-foot-after",
    "title": "Street Sections Foot after.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Foot after.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-foot-after.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Foot after.png",
        "fileName": "Street Sections Foot after.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-foot-after.png",
        "source": ""
      }
    ]
  },
  {
    "id": "street-sections-foot-before",
    "title": "Street Sections Foot before.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Micro",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Street Sections Foot before.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-foot-before.png",
    "group": "",
    "files": [
      {
        "title": "Street Sections Foot before.png",
        "fileName": "Street Sections Foot before.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/street-sections-foot-before.png",
        "source": ""
      }
    ]
  },
  {
    "id": "sunny-day-in-kanaleneiland-park",
    "title": "Sunny day in Kanaleneiland park.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Image",
      "Macro",
      "AI-assisted",
      "Tim",
      "Physical",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Sunny day in Kanaleneiland park.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sunny-day-in-kanaleneiland-park.png",
    "group": "",
    "files": [
      {
        "title": "Sunny day in Kanaleneiland park.png",
        "fileName": "Sunny day in Kanaleneiland park.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/sunny-day-in-kanaleneiland-park.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-1-existing",
    "title": "Toolbox 1 Existing.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 1 Existing.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-1-existing.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 1 Existing.png",
        "fileName": "Toolbox 1 Existing.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-1-existing.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-1-existing-2",
    "title": "Toolbox 1 Existing.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 1 Existing.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-1-existing-2.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 1 Existing.png",
        "fileName": "Toolbox 1 Existing.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-1-existing-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-10-possibilities-wadi",
    "title": "Toolbox 10 Possibilities Wadi.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 10 Possibilities Wadi.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-10-possibilities-wadi.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 10 Possibilities Wadi.png",
        "fileName": "Toolbox 10 Possibilities Wadi.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-10-possibilities-wadi.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-2-new",
    "title": "Toolbox 2 New.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 2 New.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-new.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 2 New.png",
        "fileName": "Toolbox 2 New.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-new.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-2-new-2",
    "title": "Toolbox 2 New.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 2 New.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-new-2.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 2 New.png",
        "fileName": "Toolbox 2 New.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-new-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-2-3-combined",
    "title": "Toolbox 2&3 Combined.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 2&3 Combined.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-3-combined.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 2&3 Combined.png",
        "fileName": "Toolbox 2&3 Combined.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-2-3-combined.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-3-hubs",
    "title": "Toolbox 3 Hubs.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 3 Hubs.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-3-hubs.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 3 Hubs.png",
        "fileName": "Toolbox 3 Hubs.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-3-hubs.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-3-hubs-2",
    "title": "Toolbox 3 Hubs.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 3 Hubs.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-3-hubs-2.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 3 Hubs.png",
        "fileName": "Toolbox 3 Hubs.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-3-hubs-2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-4-diagram",
    "title": "Toolbox 4 Diagram.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 4 Diagram.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-4-diagram.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 4 Diagram.png",
        "fileName": "Toolbox 4 Diagram.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-4-diagram.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-4-pergola-v2",
    "title": "Toolbox 4 Pergola V2.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Environmental",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 4 Pergola V2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-4-pergola-v2.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 4 Pergola V2.png",
        "fileName": "Toolbox 4 Pergola V2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-4-pergola-v2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-5-gathering-spot-v2",
    "title": "Toolbox 5 Gathering Spot V2.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Physical",
      "Social",
      "Environmental",
      "Facilitation"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 5 Gathering Spot V2.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-5-gathering-spot-v2.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 5 Gathering Spot V2.png",
        "fileName": "Toolbox 5 Gathering Spot V2.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-5-gathering-spot-v2.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-5-possibilities-hub",
    "title": "Toolbox 5 Possibilities Hub.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 5 Possibilities Hub.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-5-possibilities-hub.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 5 Possibilities Hub.png",
        "fileName": "Toolbox 5 Possibilities Hub.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-5-possibilities-hub.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-6-possibilities-extension",
    "title": "Toolbox 6 Possibilities Extension.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 6 Possibilities Extension.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-6-possibilities-extension.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 6 Possibilities Extension.png",
        "fileName": "Toolbox 6 Possibilities Extension.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-6-possibilities-extension.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-7-possibilities-shed",
    "title": "Toolbox 7 Possibilities Shed.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 7 Possibilities Shed.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-7-possibilities-shed.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 7 Possibilities Shed.png",
        "fileName": "Toolbox 7 Possibilities Shed.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-7-possibilities-shed.png",
        "source": ""
      }
    ]
  },
  {
    "id": "toolbox-8-possibilities-sports",
    "title": "Toolbox 8 Possibilities Sports.png",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Drawing",
      "Meso",
      "Author",
      "Daniel",
      "Promotion"
    ],
    "date": "",
    "source": "",
    "fileName": "Toolbox 8 Possibilities Sports.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-8-possibilities-sports.png",
    "group": "",
    "files": [
      {
        "title": "Toolbox 8 Possibilities Sports.png",
        "fileName": "Toolbox 8 Possibilities Sports.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/toolbox-8-possibilities-sports.png",
        "source": ""
      }
    ]
  },
  {
    "id": "vision-map",
    "title": "Vision Map",
    "bucket": "Design",
    "description": "21 related files grouped from the framework table.",
    "tags": [
      "Map",
      "Meso",
      "Author",
      "Vera",
      "Mobility",
      "Public space",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection",
      "Morphology",
      "Micro",
      "Environment",
      "Land use"
    ],
    "date": "",
    "source": "",
    "fileName": "1. Current situation.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-current-situation.png",
    "group": "D_VM_G3",
    "files": [
      {
        "title": "1. Current situation.png",
        "fileName": "1. Current situation.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/1-current-situation.png",
        "source": ""
      },
      {
        "title": "2. Car entrance-exit streets.png",
        "fileName": "2. Car entrance-exit streets.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/2-car-entrance-exit-streets.png",
        "source": ""
      },
      {
        "title": "3. Bicycle-priority street.png",
        "fileName": "3. Bicycle-priority street.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/3-bicycle-priority-street.png",
        "source": ""
      },
      {
        "title": "4. Existing parking.png",
        "fileName": "4. Existing parking.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/4-existing-parking.png",
        "source": ""
      },
      {
        "title": "5. New corner densification.png",
        "fileName": "5. New corner densification.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/5-new-corner-densification.png",
        "source": ""
      },
      {
        "title": "6. Bike paths.png",
        "fileName": "6. Bike paths.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/6-bike-paths.png",
        "source": ""
      },
      {
        "title": "7. Green buffer.png",
        "fileName": "7. Green buffer.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/7-green-buffer.png",
        "source": ""
      },
      {
        "title": "8. Courtyards.png",
        "fileName": "8. Courtyards.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/8-courtyards.png",
        "source": ""
      },
      {
        "title": "9. Courtyard connections.png",
        "fileName": "9. Courtyard connections.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/9-courtyard-connections.png",
        "source": ""
      },
      {
        "title": "10. Ecological waterfront.png",
        "fileName": "10. Ecological waterfront.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/10-ecological-waterfront.png",
        "source": ""
      },
      {
        "title": "11. Ecological canal.png",
        "fileName": "11. Ecological canal.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/11-ecological-canal.png",
        "source": ""
      },
      {
        "title": "12. Wadis.png",
        "fileName": "12. Wadis.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/12-wadis.png",
        "source": ""
      },
      {
        "title": "13. Daily destinations.png",
        "fileName": "13. Daily destinations.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/13-daily-destinations.png",
        "source": ""
      },
      {
        "title": "14. Health spine.png",
        "fileName": "14. Health spine.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/14-health-spine.png",
        "source": ""
      },
      {
        "title": "15. Health islands.png",
        "fileName": "15. Health islands.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/15-health-islands.png",
        "source": ""
      },
      {
        "title": "16. Spine interventions.png",
        "fileName": "16. Spine interventions.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/16-spine-interventions.png",
        "source": ""
      },
      {
        "title": "16.1. Spine interventions text.png",
        "fileName": "16.1. Spine interventions text.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/16-1-spine-interventions-text.png",
        "source": ""
      },
      {
        "title": "17. Third places.png",
        "fileName": "17. Third places.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/17-third-places.png",
        "source": ""
      },
      {
        "title": "17.1. Third places text.png",
        "fileName": "17.1. Third places text.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/17-1-third-places-text.png",
        "source": ""
      },
      {
        "title": "18. Common rooms.png",
        "fileName": "18. Common rooms.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/18-common-rooms.png",
        "source": ""
      },
      {
        "title": "19. Environmental sensors.png",
        "fileName": "19. Environmental sensors.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/19-environmental-sensors.png",
        "source": ""
      }
    ]
  },
  {
    "id": "walkability-design",
    "title": "Walkability design.jpg",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Diagram",
      "Map",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Social",
      "Environmental",
      "Promotion",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Walkability design.jpg",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-design.jpg",
    "group": "",
    "files": [
      {
        "title": "Walkability design.jpg",
        "fileName": "Walkability design.jpg",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/walkability-design.jpg",
        "source": ""
      }
    ]
  },
  {
    "id": "wellway-app-recording",
    "title": "WellWay app recording.mp4",
    "bucket": "Design",
    "description": "",
    "tags": [
      "Mobility",
      "Land use",
      "Public space",
      "Environment",
      "Video",
      "Meso",
      "Micro",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "WellWay app recording.mp4",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wellway-app-recording.mp4",
    "group": "",
    "files": [
      {
        "title": "WellWay app recording.mp4",
        "fileName": "WellWay app recording.mp4",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/wellway-app-recording.mp4",
        "source": ""
      }
    ]
  },
  {
    "id": "wellway-health-interface",
    "title": "WellWay Health Interface",
    "bucket": "Design",
    "description": "2 related files grouped from the framework table.",
    "tags": [
      "Image",
      "Author",
      "AI-assisted",
      "Vera",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection",
      "Land use",
      "Public space",
      "Meso",
      "Micro"
    ],
    "date": "",
    "source": "",
    "fileName": "Health insights.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-insights.png",
    "group": "D_WWI_G3",
    "files": [
      {
        "title": "Health insights.png",
        "fileName": "Health insights.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/health-insights.png",
        "source": ""
      },
      {
        "title": "Public space games.png",
        "fileName": "Public space games.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/public-space-games.png",
        "source": ""
      }
    ]
  },
  {
    "id": "route-testing",
    "title": "Route testing.png",
    "bucket": "Evaluation",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Route testing.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/route-testing.png",
    "group": "",
    "files": [
      {
        "title": "Route testing.png",
        "fileName": "Route testing.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/route-testing.png",
        "source": ""
      }
    ]
  },
  {
    "id": "scenario-comparison",
    "title": "Scenario comparison.png",
    "bucket": "Evaluation",
    "description": "",
    "tags": [
      "Dataset",
      "Diagram",
      "Meso",
      "Author",
      "Raneem",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Scenario comparison.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/scenario-comparison.png",
    "group": "",
    "files": [
      {
        "title": "Scenario comparison.png",
        "fileName": "Scenario comparison.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/scenario-comparison.png",
        "source": ""
      }
    ]
  },
  {
    "id": "stakeholders-second-phase",
    "title": "Stakeholders second phase.png",
    "bucket": "Evaluation",
    "description": "",
    "tags": [
      "Diagram",
      "Macro",
      "Author",
      "AI-assisted",
      "Lara",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic",
      "Promotion",
      "Facilitation",
      "Protection"
    ],
    "date": "",
    "source": "",
    "fileName": "Stakeholders second phase.png",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholders-second-phase.png",
    "group": "",
    "files": [
      {
        "title": "Stakeholders second phase.png",
        "fileName": "Stakeholders second phase.png",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/stakeholders-second-phase.png",
        "source": ""
      }
    ]
  },
  {
    "id": "q3-week-4-phase-1-end-presentation",
    "title": "Q3 Week 4 - Phase 1 End Presentation.pptx",
    "bucket": "Presentations",
    "description": "",
    "tags": [
      "Presentation",
      "Author",
      "Hilda",
      "Tim",
      "Daniel",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Q3 Week 4 - Phase 1 End Presentation.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-4-phase-1-end-presentation.pptx",
    "group": "",
    "files": [
      {
        "title": "Q3 Week 4 - Phase 1 End Presentation.pptx",
        "fileName": "Q3 Week 4 - Phase 1 End Presentation.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-4-phase-1-end-presentation.pptx",
        "source": ""
      }
    ]
  },
  {
    "id": "q3-week-9-midterm-presentation-improved",
    "title": "Q3 Week 9 - Midterm Presentation improved.pptx",
    "bucket": "Presentations",
    "description": "",
    "tags": [
      "Presentation",
      "Author",
      "Hilda",
      "Tim",
      "Daniel",
      "Physical",
      "Mental",
      "Social",
      "Environmental",
      "Economic"
    ],
    "date": "",
    "source": "",
    "fileName": "Q3 Week 9 - Midterm Presentation improved.pptx",
    "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-9-midterm-presentation-improved.pptx",
    "group": "",
    "files": [
      {
        "title": "Q3 Week 9 - Midterm Presentation improved.pptx",
        "fileName": "Q3 Week 9 - Midterm Presentation improved.pptx",
        "fileUrl": "https://6a3e38ac43a42e0838a1cc11--urban-evidence-hub-fhc.netlify.app/evidence-files/q3-week-9-midterm-presentation-improved.pptx",
        "source": ""
      }
    ]
  }
];

const state = { view: "home", selectedBucket: null, includeTags: new Set(), excludeTags: new Set(), tagMode: "include", search: "", sort: "title", selectedId: null, fileOpen: false, fileZoom: 100, activeFileIndex: 0 };
const storedEvidence = JSON.parse(localStorage.getItem("ueh-prototype-evidence-v6") || "[]");
const groupSiteVisitFiles = (items) => {
  const groups = [
    {
      id: "daniel-2026-site-visit-photos",
      author: "Daniel",
      matches: (item) => item.tags?.includes("Daniel") && String(item.fileName || item.title || "").startsWith("2026"),
    },
    {
      id: "tim-site-visit-photos",
      author: "Tim",
      matches: (item) => item.tags?.includes("Tim") && /^image\d+\.jpe?g$/i.test(String(item.fileName || item.title || "")),
    },
  ];
  const groupedIds = new Set();
  const groupedItems = groups.flatMap((group) => {
    const siteVisitItems = items.filter(group.matches);
    if (!siteVisitItems.length) return [];
    siteVisitItems.forEach((item) => groupedIds.add(item.id));
    const files = siteVisitItems.flatMap((item) => filesForItemData(item)).sort((a, b) => String(a.fileName || a.title).localeCompare(String(b.fileName || b.title), undefined, { numeric: true, sensitivity: "base" }));
    const first = siteVisitItems[0];
    return [{
      ...first,
      id: group.id,
      title: "Site Visit Photos",
      description: "",
      fileName: files[0]?.fileName || "",
      fileUrl: files[0]?.fileUrl || "",
      group: `${group.author} site visit`,
      files,
    }];
  });
  return [...groupedItems, ...items.filter((item) => !groupedIds.has(item.id))];
};
const filesForItemData = (item) => item.files && item.files.length ? item.files : [{ title: item.title, fileName: item.fileName, fileUrl: item.fileUrl, source: item.source }];
let evidence = groupSiteVisitFiles([...examples, ...storedEvidence]);
const byId = (id) => document.getElementById(id);
const bucketMeta = (name) => buckets.find((bucket) => bucket.name === name) || { name, color: "#8897a7" };
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
const formatDate = (value) => {
  if (!value) return "";
  const trimmed = String(value).trim();
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(trimmed) ? `${trimmed}T12:00:00` : trimmed);
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(date);
};
const displayTitle = (item) => String(item.title || item.fileName || "Untitled evidence").replace(/\.[^.]+$/, "");
const stripExtension = (value) => String(value || "Attached file").replace(/\.[^.]+$/, "");
const filesFor = (item) => item.files && item.files.length ? item.files : [{ title: item.title, fileName: item.fileName, fileUrl: item.fileUrl, source: item.source }];
const activeFile = (item) => filesFor(item)[Math.min(state.activeFileIndex, filesFor(item).length - 1)] || filesFor(item)[0];
const displayFileName = (file) => stripExtension(file?.fileName || file?.title);
const visibleTags = (item) => [...derivedProjectGroups(item), ...item.tags.filter((tag) => !derivedProjectGroups(item).includes(tag))];
const itemHasTag = (item, tag) => item.tags.includes(tag) || (projectGroups[tag] || []).some((member) => item.tags.includes(member));
const derivedProjectGroups = (item) => Object.keys(projectGroups).filter((group) => itemHasTag(item, group));
const bucketOrder = new Map(buckets.map((bucket, index) => [bucket.name, index]));
const tagCategory = new Map(Object.entries(tagGroups).flatMap(([group, tags]) => tags.map((tag) => [tag, group])));
const tagsByCategory = (tags) => [...tags].reduce((groups, tag) => {
  const category = tagCategory.get(tag) || tag;
  if (!groups.has(category)) groups.set(category, []);
  groups.get(category).push(tag);
  return groups;
}, new Map());
const matchesIncludedTags = (item) => [...tagsByCategory(state.includeTags).values()].every((tags) => tags.some((tag) => itemHasTag(item, tag)));
const matchesExcludedTags = (item) => [...state.excludeTags].every((tag) => !itemHasTag(item, tag));
const compareByTitle = (a, b) => displayTitle(a).localeCompare(displayTitle(b), undefined, { numeric: true, sensitivity: "base" });
const compareByBucketOrder = (a, b) => (bucketOrder.get(a.bucket) ?? 999) - (bucketOrder.get(b.bucket) ?? 999) || compareByTitle(a, b);

function renderTabs() {
  byId("bucket-tabs").innerHTML = `<button class="bucket-tab home-tab" type="button" data-view="home" aria-pressed="${state.view === "home"}">Home</button><button class="bucket-tab" type="button" data-bucket="" aria-pressed="${state.view === "library" && !state.selectedBucket}">All evidence</button>${buckets.map(({ name, color }) => `<button class="bucket-tab bucket-tab-color" type="button" data-bucket="${escapeHtml(name)}" aria-pressed="${state.view === "library" && state.selectedBucket === name}" style="--bucket:${color};--bucket-text:${color}"><span class="filter-dot" style="background:${color}"></span>${escapeHtml(name)}</button>`).join("")}`;
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => { state.view = button.dataset.view; render(); }));
  document.querySelectorAll("[data-bucket]").forEach((button) => button.addEventListener("click", () => { state.view = "library"; state.selectedBucket = button.dataset.bucket || null; render(); }));
}

function renderFilters() {
  byId("tag-mode").innerHTML = `<button type="button" data-tag-mode="include" aria-pressed="${state.tagMode === "include"}">Include</button><button type="button" data-tag-mode="exclude" aria-pressed="${state.tagMode === "exclude"}">Exclude</button>`;
  byId("tag-filters").innerHTML = Object.entries(tagGroups).map(([group, tags]) => `<div class="tag-group"><h3>${escapeHtml(group)}</h3>${tags.map((tag) => { const selection = state.includeTags.has(tag) ? "include" : state.excludeTags.has(tag) ? "exclude" : ""; return `<button class="filter-option ${selection ? `is-${selection}` : ""}" type="button" data-tag="${escapeHtml(tag)}" aria-pressed="${Boolean(selection)}"><span class="filter-check">${selection === "exclude" ? "−" : "✓"}</span>${escapeHtml(tag)}</button>`; }).join("")}</div>`).join("");
  document.querySelectorAll("[data-tag-mode]").forEach((button) => button.addEventListener("click", () => { state.tagMode = button.dataset.tagMode; renderFilters(); }));
  document.querySelectorAll("[data-tag]").forEach((button) => button.addEventListener("click", () => toggleTag(button.dataset.tag)));
}

function filteredEvidence() {
  const query = state.search.trim().toLowerCase();
  return evidence.filter((item) => {
    const bucketMatch = !state.selectedBucket || item.bucket === state.selectedBucket;
    const includedTagsMatch = matchesIncludedTags(item);
    const excludedTagsMatch = matchesExcludedTags(item);
    const searchable = [item.title, displayTitle(item), item.fileName, item.description, item.bucket, ...filesFor(item).flatMap((file) => [file.title, file.fileName]), ...item.tags, ...derivedProjectGroups(item)].join(" ").toLowerCase();
    return bucketMatch && includedTagsMatch && excludedTagsMatch && (!query || searchable.includes(query));
  }).sort((a, b) => {
    if (state.sort === "newest") return (b.date || "").localeCompare(a.date || "") || compareByBucketOrder(a, b);
    if (state.sort === "bucket" || !state.selectedBucket) return compareByBucketOrder(a, b);
    return compareByTitle(a, b);
  });
}

function renderEvidence() {
  const results = filteredEvidence();
  const filterCount = Number(Boolean(state.selectedBucket)) + state.includeTags.size + state.excludeTags.size;
  byId("results-summary").textContent = `${results.length} ${results.length === 1 ? "piece" : "pieces"} of evidence${filterCount || state.search ? " match the current view" : " in the prototype library"}.`;
  const active = [...(state.selectedBucket ? [{ type: "bucket", value: state.selectedBucket }] : []), ...[...state.includeTags].map((value) => ({ type: "include", value })), ...[...state.excludeTags].map((value) => ({ type: "exclude", value })), ...(state.search ? [{ type: "search", value: `Search: ${state.search}` }] : [])];
  byId("active-filters").innerHTML = active.map(({ type, value }) => `<button type="button" class="filter-chip filter-chip-${type}" data-remove-type="${type}" data-remove="${escapeHtml(value)}">${escapeHtml(value)} <span aria-hidden="true">×</span></button>`).join("");
  document.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => { if (button.dataset.removeType === "bucket") state.selectedBucket = null; if (button.dataset.removeType === "include") state.includeTags.delete(button.dataset.remove); if (button.dataset.removeType === "exclude") state.excludeTags.delete(button.dataset.remove); if (button.dataset.removeType === "search") { state.search = ""; byId("search").value = ""; } render(); }));
  if (!results.length) { byId("evidence-list").innerHTML = `<div class="empty-state"><h2>No evidence matches yet</h2><p>Remove a filter, try a broader search, or add a new piece of evidence.</p></div>`; return; }
  const groups = new Map();
  results.forEach((item) => { if (!groups.has(item.bucket)) groups.set(item.bucket, []); groups.get(item.bucket).push(item); });
  byId("evidence-list").innerHTML = [...groups.entries()].map(([bucket, items]) => { const meta = bucketMeta(bucket); return `<section class="bucket-group"><h2 class="bucket-group-title"><span style="background:${meta.color}"></span>${escapeHtml(bucket)} <small>(${items.length})</small></h2>${items.map(cardHtml).join("")}</section>`; }).join("");
  document.querySelectorAll("[data-evidence-id]").forEach((button) => button.addEventListener("click", () => { state.selectedId = button.dataset.evidenceId; state.fileOpen = false; state.fileZoom = 100; state.activeFileIndex = 0; render(); }));
}

function cardHtml(item) {
  const meta = bucketMeta(item.bucket);
  const tags = visibleTags(item);
  const fileCount = filesFor(item).length;
  return `<article class="evidence-card" style="--bucket:${meta.color};--bucket-text:${meta.color}"><button class="card-main" type="button" data-evidence-id="${item.id}"><span class="card-bucket">${escapeHtml(item.bucket)}</span><h2>${escapeHtml(displayTitle(item))}</h2>${item.description ? `<p class="card-description">${escapeHtml(item.description)}</p>` : ""}<div class="card-tags">${fileCount > 1 ? `<span class="tag-pill file-count-pill">${fileCount} files</span>` : ""}${tags.slice(0, 5).map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("")}${tags.length > 5 ? `<span class="tag-pill">+${tags.length - 5}</span>` : ""}</div></button><div class="card-footer">${item.date ? `<span class="card-meta">${formatDate(item.date)}</span>` : ""}<span class="open-label">Open →</span></div></article>`;
}

function filePreviewHtml(item) {
  const file = activeFile(item);
  if (!file?.fileUrl) return "";
  const extension = (file.fileName || "").split(".").pop().toLowerCase();
  const url = escapeHtml(file.fileUrl);
  const name = escapeHtml(displayFileName(file));
  const zoom = Math.max(50, Math.min(250, state.fileZoom));
  if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(extension)) return `<div class="file-preview ${state.fileOpen ? "is-expanded" : ""}"><img src="${url}" alt="${name}" loading="lazy" style="width:${zoom}%;" /></div>`;
  if (extension === "pdf") return `<div class="file-preview file-preview-document ${state.fileOpen ? "is-expanded" : ""}"><iframe src="${url}#zoom=${zoom}" title="${name}"></iframe></div>`;
  return `<p class="file-preview-note">This file type opens in a new tab or downloads, depending on your browser.</p>`;
}

function fileNavigatorHtml(item) {
  const files = filesFor(item);
  const file = activeFile(item);
  if (!files.length) return "";
  const options = files.map((entry, index) => `<button type="button" class="file-step ${index === state.activeFileIndex ? "is-active" : ""}" data-file-index="${index}">${escapeHtml(displayFileName(entry))}</button>`).join("");
  return `<div class="file-navigator"><div class="file-nav-top"><button class="icon-button" type="button" id="previous-file" aria-label="Previous file" ${state.activeFileIndex === 0 ? "disabled" : ""}>‹</button><div><strong>${escapeHtml(displayFileName(file))}</strong><span>${state.activeFileIndex + 1} of ${files.length}</span></div><button class="icon-button" type="button" id="next-file" aria-label="Next file" ${state.activeFileIndex >= files.length - 1 ? "disabled" : ""}>›</button></div>${files.length > 1 ? `<div class="file-steps">${options}</div>` : ""}</div>`;
}

function updateViewerBounds() {
  const filterPanel = document.querySelector(".filter-panel");
  const workspace = document.querySelector(".workspace");
  const filterRight = filterPanel ? filterPanel.getBoundingClientRect().right : 260;
  const workspaceRight = workspace ? workspace.getBoundingClientRect().right : window.innerWidth;
  document.documentElement.style.setProperty("--viewer-left", `${Math.ceil(filterRight)}px`);
  document.documentElement.style.setProperty("--viewer-right", `${Math.max(0, Math.floor(window.innerWidth - workspaceRight))}px`);
}

function renderDetail() {
  const item = evidence.find((entry) => entry.id === state.selectedId);
  document.body.classList.toggle("file-view-open", Boolean(item && state.fileOpen));
  updateViewerBounds();
  byId("detail-empty").hidden = Boolean(item); byId("detail-content").hidden = !item; if (!item) return;
  const files = filesFor(item);
  if (state.activeFileIndex >= files.length) state.activeFileIndex = 0;
  const currentFile = activeFile(item);
  const meta = bucketMeta(item.bucket);
  const fileName = escapeHtml(displayFileName(currentFile));
  const file = currentFile?.fileUrl ? `<a class="file-link" href="${escapeHtml(currentFile.fileUrl)}" target="_blank" rel="noreferrer">Open in new tab<span>${fileName}</span></a>` : "No file attached yet";
  const fileControls = currentFile?.fileUrl ? `<div class="file-actions">${state.fileOpen ? "" : `<button class="primary-button" type="button" id="toggle-file-view">Open file</button>`}${state.fileOpen ? `<div class="zoom-controls" aria-label="Zoom controls"><button class="icon-button" type="button" id="zoom-out" aria-label="Zoom out">−</button><span>${state.fileZoom}%</span><button class="icon-button" type="button" id="zoom-in" aria-label="Zoom in">+</button></div>` : ""}</div>` : "";
  byId("detail-content").style.setProperty("--bucket", meta.color); byId("detail-content").style.setProperty("--bucket-text", meta.color); byId("detail-content").style.setProperty("--bucket-light", `${meta.color}22`);
  byId("detail-content").innerHTML = `<div class="detail-card"><div class="detail-topline"><span class="detail-bucket">${escapeHtml(item.bucket)}</span><button class="text-button" type="button" id="close-detail">Close</button></div><h2>${escapeHtml(displayTitle(item))}</h2>${item.description ? `<p class="detail-description">${escapeHtml(item.description)}</p>` : ""}<section class="detail-section file-section"><h3>${files.length > 1 ? "Files" : "File"}</h3>${fileNavigatorHtml(item)}${fileControls}${state.fileOpen ? filePreviewHtml(item) : ""}<div class="attachment-action">${file}</div></section><section class="detail-section"><h3>Assigned tags</h3><div class="detail-tags">${visibleTags(item).map((tag) => `<button type="button" class="detail-tag" data-detail-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}</div></section></div>`;
  byId("close-detail").addEventListener("click", () => { state.selectedId = null; state.fileOpen = false; state.activeFileIndex = 0; render(); });
  const toggleFileView = byId("toggle-file-view"); if (toggleFileView) toggleFileView.addEventListener("click", () => { state.fileOpen = !state.fileOpen; render(); });
  const previousFile = byId("previous-file"); if (previousFile) previousFile.addEventListener("click", () => { state.activeFileIndex = Math.max(0, state.activeFileIndex - 1); state.fileZoom = 100; renderDetail(); });
  const nextFile = byId("next-file"); if (nextFile) nextFile.addEventListener("click", () => { state.activeFileIndex = Math.min(files.length - 1, state.activeFileIndex + 1); state.fileZoom = 100; renderDetail(); });
  document.querySelectorAll("[data-file-index]").forEach((button) => button.addEventListener("click", () => { state.activeFileIndex = Number(button.dataset.fileIndex); state.fileZoom = 100; renderDetail(); }));
  const zoomOut = byId("zoom-out"); if (zoomOut) zoomOut.addEventListener("click", () => { state.fileZoom = Math.max(50, state.fileZoom - 25); renderDetail(); });
  const zoomIn = byId("zoom-in"); if (zoomIn) zoomIn.addEventListener("click", () => { state.fileZoom = Math.min(250, state.fileZoom + 25); renderDetail(); });
  document.querySelectorAll("[data-detail-tag]").forEach((button) => button.addEventListener("click", () => toggleTag(button.dataset.detailTag)));
}

function toggleTag(tag) { const activeSet = state.tagMode === "include" ? state.includeTags : state.excludeTags; const otherSet = state.tagMode === "include" ? state.excludeTags : state.includeTags; activeSet.has(tag) ? activeSet.delete(tag) : (activeSet.add(tag), otherSet.delete(tag)); render(); }
function render() { const isHome = state.view === "home"; document.body.classList.toggle("home-view-active", isHome); document.body.classList.toggle("file-view-open", Boolean(!isHome && state.fileOpen && state.selectedId)); byId("home-view").hidden = !isHome; byId("evidence-view").hidden = isHome; byId("detail-view").hidden = isHome; document.documentElement.style.setProperty("--active-bucket", state.selectedBucket && !isHome ? bucketMeta(state.selectedBucket).color : "#f6f8fb"); renderTabs(); renderFilters(); renderEvidence(); renderDetail(); }

function setupUpload() {
  const dialog = byId("upload-dialog"); byId("upload-bucket").innerHTML = `<option value="" disabled selected>Select a bucket</option>${buckets.map((bucket) => `<option value="${bucket.name}">${bucket.name}</option>`).join("")}`;
  byId("upload-tags").innerHTML = Object.entries(tagGroups).map(([group, tags]) => `<div><strong>${group}</strong>${tags.map((tag) => `<label class="upload-tag"><input type="checkbox" name="tags" value="${escapeHtml(tag)}" />${escapeHtml(tag)}</label>`).join("")}</div>`).join("");
  byId("open-upload").addEventListener("click", () => dialog.showModal()); ["close-upload", "cancel-upload"].forEach((id) => byId(id).addEventListener("click", () => dialog.close()));
  byId("upload-form").addEventListener("submit", (event) => { event.preventDefault(); const formData = new FormData(event.currentTarget); const title = String(formData.get("title") || "").trim(); if (!title) return; const attachment = formData.get("file"); const item = { id: `custom-${Date.now()}`, title, bucket: String(formData.get("bucket")), description: String(formData.get("description") || "").trim(), tags: formData.getAll("tags").map(String), source: String(formData.get("source") || "").trim(), date: String(formData.get("date") || ""), fileName: attachment instanceof File && attachment.name ? attachment.name : "" }; item.files = item.fileName ? [{ title: item.fileName, fileName: item.fileName, fileUrl: "", source: item.source }] : []; evidence.push(item); localStorage.setItem("ueh-prototype-evidence-v6", JSON.stringify(evidence.filter((entry) => entry.id.startsWith("custom-")))); event.currentTarget.reset(); dialog.close(); state.selectedId = item.id; render(); });
}

byId("search").addEventListener("input", (event) => { state.search = event.target.value; renderEvidence(); }); byId("sort-evidence").addEventListener("change", (event) => { state.sort = event.target.value; renderEvidence(); }); byId("clear-filters").addEventListener("click", () => { state.selectedBucket = null; state.includeTags.clear(); state.excludeTags.clear(); state.search = ""; byId("search").value = ""; render(); });
document.querySelectorAll("[data-project-group]").forEach((button) => button.addEventListener("click", () => { state.view = "library"; state.selectedBucket = null; state.includeTags.clear(); state.excludeTags.clear(); state.includeTags.add(button.dataset.projectGroup); render(); }));
window.addEventListener("resize", updateViewerBounds);
setupUpload(); render();