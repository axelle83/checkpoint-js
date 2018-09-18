<?php

namespace Axerauju;

class Application {

    public function __construct() {
        // new router
        $this->router = new \AltoRouter();
        // mapping
        $this->mapping();
    }

    public function mapping() {
        $this->router->map('GET', '/', ['MainController','home'], 'home');
        $this->router->map('GET', '/shifumi', ['MainController','shifumi'], 'shifumi');
        $this->router->map('GET', '/memory', ['MainController','memory'], 'memory');
        $this->router->map('GET', '/catch', ['MainController','catch'], 'catch');
        $this->router->map('GET', '/bubbles', ['MainController','bubbles'], 'bubbles');
        $this->router->map('GET', '/bubbles/images', ['MainController','bubblesImg'], 'bubbles_img');
        $this->router->map('GET', '/boule', ['MainController','boule'], 'boule');
        $this->router->map('GET', '/file', ['MainController','file'], 'file');
    }

    public function run () {

        // base url
        $basePath = isset($_SERVER['BASE_URI']) ? $_SERVER['BASE_URI'] : '';
        $this->router->setBasePath($basePath);

        // data from Altorouter
        $match = $this->router->match();

        if ($match) {
            // there is a route
            $controllerName = 'Axerauju\Controllers\\'.$match['target'][0];
            $methodName = $match['target'][1];
        }
        // no route : 404
        else {
            $controllerName = 'Axerauju\Controllers\MainController';
            $methodName = 'error404';
        }
        // controller and method with params
        $controller = new $controllerName( $this->router );
        $controller->$methodName($match['params']);
    }
}
