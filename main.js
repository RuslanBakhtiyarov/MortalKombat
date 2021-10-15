const $arenas = document.querySelector('.arenas')
const player1 = {
    player:1,
    name: 'SCORPION',
    hr: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};
const player2 = {
    player:2,
    name: 'SUB-ZERO',
    hr: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ['nunchucks', 'Fire sword', 'stick killer'],
    attack: function () {
      console.log(this.name + 'Fight...');  
    }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
};

function createPlayer(playerObj) {
    const $player = createElement('div','player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div','life');
    const $name = createElement('div','name');
    const $img = createElement('img');
  
  
    $life.style.width = playerObj.hr + "%";
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
  
  return $player;

};
$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))


