function hideLoginToggle(){
    let loginSection = document.getElementById("loginSection")
    let movieDBSection = document.getElementById("movieDBSection")

    if (loginSection.style.display==="block") {
        loginSection.style.display = "none"
        movieDBSection.style.display = "block"
        
    } else { 
        loginSection.style.display = "block" 
        movieDBSection.style.display = "none"
    }

}