var quotes = ["Nobody who ever gave his best regretted it - George Halas" , 
"The best way to find yourself is to lose yourself in the service of others -Mahatma Gandhi",
"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing - Theodore Roosevelt",
"To give anything less than your best, is to sacrifice the gift - Steve Prefontaine",
"The best way to predict the future is to create it - Peter Drucker",
"Knowing your own darkness is the best method for dealing with the darknesses of other people - Carl Jung",
"The best way to keep one\'s word is not to give it- Napoleon Bonaparte",
"The best revenge is to be unlike him who performed the injury - Marcus Aurelius",
"Living well is the best revenge - George Herbert"]

var QuoteCard = document.getElementById("QuoteCard")
function qdisplay(){
    var a = Math.floor(Math.random() * quotes.length)
    QuoteCard.innerHTML = quotes[a]

}









