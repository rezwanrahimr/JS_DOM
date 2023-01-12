function selectFun(id) {
  const playerName = document.getElementById(id).innerText;
  const selectedPlayer = document.querySelector(".player-list");
  console.dir(selectedPlayer);
  console.log();
  if (selectedPlayer.children.length <= 4) {
    let testcreate = document.createElement("li");
    testcreate.innerHTML = playerName;
    selectedPlayer.appendChild(testcreate);
  }
}
