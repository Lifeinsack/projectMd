var http = require('http');
var fs = require('fs');
var https = require('https');
var cheerio = require('cheerio');
var request = require('request');
var $ = require('jquery')(require("jsdom").jsdom().defaultView);//导入插件
var url = "http://oa.0luzhe.com/login";
var url2 ='http://www.scbstone.com/';
var dir = './images'
//初始化 url
    $(function(){
            $.ajax({
                url:'/type',
                data:{name:pzname,url:pzurl},
                dataType:'json',
                type:'get',
                success:function(data){
                    console.log(data);
                }
            });
    })

// request(url,function(error, response, body){
//     if(!error && response.statusCode == 200){
//         var $ = cheerio.load(body);
//   var imgList = []

//      JSON.parse($('script[id="initData"]').html()).list.forEach(function(item){
//          imgList.push(item.img)
//  });
//  console.log(imgList)
//     $('.rzqybox img').each(function(i,item){
//
//         var src =url2+$(this).attr('data-original').slice(3).replace(/small/,'o');
//         var txt = $(this).siblings('p').text()
//         console.log(src)
//     	if(src!="")
//     	{
//     	download(src, dir, txt+Math.floor(Math.random()*100000) + '.jpg');
//     	console.log('保存成功');
//     	}
//     	else{console.log('请求失败')}
// 		})
//     }
// })

// var download = function(url, dir, filename){
//     request.head(url, function(err, res, body){
//         request(url).pipe(fs.createWriteStream(dir + "/" + filename));
//     });
// };
//

//function download (url,callback ) {
//  http.get( url,function(res){
//      var data = "";
//      res.on("data",function(chunk){
//          data += chunk;
//      });
//      res.on("end",function(){
//          callback(data)
//      })
//  }).on("error",function(err){
//      console.log(err)
//  })
//}
//
//download(url,function( data ) {
//  if(data){
//      var $=cheerio.load(data);
//      $("img").each(function(i,elem){
//          var imgSrc=$(this).attr("src");
//          console.log(imgSrc)
//        http.get(imgSrc,function(res){
//              var imgData="";
//              res.setEncoding("binary");
//              res.on("data",function(chunk){
//                  imgData += chunk;
//              });
//              res.on("end",function(){
//                  var imgPath="/"+i+"."+imgSrc.split(".").pop();
//                  fs.writeFile(__dirname + "/images"+imgPath,imgData,"binary",function(err){
//                  })
//              }).on("err",function(err){
//              	console.log(err);
//              })
//
//          })
//      })
//  }
//  else{
//     console.log('保存失败');
//    }
//})
