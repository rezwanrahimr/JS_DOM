function selectFun(id) {
  const playerName = document.getElementById(id).innerText;
  const selectedPlayer = document.querySelector(".player-list");
  if (selectedPlayer.children.length <= 4) {
    let testcreate = document.createElement("li");
    testcreate.innerHTML = playerName;
    selectedPlayer.appendChild(testcreate);
  }
}
function Calculate() {
  let perPlayer = document.getElementById("perPlayer").value * 5;
  document.getElementById("playerExpenses").innerText = perPlayer;
}
function calculateTotal() {
  let playerExpenses = document.getElementById("playerExpenses").innerText;
  let managerSalary = document.querySelector("#manager").value;
  let coachSalary = document.querySelector("#Coach").value;
  let total =
    Number(playerExpenses) + Number(managerSalary) + Number(coachSalary);
  console.log(perPlayer);
  console.log(managerSalary);
  console.log(coachSalary);
  document.querySelector("#total").innerText = total;
}
