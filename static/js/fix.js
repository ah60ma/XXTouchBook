$(function(){$("a").each(function(index,element){var currHref=$(element).attr("href");if(typeof(currHref)==="undefined"){return true}else if(currHref.substring(0,7)==="http://"||currHref.substring(0,8)==="https://"){return true}else if(currHref.substring(0,1)==="#"){return true}var preHref="",endHref="";if(currHref.indexOf("#",0)!==-1){preHref=currHref.split("#")[0];endHref="#"+currHref.split("#")[1]}else{preHref=currHref}if(preHref.indexOf("/",0)!==-1){var tmpHref=preHref.split("/");if(tmpHref.length>1&&tmpHref[tmpHref.length-1].indexOf(".",0)!==-1){return true}}if(preHref.substr(preHref.length-1,1)!=="/"){preHref=preHref+"/"}$(element).attr("href",preHref+"index.html"+endHref)})});