<?php

namespace src\controller;

class Web {

    public function login() : void{
        echo "teste milu";
    }

    public function error($data) : void{
        echo "<h1> Opa! Erro {$data["errcode"]}</h1>";
    }

}