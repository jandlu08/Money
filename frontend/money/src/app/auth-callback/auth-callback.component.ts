import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  error: boolean | undefined;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
 

    if (this.route.snapshot.fragment!.indexOf('error') >= 0) {
       this.error=true; 
       return;    
     }
    
    await this.authService.completeAuthentication();      
    this.router.navigate(['/home']);    
  }
}