/*

The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page".

*hint*

Upon processing the JSON Data, the server can respond with another page that contains both the form and the CSV report. This will require you to dynamically insert the result of the data processing step into the HTML of the response. This is exactly the same idea as "templates" (that you used on the client during various sprints), except that the template is rendered on the server before or as a part of res.end().

*/

