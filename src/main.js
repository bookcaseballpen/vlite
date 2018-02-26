(function(window) {
  window.Vlite = function() {
    var vlite = {
      config: {},
      el: {},
      init: function(node, tpl, imgServer) {
        var _this = this;
        _this.config.node = node;
        _this.config.tpl = tpl;
        if (!node) {
          console.error("Node is not proivded");
        }
        this.el = $(node)[0];
        var url = imgServer + tpl;
        $.get(url, function(data) {
          var ele = data.split("<template>")[1].split("</template>")[0];
          var ctrl = data.split("<script>")[1].split("</script>")[0];
          var sty = data.split("<style>")[1].split("</style>")[0];
          ele = ele.replace(/@imgServer/g, imgServer);
          _this.create(node, ele, ctrl, sty);
        });
      },
      create: function(node, ele, ctrl, sty) {
        if (!ele) {
          console.error("no element is provided in template");
          return;
        }
        var tempNode = document.createElement("div");
        tempNode.innerHTML = ele;
        this.el.appendChild(tempNode.childNodes[1]);
        if (sty) {
          tempNode = document.createElement("style");
          tempNode.innerHTML = sty;
          document.head.appendChild(tempNode);
        }
        if (ctrl) {
          eval(ctrl);
        }
      }
    };
    return vlite;
  };
})(window);
