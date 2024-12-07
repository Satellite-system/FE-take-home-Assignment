# Frontend Assignment: Dynamic Table with Dropdown Selection

### Initial Screen
When no Api is Called or Api is called but there is no data received from that api 
![image](https://github.com/user-attachments/assets/5907209c-bf14-4487-b245-9efe90c8396f)


## 1. Assignment Overview

### Objective  
Build a **React application** that displays data in a table, allowing users to switch between different data sources using a dropdown menu. The goal is to create a simple yet polished user experience with a focus on clean design and usability.

### Note  

We value **attention to detail, clean design, and thoughtful execution**. The code doesn’t need to be production-ready but should reflect quality.  
Feel free to exceed requirements and update the README with any bonus features or improvement ideas.  

---

## 2. Getting Started

1. **Clone and Fork**  
   - Fork the assignment repository: [FE-take-home Repo](https://github.com/sarthakb657/FE-take-home).  
   - Clone your forked repository to your local machine.

2. **Start Development**  
   - Install the dependencies.  
   - Start the development server.  

   The app will run at [http://localhost:3000](http://localhost:3000).  



## 3. Design Reference

Refer to the [Figma design file](https://www.figma.com/design/gJ3UgzzhS41hJpyuxgbVR4/Frontend-assignment?node-id=2127-188&t=aFTI90flpSf1BTeN-1) for guidance on the layout and styling.

---

## 4. Backend API

The application will fetch data from the following endpoints:

- **Posts**:  
  [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
  Columns to display: **ID**, **Title**

- **Comments**:  
  [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)  
  Columns to display: **ID**, **Name**

API calls should dynamically update the table content based on the dropdown selection.

---

## 5. Tasks / Deliverables

### Tasks  

1. **Dropdown**  
   - Create a dropdown with two options: `Posts` and `Comments`.  
   - Fetch data from the selected API endpoint.  
   - Dynamically update the displayed table without page reloads.

2. **Table (Reusable Component)**  
   - Create a nested `TableComponent` to handle table rendering.  
   - Pass fetched data and column configurations as props.  
   - Ensure appropriate columns are displayed:  
     - For **Posts**: `ID` and `Title`  
     - For **Comments**: `ID` and `Name`  

3. **Pagination**  
   - Implement pagination to display **10 rows per page**.  
   - Include navigation controls (Previous, Next, Page Numbers) below the table.

4. **Download Button**  
   - Add a "Download" button below the table to export the currently displayed data.

### Bonus Task (Optional)  
- Add a loading spinner while data is being fetched.

---

## 6. Submission Guidelines

1. **Complete the Assignment**  
   - Finish the assignment in your forked repository.  

2. **Share Your Work**  
   - Share the public link to your forked repository, including any added instructions and assumptions, with us.  
   - Email your submission to [hr@columsprout.ai](mailto:hr@columsprout.ai).


---

## 7. Evaluation Criteria

We’re looking for a sleek, user-friendly design that stays true to the provided Figma and delivers a seamless experience. Show off your creativity with thoughtful touches, attention to detail, or unique enhancements to really make your submission stand out!

---

Best of luck. We are excited to see your work.
