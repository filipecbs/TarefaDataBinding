import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
      console.log(this.router.getCurrentNavigation().extras);
  }

  ngOnInit() {

      let id = this.route.snapshot.paramMap.get('id');

      console.log(id);
  }

}
