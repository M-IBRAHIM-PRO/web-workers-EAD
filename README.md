# Web Data Processing Application

## Overview

This web application is designed to showcase the use of Web Workers in a data processing scenario. It features an always-running counter on the front-end while performing the sorting of 10 million randomly generated numbers in the background using Web Workers. The application provides insights into the performance improvements achieved through the use of Web Workers.

## How to Run Locally

Follow these steps to run the project on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/M-IBRAHIM-PRO/web-workers-EAD.git                                                                                                                                                                
  
  
  
  
   ```

2. Navigate to the project directory:

   ```bash
   cd web-data-processing-app
   ```

3. Open the `index.html` file in your preferred web browser.

4. Click the "Start Processing" button to initiate the data processing. The counter will keep running, and you'll see the processing loader until the sorting is complete.

## Performance Findings

The use of Web Workers in this application demonstrates significant performance improvements, especially when dealing with heavy data processing tasks. The parallel execution of sorting tasks in the background allows the front-end to remain responsive, providing a seamless user experience.

## Challenges Faced and Solutions

### Challenge 1: Web Worker Understanding
The understanding of setting up and communicating with Web Workers posed an initial challenge. Ensured proper communication and data transfer between the main thread and worker threads by utilizing the `postMessage` and `onMessage` API.

### Challenge 2: UI Responsiveness
Maintaining UI responsiveness while performing heavy sorting tasks was a concern. Utilized a loading spinner and asynchronous processing to ensure the counter continues running smoothly on the main thread.

## References/Resources

- [MDN Web Docs - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)                    
                      
## Project Demo
Project is hosted on **vercel** for the demo purpose. Click the link below:                                        
  
  

-[Demo project](https://web-workers-ead.vercel.app/)
  
