const milestoneData = JSON.parse(data).data;

//Load Course Milestone Data
function loadMilestone() {
  const milestone = document.querySelector(".milestones");
  milestone.innerHTML = `${milestoneData.map((milestone) => {
    return `<div class="milestone border-b">
    <div class="flex">
        <div class="checkbox"><input type="checkbox" /></div>
        <div onClick="openMilestone(this)">
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
function openMilestone(currentMilestone) {
  const currentPanel = currentMilestone.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");
}
loadMilestone();
