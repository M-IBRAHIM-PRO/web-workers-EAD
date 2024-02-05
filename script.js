document.getElementById('start-processing').addEventListener('click', () => {
    const arraySize = 1000000; // 1 million
    document.querySelector('.loader-container').style.display = 'block';
    const array = generateRandomArray(arraySize);

    // Start sorting in the background
    const sortingWorker = new Worker('sorting-worker.js');
    const startTimeWithWorker = performance.now();
    sortingWorker.postMessage(array);

    // Handling the sorting completion
    sortingWorker.onmessage = event => {
        const sortedArray = event.data;
        const endTimeWithWorker = performance.now();
        const timeWithWorker = endTimeWithWorker - startTimeWithWorker;

        // Stop the counter update
        document.querySelector('.loader-container').style.display = 'none';

        // Display the results
        displayResults(timeWithWorker);
    };
});

function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size*10; i++) {
        array.push(Math.random());
    }
    return array;
}

function displayResults(timeTaken) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
      <p>Time taken to sort 1 million data in background: ${timeTaken.toFixed(2)} ms</p>
    `;
}

const updateCounter = () => {
    counter++;
    document.getElementById('counter').textContent = counter;
    requestAnimationFrame(updateCounter);
};

let counter = 0;
setTimeout(updateCounter);
