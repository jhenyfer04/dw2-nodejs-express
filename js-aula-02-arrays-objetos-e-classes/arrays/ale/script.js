let player = document.getElementById("player")
let enemies = document.querySelectorAll(".enemy")
let walls = document.querySelectorAll(".wall")

let vida = 100

let x = 280
let y = 180
let speed = 4

let keys = {}

let lastDamage = 0
let damageCooldown = 500

document.addEventListener("keydown", (e)=>{
keys[e.key] = true
})

document.addEventListener("keyup", (e)=>{
keys[e.key] = false
})

function gameLoop(){

let newX = x
let newY = y

if(keys["ArrowUp"] || keys["w"]) newY -= speed
if(keys["ArrowDown"] || keys["s"]) newY += speed
if(keys["ArrowLeft"] || keys["a"]) newX -= speed
if(keys["ArrowRight"] || keys["d"]) newX += speed

if(!hitWall(newX,newY)){
x = newX
y = newY
}

player.style.left = x + "px"
player.style.top = y + "px"

moveEnemies()

requestAnimationFrame(gameLoop)

}

function hitWall(nx,ny){

let playerRect={
left:nx,
top:ny,
right:nx+40,
bottom:ny+40
}

for(let wall of walls){

let w=wall.getBoundingClientRect()
let g=document.getElementById("game").getBoundingClientRect()

let wallRect={
left:w.left-g.left,
right:w.right-g.left,
top:w.top-g.top,
bottom:w.bottom-g.top
}

if(
playerRect.left < wallRect.right &&
playerRect.right > wallRect.left &&
playerRect.top < wallRect.bottom &&
playerRect.bottom > wallRect.top
){
return true
}

}

return false
}

function moveEnemies(){

enemies.forEach(enemy=>{

let ex = parseInt(enemy.style.left) || 0
let ey = parseInt(enemy.style.top) || 0

if(ex < x) ex += 1.5
if(ex > x) ex -= 1.5
if(ey < y) ey += 1.5
if(ey > y) ey -= 1.5

enemy.style.left = ex + "px"
enemy.style.top = ey + "px"

checkCollision(enemy)

})

}

function checkCollision(enemy){

let p = player.getBoundingClientRect()
let e = enemy.getBoundingClientRect()

if(
p.left < e.right &&
p.right > e.left &&
p.top < e.bottom &&
p.bottom > e.top
){

let now = Date.now()

if(now - lastDamage > damageCooldown){

vida -= 5
document.getElementById("vida").textContent = vida
lastDamage = now

}

if(vida <= 0){
alert("Game Over")
location.reload()
}

}

}

gameLoop()
