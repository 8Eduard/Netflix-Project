const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

const tab1content = document.querySelector("#tab-one-content");
const tab2content = document.querySelector("#tab-two-content");
const tab3content = document.querySelector("#tab-three-content");

const tab1 = document.querySelector("#tab-1");
tab1.addEventListener("click", () => {
  tab1content.style.display = "block";
  tab2content.style.display = "none";
  tab3content.style.display = "none";
});

const tab2 = document.querySelector("#tab-2");
tab2.addEventListener("click", () => {
  tab1content.style.display = "none";
  tab2content.style.display = "block";
  tab3content.style.display = "none";
});

const tab3 = document.querySelector("#tab-3");
tab3.addEventListener("click", () => {
  tab1content.style.display = "none";
  tab2content.style.display = "none";
  tab3content.style.display = "block";
});
