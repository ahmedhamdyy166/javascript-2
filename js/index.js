var quotes = [
    "Be yourself; everyone else is already taken. - Wayne Gretzky",
    "Two things are infinite: the universe and human stupidity. - Albert Einstein",
    "So many books, so little time. -Frank azppa",
    "Be the change that you wish to see in the world - Mathma Ghandy",
    "You only live once, but if you do it right, once is enough. - Mae West"  

  ];
  
  function getQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("Quote").innerHTML = quotes[random];
  }
  