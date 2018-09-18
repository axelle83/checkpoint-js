<?php

namespace Axerauju\Controllers;

class MainController extends CoreController {

  public function home() {
    echo $this->templates->render('home');
  }
  public function shifumi() {
    echo $this->templates->render('shifumi');
  }
  public function bubbles() {
    echo $this->templates->render('bubbles');
  }
  public function bubblesImg() {
    echo $this->templates->render('bubblesImg');
  }
  public function catch() {
    echo $this->templates->render('catch');
  }
  public function memory() {
    echo $this->templates->render('memory');
  }
  public function boule() {
    echo $this->templates->render('boule');
  }
  public function error404() {
    echo $this->templates->render('404');
  }
}
