import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class WordCounter {
    public static void main(String[] args) {
        // Path to the input file
        // String filePath = "input.txt";

        try {
            // Create a BufferedReader to read from the input file
            BufferedReader reader = new BufferedReader(new FileReader("C:/Users/Satyajeet/OneDrive/Desktop/project/input.txt"));

            // Create a HashMap to store word counts
            Map<String, Integer> wordCountMap = new HashMap<>();

            // Read each line from the file
            String line;
            while ((line = reader.readLine()) != null) {
                // Split the line into words based on comma separator
                String[] words = line.split(",\\s*");

                // Count the occurrences of each word and update the wordCountMap
                for (String word : words) {
                    // Remove leading and trailing whitespace from the word
                    word = word.trim();

                    // Increment the count of the word in the map
                    wordCountMap.put(word, wordCountMap.getOrDefault(word, 0) + 1);
                }
            }

            // Close the BufferedReader
            reader.close();

            // Print the word counts
            for (Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
                System.out.println(entry.getKey() + "=" + entry.getValue());
            }

        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }
}
