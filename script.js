function countWordsFromFile(file) {
    var reader = new FileReader();

    // Define a callback function to handle file reading
    reader.onload = function(event) {
        var inputText = event.target.result;

        // Convert the input text to lowercase
        inputText = inputText.toLowerCase();

        // Split the input text into words using whitespace as delimiter
        var words = inputText.split(/\s+/).map(function(word) {
            return word.trim();
        });

        // Create an object to store word counts
        var wordCounts = {};

        // Count the occurrences of each word (skipping empty words)
        words.forEach(function(word) {
            if (word !== '') { // Check if the word is not empty
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            }
        });

        // Sort word counts by count in descending order
        var sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

        // Create a table element
        var table = document.createElement('table');
        table.classList.add('word-table');

        // Create table header
        var thead = table.createTHead();
        var headerRow = thead.insertRow();
        var wordHeader = document.createElement('th');
        wordHeader.textContent = 'Word';
        headerRow.appendChild(wordHeader);
        var countHeader = document.createElement('th');
        countHeader.textContent = 'Count';
        headerRow.appendChild(countHeader);

        // Create table body
        var tbody = table.createTBody();
        sortedWordCounts.forEach(function(entry) {
            var word = entry[0];
            var count = entry[1];
            var row = tbody.insertRow();
            var wordCell = row.insertCell();
            wordCell.textContent = word;
            var countCell = row.insertCell();
            countCell.textContent = count;
        });

        // Clear the output div
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        // Append the table to the output div
        outputDiv.appendChild(table);
    };

    // Read the content of the selected file
    reader.readAsText(file);
}

function handleFileSelect(event) {
    // Get the selected file from the input element
    var file = event.target.files[0];

    // Call countWordsFromFile function with the selected file
    countWordsFromFile(file);
}
