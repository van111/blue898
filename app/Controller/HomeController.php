<?php
App::uses('AppController', 'Controller');

class HomeController extends AppController {
  public function index() {
    $this->render('index');
  }

  public function vertical() {
    $this->render('vertical');
  }
}
