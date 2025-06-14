# EmailJS Setup Guide for Constlens Contact Form

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Connect Your Gmail Account

1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authenticate with your Gmail
5. Name your service (e.g., "constlens_gmail")
6. Note down the **Service ID** (e.g., `service_constlens`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

### Subject:
```
New Inquiry from {{from_name}} - {{service_type}}
```

### HTML Content:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #667EEA;">New Contact Form Submission</h2>
  
  <div style="background: #f7fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Service Interested:</strong> {{service_type}}</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border-left: 4px solid #667EEA;">
    <h3>Message:</h3>
    <p>{{message}}</p>
  </div>
  
  <div style="margin-top: 30px; padding: 15px; background: #e2e8f0; border-radius: 5px;">
    <p style="margin: 0; font-size: 12px; color: #718096;">
      This email was sent from the Constlens website contact form.
    </p>
  </div>
</div>
```

4. Save the template and note down the **Template ID** (e.g., `template_constlens`)

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** in the API Keys section
3. Copy this key (e.g., `your_public_key_here`)

## Step 5: Update Your React Code

Replace the placeholder values in `src/components/Contact.js`:

```javascript
// Replace these with your actual values:
const serviceID = 'service_constlens'; // Your Service ID from Step 2
const templateID = 'template_constlens'; // Your Template ID from Step 3
const publicKey = 'your_public_key_here'; // Your Public Key from Step 4
```

## Step 6: Test the Form

1. Start your React app: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the test email

## Optional: Auto-Reply Setup

To send an automatic reply to users:

1. Create another email template for auto-reply
2. Add a second `emailjs.send()` call in your code
3. Use the user's email as the recipient

## Troubleshooting

### Common Issues:

1. **"User ID not found"** - Make sure you're using the correct Public Key
2. **"Service not found"** - Check your Service ID
3. **"Template not found"** - Verify your Template ID
4. **Emails not sending** - Check your Gmail spam folder and EmailJS usage limits

### Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

### Usage Tips:
- Test with your own email first
- Keep the Public Key secure (it's safe for frontend use)
- Monitor your usage in the EmailJS dashboard
- Consider upgrading for higher limits and no branding

## Security Note

The Public Key is safe to use in frontend code as it only allows sending emails through your configured templates and services. Your Gmail credentials remain secure with EmailJS.

## Support

If you need help:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Contact EmailJS support through their dashboard
3. Review the browser console for error messages

---

**Your contact form will be fully functional once you complete these steps!** 