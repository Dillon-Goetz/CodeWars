Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"


//my solution 

function whatCentury(year) {
  const century = Math.ceil(year / 100);
  const lastTwoDigits = century % 100;

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${century}th`;
  }

  const lastDigit = lastTwoDigits % 10;
  const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
  };

  return `${century}${suffixes[lastDigit] || 'th'}`;
}


//top solution 
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}
