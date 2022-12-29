
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ArchiveComponent } from './mail-app/archive/archive.component';
import { DraftsComponent } from './mail-app/drafts/drafts.component';
import { InboxComponent } from './mail-app/inbox/inbox.component';
import { MailAppComponent } from './mail-app/mail-app.component';
import { SentComponent } from './mail-app/sent/sent.component';
import { SpamComponent } from './mail-app/spam/spam.component';
import { TrashComponent } from './mail-app/trash/trash.component';
import { RealEstateComponent } from './real-estate/real-estate.component';

const routes: Routes = [
  
  {path:'', redirectTo:'listing', pathMatch:'full'},
  
  {path:'home', component:HomeComponent},
  {path:'listing', component:ListingComponent},
  {path:'real-estate',component:RealEstateComponent},
  {path:'mail-app',
  component : MailAppComponent,
    children : [
      {path : 'inbox', component:InboxComponent},
      {path:'sent',component:SentComponent},
      {path:'drafts',component:DraftsComponent},
      {path:'spam',component:SpamComponent},
      {path:'trash',component:TrashComponent},
      {path:'archive',component:ArchiveComponent},
    ] 
  },
  {path:'**', component:ListingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
