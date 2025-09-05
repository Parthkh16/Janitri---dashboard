import { tokens } from "../theme";
export const mockDeviceInventory = [
  {
    id: 1,
    type: "ECG Machine",
    facility: "Apollo Hospital",
    status: "Online",
    battery: "85%",
    lastService: "2025-08-10",
    amcStatus: "Active",
  },
  {
    id: 2,
    type: "Ventilator",
    facility: "Fortis Jaipur",
    status: "Maintenance",
    battery: "N/A",
    lastService: "2025-07-20",
    amcStatus: "Expiring",
  },
  {
    id: 3,
    type: "Ultrasound Scanner",
    facility: "Max Healthcare",
    status: "Online",
    battery: "60%",
    lastService: "2025-06-15",
    amcStatus: "Active",
  },
  {
    id: 4,
    type: "Defibrillator",
    facility: "AIIMS Delhi",
    status: "Offline",
    battery: "20%",
    lastService: "2025-05-03",
    amcStatus: "Expired",
  },
  {
    id: 5,
    type: "Infusion Pump",
    facility: "Narayana Health",
    status: "Online",
    battery: "90%",
    lastService: "2025-08-01",
    amcStatus: "Active",
  },
  {
    id: 6,
    type: "Patient Monitor",
    facility: "Lilavati Hospital",
    status: "Online",
    battery: "75%",
    lastService: "2025-07-28",
    amcStatus: "Active",
  },
  {
    id: 7,
    type: "Dialysis Machine",
    facility: "Kokilaben Hospital",
    status: "Maintenance",
    battery: "N/A",
    lastService: "2025-07-10",
    amcStatus: "Expiring",
  },
  {
    id: 8,
    type: "Anesthesia Machine",
    facility: "Jaslok Mumbai",
    status: "Online",
    battery: "N/A",
    lastService: "2025-06-22",
    amcStatus: "Active",
  },
  {
    id: 9,
    type: "X-Ray Unit",
    facility: "CMC Vellore",
    status: "Offline",
    battery: "N/A",
    lastService: "2025-04-18",
    amcStatus: "Expired",
  },
  {
    id: 10,
    type: "MRI Scanner",
    facility: "Manipal Bangalore",
    status: "Online",
    battery: "N/A",
    lastService: "2025-08-05",
    amcStatus: "Active",
  },
];

export const mockProducts = [
  {
    id: 1,
    name: "ECG Machine",
    category: "Diagnostic",
    model: "ECG-X200",
    price: 150000,
    stock: 12,
    status: "In Stock",
    facility: "Apollo Hospital",
    image: "https://via.placeholder.com/80x80?text=ECG",   // sample image
  },
  {
    id: 2,
    name: "Ventilator",
    category: "Life Support",
    model: "VNT-500",
    price: 450000,
    stock: 5,
    status: "Low Stock",
    facility: "Fortis Jaipur",
    image: "https://via.placeholder.com/80x80?text=Ventilator",
  },
  {
    id: 3,
    name: "Infusion Pump",
    category: "Monitoring",
    model: "INF-100",
    price: 75000,
    stock: 20,
    status: "In Stock",
    facility: "Medanta Delhi",
    image: "https://via.placeholder.com/80x80?text=Pump",
  },
  {
    id: 4,
    name: "Defibrillator",
    category: "Emergency",
    model: "DFB-900",
    price: 200000,
    stock: 0,
    status: "Out of Stock",
    facility: "AIIMS Jaipur",
    image: "",
  },
];


export const mockDataTeam = [
  {
    id: 1,
    name: "Dr. Rajesh Mehta",
    email: "rajesh.mehta@medtech.com",
    age: 48,
    phone: "(987)654-3210",
    access: "admin",
  },
  {
    id: 2,
    name: "Nurse Priya Singh",
    email: "priya.singh@hospital.in",
    age: 36,
    phone: "(876)543-2109",
    access: "manager",
  },
  {
    id: 3,
    name: "Technician Arvind Kumar",
    email: "arvind.tech@medcare.in",
    age: 41,
    phone: "(765)432-1098",
    access: "user",
  },
  {
    id: 4,
    name: "Dr. Sneha Reddy",
    email: "sneha.reddy@apollo.com",
    age: 39,
    phone: "(654)321-0987",
    access: "admin",
  },
  {
    id: 5,
    name: "Biomedical Engineer Leo Fernandes",
    email: "leo.fernandes@medeng.in",
    age: 33,
    phone: "(543)210-9876",
    access: "user",
  },
  {
    id: 6,
    name: "Service Lead Meera Patil",
    email: "meera.patil@amcservice.in",
    age: 45,
    phone: "(432)109-8765",
    access: "manager",
  },
  {
    id: 7,
    name: "Field Executive Vikram Joshi",
    email: "vikram.joshi@fieldsvc.in",
    age: 38,
    phone: "(321)098-7654",
    access: "user",
  },
  {
    id: 8,
    name: "QA Analyst Anjali Nair",
    email: "anjali.nair@quality.in",
    age: 35,
    phone: "(210)987-6543",
    access: "user",
  },
  {
    id: 9,
    name: "Support Head Karan Malhotra",
    email: "karan.malhotra@support.in",
    age: 50,
    phone: "(109)876-5432",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Dr. Rajesh Mehta",
    email: "rajesh.mehta@medtech.com",
    age: 48,
    phone: "(987)654-3210",
    address: "45 Park Lane, Bandra West, Mumbai",
    city: "Mumbai",
    zipCode: "400050",
    registrarId: 9876543,
  },
  {
    id: 2,
    name: "Nurse Priya Singh",
    email: "priya.singh@hospital.in",
    age: 36,
    phone: "(876)543-2109",
    address: "12 MG Road, Bangalore",
    city: "Bangalore",
    zipCode: "560001",
    registrarId: 8765432,
  },
  {
    id: 3,
    name: "Technician Arvind Kumar",
    email: "arvind.tech@medcare.in",
    age: 41,
    phone: "(765)432-1098",
    address: "78 Vikas Nagar, Delhi",
    city: "Delhi",
    zipCode: "110001",
    registrarId: 7654321,
  },
  {
    id: 4,
    name: "Dr. Sneha Reddy",
    email: "sneha.reddy@apollo.com",
    age: 39,
    phone: "(654)321-0987",
    address: "34 Jubilee Hills, Hyderabad",
    city: "Hyderabad",
    zipCode: "500033",
    registrarId: 6543210,
  },
  {
    id: 5,
    name: "Biomedical Engineer Leo Fernandes",
    email: "leo.fernandes@medeng.in",
    age: 33,
    phone: "(543)210-9876",
    address: "90 Electronic City, Bangalore",
    city: "Bangalore",
    zipCode: "560100",
    registrarId: 5432109,
  },
  {
    id: 6,
    name: "Service Lead Meera Patil",
    email: "meera.patil@amcservice.in",
    age: 45,
    phone: "(432)109-8765",
    address: "23 Sahakar Nagar, Pune",
    city: "Pune",
    zipCode: "411009",
    registrarId: 4321098,
  },
  {
    id: 7,
    name: "Field Executive Vikram Joshi",
    email: "vikram.joshi@fieldsvc.in",
    age: 38,
    phone: "(321)098-7654",
    address: "56 Seawoods, Navi Mumbai",
    city: "Navi Mumbai",
    zipCode: "400706",
    registrarId: 3210987,
  },
  {
    id: 8,
    name: "QA Analyst Anjali Nair",
    email: "anjali.nair@quality.in",
    age: 35,
    phone: "(210)987-6543",
    address: "89 Koramangala, Bangalore",
    city: "Bangalore",
    zipCode: "560095",
    registrarId: 2109876,
  },
  {
    id: 9,
    name: "Support Head Karan Malhotra",
    email: "karan.malhotra@support.in",
    age: 50,
    phone: "(109)876-5432",
    address: "12 Connaught Place, New Delhi",
    city: "Delhi",
    zipCode: "110001",
    registrarId: 1098765,
  },
  {
    id: 10,
    name: "Manager Ritu Sharma",
    email: "ritu.sharma@medcorp.in",
    age: 44,
    phone: "(987)654-3210",
    address: "45 Lajpat Nagar, New Delhi",
    city: "Delhi",
    zipCode: "110024",
    registrarId: 9876540,
  },
  {
    id: 11,
    name: "Engineer Sanjay Patel",
    email: "sanjay.patel@device.in",
    age: 37,
    phone: "(876)543-2109",
    address: "34 SG Highway, Ahmedabad",
    city: "Ahmedabad",
    zipCode: "380006",
    registrarId: 8765430,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Apollo Hospital",
    email: "billing@apollo.com",
    cost: "1250.00",
    phone: "(11)2345-6789",
    date: "2025-01-15",
  },
  {
    id: 2,
    name: "Fortis Jaipur",
    email: "accounts@fortis.com",
    cost: "899.99",
    phone: "(141)278-4567",
    date: "2025-02-03",
  },
  {
    id: 3,
    name: "Max Healthcare",
    email: "invoice@max.in",
    cost: "1500.50",
    phone: "(11)4321-0987",
    date: "2025-01-28",
  },
  {
    id: 4,
    name: "AIIMS Delhi",
    email: "payables@aiims.edu",
    cost: "0.00",
    phone: "(11)2658-8900",
    date: "2025-01-10",
  },
  {
    id: 5,
    name: "Narayana Health",
    email: "finance@narayana.in",
    cost: "750.25",
    phone: "(80)2339-4567",
    date: "2025-02-10",
  },
  {
    id: 6,
    name: "Lilavati Hospital",
    email: "billing@lilavatihosp.com",
    cost: "1100.75",
    phone: "(22)2650-1234",
    date: "2025-02-05",
  },
  {
    id: 7,
    name: "Kokilaben Hospital",
    email: "accounts@kokilaben.com",
    cost: "2000.00",
    phone: "(22)3020-6789",
    date: "2025-01-20",
  },
  {
    id: 8,
    name: "Jaslok Mumbai",
    email: "finance@jaslokhosp.com",
    cost: "950.40",
    phone: "(22)2356-7890",
    date: "2025-01-25",
  },
];

export const mockTransactions = [
  {
    txId: "MTX001A",
    user: "medtech_admin",
    date: "2025-01-15",
    cost: "1250.00",
  },
  {
    txId: "MTX002B",
    user: "fortis_svc",
    date: "2025-02-03",
    cost: "899.99",
  },
  {
    txId: "MTX003C",
    user: "max_billing",
    date: "2025-01-28",
    cost: "1500.50",
  },
  {
    txId: "MTX004D",
    user: "aiims_gov",
    date: "2025-01-10",
    cost: "0.00",
  },
  {
    txId: "MTX005E",
    user: "narayana_finance",
    date: "2025-02-10",
    cost: "750.25",
  },
  {
    txId: "MTX006F",
    user: "lilavati_pay",
    date: "2025-02-05",
    cost: "1100.75",
  },
  {
    txId: "MTX007G",
    user: "kokilaben_corp",
    date: "2025-01-20",
    cost: "2000.00",
  },
  {
    txId: "MTX008H",
    user: "jaslok_mumbai",
    date: "2025-01-25",
    cost: "950.40",
  },
];

// src/data/mockData.js

export const mockBarData = [
  {
    country: "Jan",
    "ECG Machine": 55,
    Ventilator: 23,
    "Infusion Pump": 84,
    Defibrillator: 19,
    "SpO2 meters": 65,
    others: 32,
  },
  {
    country: "Feb",
    "ECG Machine": 62,
    Ventilator: 31,
    "Infusion Pump": 78,
    Defibrillator: 24,
    "SpO2 meters": 70,
    others: 41,
  },
  {
    country: "Mar",
    "ECG Machine": 70,
    Ventilator: 42,
    "Infusion Pump": 90,
    Defibrillator: 30,
    "SpO2 meters": 82,
    others: 48,
  },
  {
    country: "Apr",
    "ECG Machine": 78,
    Ventilator: 55,
    "Infusion Pump": 98,
    Defibrillator: 38,
    "SpO2 meters": 90,
    others: 52,
  },
  {
    country: "May",
    "ECG Machine": 85,
    Ventilator: 63,
    "Infusion Pump": 105,
    Defibrillator: 42,
    "SpO2 meters": 102,
    others: 60,
  },
  {
    country: "Jun",
    "ECG Machine": 92,
    Ventilator: 70,
    "Infusion Pump": 110,
    Defibrillator: 48,
    "SpO2 meters": 115,
    others: 68,
  },
];

export const mockPieData = [
  {
    id: "ECG Machine",
    label: "ECG Machine",
    value: 25,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Ventilator",
    label: "Ventilator",
    value: 15,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "Infusion Pump",
    label: "Infusion Pump",
    value: 20,
    color: "hsl(45, 70%, 50%)",
  },
  {
    id: "Defibrillator",
    label: "Defibrillator",
    value: 10,
    color: "hsl(0, 70%, 50%)",
  },
  {
    id: "SpO2 meters",
    label: "SpO2 meters",
    value: 18,
    color: "hsl(280, 70%, 50%)",
  },
  {
    id: "Others",
    label: "Others",
    value: 12,
    color: "hsl(330, 70%, 50%)",
  },
];


export const mockLineData = [
  {
    id: "service_calls",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "Jan", y: 98 },
      { x: "Feb", y: 112 },
      { x: "Mar", y: 89 },
      { x: "Apr", y: 120 },
      { x: "May", y: 105 },
      { x: "Jun", y: 130 },
      { x: "Jul", y: 145 },
      { x: "Aug", y: 160 },
      { x: "Sep", y: 135 },
      { x: "Oct", y: 140 },
      { x: "Nov", y: 155 },
      { x: "Dec", y: 170 },
    ],
  },
  {
    id: "revenue",
    color: tokens("dark").blueAccent[300],
    data: [
      { x: "Jan", y: 80 },
      { x: "Feb", y: 90 },
      { x: "Mar", y: 100 },
      { x: "Apr", y: 125 },
      { x: "May", y: 130 },
      { x: "Jun", y: 150 },
      { x: "Jul", y: 170 },
      { x: "Aug", y: 190 },
      { x: "Sep", y: 180 },
      { x: "Oct", y: 195 },
      { x: "Nov", y: 210 },
      { x: "Dec", y: 230 },
    ],
  },
  {
    id: "devices_online",
    color: tokens("dark").redAccent[200],
    data: [
      { x: "Jan", y: 380 },
      { x: "Feb", y: 390 },
      { x: "Mar", y: 400 },
      { x: "Apr", y: 405 },
      { x: "May", y: 410 },
      { x: "Jun", y: 415 },
      { x: "Jul", y: 418 },
      { x: "Aug", y: 420 },
      { x: "Sep", y: 422 },
      { x: "Oct", y: 425 },
      { x: "Nov", y: 428 },
      { x: "Dec", y: 430 },
    ],
  },
];

export const mockGeographyData = [
  { id: "AFG", value: 520600 }, // Afghanistan
  { id: "AGO", value: 949905 }, // Angola
  { id: "ALB", value: 329910 }, // Albania
  { id: "ARE", value: 675484 }, // United Arab Emirates
  { id: "ARG", value: 432239 }, // Argentina
  { id: "ARM", value: 288305 }, // Armenia
  { id: "AUS", value: 1524823 }, // Australia
  { id: "AUT", value: 132148 }, // Austria
  { id: "AZE", value: 412908 }, // Azerbaijan
  { id: "BDI", value: 252834 }, // Burundi
  { id: "BEL", value: 383944 }, // Belgium
  { id: "BEN", value: 440315 }, // Benin
  { id: "BFA", value: 343752 }, // Burkina Faso
  { id: "BGD", value: 901802 }, // Bangladesh
  { id: "BGR", value: 415464 }, // Bulgaria
  { id: "BHS", value: 170982 }, // Bahamas
  { id: "BIH", value: 209905 }, // Bosnia and Herzegovina
  { id: "BLR", value: 403624 }, // Belarus
  { id: "BLZ", value: 192836 }, // Belize
  { id: "BOL", value: 253274 }, // Bolivia
  { id: "BRA", value: 195289 }, // Brazil
  { id: "BTN", value: 408845 }, // Bhutan
  { id: "BWA", value: 445381 }, // Botswana
  { id: "CAN", value: 932800 }, // Canada
  { id: "CHE", value: 612235 }, // Switzerland
  { id: "CHL", value: 728655 }, // Chile
  { id: "CHN", value: 1439324 }, // China
  { id: "CIV", value: 580483 }, // Ivory Coast
  { id: "CMR", value: 431043 }, // Cameroon
  { id: "COD", value: 612124 }, // Congo
  { id: "COG", value: 162774 }, // Congo Brazzaville
  { id: "COL", value: 818896 }, // Colombia
  { id: "CRI", value: 271125 }, // Costa Rica
  { id: "CUB", value: 375476 }, // Cuba
  { id: "CYP", value: 153223 }, // Cyprus
  { id: "CZE", value: 657892 }, // Czech Republic
  { id: "DEU", value: 1324823 }, // Germany
  { id: "DJI", value: 240197 }, // Djibouti
  { id: "DNK", value: 289241 }, // Denmark
  { id: "DOM", value: 392230 }, // Dominican Republic
  { id: "DZA", value: 760393 }, // Algeria
  { id: "ECU", value: 430817 }, // Ecuador
  { id: "EGY", value: 832899 }, // Egypt
  { id: "ESP", value: 917654 }, // Spain
  { id: "EST", value: 193654 }, // Estonia
  { id: "ETH", value: 725903 }, // Ethiopia
  { id: "FIN", value: 410235 }, // Finland
  { id: "FRA", value: 1220395 }, // France
  { id: "GAB", value: 182483 }, // Gabon
  { id: "GBR", value: 1524821 }, // United Kingdom
  { id: "GEO", value: 234829 }, // Georgia
  { id: "GHA", value: 543903 }, // Ghana
  { id: "GIN", value: 321034 }, // Guinea
  { id: "GMB", value: 172389 }, // Gambia
  { id: "GNB", value: 128392 }, // Guinea-Bissau
  { id: "GNQ", value: 198374 }, // Equatorial Guinea
  { id: "GRC", value: 475892 }, // Greece
  { id: "GTM", value: 408392 }, // Guatemala
  { id: "GUY", value: 183920 }, // Guyana
  { id: "HND", value: 290382 }, // Honduras
  { id: "HRV", value: 298374 }, // Croatia
  { id: "HTI", value: 183743 }, // Haiti
  { id: "HUN", value: 408392 }, // Hungary
  { id: "IDN", value: 1324823 }, // Indonesia
  { id: "IND", value: 1380004 }, // India
  { id: "IRN", value: 839929 }, // Iran
  { id: "IRQ", value: 402918 }, // Iraq
  { id: "ISL", value: 123903 }, // Iceland
  { id: "ISR", value: 485920 }, // Israel
  { id: "ITA", value: 1204832 }, // Italy
  { id: "JAM", value: 239048 }, // Jamaica
  { id: "JOR", value: 382910 }, // Jordan
  { id: "JPN", value: 1264764 }, // Japan
  { id: "KAZ", value: 187384 }, // Kazakhstan
  { id: "KEN", value: 538034 }, // Kenya
];


// src/data/mockData.js

export const mockInstallations = [
  {
    id: 1,
    deviceName: 'MRI Scanner Model X1',
    facility: 'City General Hospital',
    installationDate: '2024-03-15',
    installedBy: 'John Doe',
    trainingStatus: 'Done',
    trainingNotes: 'Full training completed for radiology team.',
    photos: [
      '/images/install/mri1_1.jpg',
      '/images/install/mri1_2.jpg',
    ],
  },
  {
    id: 2,
    deviceName: 'Ultrasound Pro 2000',
    facility: 'St. Mary Clinic',
    installationDate: '2024-04-10',
    installedBy: 'Alice Smith',
    trainingStatus: 'Pending',
    trainingNotes: '',
    photos: [],
  },
];

export const mockServiceVisits = [
  {
    id: 1,
    deviceName: 'MRI Scanner Model X1',
    facility: 'City General Hospital',
    serviceDate: '2024-05-05',
    serviceType: 'Preventive',
    engineerName: 'Robert Kim',
    notes: 'Calibration and software update performed.',
    attachments: ['/reports/mri_preventive_05.pdf'],
  },
  {
    id: 2,
    deviceName: 'Ventilator V5',
    facility: 'Central ICU Center',
    serviceDate: '2024-05-12',
    serviceType: 'Breakdown',
    engineerName: 'Linda Wu',
    notes: 'Replaced pressure sensor. Device back online.',
    attachments: ['/images/service/ventilator_fix.jpg'],
  },
];

export const mockContracts = [
  {
    id: 1,
    deviceName: 'MRI Scanner Model X1',
    facility: 'City General Hospital',
    contractType: 'AMC',
    startDate: '2024-01-01',
    expiryDate: '2025-01-01',
    status: 'Active',
    cost: 12000,
  },
  {
    id: 2,
    deviceName: 'Dialysis Machine D3',
    facility: 'Nephro Care Center',
    contractType: 'CMC',
    startDate: '2023-06-01',
    expiryDate: '2024-06-01',
    status: 'Expiring',
    cost: 8500,
  },
  {
    id: 3,
    deviceName: 'Infusion Pump P9',
    facility: 'St. Mary Clinic',
    contractType: 'AMC',
    startDate: '2022-03-01',
    expiryDate: '2023-03-01',
    status: 'Expired',
    cost: 3200,
  },
];

export const mockAlerts = [
  {
    id: 1,
    deviceName: 'MRI Scanner Model X1',
    facility: 'City General Hospital',
    alertType: 'Warning',
    date: '2024-05-18',
    reportedBy: 'Tech Admin',
    description: 'Unusual vibration noise during scan.',
    photo: '/images/alerts/mri_vibration.jpg',
  },
  {
    id: 2,
    deviceName: 'Ventilator V5',
    facility: 'Central ICU Center',
    alertType: 'Service Due',
    date: '2024-06-01',
    reportedBy: 'Nurse Johnson',
    description: 'Scheduled preventive maintenance due.',
    photo: null,
  },
];