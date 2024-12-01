const arrayOfQuotes = [
    {'author': 'Marilyn Monroe', 
     'quote': 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
