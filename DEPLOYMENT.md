# R-Hat Landing Page Deployment Guide

This guide will help you deploy your R-Hat landing page to your domain. You have several hosting options depending on your needs and budget.

## Prerequisites

- ✅ Domain purchased
- ✅ Project ready for deployment
- ✅ Docker configured (optional)

## Hosting Options

### Option 1: Vercel (Recommended - Free Tier Available)
**Best for**: Static sites, serverless functions, easy deployment

**Pros**: 
- Free tier with generous limits
- Automatic HTTPS
- Global CDN
- Easy GitHub integration
- Custom domain support

**Steps**:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts
5. Add your custom domain in Vercel dashboard

### Option 2: Netlify (Recommended - Free Tier Available)
**Best for**: Static sites, forms, serverless functions

**Pros**:
- Free tier with good limits
- Automatic HTTPS
- Form handling
- Easy drag-and-drop deployment
- Custom domain support

**Steps**:
1. Go to [netlify.com](https://netlify.com) and sign up
2. Build your project: `npm run build`
3. Drag the `dist/public` folder to Netlify
4. Add custom domain in Netlify dashboard

### Option 3: Railway (Recommended for Full-Stack)
**Best for**: Full-stack apps with backend

**Pros**:
- Supports Node.js/Express
- Database integration
- $5/month for hobby plan
- Automatic deployments
- Custom domain support

**Steps**:
1. Go to [railway.app](https://railway.app) and sign up
2. Connect your GitHub repository
3. Railway will auto-detect your Node.js app
4. Add custom domain in Railway dashboard

### Option 4: DigitalOcean App Platform
**Best for**: Production apps, scalable hosting

**Pros**:
- Professional hosting
- Auto-scaling
- Database support
- Custom domain support
- $5/month minimum

**Steps**:
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create new app from GitHub
3. Configure build settings
4. Add custom domain

### Option 5: Render (Recommended for Full-Stack)
**Best for**: Full-stack apps, free tier available

**Pros**:
- Free tier for web services
- Automatic deployments
- PostgreSQL database
- Custom domain support
- Good for Node.js apps

**Steps**:
1. Go to [render.com](https://render.com) and sign up
2. Create new Web Service
3. Connect GitHub repository
4. Configure build and start commands
5. Add custom domain

## Deployment Steps

### 1. Prepare Your Project

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the production build locally
npm start
```

### 2. Environment Configuration

Create a `.env` file in your project root:

```env
NODE_ENV=production
PORT=5000
# Add any other environment variables your app needs
```

### 3. Choose Your Hosting Provider

Based on your needs:
- **Simple static site**: Use Vercel or Netlify
- **Full-stack with backend**: Use Railway, Render, or DigitalOcean

### 4. Deploy

Follow the specific steps for your chosen hosting provider above.

### 5. Configure Custom Domain

1. In your hosting provider's dashboard, go to domain settings
2. Add your custom domain
3. Update your domain's DNS settings to point to the hosting provider
4. Wait for SSL certificate to be issued (usually automatic)

## DNS Configuration

You'll need to update your domain's DNS settings:

### For Vercel/Netlify:
- Add a CNAME record pointing to your hosting provider's URL
- Or add an A record pointing to their IP address

### For Railway/Render/DigitalOcean:
- Add a CNAME record pointing to your app's URL
- Or add an A record pointing to their IP address

## Cost Comparison

| Provider | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| Vercel | ✅ Yes | $20/month | Static sites, JAMstack |
| Netlify | ✅ Yes | $19/month | Static sites, forms |
| Railway | ❌ No | $5/month | Full-stack apps |
| Render | ✅ Yes | $7/month | Full-stack apps |
| DigitalOcean | ❌ No | $5/month | Production apps |

## Recommended Approach

For your R-Hat landing page, I recommend:

1. **Start with Vercel** (if your app is mostly static)
2. **Use Railway** (if you need backend functionality)

Both offer excellent free/low-cost options and are beginner-friendly.

## Troubleshooting

### Common Issues:

1. **Build fails**: Check your `package.json` scripts
2. **Domain not working**: Verify DNS settings (can take up to 48 hours)
3. **HTTPS issues**: Most providers handle this automatically
4. **Environment variables**: Make sure to set them in your hosting dashboard

### Getting Help:

- Check your hosting provider's documentation
- Look at their community forums
- Contact their support if needed

## Next Steps

1. Choose your hosting provider
2. Follow their deployment guide
3. Configure your custom domain
4. Test your live site
5. Set up monitoring (optional)

Your R-Hat landing page should be live on your domain within a few hours!
