# Email Setup Guide

## Quick Setup

Your demo request form is now configured to send emails directly to your personal email address. Here's what you need to do:

### 1. Configure Your Email Settings

Edit `/server/email.ts` and update these two lines:

```typescript
const EMAIL_CONFIG = {
  service: 'gmail',  // or your email provider
  auth: {
    user: 'your-email@gmail.com',     // ← Replace with YOUR email
    pass: 'your-app-password'         // ← Replace with YOUR app password
  }
};

const RECIPIENT_EMAIL = 'your-personal-email@example.com'; // ← Replace with where you want to receive requests
```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password (not your regular Gmail password)

### 3. Other Email Providers

For other providers, update the `service` field or use custom SMTP settings:

```typescript
const EMAIL_CONFIG = {
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@yourdomain.com',
    pass: 'your-password'
  }
};
```

### 4. Test the Setup

1. Start your server: `npm run dev`
2. Look for: `✅ Email server connection verified successfully`
3. If you see: `❌ Email server connection failed`, check your credentials

### 5. What Happens Now

- ✅ **Waitlist removed** - No more "Join Waitlist" buttons
- ✅ **Demo form works** - Submissions send emails to your personal email
- ✅ **Professional emails** - Formatted HTML emails with all form data
- ✅ **Error handling** - Users get proper feedback if something goes wrong

### 6. Email Format

You'll receive emails like this:

**Subject:** `New Demo Request from John Smith at Acme Corp`

**Content:**
- Contact Information (Name, Email, Company, Role)
- Use Case details
- Professional HTML formatting
- Reply directly to respond to the customer

### 7. Production Deployment

This setup works in production! Just make sure to:
- Use environment variables for sensitive data (recommended)
- Test the email connection after deployment
- Monitor for any email delivery issues

## Troubleshooting

**Email not sending?**
- Check your app password is correct
- Verify 2FA is enabled (for Gmail)
- Check server logs for error messages

**Connection failed?**
- Double-check email and password
- Try a different email provider
- Check if your hosting provider blocks SMTP ports

That's it! Your demo request form will now send you emails whenever someone fills it out.
