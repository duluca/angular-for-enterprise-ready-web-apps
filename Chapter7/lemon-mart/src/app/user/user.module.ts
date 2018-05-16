import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { ProfileComponent } from './profile/profile.component'
import { LogoutComponent } from './logout/logout.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
})
export class UserModule {}
