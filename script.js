var createPolitician = function (name, color) {
 
    var politician = {}; 
    politician.name = name; 
    politician.color = color;
    politician.electionResults = null;
    politician.totalVotes = 0;
  
    politician.addingUpTotalVotes = function()
{
      this.totalVotes = 0;
  
      for (var i = 0; i < this.electionResults.length; i++)
  {
      this.totalVotes = this.totalVotes + this.electionResults[i];

  }
  
};
    
    return politician;
 
};
 
var merritt = createPolitician("Merritt Chastain", [132, 17, 11]);
 
var kate = createPolitician("Kate Moore", [245, 141, 136]);

merritt.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

kate.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1,3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

// update the array with new votes
merritt.electionResults[9] = 1;
kate.electionResults[9] = 28;
 
merritt.electionResults[4] = 17;
kate.electionResults[4] = 38;
 
merritt.electionResults[43] = 11;
kate.electionResults[43] = 27;
 
//determines winner of each state
var setStateResults = function(state)
{   
  theStates[state].winner= null;
  
  if (merritt.electionResults[state] > kate.electionResults[state]) {
     theStates[state].winner = merritt;
  }
  
  else if (merritt.electionResults[state] < kate.electionResults[state]) {
     theStates[state].winner = kate;
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color; 
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  //to set stateResults table variable positions
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0]
  var stateAbbrev = header.children[0].children[1];
  var candidateOneName = body.children[0].children[0];
  var candidateOneResults = body.children[0].children[1];
  var candidateTwoName = body.children[1].children[0];
  var candidateTwoResults = body.children[1].children[1];
  var winnerName = body.children[2].children[1];
  
  //to populate stateResults variables with text
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")"
  candidateOneName.innerText = merritt.name;
  candidateOneResults.innerText = merritt.electionResults[state];
  candidateTwoName.innerText = kate.name;
  candidateTwoResults.innerText = kate.electionResults[state];
  
  if (theStates[state].winner === null){
    winnerName.innerText = "DRAW";
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
}

merritt.addingUpTotalVotes();
kate.addingUpTotalVotes();

//to determine who is the winner - total votes
var winner = "?"

if (merritt.totalVotes > kate.totalVotes) {
  winner = merritt.name;
}
else if (kate.totalVotes > merritt.totalVotes) {
  winner = kate.name;
}
else {
  winner = "Draw"
}

//to populate total votes table at the top of the map 
var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0].children[0];

row.children[0].innerText = merritt.name;
row.children[1].innerText = merritt.totalVotes;
row.children[2].innerText = kate.name;
row.children[3].innerText = kate.totalVotes;
row.children[5].innerText = winner;


console.log(merritt.electionResults);
console.log(kate.electionResults);
console.log(merritt.totalVotes);
console.log(kate.totalVotes); 
console.log("Merritt's color is " + merritt.color);
console.log("Kate's color is " + kate.color); 
console.log("And the winner is: " + winner + "!");