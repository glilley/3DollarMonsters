$(window).scroll(function(){$(".animatedElement").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();t+600>e&&$(this).hasClass("left")&&$(this).addClass("slideRight"),t+550>e&&$(this).hasClass("right")&&$(this).addClass("slideLeft"),t+400>e&&$(this).hasClass("up")&&$(this).addClass("slideUp"),t+400>e&&$(this).hasClass("peek")&&$(this).addClass("little-monster"),t+865>e&&$(this).hasClass("sticky")&&$(".cyclops").addClass("rise"),t+865>e&&$(this).hasClass("sticky")&&$(".hands").addClass("pull")})}),$("a[href*=#goto]").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),function(e){"use strict";var t={activeElement:void 0,lastActive:void 0,stackedElements:[],tabbableElements:"a[href], area[href], input:not([disabled]),select:not([disabled]), textarea:not([disabled]),button:not([disabled]), iframe, object, embed, *[tabindex],*[contenteditable]",on:function(e,t,a){if("string"!=typeof e)throw new Error("Type error: `error` has to be a string");if("function"!=typeof a)throw new Error("Type error: `callback` has to be a function");t.addEventListener?t.addEventListener(e,a,!1):t.attachEvent("on"+e,a)},trigger:function(e,t){var a;window.CustomEvent&&(a=new CustomEvent(e,{detail:{modal:t}}),document.dispatchEvent(a))},addClass:function(e,t){e&&!e.className.match(t)&&(e.className+=" "+t)},removeClass:function(e,t){e.className=e.className.replace(t,"").replace("  "," ")},setFocus:function(){t.activeElement&&(t.lastActive=document.activeElement,t.activeElement.focus(),t.keepFocus(t.activeElement))},removeFocus:function(){t.lastActive&&t.lastActive.focus()},keepFocus:function(e){var a=e.querySelectorAll(t.tabbableElements),s=a[0],n=a[a.length-1],o=function(e){var t=e.which||e.keyCode;9===t&&(e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.target!==n||e.shiftKey?e.target===s&&e.shiftKey&&(e.preventDefault(),n.focus()):(e.preventDefault(),s.focus()))};t.on("keydown",e,o)},setActive:function(e){t.addClass(e,"is-active"),t.activeElement=e,t.setFocus(e.id),t.trigger("cssmodal:show",t.activeElement)},unsetActive:function(e){t.activeElement&&(t.removeClass(t.activeElement,"is-active"),t.trigger("cssmodal:hide",t.activeElement),t.removeFocus(),e&&t.stackModal(t.activeElement),!e&&t.stackedElements.length>0&&t.unstackModal(),t.activeElement=null)},stackModal:function(e){t.addClass(e,"is-stacked"),t.stackedElements.push(t.activeElement)},unstackModal:function(){var e=t.stackedElements.length,a=t.stackedElements[e-1];t.removeClass(a,"is-stacked"),window.location.hash=a.id,t.stackedElements.splice(e-1,1)},mainHandler:function(){var e=window.location.hash.replace("#",""),a=document.getElementById(e),s;a?(s=a.children[0],s&&s.className.match(/modal-inner/)&&(t.addClass(document.documentElement,"has-overlay"),t.unsetActive(!0),t.setActive(a))):(t.removeClass(document.documentElement,"has-overlay"),t.unsetActive())}};t.on("keyup",document,function(e){var a=window.location.hash.replace("#","");if(""!==a&&"!"!==a&&27===e.keyCode){if(window.location.hash="!",t.lastActive)return!1;t.removeFocus()}},!1),t.on("hashchange",window,t.mainHandler),t.on("load",window,t.mainHandler),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return t}):"object"==typeof e&&"object"==typeof e.document&&(e.CSSModal=t)}(window),$(document).ready(function(){var e=L.mapbox.map("map","mizzmeister.h0an0mfi").setView([40,-74.5],5);e.scrollWheelZoom.disable();var t=[{type:"Feature",geometry:{type:"Point",coordinates:[-73.9495823,40.6501038]},properties:{title:"Do-Do Grapes",image:"images/example.jpg",icon:{iconUrl:"images/marker-icon-eye.svg",iconSize:[40,40],iconAnchor:[20,40],popupAnchor:[-68,-40],className:"dot"}}}];e.featureLayer.on("layeradd",function(e){var t=e.layer,a=t.feature,s='<a target="_blank" class="popup" href="'+a.properties.url+'">   <h2>'+a.properties.title+'</h2><img src="'+a.properties.image+'"></a>';t.bindPopup(s,{closeButton:!1,maxWidth:320,zoomAnimation:!0}),t.setIcon(L.icon(a.properties.icon))}),e.featureLayer.setGeoJSON(t)});