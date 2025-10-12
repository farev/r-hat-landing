import nodemailer from 'nodemailer';

// Email configuration - you'll need to replace these with your actual email details
const EMAIL_CONFIG = {
  // Replace with your email service provider settings
  // For Gmail, you can use:
  service: 'gmail',
  auth: {
    user: 'fabiareor@gmail.com', // Replace with your email
    pass: 'kuur rupp aqhv twwc'     // Replace with your app password (not regular password)
  }
};

// Replace with your personal email where you want to receive demo requests
const RECIPIENT_EMAIL = 'farevalo6@gatech.edu';

const transporter = nodemailer.createTransport(EMAIL_CONFIG);

export interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
}

export async function sendDemoRequestEmail(data: DemoRequestData): Promise<void> {
  const mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: RECIPIENT_EMAIL,
    subject: `R-Hat: New Demo Request from ${data.name} at ${data.company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Demo Request
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Role:</strong> ${data.role}</p>
        </div>
        
        <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1976d2; margin-top: 0;">Use Case</h3>
          <p style="line-height: 1.6;">${data.useCase}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
          <p style="color: #6c757d; font-size: 14px;">
            This demo request was submitted from your R-Hat landing page.
          </p>
          <p style="color: #6c757d; font-size: 12px;">
            Reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      </div>
    `,
    text: `
New Demo Request

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company}
- Role: ${data.role}

Use Case:
${data.useCase}

This demo request was submitted from your R-Hat landing page.
Reply directly to this email to respond to ${data.name}.
    `.trim()
  };

  await transporter.sendMail(mailOptions);
}

// Test email configuration
export async function testEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('✅ Email server connection verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
}
