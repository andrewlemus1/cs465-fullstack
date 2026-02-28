# Travlr Getaways – Full Stack Web Application

## Project Overview
Travlr Getaways is a full-stack travel booking and management application built using a MEAN-style stack (MongoDB, Express, Angular, Node.js). The application includes a customer-facing website rendered with Express and a secure single-page application (SPA) admin interface built with Angular for managing trips.

This project demonstrates frontend and backend integration, RESTful API design, authentication, and NoSQL database management.

---

## Architecture

### Frontend Comparison: Express HTML vs. JavaScript vs. SPA

This project uses two frontend approaches to support different user experiences.

#### Express-Rendered HTML (Customer-Facing Site)
The customer-facing site uses **Express with server-side rendered HTML**.

**Advantages**
- Fast initial load for simple pages  
- SEO-friendly  
- Simple implementation for static content  

**Limitations**
- Full page reloads required  
- Less dynamic user experience  

---

#### JavaScript Enhancements
JavaScript improves interactivity on Express pages by enabling:
- Form validation  
- Dynamic UI updates  
- Improved user experience  

---

#### Angular Single-Page Application (Admin SPA)
The admin interface is built as an **Angular SPA**, allowing administrators to manage trips without page reloads.

**Advantages**
- Dynamic updates without refreshing  
- Faster performance after initial load  
- Component-based architecture  
- Improved user experience for data management  

**Limitations**
- Higher initial load time  
- More complex setup  

---

### Why MongoDB (NoSQL) Was Used

MongoDB is a NoSQL document database that stores data in flexible JSON-like documents.

**Benefits**
- Flexible schema for evolving trip data  
- Seamless integration with JavaScript/Node.js  
- Efficient storage of nested data  
- Scalable for modern web applications  

MongoDB aligns naturally with the JSON-based API used to communicate between frontend and backend.

---

## Functionality

### JSON vs. JavaScript and Their Role

| JavaScript | JSON |
|------------|------|
| Programming language | Data format |
| Contains logic & functions | Data-only (key-value pairs) |
| Used to build apps | Used to transfer data |

### How JSON Connects Frontend and Backend
1. Angular SPA sends HTTP requests to the Express API  
2. Backend retrieves data from MongoDB  
3. Data is returned as JSON  
4. Frontend dynamically renders the data  

JSON acts as the **bridge** between frontend and backend systems.

---

### Refactoring & Reusable UI Components

#### Refactoring Improvements
- Consolidated repeated API calls into reusable services  
- Simplified route handlers for readability  
- Improved form validation logic  

#### Reusable Angular Components
- Trip cards  
- Edit trip forms  
- Navigation bar  

**Benefits**
- Reduced duplicate code  
- Easier maintenance  
- Faster development  
- Consistent UI  
- Improved scalability  

---

## Testing

### API Methods Used
The application uses RESTful endpoints:

### API Testing with Postman
Postman was used to:
- Send HTTP requests  
- Verify JSON responses  
- Validate CRUD operations  
- Check status codes  

#### Challenges Encountered
- CORS errors between frontend and backend  
- Authorization failures on protected routes  
- 404 errors from incorrect endpoints  
- JSON formatting issues  

---

### Security Considerations
Security adds complexity to testing because protected routes require authentication.

**Key Considerations**
- Protecting admin routes  
- Preventing unauthorized data modification  
- Validating user input  
- Handling authentication tokens  

These measures help ensure data integrity and safe application use.

---

## Reflection

This course played a major role in helping me move toward my goal of becoming a software engineer. Through the Travlr Getaways full-stack project, I gained hands-on experience building a complete web application and strengthened my confidence as a developer.

### Skills Developed
- Building RESTful APIs with Node.js & Express  
- Creating dynamic UIs with Angular  
- Managing data with MongoDB & Mongoose  
- Testing endpoints with Postman  
- Debugging full-stack integration issues  
- Designing reusable UI components  
- Understanding authentication & security  

These skills are directly applicable to real-world software engineering roles and have made me a more marketable candidate. Integrating frontend and backend technologies helped me understand how full-stack systems operate in production environments.

As I prepare to graduate in **June 2026**, this course has reinforced my interest in full-stack development and strengthened my readiness to contribute to modern web applications in a professional setting.

---

## Author
**Andrew Lemus**  
B.S. Computer Science – Software Engineering  
Southern New Hampshire University  
Expected Graduation: June 2026
