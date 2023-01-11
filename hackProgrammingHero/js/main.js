let milestoneData = JSON.parse(data).data;

//Load Course Milestone Data
function loadMilestone() {
  const milestone = document.querySelector(".milestones");
  milestone.innerHTML = `${milestoneData.map((milestone) => {
    return `<div class="milestone border-b" id='${milestone._id}'>
    <div class="flex" >
        <div class="checkbox"><input type="checkbox" onClick="checkList(this,${
          milestone._id
        })" /></div>
        <div onClick="openMilestone(this,${milestone._id})">
            <p>
               ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
            </p>
        </div>
    </div>
    <div class="hidden_panel">
        ${milestone.modules.map(function (moduel) {
          return `<div class="module border-b">
            <p>${moduel.name}</p>
        </div>`;
        })}
    </div>
</div>`;
  })}`;
}
function openMilestone(currentMilestone, id) {
  console.log(currentMilestone);
  const currentElement = currentMilestone.firstElementChild;
  const boldName = document.querySelector(".active");
  if (!currentElement.classList.contains("active") && boldName) {
    boldName.classList.remove("active");
  }
  currentElement.classList.toggle("active");

  const currentPanel = currentMilestone.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");
  showMilestone(id);
}
function showMilestone(id) {
  document.querySelector(".milestoneImage").src = milestoneData[id].image;
  document.querySelector(".milestoneImage").style.opacity = 0;
  document.querySelector(".title").innerText = milestoneData[id].name;
  document.querySelector(".details").innerText = milestoneData[id].description;
}
document.querySelector(".milestoneImage").onload = function () {
  this.style.opacity = 1;
};
function checkList(check, id) {
  let milestoneList = document.querySelector(".milestones");
  let doneList = document.querySelector(".doneList");
  let items = document.getElementById(id);
  if (check.checked) {
    milestoneList.removeChild(items);
    doneList.appendChild(items);
  } else {
    milestoneList.appendChild(items);
    loadMilestone();
    doneList.removeChild(items);
  }
}
loadMilestone();
