let alreadyOpened;

const closeAlreadyOpened = () => {
  if (alreadyOpened) {
    let accordianContent = alreadyOpened.nextElementSibling;
    // const accordianClose = alreadyOpened.querySelector(".accordian-head-container");

    accordianContent.style.display = "none";

    const accordianWrap = alreadyOpened.closest(".price-accordian");
    accordianWrap.classList.remove("active");
  }
};

const handleAccordian = (elm) => {    
    console.log("🚀 ~ handleAccordian ~ elm:", elm)
    closeAlreadyOpened()

    if (alreadyOpened === elm) {
        alreadyOpened = null;
        return;
    }

    alreadyOpened = elm;

    const accordianWrap = elm.closest(".price-accordian");
    console.log("🚀 ~ handleAccordian ~ accordianWrap:", accordianWrap)
    accordianWrap.classList.add("active");

    let accordianContent = elm.nextElementSibling;

    if (accordianContent.style.display === "block") {
        accordianContent.style.display = "none";
    } else {
        accordianContent.style.display = "block"
    }
}