// Calculator Logic, Language Support, Theme Management, and Tool Functionality in JavaScript

class Calculator {
    constructor() {
        this.currentValue = 0;
        this.prevValue = null;
        this.operation = null;
        this.languages = {
            en: 'English',
            fr: 'French',
            es: 'Spanish',
            // Add more languages as needed
        };
        this.currentLanguage = 'en';  // Default language
        this.theme = 'light'; // Default theme
    }

    // Method to set language
    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLanguage = lang;
        } else {
            console.warn(`Language ${lang} not supported.`);
        }
    }

    // Method to set theme
    setTheme(theme) {
        this.theme = theme;
        // Apply theme styles (light/dark) in your UI accordingly
    }

    // Basic arithmetic operations
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    // Method to perform calculation based on operation
    calculate() {
        switch (this.operation) {
            case 'add':
                this.currentValue = this.add(this.prevValue, this.currentValue);
                break;
            case 'subtract':
                this.currentValue = this.subtract(this.prevValue, this.currentValue);
                break;
            case 'multiply':
                this.currentValue = this.multiply(this.prevValue, this.currentValue);
                break;
            case 'divide':
                this.currentValue = this.divide(this.prevValue, this.currentValue);
                break;
            default:
                console.error('Invalid operation!');
        }
        this.prevValue = null; // reset previous value
        this.operation = null; // reset operation
    }

    // Method to perform an operation
    operate(op) {
        if (this.currentValue !== null) {
            this.prevValue = this.currentValue;
            this.currentValue = 0; // Reset current value for new input
            this.operation = op;
        }
    }
}

// Usage example:
const calculator = new Calculator();

// Set language and theme
calculator.setLanguage('fr');  // Set language to French
calculator.setTheme('dark');    // Set theme to dark

// Perform calculations
calculator.prevValue = 10;
calculator.currentValue = 5;
calculator.operate('add');
calculator.calculate(); // currentValue is now 15
console.log(calculator.currentValue);