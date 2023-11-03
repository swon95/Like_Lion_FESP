import axios from 'axios'
import $ from 'jquery'
import canUseDOM from 'can-use-dom'

// api server 실행 후 axios 테스트 -> npm run dev
(async() => {
    const response = await axios(`http://localhost:33088/api/todolist`)
    console.log(response.data)
    console.log(canUseDOM) // => false
})()