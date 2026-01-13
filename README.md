# 📝 Task Manager - Homework 51

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

A modern, responsive task management application built with React, featuring dark mode, idle detection, and toast notifications. This project demonstrates the integration of popular React libraries including React Icons, React Toastify, and React Idle Timer.

## ✨ Features

- ✅ **Task Management** - Create, complete, and delete tasks
- 🎨 **Dark Mode** - Toggle between light and dark themes
- 🔔 **Toast Notifications** - Real-time feedback for user actions
- ⏱️ **Idle Detection** - Automatic idle time tracking with notifications
- 📊 **Statistics Dashboard** - Visual overview of task progress
- 🎯 **Priority Levels** - Organize tasks by priority (low, medium, high)
- 💾 **Local Storage** - Persistent data storage across sessions
- 📱 **Responsive Design** - Optimized for all device sizes

## 🛠️ Technologies Used

- **React 18.3** - Modern UI library
- **Vite 6.0** - Fast build tool and development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons 5.4** - Popular icon library
- **React Toastify 10.0** - Toast notification system
- **React Idle Timer 5.7** - User activity detection

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/mihuilsu/homework-51.git
cd homework-51
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

## 📁 Project Structure
```
homework-51/
├── src/
│   ├── components/          # React components
│   │   ├── TaskItem.jsx     # Individual task component
│   │   ├── AddTaskForm.jsx  # Task creation form
│   │   ├── Stats.jsx        # Statistics dashboard
│   │   └── IdleTimer.jsx    # Idle detection display
│   ├── utils/               # Utility functions
│   │   └── storage.js       # LocalStorage helpers
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Usage

### Adding a Task
1. Click the "Add New Task" button
2. Enter task title (required)
3. Add description (optional)
4. Select priority level
5. Click "Add Task"

### Managing Tasks
- **Complete Task**: Click the checkbox next to the task
- **Delete Task**: Click the trash icon
- **View Statistics**: Check the dashboard cards at the top

### Dark Mode
Toggle dark mode using the sun/moon icon in the top right corner

### Idle Detection
The app tracks user activity and shows:
- Real-time idle countdown
- Warning after 30 seconds of inactivity
- Welcome back message when activity resumes

## 🚀 Build for Production
```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Demo

🔗 **Live Demo**: [Vercel](https://homework-51-seven.vercel.app)

## 👨‍💻 Author

**mihuilsu**

## 📄 License

This project is open source and available under the **MIT License**.

## 🙏 Acknowledgments

- React Icons for the beautiful icon set
- React Toastify for elegant notifications
- React Idle Timer for activity tracking
- Tailwind CSS for rapid styling

---

Made with ❤️ by mihuilsu