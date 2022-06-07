import { Routes } from "@angular/router";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { C3Component } from "./c3/c3.component";


export const AppRoutes : Routes = [
    {path: '', component: C1Component},
    {path: 'c2', component: C2Component},
    {path: 'c3/:id', component: C3Component}
]