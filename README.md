# React Router Project with Tailwind CSS

A multi-page React application using **React Router DOM** for routing and **Tailwind CSS** for styling. This project includes Home, About, Contact, User, and Github pages with a responsive footer and navigation.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

You can see the live version or test locally.  
(NOTE: Add your live demo link if deployed)

---

## Features

- Multi-page navigation using **React Router DOM**
- Nested routes (`/user/:userid`)
- 404 error page for unknown routes
- Fully responsive design using **Tailwind CSS**
- Footer with social links and legal info
- Clean and reusable components (Layout, Footer, etc.)

---

## Technologies

- React 18
- React Router DOM v6
- Tailwind CSS
- Vite

---

## Project Structure

src/
│
├─ components/
│ ├─ home/
│ │ └─ Home.jsx
│ ├─ about/
│ │ └─ About.jsx
│ ├─ contact/
│ │ └─ Contact.jsx
│ ├─ user/
│ │ └─ User.jsx
│ ├─ github/
│ │ └─ Github.jsx
│ └─ footer/
│ └─ Footer.jsx
│
├─ layout.jsx
├─ main.jsx
└─ index.css

yaml
Copy code

---

## Installation

1. Clone the repository:

Install dependencies:

npm install


Start the development server:

npm run dev

Usage

Navigate between pages using the links in the header or footer.

Access user pages using nested routes: /user/:userid.

External links in the footer open in a new tab.

Unknown routes show a custom 404 page.

Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a pull request

License

This project is licensed under the MIT License.

git clone https://github.com/Arpithajain26/react-router.git
cd react-router-project
Install dependencies:<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/dfbc9390-9c20-4376-87de-a33321e76c64" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/923b2777-16df-4bf4-9570-35159275f778" />

npm install
Start the development server:

npm run dev
Usage
Navigate between pages using the links in the header or footer.

Access user pages using nested routes: /user/:userid.

External links in the footer open in a new tab.

Unknown routes show a custom 404 page.

Contributing
Contributions are welcome!

