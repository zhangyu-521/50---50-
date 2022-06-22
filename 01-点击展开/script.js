const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// const panels = document.querySelectorAll('.panel');
// panels.forEach(panel => {
//     panel.addEventListener('click',() => {
//         panels.forEach(panel => {
//             panel.classList.remove('active')
//         })
//         panel.classList.add('active')
//     })
// })


// const panels = document.querySelectorAll('.panel');
// panels.addEventLisist('click',()=>{
//     for(const i = 0;i < panels.length; i++){
//         panel[i].classList.remove('active');
//     }
//     this.panel.add('active')
    
    
    
// })
