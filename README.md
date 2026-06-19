# 🏛️ Saarthi AI - Complete Documentation

## 📌 Project Overview

**Saarthi AI** is a royal, inclusive AI ecosystem for Bharat designed for 4 distinct personas with 20+ unique features. Built with React, Node.js, MongoDB, and deployed on Vercel.

---

## 👥 Four Personas & Features

### 🏡 **Amma Mode** (Homemakers)
1. **Government Schemes** - PM-Kisan, Ujjwala, MGNREGA, Ayushman
2. **Recipe AI** - Multi-cuisine recipes with nutrition
3. **Grocery Planner** - Budget optimization
4. **Smart Reminders** - Family events & medications
5. **Community Support** - Join/create SHGs

### 🏢 **Business Mode** (Entrepreneurs)
1. **Business Insights AI** - Revenue, profit, growth metrics
2. **Customer Log** - Manage client relationships
3. **Expense Tracking** - Categorized business expenses
4. **Employee Management** - Roster & attendance
5. **Family Wellness** - Health check scheduling

### 👴 **Senior Mode** (Elderly)
1. **SOS Emergency** - Large buttons for quick emergency calls
2. **Medical Reminders** - Medicine schedule tracking
3. **Memory Management** - Important dates keeper
4. **Digital Companion** - Tech learning videos
5. **Government Benefits** - Pension, insurance, schemes

### 🎓 **Student Mode** (Academics)
1. **Productivity Coach** - Pomodoro timer & study tips
2. **Notes Summarizer** - AI-generated study materials
3. **Scholarship Finder** - Internship & grant opportunities
4. **Student Finance** - Budget tracker
5. **Career Navigator** - Career path planning

---

## 🛠️ Tech Stack

### Frontend
- React 18.2
- Vite (Build tool)
- CSS-in-JS styling
- Custom hooks
- Context API

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- CORS enabled

### Deployment
- **Frontend**: Vercel
- **Backend**: Vercel/Render/Railway
- **Database**: MongoDB Atlas
- **Domain**: Custom domain on Vercel

---

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/yashs2023-cpu/shaarthi-ai.git
cd shaarthi-ai
```

### 2. Frontend Setup
```bash
npm install
npm run dev
```
Access at `http://localhost:3000`

### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
API runs at `http://localhost:5000`

### 4. Login
- Email: any@email.com
- Password: any password (auto-registers)

---

## 📁 Project Structure

```
shaarthi-ai/
├── src/
│   ├── components/
│   │   ├── pages/ (Landing, Login, Dashboard)
│   │   ├── shared/ (Button, Card, FormInput, Toast)
│   │   └── modes/ (Amma, Business, Senior, Student)
│   ├── contexts/ (Auth, Mode)
│   ├── hooks/ (useAuth, useToast, useVoice)
│   ├── services/ (auth, api, storage)
│   ├── styles/ (globals.css)
│   └── App.jsx
├── backend/
│   ├── models/ (User, Recipe, Scheme, etc.)
│   ├── routes/ (auth, recipes, schemes, scholarships)
│   ├── controllers/ (Business logic)
│   ├── middleware/ (Authentication)
│   └── server.js
├── .env.example
├── vercel.json
└── DEPLOYMENT.md
```

---

## 🎨 Design System

### Color Palette
- **Amma**: Orange (#F4A300)
- **Business**: Indigo (#1E1F57)
- **Senior**: Teal (#7FB7BE)
- **Student**: Purple (#4F46E5)
- **Primary**: Royal Indigo (#1E1F57)
- **Secondary**: Gold (#D4AF37)

### Typography
- **Headers**: Cinzel (serif)
- **Body**: Poppins (sans-serif)

---

## 🔐 Security

- Password hashing with bcryptjs
- JWT token authentication
- CORS protection
- Environment variables for secrets
- Input validation on backend

---

## 📊 Database Schema

### Users
```javascript
{
  name, email, phone, password,
  mode, language, createdAt
}
```

### Recipes
```javascript
{
  userId, name, cuisine, ingredients,
  steps, cookingTime, difficulty, nutrition
}
```

### Schemes
```javascript
{
  name, category, benefit, eligibility,
  documents, deadline, applicationUrl
}
```

---

## 🚀 Deployment Steps

### 1. Deploy Frontend to Vercel
```bash
npm run build
# Use vercel.json for config
```

### 2. Deploy Backend to Vercel
```bash
cd backend
vercel deploy
```

### 3. Set Environment Variables
On Vercel dashboard:
- `MONGODB_URI`
- `JWT_SECRET`

### 4. Update API URLs
Update `.env.production` with your deployed API URL

---

## 📈 Planned Enhancements

- [ ] Voice integration (Text-to-Speech)
- [ ] Multi-language support (Hindi, Tamil, Telugu, Kannada)
- [ ] Offline mode with sync
- [ ] Push notifications
- [ ] Video tutorials
- [ ] Payment integration
- [ ] Advanced analytics
- [ ] AI chatbot support
- [ ] Social features (sharing, groups)
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

---

## 📞 Support

- GitHub Issues: Report bugs
- Email: support@saarthi.ai
- Twitter: @SaarthiAI

---

## 📄 License

MIT License - See LICENSE file

---

## 🙏 Acknowledgments

Built for India 🇮🇳 with ❤️
Empowering 4 personas, 20 features, infinite possibilities

---

**Saarthi AI** - Your Royal Digital Companion
