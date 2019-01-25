  
  var BLOG_ID = '2402205635238914485';





function searchByKeyword() {
  var results = YouTube.Search.list("id,snippet", {q : "bus", maxResults: 1});
  
  for(var i in results.items) {
    var item = results.items[i];

    //var content = results
    
  // Logger.log(results)
  // Logger.log("[%s] Title: %s", item.id.videoId, item.snippet.title, item.snippet.description,item.snippet.thumbnails.standard);
  }






 


  var kind ='#blogger#post';
 
    // var readurl = articles[a].url

   
    var blogId = BLOG_ID
    
    var title = item.snippet.title
  var content = item.snippet.description
  var image = item.snippet.thumbnails
  var images = image.high.url
  var videoid= item.id.videoId
  Logger.log(videoid)
  var video =  "<iframe width=320 height=266 src=https://www.youtube.com/embed/"+videoid+" frameborder=0 allow=accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen</iframe>"



  
  
  
  
// var imgbody = "title+content+"
 var imgbody = "<img  src=\""+images+"\">"+content+""+video+">"
 var body = JSON.stringify({
    'kind': kind,
    'blog': {
      'id': blogId
    },
    'title': title,
   'content': imgbody,
 "images": [
    {
      "url": images
    }
  ],
        
   
   
  
  });
  
  Logger.log(body);
var service = ScriptApp.getService();

 //var service = getBloggerService_();
//if (scriptApp.hasAccess()){
//  if (service.hasAccess()) {

var token = ScriptApp.getOAuthToken();

    var api = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts/';
 
    
  var headers = {
  'Authorization': 'Bearer ' + token //ScriptApp.getOAuthToken() //contains Blogger scope always
}; 
    
    
  // var headers = {
  //   'Authorization': 'Bearer ' + getBloggerService_().getAccessToken()
 // };
    
    var options = {
      'headers': headers,
      'method' : 'post',
      'contentType': 'application/json',
      'payload': body,
      'muteHttpExceptions': false
    };
    
    try {
      var response = UrlFetchApp.fetch(api, options);
      
      var responseCode = response.getResponseCode();
      Logger.log(responseCode);
      var json = JSON.parse(response.getContentText());
      Logger.log(json);
    }
    catch(err) {
      Logger.log(err); // error with url fetch call
    }
//}
  //else {
    var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
    var authorizationUrl = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
    
 //  var authorizationUrl = service.getAuthorizationUrl();
  //Logger.log(authInfo); 
  //  Logger.log('Open the following URL and re-run the script: %s',
    //   authInfo.getAuthorizationUrl())

  }
