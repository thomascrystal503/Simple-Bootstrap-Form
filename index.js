let id = 0;

document.getElementById("add").addEventListener("click", () => {
  //console.log("Clicked");
  let createdDate = new Date();
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = `${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`;
  row.insertCell(1).innerHTML = document.getElementById("first-name").value;
  row.insertCell(2).innerHTML = document.getElementById("last-name").value;
  row.insertCell(3).innerHTML = document.getElementById("state").value;
  id++;
});
