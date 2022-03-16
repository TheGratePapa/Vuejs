var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Luis!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"Ratas dumbo"  },
            { message:"Ratas egipcias" },
            { message:'Ratas Husky' },
            { message:'Ratas canguro' },
        ]
    }
  });

  var app3 = new Vue({
      el: '#app-3',
      data: {
             matricula:'A01252280'
      }
    });

    var app4 = new Vue({
        el: '#app-4',
        data: {
          cosa: 'Husky',
          imag:'https://archive.kitsapsun.com/Services/image.ashx?domain=www.kitsapsun.com&file=20060324-012658-pic-609567244_5736466_ver1.0_640_480.jpg&resize='
        }
      })
