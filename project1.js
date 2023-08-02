//Variables
let btn= document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
 
// array for all of our quotes, 15 in total
const quotes= [ {quote: '"You can fool all of the people some of the time, and some of the people all of the time, but you cannot fool all of the people all of the time."', person: 'Abraham Lincoln'}, {quote: '"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference."', person:'Robert Frost' }, {quote: '"Tis better to have loved and lost than never to have loved at all."', person:'Alfred Lord Tennyson' },{quote: '"Donot judge each day by the harvest you reap but by the seeds that you plant."', person:'Robert Louis Stevenson' }, {quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."', person: 'Helen Keller'}, {quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."', person:  'Benjamin Franklin' },
{quote: '"Life is never fair, and perhaps it is a good thing for most of us that it is not."', person: 'Oscar Wilde'}, {quote: '"You only live once, but if you do it right, once is enough."', person:'Mae West' }, {quote: '"Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do."', person: 'Mark Twain'}, {quote: '"Great minds discuss ideas; average minds discuss events; small minds discuss people."', person:'Eleanor Roosevelt' }, {quote: '"Life is like a box of chocolates. You never know what you are going to get."', person:'Forrest Gump' }, {quote: '"In three words I can sum up everything I have learned about life: It goes on."', person:'Robert Frost' },
{quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', person:'Nelson Mandela' }, {quote: '"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."', person:'Harriet Tubman' }, {quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."', person:'Winston Churchill' }];

btn.addEventListener('click', function(){

    let random = Math.random();
    random = random * (quotes.length);
    random= Math.floor(random);
    quote.innerText = quotes[random].quote ;
    person.innerText = quotes[random].person;


})