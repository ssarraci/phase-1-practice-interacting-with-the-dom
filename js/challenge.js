document.addEventListener("DOMContentLoaded", () => {

let seconds = 0
    function setTimer(){
        const counter = document.getElementById('counter')
            counter.innerHTML = parseInt(counter.innerHTML, 10 ) + 1
            //counter.innerHTML = seconds
           // seconds ++
    } 
let count = setInterval(setTimer, 1000)
    
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
     minusBtn.addEventListener('click', () => {
        let a = document.getElementById('counter')
        let b = parseInt(a.innerHTML)
        a.innerHTML = b-1
    })
    plusBtn.addEventListener('click', () => {
        let a = document.getElementById('counter')
        let b = parseInt(a.innerHTML)
        a.innerHTML = b+1
    })

let heartBtn = document.getElementById('heart')
const likeContainer = document.querySelector('.likes')
const arr = []
    heartBtn.addEventListener('click', (event) => {
        let counter = document.getElementById('counter')
        let b = parseInt(counter.innerHTML)
        let objcounter

        if(arr.find(obj => obj.counter === b)) {
            objcounter = arr.find(obj => obj.counter === b)
            objcounter.i++
        }
        else {
            objcounter = {
                counter: b,
                i: 1
            }
            arr.push(pbjcounter)
        }
        const createLi = document.createElement('li')
        createLi.innerHTML = `${b} has been liked ${objcounter.i} times` 
        likeContainer.append(createLi)
    })

let pauseBtn = document.getElementById('pause')
    pauseBtn.addEventListener('click', () => {
       clearInterval(count)
        const button = document.getElementsByTagName('button')
        if(button === false) {
            document.querySelectorAll('button') = true
            pauseBtn.innerHTML = 'resume'
        }
        else {
            document.querySelectorAll('button') = false
        }

//let resetBtn = create


const commentContainer = document.getElementById('list')
const commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const userInput = event.target.querySelector('#comment-input').value
        const commentPTag = document.createElement('p')
        commentPTag.innerHTML = userInput
        commentContainer.append(commentPTag)
        commentForm.reset()
    })
    
})