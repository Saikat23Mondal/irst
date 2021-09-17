const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Cabinet
  const cabinet_titles = [
    "Ant Esports ICE-120AG Mid Tower Computer Case I Gaming Cabinet Supports ATX, Micro-ATX, Mini-ITX Motherboard with 1 x 120 mm Rear Fan Preinstalled - Black",
    "Ant Esports ICE-130AG Mid Tower Computer Case I Gaming Cabinet Supports ATX, Micro-ATX, Mini-ITX Motherboard with Transparent Side Panel 1 x 120 mm Rear Fan Preinstalled - Black",
    "Ant Esports ICE-130AG Mid Tower Computer Case I Gaming Cabinet Supports ATX, Micro-ATX, Mini-ITX Motherboard with Transparent Side Panel 1 x 120 mm Rear Fan Preinstalled - Black",
    "DEEPCOOL MATREXX 55 MESH ADD-RGB 4F Mid-Tower Gaming Cabinet/Computer Case with 4 ARGB Fans Pre-Install | Support Mini-ITX/Micro-ATX/ATX/E-ATX (DP-ATX-MATREXX55-MESH-AR-4F)",
  ];
  const cabinet_imgs = [
    "https://m.media-amazon.com/images/I/81D3ZC42l2L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61GodxYLinL._SL1080_.jpg",
    "https://m.media-amazon.com/images/I/61Is9PG4ChL._SL1000_.jpg",
    "https://m.media-amazon.com/images/I/61CSx8SOBXL._SL1000_.jpg",
  ];

  //--------------------Graphics card
  const graphics_card_titles = [
    "ASUS Dual RTX 2060 Overclocked 6G VR Ready Gaming Graphics Card - Turing Architecture (Dual RTX 2060-O6G)",
    "GIGABYTE Nvidia AORUS GeForce RTX™ 3060 Ti Master 8GB GDDR6 Graphics Card (GV-N306TAORUS M-8GD)",
    "MSI GeForce RTX 3070 SUPRIM X 8G I 8GB GDDR6 256-bit Gaming Graphic Card",
    "MSI GeForce RTX 3080 Ti Gaming X Trio 12G 12GB GDDR6X 384-bit Gaming Graphic Card",
    "ZOTAC Gaming GEFORCE RTX 3090 Trinity 24GB GDDR6X Graphic Card",
    "ZOTAC GeForce GTX 1660 Super Twin Fan 6GB GDDR6 192-bit Super Compact Gaming Graphics Card (ZT-T16620F-10L)",
  ];

  const graphics_card_imgs = [
    "https://m.media-amazon.com/images/I/91+wlRs1ZNL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71jBmCjSyXL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71jLWcGheDL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81kf3+5l2LS._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81WJkD5nENL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71AAVqtFfvL._SL1355_.jpg",
  ];

  //--------------------Monitor
  const monitor_titles = [
    "Acer Nitro 23.8 inch Full HD 1920 x 1080-0.5 MS Response Time - 165 Hz Refresh Rate IPS Gaming Monitor with AMD Radeon Free SYNC Technology -2 X HDMI 1 X Display Port",
    "Acer Nitro VG280K 28 inch UHD 3840 X 2160 Resolution Gaming Monitor (IPS Panel, FreeSync, 60Hz, 4MS, HDR 10, DP, HDMI, Black)",
    "Gigabyte M27F 27'' 144Hz 1080P First KVM Gaming Monitor, 1920 x 1080 IPS Display, 1ms (MPRT) Response Time, 95% DCI-P3, FreeSync Premium",
    "LG Ultragear 27'' 240Hz, 1ms, G-Sync Compatible, HDR 10, IPS Display Gaming Monitor, Height Adjust, Pivot Stand, Display Port, HDMI Port - 27GN750",
    "Samsung 24 inch (60.4 cm) IPS, Bezel Less,75 Hz Flat, Flicker Free LED Monitor-LF24T350FHWXXL (Dark Blue Gray)",
    "Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL",
  ];

  const monitor_imgs = [
    "https://m.media-amazon.com/images/I/819Mb29VvhL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91oMp4DRZGL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61tyPur2m3L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71VHmNBWJQL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81TMvlacizL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/8182-cB+tUL._SL1500_.jpg",
  ];

  //--------------------Psu
  const psu_titles = [
    "ASUS ROG Strix 750 Fully Modular 80 Plus Gold 750W ATX Power Supply with 0dB Axial Tech Fan and 10 Year Warranty",
    "ASUS ROG Thor 850 Certified 850W Fully-Modular RGB Power Supply with LiveDash OLED Panel",
    "Cooler Master MWE 450 Bronze V2 230v, 80 Plus Bronze Certified, Non-Modular Power Supply (Black)",
    "Corsair CV550, CV Series, 80 Plus Bronze Certified, 550 Watt Non-Modular Power Supply - Black",
    "Corsair RM1000x 1000 W 80+ Gold Certified Modular Power Supply Unit - Black",
  ];
  const psu_imgs = [
    "https://m.media-amazon.com/images/I/81GgwLqahaL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71Z5nDFMVNL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/810FP1fdX5L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61YjM7KYFpL._SL1200_.jpg",
    "https://m.media-amazon.com/images/I/61td4BczAPL._SL1000_.jpg",
  ];

  //--------------------Processor

  const processor_titles = [
    "AMD 5000 Series Ryzen 7 5800X Desktop Processor 8 cores 16 Threads 36 MB Cache 3.8 GHz Upto 4.7 GHz AM4 Socket 500 Series Chipset (100-100000063WOF)",
    "Intel Core i5-11400 Desktop Processor 6 Cores up to 4.4 GHz LGA1200 (Intel 500 Series & Select 400 Series Chipset) 65W",
    "Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked LGA1200 (Intel 500 Series & Select 400 Series Chipset) 125W",
    "Intel Core i3-10100F 10th Generation LGA1200 Desktop Processor 4 Cores 8 Threads up to 4.30GHz 6MB Cache",
    "AMD 5000 Series Ryzen 5 5600X Desktop Processor 6 cores 12 Threads 35 MB Cache 3.7 GHz Upto 4.6 GHz AM4 Socket 500 Series Chipset (100-100000065BOX)",
    "AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24 Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series chipset (100-100000061WOF)",
  ];
  const processor_imgs = [
    "https://m.media-amazon.com/images/I/61DYLoyNRWL._SL1384_.jpg",
    "https://m.media-amazon.com/images/I/71NxQR9o2mL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71Q+5LC8svL._SL1500_.jpg",
    "https://cdn.shopify.com/s/files/1/1780/7915/products/01_04e9029e-fdc4-4198-9cf9-0e72eb538916_980x980.jpg?v=1625657019",
    "https://m.media-amazon.com/images/I/61vGQNUEsGL._SL1384_.jpg",
    "https://m.media-amazon.com/images/I/616VM20+AzL._SL1384_.jpg",
  ];

  //-----------------------Ram
  const ram_titles = [
    "G.SKILL Trident Z Neo 32GB (2 * 16GB) DDR4 3600MHz CL18-22-22-42 1.35V Desktop Memory RAM - F4-3600C18D-32GTZN",
    "Corsair Vengeance LPX 8GB (1x8GB) DDR4 3200MHZ C16 Desktop RAM (Black)",
    "XPG ADATA GAMMIX D30 DDR4 8GB (1x8GB) 3200MHz U-DIMM Desktop Memory -AX4U320038G16A-SR30",
    "DOMINATOR PLATINUM RGB 16GB (2 x 8GB) DDR4 DRAM 3000MHz C15 Memory Kit",
  ];
  const ram_imgs = [
    "https://m.media-amazon.com/images/I/61eWHqJJX2L._SL1000_.jpg",
    "https://m.media-amazon.com/images/I/51djYbSJLfL._SL1024_.jpg",
    "https://m.media-amazon.com/images/I/81lTPWJ+QZL._SL1500_.jpg",
    "https://www.corsair.com/medias/sys_master/images/images/hc9/h69/9180683665438/-CMT16GX4M2C3000C15-Gallery-DOMINATOR-PLAT-RGB-01.png",
  ];

  //-----------------Storage

  const storage_titles = [
    "Western Digital WD Green 240 GB 2.5 inch (6.3 cm) SATA III Internal Solid State Drive (WDS240G2G0A)",
    "Samsung 970 EVO Plus 500GB PCIe NVMe M.2 (2280) Internal Solid State Drive (SSD) (MZ-V7S500)",
    "Western Digital WD SN550 500GB NVMe Internal SSD - 2400MB/s R, 1750MB/s W, (WDS500G2B0C, Blue)",
  ];
  const storage_imgs = [
    "https://m.media-amazon.com/images/I/81K5bro0W8L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/818Z+0s3ZXL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81ncmhjXkpS._SL1500_.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(cabinet_titles, cabinet_imgs, "Cabinet");
  await seedProducts(graphics_card_titles, graphics_card_imgs, "Graphics Card");
  await seedProducts(monitor_titles, monitor_imgs, "Monitor");
  await seedProducts(psu_titles, psu_imgs, "PSU");
  await seedProducts(processor_titles, processor_imgs, "Processor");
  await seedProducts(ram_titles, ram_imgs, "Ram");
  await seedProducts(storage_titles, storage_imgs, "Storage");
  await closeDB();
}

seedDB();
