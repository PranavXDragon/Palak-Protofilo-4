# MongoDB Connection Troubleshooting Guide

## ❌ Error: querySrv ECONNREFUSED

This means the connection string is valid but cannot reach MongoDB servers.

### ✅ Quick Fixes:

#### 1. **Add Your IP to MongoDB Atlas Whitelist**
   - Go to: https://cloud.mongodb.com/
   - Navigate to: Network Access → IP Whitelist
   - Click "Add IP Address"
   - Choose one:
     - Add Current IP: Auto-detects your IP
     - Allow Access from Anywhere: 0.0.0.0/0 (less secure, for testing only)
   - Confirm

#### 2. **Verify Connection String Format**
   Your string: `mongodb+srv://Test:Test@t.7bexn6b.mongodb.net/?appName=T`
   
   Better format:
   ```
   mongodb+srv://Test:Test@t.7bexn6b.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

#### 3. **Update `.env.local`**
   ```
   MONGODB_URI=mongodb+srv://Test:Test@t.7bexn6b.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

#### 4. **Test Connection After Changes**
   - Kill dev server (Ctrl+C)
   - Restart: `npm run dev`
   - Try the contact form
   - Check server logs for `✅ MongoDB Connected Successfully`

### 🔍 Check MongoDB Atlas:

1. **Verify Username/Password**
   - Go to: Database Access
   - Check user "Test" exists
   - Password should be "Test"

2. **Check Cluster Status**
   - Go to: Clusters
   - Ensure cluster is running (green status)
   - Can you ping the cluster name?

3. **Check IP Whitelist**
   - Go to: Network Access
   - Your current IP should be listed
   - If using 0.0.0.0/0, all IPs are allowed

### 💡 For Local Development:
Add this temporary IP whitelist entry for testing:
- **0.0.0.0/0** (allows all IPs - only for dev!)

### For Production/Vercel:
Add Vercel's IP ranges to whitelist or use Vercel's static IP.

---

Once you fix the IP whitelist and restart the dev server, your MongoDB backend will be ready! 🚀
