// ---------------------------------------------------------------------------
// PC COMPONENT CATALOG
// ---------------------------------------------------------------------------
// This is the single source of truth for "Build Your PC" pricing & specs.
// Prices are in INR and are STARTING ESTIMATES — update them here whenever
// your supplier prices change. See README.md for guidance on keeping this
// in sync (manual updates vs. a future admin panel / distributor API).
// ---------------------------------------------------------------------------

export const CATEGORIES = [
  { id: 'cpu', label: 'Processor (CPU)', icon: 'Cpu', blurb: 'The brain of the build — sets your performance ceiling.' },
  { id: 'motherboard', label: 'Motherboard', icon: 'CircuitBoard', blurb: 'Connects every component; choose one that matches your CPU socket.' },
  { id: 'gpu', label: 'Graphics Card (GPU)', icon: 'MonitorSmartphone', blurb: 'Drives gaming, rendering & editing performance.' },
  { id: 'ram', label: 'Memory (RAM)', icon: 'MemoryStick', blurb: 'More & faster RAM keeps multitasking smooth.' },
  { id: 'storage', label: 'Storage', icon: 'HardDrive', blurb: 'NVMe SSDs for speed, HDDs for bulk storage.' },
  { id: 'psu', label: 'Power Supply (PSU)', icon: 'Plug', blurb: 'Clean, stable power — never a place to cut corners.' },
  { id: 'case', label: 'Cabinet / Case', icon: 'Box', blurb: 'Airflow, aesthetics and room to grow.' },
  { id: 'cooling', label: 'Cooling', icon: 'Fan', blurb: 'Keep thermals in check for sustained performance.' },
]

export const COMPONENTS = [
  // ---------------- CPU ----------------
  { id: 'cpu-i5-14400f', category: 'cpu', brand: 'Intel', name: 'Core i5-14400F', price: 16999,
    description: '10-core / 16-thread mainstream chip with strong single-core speed.',
    bestFor: 'Best for: 1080p/1440p gaming builds & everyday productivity',
    specs: { Cores: '10 (6P+4E)', Threads: '16', 'Base Clock': '2.5 GHz', Socket: 'LGA1700', TDP: '65W' } },
  { id: 'cpu-r5-7600', category: 'cpu', brand: 'AMD', name: 'Ryzen 5 7600', price: 18999,
    description: 'Zen 4 efficiency with excellent gaming performance per rupee.',
    bestFor: 'Best for: Balanced gaming + streaming rigs',
    specs: { Cores: '6', Threads: '12', 'Base Clock': '3.8 GHz', Socket: 'AM5', TDP: '65W' } },
  { id: 'cpu-i7-14700k', category: 'cpu', brand: 'Intel', name: 'Core i7-14700K', price: 34999,
    description: 'High core-count flagship for gaming, streaming and heavy multitasking.',
    bestFor: 'Best for: High-refresh gaming & content creation',
    specs: { Cores: '20 (8P+12E)', Threads: '28', 'Base Clock': '3.4 GHz', Socket: 'LGA1700', TDP: '125W' } },

  // ---------------- Motherboard ----------------
  { id: 'mobo-b760m', category: 'motherboard', brand: 'MSI', name: 'PRO B760M-A WiFi', price: 12499,
    description: 'Reliable micro-ATX board with WiFi 6 and solid VRMs for i5/i7 builds.',
    bestFor: 'Best for: Intel 12th/13th/14th Gen builds',
    specs: { Socket: 'LGA1700', 'Form Factor': 'Micro-ATX', RAM: 'DDR5, up to 128GB', WiFi: 'Yes' } },
  { id: 'mobo-b650', category: 'motherboard', brand: 'Gigabyte', name: 'B650 Gaming X AX', price: 16999,
    description: 'Future-proof AM5 board with PCIe 4.0 and strong power delivery.',
    bestFor: 'Best for: Ryzen 7000/9000 series builds',
    specs: { Socket: 'AM5', 'Form Factor': 'ATX', RAM: 'DDR5, up to 128GB', WiFi: 'Yes' } },
  { id: 'mobo-z790', category: 'motherboard', brand: 'ASUS', name: 'TUF Gaming Z790-Plus', price: 26999,
    description: 'Overclocking-ready board built for flagship Intel CPUs.',
    bestFor: 'Best for: Unlocked "K" series CPU builds',
    specs: { Socket: 'LGA1700', 'Form Factor': 'ATX', RAM: 'DDR5, up to 128GB', WiFi: 'Yes' } },

  // ---------------- GPU ----------------
  { id: 'gpu-rtx4060', category: 'gpu', brand: 'NVIDIA (MSI)', name: 'GeForce RTX 4060 8GB', price: 28999,
    description: 'Efficient 1080p/1440p performer with DLSS 3 frame generation.',
    bestFor: 'Best for: 1080p–1440p gaming, ray tracing on a budget',
    specs: { VRAM: '8GB GDDR6', 'Boost Clock': '2460 MHz', 'Power Connector': '1x 8-pin', TDP: '115W' } },
  { id: 'gpu-rtx4070super', category: 'gpu', brand: 'NVIDIA (ASUS)', name: 'GeForce RTX 4070 SUPER 12GB', price: 59999,
    description: 'Strong 1440p/4K performer for gaming and creative workloads.',
    bestFor: 'Best for: High-refresh 1440p & entry 4K gaming',
    specs: { VRAM: '12GB GDDR6X', 'Boost Clock': '2475 MHz', 'Power Connector': '1x 16-pin', TDP: '220W' } },
  { id: 'gpu-rx7600', category: 'gpu', brand: 'AMD (Sapphire)', name: 'Radeon RX 7600 8GB', price: 24999,
    description: 'Great value 1080p card with efficient power draw.',
    bestFor: 'Best for: Budget-focused 1080p gaming builds',
    specs: { VRAM: '8GB GDDR6', 'Boost Clock': '2655 MHz', 'Power Connector': '1x 8-pin', TDP: '165W' } },

  // ---------------- RAM ----------------
  { id: 'ram-16gb-ddr5', category: 'ram', brand: 'Corsair', name: 'Vengeance 16GB (1x16GB) DDR5 5600MHz', price: 4499,
    description: 'Entry-level DDR5 kit for smooth day-to-day and light gaming.',
    bestFor: 'Best for: Budget & office builds',
    specs: { Capacity: '16GB', Type: 'DDR5', Speed: '5600MHz', Kit: 'Single stick' } },
  { id: 'ram-32gb-ddr5', category: 'ram', brand: 'Corsair', name: 'Vengeance 32GB (2x16GB) DDR5 6000MHz', price: 9999,
    description: 'Dual-channel kit that\u2019s the sweet spot for modern gaming rigs.',
    bestFor: 'Best for: Gaming & content creation',
    specs: { Capacity: '32GB', Type: 'DDR5', Speed: '6000MHz', Kit: '2x16GB' } },
  { id: 'ram-64gb-ddr5', category: 'ram', brand: 'G.Skill', name: 'Trident Z5 64GB (2x32GB) DDR5 6000MHz', price: 21999,
    description: 'High-capacity kit for heavy multitasking, editing and 3D work.',
    bestFor: 'Best for: Workstation & video editing builds',
    specs: { Capacity: '64GB', Type: 'DDR5', Speed: '6000MHz', Kit: '2x32GB' } },

  // ---------------- Storage ----------------
  { id: 'ssd-500gb-nvme', category: 'storage', brand: 'WD', name: 'Blue SN580 500GB NVMe SSD', price: 3499,
    description: 'Fast, reliable boot drive for OS and everyday apps.',
    bestFor: 'Best for: OS drive on budget builds',
    specs: { Capacity: '500GB', Interface: 'NVMe PCIe 4.0', 'Read Speed': 'Up to 4150 MB/s' } },
  { id: 'ssd-1tb-nvme', category: 'storage', brand: 'Samsung', name: '980 PRO 1TB NVMe SSD', price: 7999,
    description: 'High-speed primary drive for gaming and creative workloads.',
    bestFor: 'Best for: Primary drive on gaming/creator builds',
    specs: { Capacity: '1TB', Interface: 'NVMe PCIe 4.0', 'Read Speed': 'Up to 7000 MB/s' } },
  { id: 'hdd-2tb', category: 'storage', brand: 'Seagate', name: 'Barracuda 2TB HDD', price: 4499,
    description: 'Affordable bulk storage for media libraries and backups.',
    bestFor: 'Best for: Secondary bulk storage',
    specs: { Capacity: '2TB', Interface: 'SATA III', RPM: '7200' } },

  // ---------------- PSU ----------------
  { id: 'psu-550w', category: 'psu', brand: 'Cooler Master', name: 'MWE 550 Bronze V2', price: 4499,
    description: '80+ Bronze certified supply for budget and mid-range builds.',
    bestFor: 'Best for: Entry & mid-range gaming builds',
    specs: { Wattage: '550W', Certification: '80+ Bronze', Modular: 'No' } },
  { id: 'psu-750w-gold', category: 'psu', brand: 'Corsair', name: 'RM750e 80+ Gold', price: 8999,
    description: 'Fully modular, quiet, and efficient — ideal for higher-end GPUs.',
    bestFor: 'Best for: RTX 4070/4070 SUPER class builds',
    specs: { Wattage: '750W', Certification: '80+ Gold', Modular: 'Fully' } },
  { id: 'psu-1000w-gold', category: 'psu', brand: 'MSI', name: 'MAG A1000G 80+ Gold', price: 13999,
    description: 'Headroom for flagship GPUs and future upgrades.',
    bestFor: 'Best for: High-end / flagship GPU builds',
    specs: { Wattage: '1000W', Certification: '80+ Gold', Modular: 'Fully' } },

  // ---------------- Case ----------------
  { id: 'case-nzxt-h5', category: 'case', brand: 'NZXT', name: 'H5 Flow', price: 6999,
    description: 'Clean minimal design with excellent front-panel airflow.',
    bestFor: 'Best for: Balanced airflow + aesthetics',
    specs: { 'Form Factor': 'Mid Tower', 'Side Panel': 'Tempered Glass', 'Fans Included': '2' } },
  { id: 'case-lian-li-lancool', category: 'case', brand: 'Lian Li', name: 'Lancool 215', price: 8499,
    description: 'Mesh-front airflow beast with room for large coolers and GPUs.',
    bestFor: 'Best for: High-airflow performance builds',
    specs: { 'Form Factor': 'Mid Tower', 'Side Panel': 'Tempered Glass', 'Fans Included': '3' } },
  { id: 'case-corsair-4000d', category: 'case', brand: 'Corsair', name: '4000D Airflow', price: 7999,
    description: 'One of the most popular cases for its build quality & cable management.',
    bestFor: 'Best for: First-time builders wanting an easy build',
    specs: { 'Form Factor': 'Mid Tower', 'Side Panel': 'Tempered Glass', 'Fans Included': '2' } },

  // ---------------- Cooling ----------------
  { id: 'cool-air-hyper212', category: 'cooling', brand: 'Cooler Master', name: 'Hyper 212 Black Edition', price: 2999,
    description: 'The tried-and-tested air cooler for reliable, quiet thermals.',
    bestFor: 'Best for: Budget & mid-range CPUs',
    specs: { Type: 'Air Tower', 'Fan Size': '120mm', 'RGB': 'No' } },
  { id: 'cool-aio-240', category: 'cooling', brand: 'Corsair', name: 'iCUE H100i 240mm AIO', price: 10999,
    description: 'Liquid cooling with strong thermal headroom for high-TDP CPUs.',
    bestFor: 'Best for: i7/Ryzen 7+ overclocked builds',
    specs: { Type: 'AIO Liquid', 'Radiator Size': '240mm', RGB: 'Yes' } },
  { id: 'cool-aio-360', category: 'cooling', brand: 'NZXT', name: 'Kraken 360 RGB AIO', price: 16999,
    description: 'Premium 360mm liquid cooling for flagship, high-TDP CPUs.',
    bestFor: 'Best for: i9/Ryzen 9 flagship builds',
    specs: { Type: 'AIO Liquid', 'Radiator Size': '360mm', RGB: 'Yes' } },
]

export const getComponentsByCategory = (categoryId) =>
  COMPONENTS.filter((c) => c.category === categoryId)
