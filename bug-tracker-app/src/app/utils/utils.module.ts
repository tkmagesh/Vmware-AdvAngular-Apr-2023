import { NgModule } from "@angular/core";
import { SortPipe } from "./pipes/sort.pipe";
import { ElapsedPipe } from "./pipes/elapsed.pipe";


@NgModule({
    declarations : [
        SortPipe,
        ElapsedPipe
    ],
    exports : [
        SortPipe,
        ElapsedPipe
    ]
})
export class UtilsModule {

}