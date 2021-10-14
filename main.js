
const player1 = {
    name: 'Scorpion',
    hr: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};
const player2 = {
    name: 'Fish',
    hr: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};


function createPlayer(name, hr, img) {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = hr + "%";

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;
    

    const $img = document.createElement('img');
    $img.src = img;
   

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);


    const arenas = document.querySelector('.arenas')
    arenas.appendChild($player1)

    
};


createPlayer(player1 ['name'], player1['hr'], player1['img']);
createPlayer(player2 ['name'], player2 ['hr'],player2['img'],);

