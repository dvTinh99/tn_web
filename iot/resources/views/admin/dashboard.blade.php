@extends('layouts.master')
@section('title-header')
  <a class="navbar-brand" href="#pablo">Trang Chủ</a>
  <style>
    .wapper{
      max-height: 100%;
      border: 1px solid #ddd;
      display:flex;
      overflow-x:auto;
    }
    /* .wapper > canvas {
      width: 600px;
    } */
  </style>
@endsection

@section('dashboard')
<div class="panel-header panel-header-sm" style="background:#0c9869">
    {{-- <canvas id="bigDashboardChart"></canvas> --}}
</div>
@endsection


@section('content')
<div class="row">
    <div class="col-lg-4">
      <div class="card card-chart">
        <div class="card-header">
          {{-- <h5 class="card-category">Biểu Đồ</h5> --}}
          <h4 class="card-title">Nhiệt Độ Nước</h4>
          {{-- <div class="dropdown">
            <button type="button" class="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
              <i class="now-ui-icons loader_gear"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item text-danger" href="#">Remove Data</a>
            </div>
          </div> --}}
        </div>
        <div class="card-body">
          <div class="chart-area">
            <div class="wapper">
              <div style="width=500px">
                <canvas id="nhietDoNuocChart" style="width:500px"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="now-ui-icons arrows-1_refresh-69 spin"></i> Just Updated
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card card-chart">
        <div class="card-header">
          {{-- <h5 class="card-category">2018 Sales</h5> --}}
          <h4 class="card-title">Cường Độ Ánh Sáng</h4>
          {{-- <div class="dropdown">
            <button type="button" class="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
              <i class="now-ui-icons loader_gear"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item text-danger" href="#">Remove Data</a>
            </div>
          </div> --}}
        </div>
        <div class="card-body">
          <div class="chart-area">
            <div class="wapper">
              <div style="width=500px">
                <canvas id="cuongDoAnhSangChart" style="width:500px"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="now-ui-icons arrows-1_refresh-69 spin"></i> Just Updated
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card card-chart">
        <div class="card-header">
          {{-- <h5 class="card-category">Email Statistics</h5> --}}
          <h4 class="card-title">Độ Đục</h4>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <div class="wapper">
              <div style="width=500px">
                <canvas id="doDucChart" style="width:500px"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="now-ui-icons arrows-1_refresh-69 spin"></i> Just Updated
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="card  card-tasks">
        <div class="card-header ">
          {{-- <h5 class="card-category">Backend development</h5> --}}
          <h4 class="card-title">Sục khí</h4>
        </div>
        <div class="card-body ">
          <div class="table-full-width table-responsive">
            <canvas id="sucKhiChart"></canvas>
          </div>
        </div>
        <div class="card-footer ">
          <hr>
          <div class="stats">
            <i class="now-ui-icons loader_refresh spin"></i> Updated 
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          {{-- <h5 class="card-category">All Persons List</h5> --}}
          <h4 class="card-title"> Các thiết bị</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <div class="row" style="width:100%">
              <div class="block-left" style="width:50%;padding-left:20px;text-align:center">
                <div id="den">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M11 24H21V26H11V24Z" fill="currentColor"/>
                    <path d="M13 28H19V30H13V28Z" fill="currentColor"/>
                    <path d="M23.04 16C22.5303 16.8037 21.9026 17.5261 21.178 18.143C20.107 19.135 19 20.16 19 22H21C21 21.08 21.526 20.55 22.535 19.614C23.7135 18.6355 24.651 17.3989 25.275 16H23.04Z" fill="currentColor"/>
                    <path d="M20 14C19.8143 13.9999 19.6324 13.9481 19.4745 13.8505C19.3166 13.7528 19.189 13.6131 19.106 13.447L17.381 10H14V8.00001H18C18.1857 8.00011 18.3676 8.0519 18.5255 8.14956C18.6834 8.24723 18.811 8.38693 18.894 8.55301L20 10.763L23.106 4.55301C23.1985 4.39849 23.3295 4.27059 23.4862 4.18178C23.6429 4.09298 23.8199 4.0463 24 4.0463C24.1801 4.0463 24.3571 4.09298 24.5138 4.18178C24.6705 4.27059 24.8015 4.39849 24.894 4.55301L26.619 8.00001H30V10H26C25.8143 9.99991 25.6324 9.94813 25.4745 9.85046C25.3166 9.75279 25.189 9.61309 25.106 9.44701L24 7.23701L20.894 13.447C20.811 13.6131 20.6834 13.7528 20.5255 13.8505C20.3676 13.9481 20.1857 13.9999 20 14Z" fill="currentColor"/>
                    <path d="M10.815 18.14C9.87846 17.4257 9.13189 16.4921 8.64101 15.4214C8.15013 14.3507 7.93 13.1758 8 12C8.00265 9.87908 8.84635 7.84579 10.3461 6.34607C11.8458 4.84635 13.8791 4.00265 16 4V2C13.3487 2.00291 10.8069 3.05742 8.93215 4.93215C7.05742 6.80688 6.00291 9.34873 6 12C5.9322 13.4528 6.21055 14.9009 6.81211 16.225C7.41366 17.5491 8.32122 18.7114 9.46 19.616C10.472 20.551 11 21.081 11 22H13C13 20.16 11.89 19.134 10.815 18.14Z" fill="currentColor"/>
                    </svg>
                </div>

                <div>
                  Đèn
                </div>
              </div>
              <div class="block-right" style="width:50%;text-align:center">
                <div id="maiChe">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32" fill="currentColor" >
                  <path d="M10 16H22V18H10V16Z" fill="currentColor"/>
                  <path d="M10 10H22V12H10V10Z" fill="currentColor"/>
                  <path d="M16 30L9.82401 26.707C8.06334 25.7703 6.59097 24.3719 5.56493 22.6617C4.53888 20.9516 3.99789 18.9943 4.00001 17V4C4.00054 3.46973 4.21142 2.96133 4.58638 2.58637C4.96134 2.21141 5.46974 2.00053 6.00001 2H26C26.5303 2.00053 27.0387 2.21141 27.4136 2.58637C27.7886 2.96133 27.9995 3.46973 28 4V17C28.0021 18.9943 27.4611 20.9516 26.4351 22.6617C25.409 24.3719 23.9367 25.7703 22.176 26.707L16 30ZM6.00001 4V17C5.99835 18.6318 6.44111 20.2333 7.28077 21.6325C8.12043 23.0317 9.32528 24.1758 10.766 24.942L16 27.733L21.234 24.943C22.6749 24.1767 23.8798 23.0324 24.7195 21.633C25.5592 20.2336 26.0018 18.632 26 17V4H6.00001Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  Mái Che
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('scripts')
<script src="../assets/demo/demo.js"></script>
<script>
    $(document).ready(function() {
      // Javascript method's body can be found in assets/js/demos.js
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
      let airpump = 0;
      let led = false;
      let motor = false;
      let date_time = [];
      let lux = [];
      let temper = [];
      let turbidity = [];

      database.ref('/').on("value", function(snapShot){
        
        const valueOfSensor = snapShot.child('value_of_sensors');
        valueOfSensor.forEach(function(snap){
          if(date_time.length > 15 ){
            date_time.shift();
            date_time.push(snap.child('datetime').val());

            lux.shift();
            lux.push(snap.child('lux').val());

            temper.shift();
            temper.push(snap.child('temper').val());

            turbidity.shift();
            turbidity.push(snap.child('turbidity').val());
          }else{

            lux.push(snap.child('lux').val());
           
            date_time.push(snap.child('datetime').val());
            temper.push(snap.child('temper').val());
            turbidity.push(snap.child('turbidity').val());
          }

        });
        
        const controlDevices = snapShot.child('control_devices');
            airpump = controlDevices.child('airpump').val();
            led = controlDevices.child('led').val().status;
            motor = controlDevices.child('motor').val().status;

        demo.initDashboardPageCharts(date_time.reverse(), lux.reverse(), turbidity.reverse(), temper.reverse(),airpump, led, motor);
      });


    });
</script>
@endsection