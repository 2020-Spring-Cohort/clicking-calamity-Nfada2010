const updateClickCountdisplay = (clickCountElement, clickCount)=>{
    clickCountElement.innerText = clickCount.getClickCount();
}

const updateShiaCountDisplay = (clickShiaElement, shiaCount)=>{
    clickShiaElement.innerText = shiaCount.getShiaCount();
}

const updateStackCountDisplay = (clickStackElement, stackCount)=>{
    clickStackElement.innerText = stackCount.getStackCount();
}
