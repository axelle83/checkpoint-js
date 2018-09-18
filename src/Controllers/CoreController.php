<?php

namespace Axerauju\Controllers;

class CoreController {

    protected $templates;
    protected $router;

    public function __construct( $router ) {

        // to use router in a method
        $this->router = $router;

        // link to templates
        $this->templates = new \League\Plates\Engine(__DIR__ . '/../Views/');

        // data for all templates
        $this->templates->addData([
            'baseUrl' => (isset($_SERVER['BASE_URI']) ? $_SERVER['BASE_URI'] : ''),
            'router' => $this->router
        ]);
    }

    // to get a route easily 
    public function redirect( $routeName, $params=[] ) {

        header('Location: ' . $this->router->generate( $routeName, $params ) );
        exit();
    }
}
