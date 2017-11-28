var Vlite = function () {
  var vlite = {
    init: function (node, tpl) {
      var _this = this
      var request = new XMLHttpRequest();
      request.open('GET', './templates/test.tpl.html', true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          //success
          var data = request.responseText
          var ele = data.split('<template>')[1].split('</template>')[0]
          var ctrl = data.split('<script>')[1].split('</script>')[0]
          var sty = data.split('<style>')[1].split('</style>')[0]
          _this.create(node, ele, ctrl, sty)
        } else {
          //fail
          console.error('server return error')
        }
      }
      request.onerror = function () {
        //cannot connect to server
        console.error('can not connect to server')
      }
      request.send()
    },
    create: function (node, ele, ctrl, sty) {
      if (!ele) {
        console.error('no element is provided in template')
        return
      }
      document.querySelector(node).innerHTML += ele
      if (sty) {
        document.querySelector('head').innerHTML += "<style>" + sty + "</style>"
      }
      if (ctrl) {
        document.querySelector('body').innerHTML += "<script>" + ctrl + "</script>"
      }
    }
  }
  return vlite
}