// Quick test for MongoDB connection
import mongoose from 'mongoose'

async function testConnection() {
  try {
    const uri = 'mongodb+srv://Test:Test@t.7bexn6b.mongodb.net/?appName=T'
    
    console.log('🔗 Connecting to MongoDB...')
    const conn = await mongoose.connect(uri)
    
    console.log('✅ MongoDB Connected Successfully!')
    console.log(`📊 Database: ${conn.connection.name}`)
    console.log(`🌐 Host: ${conn.connection.host}`)
    
    // List collections
    const collections = await conn.connection.db.listCollections().toArray()
    console.log(`📋 Collections: ${collections.map(c => c.name).join(', ') || 'None yet'}`)
    
    // Disconnect
    await mongoose.disconnect()
    console.log('✅ Disconnected from MongoDB')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message)
    process.exit(1)
  }
}

testConnection()
