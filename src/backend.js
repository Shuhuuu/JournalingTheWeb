var express = require('express');
var app = express();

app.get('/api/v0/news', function (req, res) {

  var data = {
    "news": [
      {"headline": "This is a news headline", "body": 
      "Hallo, könntet ihr mir eine Montage zu folgendem Bild rechnen? Am besten einen der diversen James-Bond-Darsteller plus ein Justiz-Sujet - etwa die Justitia. Bitte im Tagesordner des Studios Koblenz ablegen - danke!
Urteil: Westerwälder darf nicht James Bond heißen

Koblenz (dpa/lrs) - «Mein Name ist Bond, James Bond»: Ein Westerwälder ist mit seiner Klage für eine besondere Namensänderung gescheitert. Das Verwaltungsgericht Koblenz wies sie nach Mitteilung vom Dienstag ab. Der Mann darf somit nicht offiziell den Namen des berühmtesten Geheimagenten der Welt tragen.
 
 Er hatte dies zuvor schon vergeblich bei seiner Verbandsgemeinde Bad Marienberg beantragt. Daraufhin erhob er Klage: Mehrere Ärzte hätten die Namensänderung befürwortet. Das Gericht urteilte dagegen, eine Änderung des Vor- und Familiennamens in James Bond wegen angeführter familiärer Probleme sei nicht gerechtfertigt. Der Kläger habe nicht nachvollziehbar erklärt, dass der Familienkrach mit einem anderen Namen beigelegt werden könnte.
 
 Zudem handele es sich bei James Bond um einen Namen aus Film und Literatur. Auch in Kombination mit dem jetzigen Vornamen des Klägers würde dieser Name stets mit der von Ian Fleming erfundenen Figur des britischen Geheimagenten in Verbindung gebracht. Gegen das Urteil kann die Berufung beim Oberverwaltungsgericht Rheinland-Pfalz in Koblenz beantragt werden.
.."},
      {"headline": "This is another news headline", "body": "Nice"}
    ]
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.use('/', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

