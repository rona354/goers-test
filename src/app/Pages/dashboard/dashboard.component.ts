import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WebServiceService } from 'src/app/Services/web-service.service';
import { RandomAPI } from 'src/app/interfaces/random-api.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public title: string = 'Tulus: Solitude 2021';
  public menuSide: { iconUrl: string; name: string; isActive: boolean }[];
  public mainStage: {
    title: string;
    time: string;
    zone: string;
    speaker: string;
    status: string;
  };
  public boothStage: {
    title: string;
    subTitle: string;
    imgHead: string;
    pp: string;
    audiencePict: string[];
  }[];

  // unsubsriber
  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(
    private webService: WebServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.menuSide = [
      { iconUrl: './assets/building.svg', name: 'Home', isActive: true },
      { iconUrl: './assets/agenda.svg', name: 'Agenda', isActive: false },
      {
        iconUrl: './assets/myProfile.svg',
        name: 'My Profile',
        isActive: false,
      },
    ];
    this.mainStage = {
      title: 'Opening Performance',
      time: 'Mon, 20 Jan ‘20 @ 17:00-19:00',
      zone: '(GMT+7)',
      speaker: 'Tulus, Raisa',
      status: 'Live',
    };
    this.boothStage = [
      {
        title: 'Virtual Meet and Greet Group 1',
        subTitle: 'Yuk ketemu virtual dengan Tulus disini',
        imgHead: './assets/tulus1.jpg',
        pp: './assets/pp1.jpg',
        audiencePict: [],
      },
      {
        title: 'Beli Album Monokrom',
        subTitle: 'Belum punya Monokrom? Yuk ke booth ini.',
        imgHead: './assets/tulus2.jpg',
        pp: './assets/pp2.jpg',
        audiencePict: [],
      },
      {
        title: 'Fans Room',
        subTitle: 'Yuk kenalan sesama penggemar Tulus di room ini',
        imgHead: './assets/tulus3.jpg',
        pp: './assets/pp3.jpg',
        audiencePict: [],
      },
    ];
  }

  ngOnInit(): void {
    this.webService
      .getRandomAPI(5) // 10 results
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: RandomAPI) => {
        console.log(res);
        this.boothStage.forEach((x) => {
          x.audiencePict = res.results.map((z) => z.picture.thumbnail);
        });
        console.log(this.boothStage);
      });
  }

  /**
   * Destroy component and subscriptions.
   */
  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
