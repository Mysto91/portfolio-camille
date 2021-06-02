function changeClass(id, classe) {
    document.getElementById(id).className = classe;
}

function toggleButton (id) {
    var button = document.getElementById(id);
    var currentDisplay = getComputedStyle(button).display;
  
    if (isHidden(currentDisplay)) {
        button.style.display = "flex";
        document.getElementById('close-menu').style.display ="flex";
        document.getElementById('side-bar-left').style.width = '100px';
        document.getElementById('top-bar').style.height = '100px';
        document.getElementById('side-bar-right').style.width = '100px';
        document.getElementById('bottom-bar').style.height = '100px';
        document.getElementById('home-title').style.display ="none";
    } else {
        button.style.display = "none";
        document.getElementById('close-menu').style.display = "none";
        document.getElementById('side-bar-left').style.width = '';
        document.getElementById('top-bar').style.height = '';
        document.getElementById('side-bar-right').style.width = '';
        document.getElementById('bottom-bar').style.height = '';
        document.getElementById('home-title').style.display ="block";
    }

    var nav = document.getElementById('navigation');
    var classes = nav.classList;

    for (i=0; i<classes.length; i++) {
        
        if (classes[i] == 'slide-out') {
            changeClass('navigation','slider slide-in');
        } else if (classes[i] == 'slide-in') {
            changeClass('navigation','slider slide-out');
        }
    }

  }
  
  function isHidden(display){
    if(display == "none") {
        return true;
    } else {
        return false;
    }
  }