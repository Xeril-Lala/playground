document.addEventListener("click", (e) => {
    const {target} = e;
    if(!targert.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "/templates/404.html",
        title: "",
        description: "",
    },
    "/":{
        template: "/templates/index.html",
        title: "",
        description: "",
    },
    "/weather":{
        template: "/templates/weather.html",
        title: "",
        description: "",
    },
    "/Images":{
        template: "/templates/Images.html",
        title: "",
        description: "",
    }
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "",event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if(location.length == 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => 
    response.text());
    document.getElementById("content").innerHTML = html;
};