# FMSCA Data Viewer

## Overview

The FMSCA Data Viewer project is a web application built using React and Material-UI to display transportation company data. The application supports search, filtering, and pagination, providing a smooth and user-friendly experience.

## Requirements

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
  ```bash
    git clone <[https://github.com/jamaln02/FMSCA-Viewer.git](https://github.com/jamaln02/FMSCA-Viewer.git)>
    cd <spotter-task>
```
2. Install dependencies:
```bash
   npm install
   # or
   yarn install
```

## Running the Application

1. Start the local server:
```bash
   npm run dev
```
   # or
```
   yarn dev
```
2. Open your browser and navigate to:

   http://localhost:3000

## Project Structure

- public/: Contains static files like data.csv.
- src/: Contains all the source files for the project.
  - components/: Contains the main components of the application.
    - DataTable.jsx: Main component for displaying data in a table.
    - Filter.jsx: Component for search and filtering.
    - Pagination.jsx: Component for pagination.
  - App.jsx: Main application file.
  - index.css: General CSS styles.
  - main.jsx: Main entry file for the application.

## How to Use the Application

1. _Data Display_: The application displays data in a table that can be searched and filtered based on the operational status.

2. _Search_: You can use the search bar to look for transportation companies by their legal name.

3. _Filter_: You can select the operational status to filter the companies.

4. _Pagination_: You can navigate between pages using the pagination component.

## Known Issues

- No known issues at the moment.

## Contributions

Contributions to improve the project are welcome. Please open an issue or submit a pull request on the GitHub repository.

## Contact

If you have any questions or inquiries, you can contact us at:

- jamalnabaa.dev@gmail.com
