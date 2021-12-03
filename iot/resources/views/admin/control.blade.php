@extends('layouts.master')
@section('title-header')
  <a class="navbar-brand" href="#pablo">Control</a>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #0c9869;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #0c9869;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    
    .button {
      height: 70px;
      width: 70px;
      border: none;
      color: white;
      padding: 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
      margin: 4px 2px;
      border-radius: 100%;
    }

    .On{
      background-color: #0c9869;
    }
    .Off{
      background-color: #3c3f44;
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }

    .custom-range::-webkit-slider-thumb {
      margin-top: -15px;
      background: #0c9869;
      height: 40px;/*độ dài của nút */
      width: 40px;/*độ dài của nút tròn*/
      border-radius: 50%;
    }

    .custom-range::-moz-range-thumb {
      background-color: red;
      height: 200px;
    }

    .custom-range::-ms-thumb {
      background-color: blue;
    }
    .custom-range {
      -webkit-appearance: none;
      width: 100%;
      height: 30px;
      background: #dee2e6;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      border-radius:50px;
    }
/* 
    .custom-range:hover {
      opacity: 1;
    } */


    .custom-range::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: #04AA6D;
      cursor: pointer;
    }
    
    </style>
    <style>
      input[type="range"] { 
          margin: auto;
          -webkit-appearance: none;
          position: relative;
          overflow: hidden;
          height: 40px;
          width: 400px;
          cursor: pointer;
          border-radius: 50px; /* iOS */
          transition: box-shadow 0.2s ease-in-out;
      }

      ::-webkit-slider-runnable-track {
				height: 40px;
				-webkit-appearance: none;
				/* color: #444; */
				// margin-top: -1px;
				transition: box-shadow 0.2s ease-in-out;
        background-color: #A8FFE3;
			}

      /*
      * 1. Set to 0 width and remove border for a slider without a thumb
      */
      
      ::-webkit-slider-thumb {
				width: 40px;
				-webkit-appearance: none;
				height: 40px;
				cursor: ew-resize;
				background: #fff;
				box-shadow: -340px 0 0 320px #0CC688, inset 0 0 0 40px #0c9869;
				border-radius: 50%;
				transition: box-shadow 0.2s ease-in-out;
				position: relative;
				// top: 1px;
			}
      ::-moz-range-track { /*không thấy ảnh hưởng gì*/
          height: 100px;
          background: #000;
      }
      ::-moz-range-progress {
        background-color: #000;
        height: 1em;
      }
      ::-moz-range-thumb { /*không thấy ảnh hưởng gì*/
          background: #000;
          height: 400px;
          width: 20px;
          border: 3px solid #999;
          border-radius: 0 !important;
          box-shadow: -100vw 0 0 100vw dodgerblue;
          box-sizing: border-box;
      }

      ::-ms-fill-lower { /*không thấy ảnh hưởng gì*/
          background: #000;
      }

      ::-ms-thumb { 
          background: #000;
          border: 2px solid #000;
          height: 400px;
          width: 20px;
          box-sizing: border-box;
      }

      ::-ms-ticks-after { 
          display: none; 
      }

      ::-ms-ticks-before { 
          display: none; 
      }

      ::-ms-track { 
          background: #000;
          color: transparent;
          height: 40px;
          border: none;
      }

      ::-ms-tooltip { 
          display: none;
      }
    </style>
    
@endsection

@section('dashboard')
<div class="panel-header panel-header-sm" style="background:#0c9869">
        
</div>
@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="card">
          <div class="card-header row" style="margin: auto;">
            <div class="col-3">
              <h4 class="card-title"> Auto Mode</h4>
            </div>
            <div class="col-2" style="padding-top: 6px;margin-left: -56px;">
              <label class="switch">
                <input id='auto-mode' type="checkbox" checked>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="card-body" style="height:390px">
            <div class="table-responsive">
              <div id="che" style="opacity: 0;
              position: relative;
              z-index: 2;
              height: 359px;
              background-color: gray;">
              </div>
              <div>
                <div class="row" style="width:100%;position:relative;top:-344px">
                  <div class="block-left" style="width:50%;padding-left:20px;text-align:center">
                    <div id="den">
                      <div>
                        Đèn
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M11 24H21V26H11V24Z" fill="currentColor"/>
                        <path d="M13 28H19V30H13V28Z" fill="currentColor"/>
                        <path d="M23.04 16C22.5303 16.8037 21.9026 17.5261 21.178 18.143C20.107 19.135 19 20.16 19 22H21C21 21.08 21.526 20.55 22.535 19.614C23.7135 18.6355 24.651 17.3989 25.275 16H23.04Z" fill="currentColor"/>
                        <path d="M20 14C19.8143 13.9999 19.6324 13.9481 19.4745 13.8505C19.3166 13.7528 19.189 13.6131 19.106 13.447L17.381 10H14V8.00001H18C18.1857 8.00011 18.3676 8.0519 18.5255 8.14956C18.6834 8.24723 18.811 8.38693 18.894 8.55301L20 10.763L23.106 4.55301C23.1985 4.39849 23.3295 4.27059 23.4862 4.18178C23.6429 4.09298 23.8199 4.0463 24 4.0463C24.1801 4.0463 24.3571 4.09298 24.5138 4.18178C24.6705 4.27059 24.8015 4.39849 24.894 4.55301L26.619 8.00001H30V10H26C25.8143 9.99991 25.6324 9.94813 25.4745 9.85046C25.3166 9.75279 25.189 9.61309 25.106 9.44701L24 7.23701L20.894 13.447C20.811 13.6131 20.6834 13.7528 20.5255 13.8505C20.3676 13.9481 20.1857 13.9999 20 14Z" fill="currentColor"/>
                        <path d="M10.815 18.14C9.87846 17.4257 9.13189 16.4921 8.64101 15.4214C8.15013 14.3507 7.93 13.1758 8 12C8.00265 9.87908 8.84635 7.84579 10.3461 6.34607C11.8458 4.84635 13.8791 4.00265 16 4V2C13.3487 2.00291 10.8069 3.05742 8.93215 4.93215C7.05742 6.80688 6.00291 9.34873 6 12C5.9322 13.4528 6.21055 14.9009 6.81211 16.225C7.41366 17.5491 8.32122 18.7114 9.46 19.616C10.472 20.551 11 21.081 11 22H13C13 20.16 11.89 19.134 10.815 18.14Z" fill="currentColor"/>
                        </svg>
                        <div class='row'>
                          <div class="block-left" style="width:50%;padding-left:20px;text-align:center">
                            <div class="light-on">
                              <button type="button" id="light-on" class="button On">Bật</button>
                            </div>
                          </div>
                          <div class="block-left" style="width:50%;padding-left:10px;text-align:center">
                            <div class="light-off">
                              <button type="button" id="light-off" class="button Off">Tắt</button>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="block-right" style="width:50%;text-align:center">
                    <div id="maiChe">
                      <div>
                        Mái Che
                      </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32" fill="currentColor" >
                      <path d="M10 16H22V18H10V16Z" fill="currentColor"/>
                      <path d="M10 10H22V12H10V10Z" fill="currentColor"/>
                      <path d="M16 30L9.82401 26.707C8.06334 25.7703 6.59097 24.3719 5.56493 22.6617C4.53888 20.9516 3.99789 18.9943 4.00001 17V4C4.00054 3.46973 4.21142 2.96133 4.58638 2.58637C4.96134 2.21141 5.46974 2.00053 6.00001 2H26C26.5303 2.00053 27.0387 2.21141 27.4136 2.58637C27.7886 2.96133 27.9995 3.46973 28 4V17C28.0021 18.9943 27.4611 20.9516 26.4351 22.6617C25.409 24.3719 23.9367 25.7703 22.176 26.707L16 30ZM6.00001 4V17C5.99835 18.6318 6.44111 20.2333 7.28077 21.6325C8.12043 23.0317 9.32528 24.1758 10.766 24.942L16 27.733L21.234 24.943C22.6749 24.1767 23.8798 23.0324 24.7195 21.633C25.5592 20.2336 26.0018 18.632 26 17V4H6.00001Z" fill="currentColor"/>
                      </svg>
                      <div class='row'>
                        <div class="block-left" style="width:50%;padding-left:20px;text-align:center">
                          <div class="light-on">
                            <button type="button" id="motor-on" class="button On">Mở</button>
                          </div>
                        </div>
                        <div class="block-left" style="width:50%;padding-left:10px;text-align:center">
                          <div class="light-off">
                            <button type="button" id="motor-off" class="button Off" style="Text">Đóng</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style="width:100%;position:relative;top:-350px" />
              <div style="width:100%;position:relative;top:-346px;padding-left:20px;text-align:center">
                  {{-- <input type="range" min="0" max="5" step="0.5" id="customRange3" style="width: 50%;"> --}}
                  
                  <div style="margin-bottom:10px">
                    Sục Khí
                  </div>
                  <input type="range" id="myRange" value="25" min="0" max="255" step="5" style="position:relative">
                  <div id="rangeValue" style="position:relative;margin-top: -36px;pointer-events: none;color:white">
                    Value
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
<script src="../assets/demo/control.js"></script>
@endsection