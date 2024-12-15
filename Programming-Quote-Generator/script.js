const quotes = [
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "Truth can only be found in one place: the code. - Robert C. Martin",
    "Code is like humor. When you have to explain it, it’s bad. - Cory House",
    "Fix the cause, not the symptom. - Steve Maguire",
    "Optimism is an occupational hazard of programming: feedback is the treatment. - Kent Beck",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed. - Martin Fowler",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "Before software can be reusable it first has to be usable. - Ralph Johnson",
    "Make it work, make it right, make it fast. - Kent Beck",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "In order to be irreplaceable, one must always be different. - Coco Chanel",
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
    "Knowledge is power. - Francis Bacon",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
    "Ruby is rubbish! PHP is phpantastic! - Nikita Popov",
    "Code never lies, comments sometimes do. - Ron Jeffries",
    "The best way to get a project done faster is to start sooner. - Jim Highsmith",
    "The only way to go fast, is to go well. - Robert C. Martin",
    "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. - Eagleson’s Law",
    "Testing leads to failure, and failure leads to understanding. - Burt Rutan",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only thing worse than a bug in your code is two bugs in your code. - Chris Pine",
    "You can’t have great software without a great team, and most software teams behave like dysfunctional families. - Jim McCarthy",
    "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
    "It’s not a bug – it’s an undocumented feature. - Anonymous",
    "It’s not about having the right opportunities. It’s about handling the opportunities right. - Mark Hunter",
    "Deleted code is debugged code. - Jeff Sickel",
    "The best performance improvement is the transition from the nonworking state to the working state. - John Ousterhout",
    "Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
    "There are two ways to write error-free programs; only the third one works. - Alan J. Perlis",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray",
    "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. - Gerald Weinberg",
    "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
    "To iterate is human, to recurse divine. - L. Peter Deutsch",
    "I don’t care if it works on your machine! We are not shipping your machine! - Vidiu Platon",
    "The cheapest, fastest, and most reliable components are those that aren’t there. - Gordon Bell",
    "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. - Anonymous",
    "The function of good software is to make the complex appear to be simple. - Grady Booch",
    "I think it’s a new feature. Don’t tell anyone it was an accident. - Larry Wall",
    "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. - Eric S. Raymond",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Anonymous",
    "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. - Stan Kelly-Bootle",
    "How does a project get to be a year late? One day at a time. - Fred Brooks",
    "Controlling complexity is the essence of computer programming. - Brian Kernighan",
    "What one programmer can do in one month, two programmers can do in two months. - Fred Brooks",
    "The Internet? Is that thing still around? - Homer Simpson",
    "There are only two kinds of programming languages: those people always bitch about and those nobody uses. - Bjarne Stroustrup"
];
document.getElementById('generate-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = getRandomColor();
    const quoteElement = document.getElementById('quote');
    
   
    quoteElement.style.color = randomColor;
    quoteElement.innerText = quotes[randomIndex];
});

function getRandomColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    return `rgb(${r}, ${g}, ${b})`;
}
