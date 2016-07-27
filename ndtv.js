var a = document.getElementById('ndtv-myModal');
a.parentElement.removeChild(a);
a = document.getElementById('newsDescriptionContainer');
a.style.height = screen.height*0.8 +'px';
a.style.overflowY = 'scroll';