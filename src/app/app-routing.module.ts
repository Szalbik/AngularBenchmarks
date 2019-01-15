import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotosComponent } from "./photos/photos.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  { path: "photos", component: PhotosComponent },
  { path: "table", component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
