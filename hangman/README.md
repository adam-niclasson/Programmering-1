1. ge instruktioner till spelaren om hänga gubbe
2. skapa en array med ord som slumpas med hjälp av math.random
   2.1 använd ett ord som du själv lägger in(valfritt)
3. skapa x antal _ som ersätter bokstäverna
   3.1 om spelaren gissar rätt bokstav så ersätts _ med ex "a"
   3.2 gissar spelaren fel så stannar _ som _
4. meddela spelaren om gissningen är rätt respektive fel
5. spelaren får bara gissa EN bokstav i taget
6. spara spelarens gissning så både programmet kommer ihåg vad spelaren gissat och även så spelaren kan se sina gissningar.
7. är hela ordet gissat innan dem 7 gissningarna är slut så avslutas spelet och spelaren vinner
   7.1 om spelaren får slut på gissningar så avslutas spelet och spelaren har förlorat.
8. du är nu klar, börja programmera och problemsök
9. Let the game begin :)



// Vilken extra funktionalitet har du tänkt implementera?
//Jag her en funktion som kommer ge spelaren instruktioner på hur man spelar hänga gubbe
//När spelaren gissat rätt på ordet som valts så kommer det fram en alert ruta som grattulerar spelaren

// Vilka variabler behöver du och till vilket syfte? Här vill jag ha med variabelnamn, datatyp och en förklaring på vad variabeln är till för - på varje variabel.
// den första variabeln jag har i min kod är 'guessingword' vilket är variabeln som håller i det valda ordet som spelaren ska gissa på.
//den andra variabeln i min kod är 'leftOver' dock är detta inte bara en variabel utan en del av min while loop
//men dess användnings område är att hålla koll på vad spelaren gissar, gissat och kvarstående bokstäver. Även att spelaren gissar en bokstav och inte fler än en, 

// Vilka olika konstrollstrukturer behövs och till vilket syfte? (Loopar, villkor, etc.) Var så detaljerad som möjligt.
// Det kommer behövas iaf en while loop, och i den loppen så kommer sjävla hänga gubbe utspela sig, där du gissar en bokstav,
// får rätt eller fel, till du antingen gissat rätt ord, eller att gubben hängs och du förlorar spelet.
//

// Vilken funktionalitet kan (och borde) du skapa funktioner av? Här vill jag ha funktionsnamn, returtyp, eventuella parametrar samt vad funktionen ska göra.
//Jag ska ha en funktion som ger spelaren regler innan spelet börjat, en funktion som ger spelaren sin 'progress' i spelet.
//en som väljer ett randomiserat ord och en som håller i det valda ordet och kommer ihåg det.

// Vilka variabler behöver vara åtkomliga inom hela klassen?
Jag har några stycker variabler som behöver kommas åt i hela klassen, som arrayn med gissningarna som är rätt och fel för spelare, sen även arrayn med det valda ordet som behöver kommas åt på fler än ett ställe.