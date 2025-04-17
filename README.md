# Contact Company Jobs

A web application providing access to a searchable and filterable list of companies, including their emails and locations. Data is dynamically fetched from a Google Sheets document (in CSV format) and presented in an interactive table.

## Features

* **Dynamic Data Retrieval:** Automatically fetches and updates company information from a Google Sheets CSV.
* **Interactive Table:** Presents data in an easy-to-navigate table format.
* **Search Functionality:** Allows users to quickly search for specific companies or information.
* **Filtering:** Enables users to filter the company list based on various criteria (e.g., location).
* **Data Export:** Supports exporting the displayed data in multiple formats:
    * CSV
    * Excel (XLSX)
    * PDF
    * Clipboard Copy
* **Responsive Design:** Built with **Bootstrap 5** to ensure optimal viewing on various devices.
* **Enhanced Browsing:** Utilizes **DataTables.js** to provide features like:
    * Pagination
    * Sorting (by column)
    * Advanced Search

## Technologies Used

* **HTML**
* **CSS**
* **JavaScript**
* **Bootstrap 5:** For responsive layout and styling.
* **DataTables.js:** For interactive table features (pagination, sorting, search, export).
* **Potentially a server-side language (e.g., Python, Node.js) for fetching and processing the CSV data (though not explicitly stated, it's likely needed for automated retrieval).**

## How It Works

1.  The application (likely through JavaScript or a backend process) fetches the company data from a publicly accessible Google Sheets document exported as a CSV file.
2.  The CSV data is parsed and dynamically rendered into an HTML table.
3.  DataTables.js enhances this table with interactive features like search, sorting, and pagination.
4.  Bootstrap 5 ensures the application layout adapts to different screen sizes.
5.  Export functionalities allow users to download or copy the displayed data in their preferred format.

## Skills Highlighted

This project demonstrates proficiency in:

* **API Integration:** Fetching data from an external source (Google Sheets CSV).
* **Dynamic Data Manipulation (JavaScript):** Parsing and displaying data dynamically in the browser.
* **Frontend Development:** Creating intuitive and user-friendly interfaces with HTML, CSS, and JavaScript.
* **Responsive Design:** Utilizing Bootstrap 5 for cross-device compatibility.
* **Interactive Data Tables:** Implementing advanced table functionalities with DataTables.js.
* **Querying Business Information:** Building tools for efficient searching and filtering of business data.
