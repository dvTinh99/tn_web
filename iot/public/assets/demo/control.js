$(document).ready(function(){
    function showLoader()
    {
        $(".loader").fadeIn("slow");
    }
    function hideLoader()
    {
        $(".loader").fadeOut("slow");
    }
    // color on : 18ce0f
    // color off : 3c3f44
    showLoader();
    const COLOR_ON = '#0c9869';
    const COLOR_OFF = '#3c3f44';

    const firebaseConfig = {
      apiKey: "AIzaSyD9Yk3XZH2KlK0eNkRKVYClwVmMuRAbcbc",
      authDomain: "iot-microalgea.firebaseapp.com",
      databaseURL: "https://iot-microalgea-default-rtdb.firebaseio.com",
      projectId: "iot-microalgea",
      storageBucket: "iot-microalgea.appspot.com",
      messagingSenderId: "654766353497",
      appId: "1:654766353497:web:831d6ea820be76822e9548",
      measurementId: "G-EK5TV6168B"
      };
      firebase.initializeApp(firebaseConfig);
      const database = firebase.database();
      var auto = document.getElementById('auto-mode');
      var che = document.getElementById('che');
  
      var light = false ;
      var motor = true ;

      var slider = document.getElementById("myRange");
        
      var output = document.getElementById("rangeValue");

      var count = 0;
      database.ref('/control_devices').on("value", function(snapShot){
        console.log('count change', count);
        count ++ ;
      });
  
      database.ref('/').on("value", function(snapShot){
  
        var auto_mode = snapShot.child('auto_mode').val();
        // var auto_mode = false ;
        
            if(auto_mode){
            auto.value = auto_mode ;
            che.style.opacity = 0.5;
            che.style.zIndex = 2;
            auto.checked = true ;
          }else{
            auto.value = auto_mode ;
            che.style.opacity = 0;
            che.style.zIndex = 0;
            auto.checked = false;
          }
      
          var control_devices = snapShot.child('control_devices');

          airpump = control_devices.child('airpump').val();
          slider.value = airpump;
          output.innerHTML = slider.value; 

          light = control_devices.child('led').val().status;
          motor = control_devices.child('motor').val().status;
          if(light){
            batDen();
            // light_on.style.backgroundColor = COLOR_ON;
            // light_off.style.backgroundColor = COLOR_OFF;
            // div_den.style.color = COLOR_ON;
          }else{
            tatDen();
            // div_den.style.color = COLOR_OFF;
            // light_on.style.backgroundColor = COLOR_OFF;
            // light_off.style.backgroundColor = COLOR_ON;
          }
  
          if(motor){
            moMaiChe();
            // motor_on.style.backgroundColor = COLOR_ON;
            // motor_off.style.backgroundColor = COLOR_OFF;
            // div_maiChe.style.color =COLOR_ON;
          }else{
            dongMaiChe()
            // div_maiChe.style.color = COLOR_OFF;
            // motor_on.style.backgroundColor = COLOR_OFF;
            // motor_off.style.backgroundColor =COLOR_ON;
          }

          hideLoader();
      });
      
      $("#auto-mode").on('change', function() {
          if ($(this).is(':checked')) {// true
              autoModeOn();
              switchStatus = $(this).is(':checked');
              auto.value = true;
              che.style.opacity = 0.5;
              che.style.zIndex = 2;
          }
          else {//false
            switchStatus = $(this).is(':checked');
            autoModeOff();
            auto.value = false;
            che.style.opacity = 0;
            che.style.zIndex = 0;
          }
      });
      function autoModeOn(){
        database.ref('/')
          .update({
             auto_mode :true
          })
      }
      function autoModeOff(){
        database
          .ref('/')
          .update({
            'auto_mode': false
          })
      }
      
      var div_den = document.getElementById('den');
      var div_maiChe = document.getElementById('maiChe');
      var light_on = document.getElementById('light-on');
      var light_off = document.getElementById('light-off');
      var motor_on = document.getElementById('motor-on');
      var motor_off = document.getElementById('motor-off');
  
      function batDen(){
        database
          .ref('/control_devices/led')
          .update({
            status: true
          })
          light_on.style.backgroundColor = COLOR_ON;
          light_off.style.backgroundColor = COLOR_OFF;
          div_den.style.color = COLOR_ON;
      }
      function tatDen(){
        database
          .ref('/control_devices/led')
          .update({
            status: false
          })
          div_den.style.color = COLOR_OFF;
          light_on.style.backgroundColor = COLOR_OFF;
          light_off.style.backgroundColor = COLOR_ON;
      }
  
      function moMaiChe(){
        database
          .ref('/control_devices/motor')
          .update({
            status: true
          })
        motor_on.style.backgroundColor = COLOR_ON;
        motor_off.style.backgroundColor = COLOR_OFF;
        div_maiChe.style.color =COLOR_ON;
      }
      function dongMaiChe(){
        database
          .ref('/control_devices/motor')
          .update({
            status: false
          })
          div_maiChe.style.color = COLOR_OFF;
          motor_on.style.backgroundColor = COLOR_OFF;
          motor_off.style.backgroundColor =COLOR_ON;
      }
  
      
      light_on.addEventListener("click", function() {
        if(light){      
        }else{
          light = true;
          batDen();
        }
      });
  
      
      light_off.addEventListener("click", function() {
        if(!light){
          console.log("đang tắt bấm làm gì");
        }else{
          light = false;
          tatDen();
        }
      });
  
      ///////////// mai che
      motor_on.addEventListener("click", function() {
        if(motor){      
        }else{
          motor = true;
          moMaiChe();
        }
      });
  
      
      motor_off.addEventListener("click", function() {
        if(!motor){
          console.log("đang tắt bấm làm gì");
        }else{
          motor = false;
          dongMaiChe()
        }
      });

      
  
      slider.addEventListener("mouseup", function () {
        database
          .ref('/control_devices/')
          .update({
            airpump: parseInt(this.value)
          })
      });
      slider.oninput = function() {
          output.innerHTML = this.value;
      }

});