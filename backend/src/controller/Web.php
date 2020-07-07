<?php

require __DIR__."/vendor/autoload.php";

$router = new Router(URL);
$router->namespace("Source\controller");

//USER RELATED ROUTES ------------------------------------------------------
$router->group(null);
    $router->post("/login", "Web:login");
    $router->post("/register", "Web:register");

//CONTACTS RELATED ROUTES --------------------------------------------------
    $router->get("/listcontacts", "Web:listcontacts");
    $router->post("/addcontacts", "Web:addcontacts");

//CHAT RELATED ROUTES ------------------------------------------------------
    $router->get("/recievedmessages", "Web:recievedmessages");
    $router->post("/sendmessage", "Web:sendmessage");
