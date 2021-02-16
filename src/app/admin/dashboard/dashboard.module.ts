import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FAboutComponent } from './about/about.component';
import { FSkillComponent } from './skill/skill.component';
import { FWorkComponent } from './work/work.component';
import { FStudyComponent } from './study/study.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent, children: [
    { path: 'fabout', component: FAboutComponent },
    { path: 'fskill', component: FSkillComponent },
    { path: 'fwork', component: FWorkComponent },
    { path: 'fstudy', component: FStudyComponent },
  ]}
];

@NgModule({
  declarations: [
    FAboutComponent,
    FSkillComponent,
    FWorkComponent,
    FStudyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
