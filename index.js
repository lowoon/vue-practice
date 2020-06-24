var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 vue'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는' + new Date() + '에 로드되었습니다.'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})

var app3 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ]
  }
})
