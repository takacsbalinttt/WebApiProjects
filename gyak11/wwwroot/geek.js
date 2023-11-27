console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');


fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
}