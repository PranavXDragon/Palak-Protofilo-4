# MongoDB Backend Integration Guide

## Setup Instructions

### 1. ✅ Files Already Created
The following files have been automatically created in your project:

```
app/
├── lib/
│   ├── db/
│   │   └── mongodb.js          # MongoDB connection with pooling
│   └── models/
│       ├── Contact.js          # Contact schema for messages
│       └── User.js             # User schema
├── utils/
│   ├── response.js             # Standardized API responses
│   └── validation.js           # Input validation utilities
└── api/
    └── contact/
        └── route.js            # Contact form API endpoints

.env.local                       # Environment variables (created)
```

### 2. 📋 Set Your MongoDB Connection String

Edit `.env.local` and add your MongoDB Atlas connection string:

```bash
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority
```

**Steps to get your connection string:**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a cluster or use an existing one
3. Click "Connect" → "Drivers" 
4. Select Node.js and copy the connection string
5. Replace `<password>` and `<database-name>` with your values

### 3. 🚀 API Endpoints Now Available

#### Contact Form Endpoint
**POST** `/api/contact`
```javascript
// Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here",
  "phone": "+1234567890",      // Optional
  "subject": "Inquiry"         // Optional
}

// Response
{
  "success": true,
  "message": "Thanks for reaching out! I'll review your message and get back to you soon.",
  "data": { /* contact object */ },
  "statusCode": 201
}
```

**GET** `/api/contact?page=1&limit=10`
- Fetch all contacts with pagination
- Returns paginated contact list

**DELETE** `/api/contact?id=<contact-id>`
- Delete a contact by ID

### 4. 🔗 Connect Your Contact Form

Update your Contact component (`src/components/pages/Contact.jsx`):

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    const result = await response.json()
    
    if (result.success) {
      setIsSubmitted(true)
      setFormData({ fullname: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    } else {
      alert('Error: ' + result.message)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message')
  }
}
```

### 5. 📚 Available Utilities

#### Response Handler
```javascript
import { ApiResponse } from '@/app/utils/response'

// Success response
ApiResponse.success(data, 'Message', 200)

// Error response
ApiResponse.error('Error message', 500)

// Paginated response
ApiResponse.paginated(data, total, page, limit)
```

#### Validation Functions
```javascript
import {
  validateEmail,
  validatePhone,
  validateUrl,
  sanitizeInput,
  validatePagination
} from '@/app/utils/validation'
```

### 6. 🗂️ Database Structure

**Contact Collection:**
```javascript
{
  _id: ObjectId,
  name: String,           // Required, min 2 chars
  email: String,          // Required, valid email
  phone: String,          // Optional
  message: String,        // Required, 10-5000 chars
  subject: String,        // Optional
  isRead: Boolean,        // Default: false
  status: String,         // new | replied | archived
  createdAt: Date,
  updatedAt: Date
}
```

**User Collection:**
```javascript
{
  _id: ObjectId,
  username: String,       // Required, unique, min 3 chars
  email: String,          // Required, unique
  firstName: String,      // Required
  lastName: String,       // Optional
  avatar: String,         // Optional URL
  bio: String,            // Max 500 chars
  isActive: Boolean,      // Default: true
  createdAt: Date,
  updatedAt: Date
}
```

### 7. 🔧 Create Additional API Routes

To add more routes (e.g., `/api/users`), create:
```
app/api/users/route.js
```

Example:
```javascript
import { NextResponse } from 'next/server'
import connectDB from '@/app/lib/db/mongodb'
import User from '@/app/lib/models/User'
import { ApiResponse } from '@/app/utils/response'

export async function GET(request) {
  try {
    await connectDB()
    const users = await User.find()
    return NextResponse.json(ApiResponse.success(users), { status: 200 })
  } catch (error) {
    return NextResponse.json(
      ApiResponse.error(error.message, 500),
      { status: 500 }
    )
  }
}
```

### 8. ✨ Features Included

✅ Connection pooling for optimal performance  
✅ Automatic reconnection on failures  
✅ Standardized API responses  
✅ Input validation and sanitization  
✅ Pagination support  
✅ Error handling  
✅ Mongoose schema validation  
✅ Indexed queries for fast lookups  

### 9. 🧪 Test Your Setup

```bash
# 1. Run the dev server
npm run dev

# 2. Test contact endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from my portfolio backend"
  }'
```

### 10. 🚀 Deploy to Vercel

When pushing to Vercel:
1. Add `MONGODB_URI` to Vercel environment variables
2. Push your code
3. Vercel will automatically install dependencies and build

---

**Need Help?**
- [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
