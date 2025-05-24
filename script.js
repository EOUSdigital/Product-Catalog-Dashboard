//TODO Module 3 - Lesson 04.02: Nesting, Concat, and the Spread Operator - Challenges

//TODO  👥 Dynamic Team Builder Project

//* 🎯 Scenario:
//  We are building a tool for HR to manage company teams.

//  Features:
//  1. Start with two separate teams (developers & designers).
//  2. Dynamically:
//      • Merge both teams.
//      • Add a new hire into a specific position.
//      • Create a safe copy of the team before making changes.
//  3. Log:
//      • The full team.
//      • The updated team after hiring.
//      • Ensure original teams remain unchanged.

//* 📝 Dataset:

const devTeam = ['Alice', 'Bob'];
const designTeam = ['Cara', 'Dan'];

//* 💡 Tasks:
//  1. Use ...spread to merge devTeam and designTeam.
//  2. Insert 'Eve' (new hire) between Bob and Cara.
//  3. Make sure the original devTeam and designTeam stay intact.
//  4. Log:
//      • The merged team.
//      • The updated team after adding Eve.

//! Solution

//* Step 1.

const mergedTeam = [...devTeam, ...designTeam];

//* Step 2.

const updatedTeam = [...devTeam, 'Eve', ...designTeam];

//* Step 3.

const teamCopy = [...mergedTeam];

//* Step 4.

console.log(teamCopy);
console.log(updatedTeam);


//TODO  ⚙️ Project 2: Config Manager

//* 🎯 Scenario:
//  We are building a configuration system for a web app.
//  Apps often have:
//      Default settings (what the app provides).
//      User settings (custom preferences that override defaults).
//  We must follow the next steps for a solution:
//      1. Merge both settings safely.
//      2. Ensure user preferences override defaults.
//      3. Add a dynamic environment flag (mode: 'dark' or 'light').
//      4. Prevent mutation of the original configs.

//* 📝 Dataset:

const defaultConfig = {
    theme: 'light',
    notifications: true,
    language: 'en',
};

const userConfig = {
    theme: 'dark',
    language: 'fr',
};

//* 💡 Tasks:
//  1. Use ...spread to merge defaultConfig and userConfig.
//  2. Ensure userConfig overrides the theme and language.
//  3. Dynamically add:
//      const envMode = 'production';                   // Result: ➔ Resulting config should include { mode: 'production' }.
//  4. Log:
//      • The final config object.
//      • Ensure that neither defaultConfig nor userConfig was modified.

//! Solution

//* Step 1.
//* Step 2.

const mergedConfig = { ...defaultConfig, ...userConfig };

//* Step 3.

const envMode = 'production';
const finalConfig = { ...mergedConfig, mode: envMode };

//* Step 4.

console.log(finalConfig);
console.log(defaultConfig);
console.log(userConfig);


//TODO  🚀 Smart Dashboard System

//* We will design a project that combines:
//  ✅ Arrays & Objects
//  ✅ Chaining (.filter(), .map(), .find(), .some())
//  ✅ Spread Operator & Nesting
//  ✅ Dynamic data manipulation
//  ✅ Clean, modular code structure

//* 🎯 Project Concept: Smart Dashboard System
//  We are building a dynamic dashboard for a company that manages:
//      1. Teams & Employees
//      2. System Configurations
//      3. Task Management
//  This project will simulate:
//      • Merging data
//      • Filtering active users
//      • Updating configurations
//      • Handling nested structures
//      • Displaying dynamic summaries

//* 📝 Core Features:
//? 1️⃣ Team Management
//      • Merge multiple departments.
//      • Add new hires dynamically.
//      • Clone team structures before updates.

//? 2️⃣ Config Center
//      Merge default system settings with custom overrides.
//      Dynamically adjust environments (production, development).
//      Ensure immutability.

//? 3️⃣ Task Overview
//      Filter pending tasks.
//      Highlight urgent ones.
//      Generate clean reports using chaining.

//* 🧠 Technologies & Techniques:
//      ...spread for merging & copying.
//      Chaining methods for summaries.
//      Nested arrays/objects handling.
//      Safe data manipulation (no mutations).
//      Dynamic, readable console outputs.

//? 🚀 Scenario:
//      • Merge Dev and Design teams.
//      • Insert a new hire between departments.
//      • Apply user-specific settings over system defaults.
//      • Filter tasks assigned to active team members.
//      • Display:
//          • Team list
//          • Final config
//          • Task report

//* 📋 Step-by-Step Plan

//? 1️⃣ Setup: Define Data Structures

//  A. Teams:

const devTeam2 = ['Alice', 'Bob'];
const designTeam2 = ['Cara', 'Dan'];
const newHire = 'Eve';

//  B. Configurations:

const defaultConfig2 = { theme: 'light', notifications: true, language: 'en' };
const userConfig2 = { theme: 'dark', language: 'fr' };
const envMode2 = 'production';

//  C. Tasks:

const tasks = [
    { title: 'Deploy app', assignedTo: 'Alice', done: false, priority: 'high' },
    { title: 'Design logo', assignedTo: 'Cara', done: true, priority: 'low' },
    { title: 'Fix bugs', assignedTo: 'Bob', done: false, priority: 'medium' },
    { title: 'Client meeting', assignedTo: 'Eve', done: false, priority: 'high' },
];

//? 2️⃣ Team Management Logic
//  • ✅ Merge devTeam and designTeam using ...spread.
//  • ✅ Insert Eve between Dev and Design teams.
//  • ✅ Clone the merged team for safe updates.
//  • Log the final team list.

//? 3️⃣ Config Manager Logic
//  • ✅ Merge defaultConfig and userConfig using ...spread.
//  • ✅ Add mode: envMode dynamically.
//  • Ensure neither original config is mutated.
//  • Log the final configuration object.

//? 4️⃣ Task Overview Logic
//  • ✅ Filter tasks where done === false.
//  • ✅ Use .map() to format as:
//      "🔴 [High] Deploy app - Assigned to Alice"
//  • ✅ Use .find() to highlight the first high priority pending task.
//  • Log:
//      • Pending tasks list.
//      • Urgent task alert.
//      • If no pending tasks ➔ log "✅ All tasks completed!".

//? 5️⃣ Final Dashboard Output
//  • Log:
//  1. Team Summary
//  2. Configuration Summary
//  3. Task Report


//! Solution Team Management Logic

//* Step 1.

const mergedTeam2 = [...devTeam2, ...designTeam2];

//* Step 2.

const updatedTeam2 = [...devTeam2, 'Eve', ...designTeam2];

//* Step 3.

const cloneUpdatedTeam2 = [...updatedTeam2];

//* step 4.

console.log(cloneUpdatedTeam2);

//! Solution Config Manager Logic

//* Step 1.

const mergedConfig2 = { ...defaultConfig2, ...userConfig2 };

//* Step 2.

const finalConfig2 = { ...mergedConfig2, mode: envMode2 };

//* Step 3.

console.log(defaultConfig2);
console.log(userConfig2);
console.log(finalConfig2);

//! Solution Task Overview Logic

//* Step 1.

const tasksDone = tasks.filter(task => task.done === false);

//* Step 2.

const formatTasks = tasksDone.map(task => `🔴 ${task.priority.toUpperCase()} ${task.title} - Assigned to ${task.assignedTo}`)

//* Step 3.

const highPriorityPendingTask = tasks.find(task => !task.done && task.priority === 'high');

//* Step 4.

if (highPriorityPendingTask) {
    console.log(`🚨 Urgent Task: ${highPriorityPendingTask.title}`);
} else {
    console.log("✅ All tasks completed!");
};

//! Solution Final Dashboard Output

//* Step 1.

console.log(`👥 Team: ${updatedTeam2}`);

//* Step 2.

console.log(`⚙️ Config: ${JSON.stringify(finalConfig2)}`);

//* Step 3.

console.log('📋 Pending Tasks:');
console.log(formatTasks);

//* step 4.

if (highPriorityPendingTask) {
    console.log(`🚨 Urgent Task: ${highPriorityPendingTask.title}`);
} else {
    console.log("✅ All tasks completed!");
};


//TODO 🚀 Product Catalog Dashboard

//* 🎯 Project Overview:
//  We are developing a Product Catalog Dashboard for a fictional e-commerce platform.
//  This dashboard will allow us to:
//  • Manage products.
//  • Filter and search dynamically.
//  • Highlight premium items.
//  • Merge system configurations.
//  • Generate clean reports — all using pure JavaScript (arrays, objects, spread, chaining, etc.).

//* 🛒 Products Array

const products = [
    { name: 'Laptop Pro', price: 1500, category: 'Electronics', inStock: true, brand: 'NovaTech' },
    { name: 'Smartphone X', price: 900, category: 'Electronics', inStock: false, brand: 'TechEdge' },
    { name: 'Office Chair', price: 200, category: 'Furniture', inStock: true, brand: 'ComfortLine' },
    { name: '4K Monitor', price: 700, category: 'Electronics', inStock: true, brand: 'DisplayWorks' },
    { name: 'Wireless Headphones', price: 250, category: 'Accessories', inStock: true, brand: 'AudioMax' },
    { name: 'Gaming Desktop', price: 2200, category: 'Electronics', inStock: true, brand: 'NovaTech' },
    { name: 'Standing Desk', price: 500, category: 'Furniture', inStock: false, brand: 'ErgoFlex' },
];

//* ⚙️ Configurations

const defaultConfig3 = { currency: 'USD', showOutOfStock: false, theme: 'light' };
const userConfig3 = { currency: 'EUR', theme: 'dark' };
const envMode3 = 'production';

//* 🚀 Tasks:

//? 1️⃣ Merge Configurations
//  • Use ...spread to merge defaultConfig and userConfig.
//  • Add mode: envMode.
//  • Log the final config.

//? 2️⃣ Filter Products
//  • Only show products:
//      • That are in stock (respecting showOutOfStock setting).
//      • That cost >= 500.
//  • Use .filter().

//? 3️⃣ Format Product List
//  • Use .map() to format like:
//      - "Laptop Pro - €1500 [Electronics] by NovaTech"
//! (Hint: Use config.currency to decide € or $)

//? 4️⃣ Highlight Premium Products
//  • Count products where price > 1000 using .filter() or .some().
//  • Log:
//      - "🔥 2 premium products available!"

//? 5️⃣ Handle No Results
//  • If no products match filters ➔ log:
//      - "❌ No products available in this category."

//! Solution

//* Step 1.

const mergedConfig3 = { ...defaultConfig3, ...userConfig3 };
const finalConfig3 = { ...mergedConfig3, mode: envMode3 };
console.log(finalConfig3);

//* Step 2.

const showOutOfStock = products.filter(product => product.price >= 500);

const availableProducts = products.filter(product => {
    return finalConfig3.showOutOfStock 
        ? product.price >= 500 
        : product.inStock && product.price >= 500;
});

//* Step 3.

const currencySymbol = finalConfig3.currency === 'EUR' ? '€' : '$';
const formatProductList = availableProducts.map(product => `${product.name} - ${currencySymbol}${product.price} [${product.category}] by ${product.brand}`);

//* Step 4.

const premiumProducts = availableProducts.filter(product => product.price > 1000).length;

//* Step 5.

console.log(`⚙️ Config: ${JSON.stringify(finalConfig3)}`);

console.log('🛒 Available Products:');
console.log(formatProductList);

if (premiumProducts) {
    console.log(`🔥 ${premiumProducts} premium products available!`);
} else {
    console.log('❌ No products available in this category.');
};


//TODO  🚀 Mastery Check

//* ⚡Exercise 1: Team Expansion

const coreTeam = ['Alice', 'Bob'];
const newHires = ['Cara', 'Dan'];

//? ▶️ Task:
//  • Use ...spread to merge both teams.
//  • Insert "Eve" between them.
//  • Log the final team.

//! Solution

//* Step 1.

const mergedTeams = [...coreTeam, ...newHires];

//* Step 2.

const newTeamMember = [...coreTeam, 'Eve', ...newHires];

//* Step 3.

console.log(newTeamMember);

//* ⚡ Exercise 2: Config Override

const systemDefaults = { theme: 'light', notifications: true };
const userPrefs = { theme: 'dark' };
const env = 'staging';

//? ▶️ Task:
//  Merge configs so that userPrefs overrides defaults.
//  Add mode: env.
//  Log the final config.

//! Solution

//* Step 1.

const mergedConfigs = { ...systemDefaults, ...userPrefs };

console.log(mergedConfigs);

//* Step 2.

const newSettings = { ...mergedConfigs, mode: env };

//* Step 3.

console.log(newSettings);

//* ⚡ Exercise 3: Product Filter

const items = [
    { name: 'Phone', price: 800, inStock: true },
    { name: 'Laptop', price: 1200, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
];

//? ▶️ Task:
//  • Filter items in stock and price >= 700.
//  • Format as "Phone - $800".
//  • Log the list.

//! Solution

//* Step 1.

const filterItems = items.filter(item => item.inStock === true && item.price >= 700);

//* Step 2.

const formatItems = filterItems.map(item => `${item.name} - $${item.price}`);

//* Step 3.

console.log(formatItems);

//* ⚡ Exercise 4: Premium Count

const items2 = [
    { name: 'Phone', price: 800, inStock: true },
    { name: 'Laptop', price: 1200, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
];

//? ▶️ Task:
//  • Count how many items have price > 1000.
//  • If any, log: "🔥 X premium items!".
//  • Else, log: "No premium items available."

//! Solution

//* Step 1.

const countedItems = items2.filter(item => item.price > 1000).length;

if (countedItems > 0) {
    console.log(`🔥 ${countedItems} premium items!`);
} else {
    console.log('No premium items available.');
};

//* ⚡ Exercise 5: Safe Copy & Update

const settings = { theme: 'light', language: 'en' };

//? ▶️ Task:
//  • Create a safe copy using spread.
//  • Change language to 'fr' in the copy.
//  • Log both the original and updated copy.

//* Step 1.

const settingsCopy = { ...settings };

//* Step 2.

const newLanguage = { ...settingsCopy, language: 'fr' };

//* Step 3.

console.log(settingsCopy);
console.log(newLanguage);
