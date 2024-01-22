function loadPage() {

    checkLoadedParameter()

    if(!checkLoadedParameter()) {
        document.getElementById("loading-Screen").style.opacity = "1"
        document.getElementById("loading-Bar").style.animation = "load 3s forwards"
        setTimeout(function() {
            document.getElementById("loading-Screen").style.transition = ".5s"
            document.getElementById("loading-Screen").style.opacity = "0"
            setTimeout(function() {
                document.getElementById("main-Page").style.transition = ".5s"
                document.getElementById("main-Page").style.opacity = "1"
                updateURL()
                setTimeout(function() {
                    document.getElementById("loading-Screen").style.transition = "0s"
                    document.getElementById("main-Page").style.transition = "0s"
                }, 500)
            }, 500)
        }, 3000)
    } else {
        setTimeout(function() {
            document.getElementById("main-Page").style.transition = ".5s"
            document.getElementById("main-Page").style.opacity = "1"
            setTimeout(function() {
                document.getElementById("main-Page").style.transition = "0s"
            }, 500)
        }, 500)
    }
}

function updateURL() {
    // Get the current URL
    var currentURL = window.location.href;
    currentURL = currentURL.split('?')[0];

    // Add or update the query parameter
    var updatedURL = currentURL + (currentURL.includes('?') ? '&loaded=true' : '?loaded=true');

    // Update the URL without triggering a page refresh
    history.pushState({}, '', updatedURL);
}

// Function to check if the "loaded" parameter is true or null
function checkLoadedParameter() {
    // Get the current URL
    var currentURL = window.location.href;

    // Parse the URL to get the query parameters
    var urlParams = new URLSearchParams(window.location.search);

    // Get the value of the "loaded" parameter
    var loadedValue = urlParams.get('loaded');

    if(loadedValue) {
        return true
    } else {
        return false
    }

}

for(var i=0;i<partsTitles.length;i++) {
    var element = document.createElement("div")
    element.classList.add("project-Section")
    element.innerHTML = '<div class="project-Titles">' + partsTitles[i] + '</div>'
    element.setAttribute("onclick", 'openFolder(' + i + ')')
    document.getElementById("section-Containers").appendChild(element)
}

function openFolder(index) {
    var html = ['<iframe loading="lazy" style="position: relative; width: 100%; height: 600px; max-height: 80vh; border: none; padding: 0; margin: 0; overflow: hidden;"      src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6k8It2gU&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">    </iframe>', '<iframe loading="lazy" style="position: relative; width: 100%; height: 600px; max-height: 80vh; border: none; padding: 0; margin: 0; overflow: hidden;"src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6k6uXJxg&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>', '<iframe loading="lazy" style="position: relative; width: 100%; height: 600px; max-height: 80vh; border: none; padding: 0; margin: 0; overflow: hidden;"src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6k9TWBrA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>', '<iframe loading="lazy" style="position: relative; width: 100%; height: 600px; max-height: 80vh; border: none; padding: 0; margin: 0; overflow: hidden;"src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6k3bq-Os&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>']
    document.getElementById("folder-Opened-Container").innerHTML = html[index]
}