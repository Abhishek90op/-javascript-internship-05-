const Human = {FirstName:"Abhishek", LastName:"vaghasiya", age:18};
for (let H in Human) {
    document.write("<br/>"+H);
  }
document.write("<hr/>");
for (let H in Human) {
  document.write("<br/>"+Human[H]);
}