import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { HomeComponent } from "./home/home.component";
import { Chapter3Component } from "./chapter-3/chapter-3.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "chapter3",
        component: Chapter3Component,
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "chapter3",
    loadChildren: () =>
      import("./chapter-3/chapter-3.module").then((m) => m.Chapter3Module),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./not-found/not-found.module").then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
