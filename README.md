# React Todo App (MUI + Tailwind)

A clean and minimal **Todo application** built with **React**, **Material UI (MUI)**, and **Tailwind CSS**.  
This project focuses on learning how to combine component libraries with utility-first CSS while maintaining a consistent theme and good UI structure.

---

## Features

- Add, delete, and reorder todo items
- Light / Dark mode toggle using MUI theming
- Keyboard support (press **Enter** to add todos)
- Responsive layout
- Styled using a mix of **MUI components** and **Tailwind utilities**

---

## Tech Stack

- **React** – component-based UI
- **Material UI (MUI)** – theming, components, icons
- **Tailwind CSS** – layout and utility styling
- **JavaScript (ES6+)**

---

## Why MUI + Tailwind?

This project intentionally combines both libraries to understand their strengths:

- **MUI** handles:
  - Theme management (light / dark mode)
  - Consistent component behavior
  - Accessibility and spacing defaults

- **Tailwind CSS** handles:
  - Layout (`flex`, spacing, alignment)
  - Quick visual tweaks
  - Utility-based responsiveness

This approach is useful in real-world projects where a design system exists but fine-grained control is still needed.

---

## Project Structure

```
src/
 ├── App.jsx        # Main app and theme provider
 ├── main.jsx       # React entry point
 ├── index.css      # Tailwind imports
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## Usage

- Type a task in the input field
- Press **Enter** or click **Save** to add it
- Use the arrow buttons to reorder items
- Click the delete icon to remove a task
- Toggle light / dark mode using the icon in the top-right corner

---

## Styling Notes

- MUI `ThemeProvider` controls global colors and mode
- `useTheme()` is used in child components to stay theme-aware
- Tailwind is used only where it adds clarity, not to override MUI unnecessarily

---

## Future Improvements

- Persist todos using localStorage
- Add edit functionality
- Add animations for reordering
- Replace numeric item labels with drag-and-drop

---

## Learning Outcomes

Through this project, I practiced:

- Managing global themes in React
- Combining MUI and Tailwind without conflicts
- Structuring reusable components
- Writing clean, reada