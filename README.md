# **WorldCup Insights**

**WorldCup Insights** is a dynamic, state-driven React application designed to visualize and analyze historical FIFA World Cup Finals data. Built with a focus on interactive user experience, the platform allows fans and data enthusiasts to sort match records by key statistics and apply complex filters to track the performance of specific national teams over time.

---

## **Key Features**

* **Multi-Directional Data Sorting:**
    * **Three-State Logic:** Users can click table headers to cycle through **Ascending**, **Descending**, and **Unsorted** views.
    * **Visual Indicators:** Integrated `SortButton` components provide real-time UI feedback, highlighting active columns and indicating the current sort direction.
* **Advanced Team Filtering:**
    * **Controlled Form Integration:** Features a robust "Team Select" form that synchronizes user input (dropdowns and checkboxes) with the application state.
    * **Conditional Result Mapping:** Users can filter results by winner or expand the search to include "Runner-Up" appearances, offering a deeper look at team consistency.
* **Seamless State Synchronization:** Utilizes "State Lifting" patterns where filtering criteria are managed in the parent `App` component to ensure high-performance data flow between sibling components (`TeamSelectForm` and `GameDataTable`).
* **Optimized Performance:** Leverages **Lodash** for efficient array manipulation and sorting, ensuring smooth UI transitions even when processing large historical datasets.

---

## **Technical Stack**

* **Framework:** [React.js](https://reactjs.org/)
* **State Management:** React Hooks (`useState`)
* **Logic & Utilities:** [Lodash](https://lodash.com/) (`sortBy`, `reverse`)
* **Styling:** Modern CSS with "Active-State" button highlighting
* **Data Source:** Historical FIFA World Cup Finals Records

---

## **How It Works**

1.  **Dynamic Table Generation:** The `GameDataTable` maps raw JSON data into interactive rows using unique keys based on match years.
2.  **State-Driven UI:**
    * When a user selects a sorting criteria, the `sortByCriteria` and `isAscending` states are updated.
    * The data is re-sorted in real-time before being passed to the rendering engine.
3.  **Cross-Component Communication:** * The `TeamSelectForm` captures user preferences locally.
    * Upon clicking "Apply Filter," these values are sent via a callback to the `App` component.
    * The `App` filters the primary dataset and passes the `displayedData` subset down to the table for visualization.

---

## **Installation & Setup**

To run **WorldCup Insights** locally, ensure you have [Node.js](https://nodejs.org/) installed:

1.  **Clone the repository** and enter the project directory:
    ```bash
    cd worldcup-insights-react
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the development server**:
    ```bash
    npm start
    ```

4.  **Explore**: Open `http://localhost:3000` in your browser to begin exploring World Cup history.

---

## **Component Architecture**

* **`App.js`**: Orchestrates global filtering state and data distribution.
* **`GameDataTable.js`**: Manages internal sorting logic and table interactivity.
* **`TeamSelectForm.js`**: A controlled component handling user input for search criteria.
* **`GameDataRow.js`**: A purely functional component for rendering individual match records.

---

**Developed by:** Amartya Chaube  
**Mission:** Transforming static sports history into interactive, data-driven narratives.
