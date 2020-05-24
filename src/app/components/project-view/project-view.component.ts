import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

declare var UnityLoader:any;
declare var UnityProgress:any;

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  sceneId:any;
  gameInstance:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.sceneId=params.id;
    });
    this.gameInstance = UnityLoader.instantiate("gameContainer", "../../assets/Unity/"+this.sceneId+"/Build/web gl test.json", { onProgress: UnityProgress });
  }

}
