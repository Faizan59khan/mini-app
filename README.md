# React TypeScript Mini-App

This is a React TypeScript mini-application designed to demonstrate the integration of basic UI components and functionality, with Redux for state management and Tailwind CSS for styling. The application allows users to select an option using radio buttons, enter a discount code, generate a random discount code, and add notes.

## Features

- **Radio Selection Buttons**: Users can select between three options ("Option A", "Option B", "Option C"). The selected option is stored in the application's state.
- **Discount Code Entry**: A text box allows users to enter a discount code that must start with letters and end with numbers (e.g., "ABC123"). The input is validated to ensure the code follows this pattern.
- **Generate Discount Code**: A button that generates a random discount code following the same pattern (letters first, followed by numbers) and displays it to the user.
- **Notes Field**: Users can enter notes, which are also stored in the application's state.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Redux**: For state management.
- **Tailwind CSS**: For styling the components.
- **Module Aliases**: Set up using `tsconfig.json` for cleaner import paths.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Faizan59khan/mini-app.git
   cd mini-app
   ```
