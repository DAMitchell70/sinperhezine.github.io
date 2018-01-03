// create the container-fluid
$("nav").append("<div class=' container-fluid'>");
// create the navbar-header
$(".container-fluid").append("<div class=' navbar-header'>");
//create the collapsing button
$('.navbar-header').append(" <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'></button>");

$('.navbar-header').append("<span class='sr-only'>Toggle navigation</span>");
$('.navbar-header').append("<span class='sr-only'>Toggle navigation</span>");
$('.navbar-header').append("<span class='sr-only'>Toggle navigation</span>");
$('.navbar-header').append("<span class='sr-only'>Toggle navigation</span>");

$('.navbar-header').append("<a class='navbar-brand' href='index.html'>DM</a>>");

//creating the navBar
$(".container-fluid").append("<div class='collapse navbar-collapse'id='bs-example-navbar-collapse-1'>");
$(".collapse").append("<ul class='nav navbar-nav'></ul>");

//TODO: cycle active class to the pages that is active
$(".navbar-nav").append("<li ><a href='index.html'>Home <span class='sr-only'>(current)</span></a></li>");
$(".navbar-nav").append("<li ><a href='blog.html'>Blog <span class='sr-only'>(current)</span></a></li>");
$(".navbar-nav").append("<li ><a href='studies.html'>Studies <span class='sr-only'>(current)</span></a></li>");
$(".navbar-nav").append("<li class='dropdown'></li>");  
$(".dropdown").append("<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Portfolio <span class='caret'></span></a>");
$(".dropdown").append("<ul class='dropdown-menu'>");

$(".dropdown-menu").append("<li><a href='portfolio.html'>Current Projects</a></li>");
$(".dropdown-menu").append("<li role='separator' class='divider'></li>");

$(".dropdown-menu").append("<li><a href='portfolio.html'>Hobby Projects</a></li>");
$(".dropdown-menu").append("<li role='separator' class='divider'></li>");

$(".dropdown-menu").append("<li><a href='portfolio.html'>Shelved Projects</a></li>");
$(".dropdown-menu").append("<li role='separator' class='divider'></li>");
						  
$(".dropdown-menu").append("<li><a href='portfolio.html'>Completed Projects</a></li>");
$(".dropdown-menu").append("<li role='separator' class='divider'></li>");