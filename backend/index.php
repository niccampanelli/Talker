<?php

require __DIR__."/vendor/autoload.php";
use CoffeeCode\Router\Router;

$router = new Router(URL);
echo URL;
$router->namespace("src\controller");

//USER RELATED ROUTES ------------------------------------------------------,
    $router->group(null);
    $router->get("/login", function(){
        echo "teste milu";
    });
    //$router->post("/register", "Web:register");

//CONTACTS RELATED ROUTES --------------------------------------------------
    //$router->get("/listcontacts", "Web:listcontacts");
    //$router->post("/addcontacts", "Web:addcontacts");

//CHAT RELATED ROUTES ------------------------------------------------------
    //$router->get("/recievedmessages", "Web:recievedmessages");
    //$router->post("/sendmessage", "Web:sendmessage");    
    /*$router->group("ooops");
    $router->get("/{errcode}", "Web:error");

    $router->dispatch();

    if($router->error()){
        $router->redirect("/ooops/{$router->error()}");
    }