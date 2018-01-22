# char-sortinator

Plan of Attack
As a client, I have a form that's centered vertically and horizontally on the page
  On such form, when submitted, sends a post request to the server (endpoint /stringSort)
[x]As the server, I should accept a string on an endpoint (/stringSort) 
  [x] Upon recieving the string, I should sort the string in reverse alphabetical order
  [x] I should send back the sorted string to the client.

As the client, after recieving the sorted string, I add a row to the table with the submitted string and sorted version
 (composition 2 table rows appended to table)

