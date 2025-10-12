import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendDemoRequestEmail, testEmailConnection } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email connection on startup
  await testEmailConnection();

  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const { name, email, company, role, useCase } = req.body;

      // Validate required fields
      if (!name || !email || !company || !role || !useCase) {
        return res.status(400).json({ 
          error: "All fields are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Please enter a valid email address" 
        });
      }

      // Send email
      await sendDemoRequestEmail({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        role: role.trim(),
        useCase: useCase.trim()
      });

      res.status(200).json({ 
        success: true, 
        message: "Demo request submitted successfully" 
      });
    } catch (error) {
      console.error("Demo request error:", error);
      res.status(500).json({ 
        error: "Failed to submit demo request. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
