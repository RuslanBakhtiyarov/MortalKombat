
const player1 = {
    name: 'Fish',
    hr: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};
const player2 = {
    name: 'SUB-ZERO',
    hr: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};


function createPlayer(playerName,obj) {
    const $player = document.createElement('div');
    $player.classList.add(playerName);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = obj.hr + "%";

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = obj.name;
    
    const $img = document.createElement('img');
    $img.src = obj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    const arenas = document.querySelector('.arenas')
    arenas.appendChild($player)

};


createPlayer('player1',player1)
createPlayer('player2',player2)

