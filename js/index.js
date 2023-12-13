const arrayQuotes = [
    {
        'author': 'John Green, The Fault in Our Stars',
        'quote': 'The marks humans leave are too often scars.'
    },
    {
        'author': 'Suzanne Collins, The Hunger Games',
        'quote': 'Remember, we\'re madly in love, so it\'s all right to kiss me anytime you feel like it.'
    },
    {
        'author': 'Jane Austen, Pride and Prejudice',
        'quote': 'A lady\'s imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.'
    },
    {
        'author': 'C.S. Lewis',
        'quote': 'Some day you will be old enough to start reading fairy tales again.'
    },
    {
        'author': 'Kurt Vonnegut, Mother Night',
        'quote': 'We are what we pretend to be, so we must be careful about what we pretend to be.'
    },
    {
        'author': 'J.M. Barrie, Peter Pan',
        'quote': 'To die will be an awfully big adventure.'
    },
    {
        'author': 'Stephen Chbosky, The Perks of Being a Wallflower',
        'quote': 'And in that moment, I swear we were infinite.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Anyone who has never made a mistake has never tried anything new.'
    },
    {
        'author': 'Stephen King, On Writing: A Memoir of the Craft',
        'quote': 'Books are a uniquely portable magic.'
    },
];

function NewQuote() {
    const random = Number.parseInt(Math.random() * arrayQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `${arrayQuotes[random].author}`;

}
