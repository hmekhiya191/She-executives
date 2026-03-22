# 🌐 Frontend – She's Executives Website

This is the frontend of the She's Executives platform, built with modern UI/UX principles. It includes dynamic pages, contact forms, and seamless API integration with the backend.

---

## ✨ Features

* 🎨 Modern responsive UI
* 📩 Contact form with file upload support
* 🔗 Connected to backend API
* ⚡ Fast performance using Vite
* 📱 Mobile-friendly design
* 🎭 Smooth animations (Framer Motion)

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* Framer Motion
* Fetch API

---

## 📁 Project Structure

```id="u9c0c5"
frontend/
│── src/
│── public/
│── index.html
│── package.json
│── .env
│── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```id="7c0jtf"
git clone https://github.com/your-username/frontend-repo.git
cd frontend-repo
```

---

### 2️⃣ Install dependencies

```id="1y9y2x"
npm install
```

---

### 3️⃣ Create `.env` file

```id="m9wz9h"
VITE_API_URL=http://localhost:5000
```

> ⚠️ Use your backend URL when deployed

---

### 4️⃣ Run locally

```id="9kq4s1"
npm run dev
```

---

## 🔗 API Integration

The frontend communicates with backend using:

```id="u3cgnm"
const API = import.meta.env.VITE_API_URL;

fetch(`${API}/send-email`, {
  method: "POST",
  body: formData,
});
```

---

## 🚀 Deployment (Netlify)

1. Push code to GitHub
2. Go to https://netlify.com
3. Click **Add new site → Import from Git**
4. Select your frontend repo

### Build Settings:

```id="jrcm3g"
Build command: npm run build
Publish directory: dist
```

---

## 🔐 Environment Variables (Netlify)

Add in Netlify dashboard:

```id="c9v5g0"
VITE_API_URL=https://your-backend.onrender.com
```

---

## ⚠️ Notes

* `.env` file should not be committed
* Make sure backend CORS allows Netlify domain
* Update API URL after backend deployment

---

## 👩‍💻 Author

Developed by She's Executives Team

---

## 📄 License

© 2026 She's Executives. All rights reserved.

This project is proprietary and confidential. Unauthorized use, copying, or distribution is prohibited.
