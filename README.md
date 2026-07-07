
---

```markdown
# 🌆 City of David Tabernacle Website  
**Motto:** Bringing Restoration to the Dying World  
Built with ❤️ using **Next.js**, **TypeScript**, and **Tailwind CSS**

---

## 📖 About the Project

This project is the official website of **City of David Tabernacle**, a vibrant Christian ministry dedicated to spreading the message of restoration and transformation through the gospel of Jesus Christ.  

The website provides an online platform for members and visitors to:
- Learn about the church’s vision and mandate  
- View service times, events, and ministries  
- Watch or listen to sermons  
- Submit prayer requests, testimonies, and first-timer forms  
- Give offerings and stay connected online  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js (App Router)** | Framework for fullstack React app with SSR support |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first responsive styling |
| **Shadcn/UI** | Elegant, reusable UI components |
| **React Hook Form + Zod** | Form handling and validation |
| **Nodemailer (optional)** | Email form submissions |
| **Vercel** | Deployment and hosting |

---

## 📁 Folder Structure

```

city-of-david-tabernacle/
├── app/
│   ├── (site)/
│   │   ├── page.tsx               # Home Page
│   │   ├── about/
│   │   │   └── page.tsx           # About the Church
│   │   ├── ministries/
│   │   │   ├── page.tsx           # Ministries Overview
│   │   │   ├── youth/page.tsx
│   │   │   ├── women/page.tsx
│   │   │   ├── men/page.tsx
│   │   │   └── children/page.tsx
│   │   ├── resources/
│   │   │   ├── events/page.tsx
│   │   │   ├── sermons/page.tsx
│   │   │   ├── forms/page.tsx
│   │   │   └── prayer-request/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── give/page.tsx
│   │   └── pastor/page.tsx
│   ├── api/
│   │   ├── contact/route.ts       # Email submission route
│   │   ├── forms/route.ts         # Handles all form submissions
│   │   └── prayer/route.ts        # Prayer requests
│   ├── layout.tsx
│   └── globals.css
│
├── components/                    # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionHeader.tsx
│   ├── FormInput.tsx
│   └── ...
│
├── lib/
│   ├── mailer.ts                  # Email handling (Nodemailer)
│   └── utils.ts
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

````

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cityofdavidtabernacle.git
   cd cityofdavidtabernacle
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SITE_NAME=City of David Tabernacle
   NEXT_PUBLIC_SITE_URL=https://cityofdavidtabernacle.org
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_generated_app_password
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Visit the app at [http://localhost:3000](http://localhost:3000)

---

## 🧰 Core Dependencies

```bash
npm install next@latest react react-dom typescript tailwindcss postcss autoprefixer
npm install @hookform/resolvers react-hook-form zod
npm install @radix-ui/react-icons @shadcn/ui class-variance-authority clsx tailwind-variants
npm install nodemailer
npm install -D eslint prettier eslint-config-prettier
```

---

## 🧪 Linting & Formatting

Run ESLint to check for issues:

```bash
npm run lint
```

Auto-fix issues:

```bash
npm run lint -- --fix
```

Format code with Prettier:

```bash
npm run format
```

---

## 📬 Handling Forms

This project uses the **Next.js API routes** for serverless form submission handling.

Example flow:

* User submits the *Prayer Request* or *Testimony* form.
* Data is validated using **Zod**.
* The backend route in `/app/api/forms/route.ts` sends an email using **Nodemailer** to the church email address.

✅ Advantages:

* No need for a separate backend.
* Secure email delivery via environment variables.
* Easy to switch to database or admin dashboard later if required.

---

## 🚀 Deployment

Deploy directly to **Vercel**:

1. Push your code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com).
3. Import the repository.
4. Add environment variables.
5. Click **Deploy**.

Vercel automatically handles builds, linting, and continuous deployment.

---

## 🧑‍💻 Contributing

Contributions, ideas, and suggestions are welcome!

If you’d like to add new features (like a dashboard for managing submissions or media uploads):

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit and push your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.
You’re free to use and modify it for the church and its related ministries.

---

## 🙏 Acknowledgements

* [Next.js](https://nextjs.org)
* [Tailwind CSS](https://tailwindcss.com)
* [Shadcn/UI](https://ui.shadcn.com)
* [React Hook Form](https://react-hook-form.com)
* [Zod](https://zod.dev)
* [Nodemailer](https://nodemailer.com)

---

### ✨ “And I will restore to you the years that the locust hath eaten…” — *Joel 2:25*

> City of David Tabernacle — Bringing Restoration to the Dying World.

```

---
