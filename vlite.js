(function (window) {
  window.Vlite = function () {
    var vlite = {
      config: {},
      el: {},
      init: function (node, tpl) {
        var _this = this
        _this.config.node = node
        _this.config.tpl = tpl
        var request = new XMLHttpRequest();
        if (!node) {
          console.log('Node is not proivded')
        }
        this.el = document.querySelector(node)
        request.open('GET', tpl, true)
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
        console.log(this)
        this.el.innerHTML = ele
        if (sty) {
          document.querySelector('head').innerHTML += "<style>" + sty + "</style>"
        }
        if (ctrl) {
          eval(ctrl.replace('$el', "$(this.el)"))
        }
      }
    }
    return vlite
  }
})(window)