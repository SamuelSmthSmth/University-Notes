## Overall Plan

- [ ] R code
	- [x] Get DataSpell working with R
	- [x] Further get DataSpell to work with packages
	- [x] Import packages and CSV files
	- [ ] Review ***prop_item_correct*** in ***tda_key.csv***
	- [ ] Graphics
		- [x] Create comparison graph for TDA test for education levels College/university degree (4 yr) and Less than 12 years
		- [ ] Create graph comparing ***prop_item_correct*** and ***gbooks_freq***
- [ ] Documentation of work
	- [x] Read through brief
	- [x] Describe the purpose of the study, how the study was conducted, including how participants were selected
	- [ ] Note down analysis results from ***test_results.csv*** 
	- [ ] Describe TDA test variable duration
	- [ ] Interpret values in ***gbooks_freq***

## Written work and understanding

### Purpose of study, alongside methods and selection process

The purpose of the study was to update the U.S English Lexicon, analyse and evaluate the average U.S citizens familiarity with the words used within research papers, improve generalisability, and provide an free, open, and accissible database of terms to encourage further use of them within psychology research.

There were 4 main steps in which the study was performed: first was aggregating a list of trait descriptive adjectives, alongside each of their definitions from the Oxford Dictionary website (sourced individually to ensure relevancy to personality), before creating two multiple choice vocabulary questions from each term-definition pair (with distractors and other possibility options), and finally administering 75 questions (at random) from each form making sure that each participant consented to not looking up the definitions of each word.

Each participant was selected considering a number of factors; the gender, race, educational level, residency and language were all factored in when deciding upon the allowed participants. Those who completed the study were also compensated with $2.50 US dollars (approximate equivalent to the U.S federal minimum wage at the time of data collection).

### Variable 'duration' analysis

The variable *duration* measures the time in seconds taken by participants to complete the study. The distribution of these times was highly right-skewed, indicated by a large positive skewness (approx. 39.3). While the mean duration was 1,156 seconds, this value was heavily influenced by extreme outliers, including a maximum duration of 244,941 seconds (approximately 68 hours).

Because of this skew, the median is a more robust measure of central tendency than the mean. The median duration was **853 seconds** (approx. 14 minutes). The spread of the data for the middle 50% of participants is best described by the Interquartile Range (IQR), which was **467.5 seconds**. Most participants (the middle 50%) completed the test between 673.5 seconds (1st Quartile) and 1,141 seconds (3rd Quartile).

- **Median:** 853
- **Mean:** 1,155.98 (rounded to 1,156)
- **Max:** 244,941
- **1st Quartile (25%):** 673.
- **3rd Quartile (75%):** 1,141 
- **IQR:** 1,141 - 673.5 = 467.5

### Interpret values in "gbooks_freq"

The values in the gbooks_freq column represent the standardized frequency (z-score) of each adjective based on the Google Books database. A positive value indicates that the adjective appears **more frequently** than the average word in the list of the 50,000 most common words. Therefore, positive values denote words that are highly familiar and commonly used in the English language.

