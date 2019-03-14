 //purpose of first function is to add the new person to the end of the currentline 
function takeANumber (currentLine, newName){
  currentLine.push (newName); 
    //currentLine is an array, we need to add the newName to the existing array
   // deli line = currentline + the new person, the new person's position in line is the index of their position in the array +1, if we add them to the currentline 
   return ("Welcome, " + newName + ". You are number " + currentLine.length + " in line.");
}


//accept the current line of people and return the first person in line, then remove that individual from the line 
function nowServing (katzDeliLine){
  var i = 0;
  while (i>0){
  ("Currently serving " + katzDeliLine[0]);
    katzDeliLine.unshift [0]; 
  i++;
  }
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

//accepts current line of people and returns it as string 
function currentLine(line){
  numberedLine = [];
  for (let i = 0; i < line.length; i++){
   numberedLine.push( `${i}. ${line[i]}` );
  }
    if (line.length===0) {
    return "The line is currently empty.";
  }
  else
  return ("The line is currently: " + line + ".");
}
