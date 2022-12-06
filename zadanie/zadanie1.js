const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i];

        if (vowels.indexOf(currentLetter) != -1) {
            extractedVowels = extractedVowels + currentLetter;
        }

    }
    return extractedVowels;
}

console.log(getVowels(string));