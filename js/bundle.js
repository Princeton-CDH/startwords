"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}/* javascript for contextual notes */var ContextualNotes=/*#__PURE__*/function(){// setting for hiding contextual notes on scroll; on by default
// setting for re-displaying endnotes when closing a contextual notes;
// off by default
// reference to footnotes container element
// reference to observer that toggles footnotes to endnotes
function ContextualNotes(){_classCallCheck(this,ContextualNotes);// display note if page was loaded with a footnote anchor
// with brief timeout for font loading & layout
ContextualNotes.disableHideOnScroll(2);var note=ContextualNotes.currentNote;if(note){note.opacity=0;// override default target note styles
window.setTimeout(function(){ContextualNotes.showNote();note.opacity=1},500)}// bind event listeners
window.addEventListener("hashchange",function(){ContextualNotes.showNote()},false);// bind to footnote reference click to manage browser hsitory
document.querySelectorAll("a.footnote-ref").forEach(function(a){a.addEventListener("click",function handleClick(event){event.preventDefault();// NOTE: replace the location to avoid polluting browser history
window.location.replace(a.getAttribute("href"))})});/* on scroll, if a footnote is currently targeted, unselect */window.addEventListener("scroll",function(){if(location.hash.startsWith("#fn:")&&ContextualNotes.hideOnScroll){// close the note and unbind close link handler
ContextualNotes.closeNote()}});/* Adjust for poor behavior on iOS, where it requires clicking twice
        to display the contextual note. */window.addEventListener("touchend",function(event){// if a footnote reference is touched, disable hide on scroll
// (in case the touch includes page movement) and trigger a click
if(event.target.classList.contains("footnote-ref")){disableHideOnScroll(0.5);event.preventDefault();event.stopPropagation();event.target.click()}});// create observable to set endnotes class on footnotes ol when visible
ContextualNotes.observer=new IntersectionObserver(ContextualNotes.endnoteIntersectionCallback);ContextualNotes.endnotes=document.querySelector(".footnotes");if(ContextualNotes.endnotes){ContextualNotes.observer.observe(ContextualNotes.endnotes)}// TODO: also add summary element with text 'show endnotes' ?
}_createClass(ContextualNotes,null,[{key:"disableHideOnScroll",value:function disableHideOnScroll(seconds){// temporarily disable note hide on scroll
ContextualNotes.hideOnScroll=false;window.setTimeout(function(){ContextualNotes.hideOnScroll=true},seconds*1000)}},{key:"currentNote",get:function get(){// find currently selected note, if there is one
if(location.hash.startsWith("#fn:")){return document.getElementById(location.hash.slice(1))}}},{key:"showNote",value:function showNote(){// display the current note (if one is targeted), and bind backref handler
var note=ContextualNotes.currentNote;if(note){// if a note occurs near the end of the document,
// end notes may already be visible.
if(ContextualNotes.endnotes.classList.contains("endnotes")){// hide end notes so the note can be shown as a contextual note
ContextualNotes.endnotes.classList.remove("endnotes");// set a flag that endnotes need to be re-shown
ContextualNotes.showEndnotesOnClose=true;// temporarily disable hide on scroll, since
// hiding the endnotes changes document length
// and can trigger scrolling
ContextualNotes.disableHideOnScroll(2)}ContextualNotes.positionContextualNote(note);// get back reference link to override behavior
var backref=note.getElementsByClassName("footnote-backref").item(0);backref.addEventListener("click",ContextualNotes.onNoteClose)}}},{key:"closeNote",value:function closeNote(note){note=note||ContextualNotes.currentNote;if(note){// change the location hash, deselecting the note
// Set to non-existent id so note is no longer targeted,
// but document does not scroll
// NOTE: replace the location to avoid polluting browser history
window.location.replace("#-");history.replaceState(null,"",location);// unbind the close link handler
var backref=note.getElementsByClassName("footnote-backref").item(0);backref.removeEventListener("click",ContextualNotes.onNoteClose);// if endnotes were hidden to show this note, redisplay them
if(ContextualNotes.showEndnotesOnClose){ContextualNotes.showEndnotes();ContextualNotes.showEndnotesOnClose=false}}}},{key:"onNoteClose",value:function onNoteClose(event){// prevent default behavior to avoid jarring scroll to reference
// Check that the parent note is still selected; otherwise behave normally
// backref may be inside a paragraph OR directly inside the li
var note=this.parentNode;if(note.localName!="li"){note=note.parentNode}if(location.hash=="#"+note.getAttribute("id")){event.preventDefault();event.stopPropagation()}ContextualNotes.closeNote(note)}},{key:"positionContextualNote",value:function positionContextualNote(note){// position the currently selected contextual note, if one is selected
// and not on a mobile device
var mql=window.matchMedia("(min-width: 415px)");// don't position on mobile
if(!mql.matches){return}// note contains a back reference
var backref=note.getElementsByClassName("footnote-backref").item(0);// find reference based on back reference id
var ref=document.getElementById(backref.getAttribute("href").slice(1));var refLocation=ref.getBoundingClientRect();var noteTop=refLocation.top+refLocation.height+5+"px";// position note relative to the reference marker
// - top of note should be directly below the ref
note.style.top=refLocation.top+refLocation.height+5+"px";//- tip of the arrow should point to the reference
var noteLeft;// if reference is close to the left side, flip the triangle
// 125px: free space in margin when viewport is at 415px (minimum) =
// (difference between note width and viewport width + len of small side of note triangle)
if(refLocation.left<note.clientWidth-125){// no further left than zero (don't allow placing off screen)
noteLeft=Math.max(0,refLocation.left+refLocation.width/2-70);note.classList.add("flip")}else{// no further left than window width - note width (keep on screen),
// but not negative
noteLeft=Math.max(0,Math.min(refLocation.left+refLocation.width/2-note.clientWidth+70,window.innerWidth-note.clientWidth));// always ensure flip class is not present, in case of resize
note.classList.remove("flip")}note.style.left=noteLeft+"px";note.style.bottom="auto";// scroll if necessary to make sure positioned note is fully visible
var noteLocation=note.getBoundingClientRect();if(noteLocation.bottom>document.documentElement.clientHeight){// disable hiding the note when the window scrolls
this.disableHideOnScroll(1);// adjust by amount that is not showing plus some extra
var adjustment=noteLocation.bottom-document.documentElement.clientHeight+10;window.scrollBy(0,adjustment);// move the note by the same amount
note.style.top=noteLocation.top-adjustment+"px"}}},{key:"showEndnotes",value:function showEndnotes(elem){// default footnotes; if elem is undefined, use footnotes element
elem=elem||ContextualNotes.endnotes;elem.classList.add("endnotes");// clear computed positions/styles for all notes
var notes=elem.getElementsByTagName("li");Array.prototype.forEach.call(notes,function(li){li.removeAttribute("style");li.classList.remove("flip")})}},{key:"hideEndnotes",value:function hideEndnotes(elem){// default footnotes; if elem is undefined, use footnotes element
elem=elem||ContextualNotes.endnotes;elem.classList.remove("endnotes")}},{key:"endnoteIntersectionCallback",value:function endnoteIntersectionCallback(entries,observer){entries.forEach(function(entry){var elem=entry.target;if(entry.isIntersecting){ContextualNotes.showEndnotes(elem)}else{ContextualNotes.hideEndnotes(elem)}})}}]);return ContextualNotes}();_defineProperty(ContextualNotes,"hideOnScroll",true);_defineProperty(ContextualNotes,"showEndnotesOnClose",false);_defineProperty(ContextualNotes,"endnotes",void 0);_defineProperty(ContextualNotes,"observer",void 0);document.addEventListener("DOMContentLoaded",function(){// initialize contextual notes and make available on window
window.contextnotes=new ContextualNotes});;// pitbar behavior adapted from PPA
// https://github.com/Princeton-CDH/ppa-django/blob/master/srcmedia/js/pitbar.js
document.addEventListener("DOMContentLoaded",function(){var nav=document.querySelector("nav.main");var scroll=0;// hide the nav element when scrolling down; show when scrolling up quickly
function checkScroll(){var scrolled=Math.abs(document.body.getBoundingClientRect().top);if(scrolled>scroll&&scrolled>40){if(!nav.classList.contains("hidden")){nav.classList.add("hidden")}}else if(scrolled<scroll&&scroll-scrolled>5){if(nav.classList.contains("hidden")){nav.classList.remove("hidden")}}scroll=scrolled}// only use the hide/show behavior if the screen matches mobile media query
function setHandler(){var mobile=window.matchMedia("(max-width: 768px)");if(mobile.matches)document.addEventListener("scroll",checkScroll);else document.removeEventListener("scroll",checkScroll)}// apply the behavior on page load and re-apply if window is resized
setHandler();window.addEventListener("resize",setHandler)});// use js to enable smooth scroll on issue list page for safari via polyfill
document.addEventListener("DOMContentLoaded",function(){var button=document.querySelector("a[href=\"#features\"]");var features=document.getElementById("features");if(button)button.addEventListener("click",jumpDown);function jumpDown(event){event.preventDefault();features.scrollIntoView({behavior:"smooth"})}});
