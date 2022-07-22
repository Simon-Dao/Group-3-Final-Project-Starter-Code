const navItems = document.querySelectorAll('#side-nav li')
const hiddenNavButton = document.querySelector('#hidden-nav-button')
const sideNav = document.querySelector('#side-nav')
const sideNavItems = document.querySelectorAll('#side-nav li')

let selectedIndex = 0

function setSelected(index) {
    navItems[selectedIndex].classList.replace( 'backgroundSecondary', 'backgroundPrimary')

    
    navItems[index].classList.replace('backgroundPrimary', 'backgroundSecondary')
    
    updateColor()

    selectedIndex = index
    console.log('hi', index)
}

function addListener(item, index) {
    item.addEventListener('click', () => setSelected(index))
}

navItems.forEach(addListener)

function toggleNavBar() {

    //if the window is in landscape mode then dont run code
    if(window.innerHeight < window.innerWidth) {
        return
    }
    
    sideNav.style.minWidth = sideNav.style.minWidth === '0px' ? '100px' : '0px'
    
    sideNavItems.forEach(function(navItem) {
        //if(navItem.style.display === '') navItem.style.display = 'none'


        navItem.style.display = navItem.style.display === 'none' ? 'block' : 'none'
    })
}

hiddenNavButton.addEventListener('click', toggleNavBar)


//makes sure that the side bar reappears again when window in back to landscape
window
    .matchMedia('(orientation: landscape)')
    .addListener(function (m) {
        if (!m.matches) return
        
        console.log('changed')
            navItem.style.display = 'block'
        sideNav.style.minWidth = '200px'
});