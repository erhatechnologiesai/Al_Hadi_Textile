import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LEADS_FILE = path.join(__dirname, '..', 'data', 'leads.json');

// Initialize local file if not exists
function getSavedLeads() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading leads file:", err);
  }
  return [];
}

function saveLeadsToFile(leads) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error("Error saving leads file:", err);
  }
}

let inquiries = getSavedLeads();

export const recordInquiry = async (req, res) => {
  try {
    const { productId, productName, category, gsm, customerDevice, quantity, notes } = req.body;

    const newInquiry = {
      id: `inq-${Date.now()}`,
      type: "whatsapp_click",
      productId: productId || "direct",
      productName: productName || "Direct Factory Inquiry",
      category: category || "General",
      gsm: gsm || null,
      customerDevice: customerDevice || (req.headers['user-agent'] ? 'web' : 'unknown'),
      quantity: quantity || 1,
      notes: notes || "",
      ipAddress: req.ip || req.headers['x-forwarded-for'] || 'local',
      createdAt: new Date().toISOString()
    };

    inquiries.unshift(newInquiry);
    saveLeadsToFile(inquiries);

    return res.status(201).json({
      success: true,
      message: "WhatsApp Lead recorded successfully",
      data: newInquiry
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getInquiries = async (req, res) => {
  try {
    return res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const submitRfq = async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      country,
      productName,
      targetGsm,
      targetQuantity,
      customRequirements
    } = req.body;

    if (!companyName || !email) {
      return res.status(400).json({
        success: false,
        message: "Company Name and Email are required"
      });
    }

    const newRfq = {
      id: `rfq-${Date.now()}`,
      type: "b2b_rfq_quote",
      companyName,
      contactPerson: contactPerson || "",
      email,
      phone: phone || "",
      country: country || "International",
      productName: productName || "Custom Production Run",
      targetGsm: targetGsm || "Standard Spec",
      targetQuantity: targetQuantity || "1000 pcs",
      customRequirements: customRequirements || "",
      createdAt: new Date().toISOString(),
      status: "New Lead - Pending Mill Review"
    };

    inquiries.unshift(newRfq);
    saveLeadsToFile(inquiries);

    return res.status(201).json({
      success: true,
      message: "Bulk RFQ inquiry submitted successfully. Our export desk will review within 24 hours.",
      data: newRfq
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
