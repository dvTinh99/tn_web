<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;


class FirebaseController extends Controller
{
    private $database;

    public function __construct()
    {
        $serviceAccount = ServiceAccount::fromJsonFile(storage_path('iot-microalgea-firebase-adminsdk-afpc3-6e340c6e74.json'));
        $firebase = (new Factory)
        ->withServiceAccount($serviceAccount)
        ->withDatabaseUri('https://iot-microalgea-default-rtdb.firebaseio.com/')
        ->create();

        $this->database = $firebase->getDatabase();

    }
    public function getWfhtatus()
    {
        return $this->database
        ->getReference('/')
        ->getSnapshot()
        ->getValue();
    }
    public function getRemoteConfig(RemoteConfig $remoteConfig){
        return $this->remoteConfig = $remoteConfig;
    }
    public function remoteConfig(){
        return $welcomeMessageParameter = RemoteConfig\Parameter::named('welcome_message')
        ->withDefaultValue('Welcome!')
        ->withDescription('This is a welcome message'); // optional
    }

  
}
