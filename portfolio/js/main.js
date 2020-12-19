function change() {
  // Grabs current IMG by unique ID 
  var img = document.getElementById("currentHTML");

  //Generate a new P element
  var newText = document.createElement('p');

  //Set the inner html to the information needed to be displayed
  newText.innerHTML = "Raspbian is an unofficial port of Debian Wheezy armhf with compilation settings adjusted to produce optimized hard float code that will run on the Raspberry Pi. This provides significantly faster performance for applications that make heavy use of floating point arithmetic operations. All other applications will also gain some performance through the use of advanced instructions of the ARMv6 CPU in Raspberry Pi.Although Raspbian is primarily the efforts of Filip Condac (fcond) and Peter Green (plugwash), it has also benefited greatly from the enthusiastic support of Raspberry Pi community members who wish to get the maximum performance from their device.";

  //Give class of boxInfo so the text is displayed nicely
  newText.className = "boxInfo"

  //Give the new HTML id same as the old HTML so we can revert later
  newText.id = "currentHTML";

  //Create event listener with original html so we can revert it later
  newText.addEventListener("mouseout", function () {
    newText.style = "background-color: white; border-style: none;"
    newText.innerHTML =
      '<img src="img/raspbian.png" alt="raspbian logo" class="flex-img" id="img1" onmouseover="change()"">'
  })

  //Replacing old html with new html
  img.parentNode.replaceChild(newText, img);
}

//Repeated
function change2() {

  var img = document.getElementById("currentHTML1");

  var newText = document.createElement('p');
  newText.innerHTML = "Pi-hole is a Linux network-level advertisement and Internet tracker blocking application[which acts as a DNS sinkhole and optionally a DHCP server, intended for use on a private network. It is designed for use on embedded devices with network capability, such as the Raspberry Pi,but it can be used on other machines running Linux, including cloud implementations.Pi-hole has the ability to block traditional website advertisements as well as advertisements in unconventional places, such as smart TVs and mobile operating system advertisements. The Pi-hole project was created by Filip Condac as an open source alternative to AdTrap";
  newText.className = "boxInfo"
  newText.id = "currentHTML1";
  newText.addEventListener("mouseout", function () {
    newText.style = "background-color: white; border-style: none;"
    newText.innerHTML =
      '<img src="img/pihole.png" alt="pihole logo" class="flex-img" onmouseover="change2()">'
  })

  img.parentNode.replaceChild(newText, img);
}
//Repeated
function change3() {

  var img = document.getElementById("currentHTML2");

  var newText = document.createElement('p');
  newText.innerHTML = "Cloudflare is on a mission to help build a better Internet. Cloudflare is one of the world’s largest networks. Today, businesses, non-profits, bloggers, and anyone with an Internet presence boast faster, more secure websites and apps thanks to Cloudflare. Approximately 25 million Internet properties are on Cloudflare, and our network is growing by tens of thousands each day. Cloudflare powers Internet requests for ~16% of the Fortune 1,000 and serves 20 million HTTP requests per second on average.";
  newText.className = "boxInfo"
  newText.id = "currentHTML2";
  newText.addEventListener("mouseout", function () {
    newText.style = "background-color: white; border-style: none;"
    newText.innerHTML =
      '<img src="img/cloudflare.png" alt="cloudflare" class="flex-img" onmouseover="change3()">'
  })

  img.parentNode.replaceChild(newText, img);
}
//Repeated
function change4() {

  var img = document.getElementById("currentHTML3");

  var newText = document.createElement('p');
  newText.innerHTML = "Google Maps is a web mapping service developed by Google. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bicycle, air and public transportation Google Maps offers an API that allows maps to be embedded on third-party websites,and offers a locator for businesses and other organizations in numerous countries around the world. The service's front end utilizes JavaScript, XML, and Ajax.";
  newText.className = "boxInfo"
  newText.id = "currentHTML3";
  newText.addEventListener("mouseout", function () {
    newText.style = "background-color: white; border-style: none;"
    newText.innerHTML =
      '<img src="img/googleplaces.png" alt="google places logo" class="flex-img" onmouseover="change4()">'
  })

  img.parentNode.replaceChild(newText, img);
}