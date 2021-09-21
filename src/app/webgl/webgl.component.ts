import { Component, OnInit } from '@angular/core';

// function defined in [...].loader.js in /assets
// and is loaded in angular.json "scripts" []
declare var createUnityInstance: any;

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.scss']
})
export class WebglComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  // showUnityCanvas = false;

  loadScript() {
    // this.showUnityCanvas = !this.showUnityCanvas;
    new createUnityInstance(document.getElementById('unity-canvas'), {
      dataUrl: "assets/Build/testbuild.data",
      frameworkUrl: "assets/Build/testbuild.framework.js",
      codeUrl: "assets/Build/testbuild.wasm",
      streamingAssetsUrl: "StreamingAssets"
    });
  }
  
  // unloadScript() {
  //   let unityInstance = document.getElementById('unity-canvas')!;
  //   unityInstance.Quit();
  // }


}
