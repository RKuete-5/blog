import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ScrollpyDirective } from '../scrollpy.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './layout/chat/chat.component';

const routes: Routes = [
  { path:'' , component: LayoutComponent }
];

@NgModule({
  declarations: [LayoutComponent, ScrollpyDirective, HomeComponent, AboutComponent, SkillsComponent, TimelineComponent, WorksComponent, ContactComponent, ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ClientModule { }
