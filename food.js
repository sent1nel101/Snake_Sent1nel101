import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let score = document.getElementById('scoreTag')
let points = 0
let foodCount = 0

let food = getRandomFoodPosition()
const expansion_rate = 1

export function update(){
   if (onSnake(food)){
       expandSnake(expansion_rate)
       food = getRandomFoodPosition()
       foodCount++
        if (foodCount < 10){            
            points += 10
        }else if (foodCount < 20){
            points += 25
        }else if (foodCount < 30){
            points += 50
        }else points += 100
    }
    score.textContent = points
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
