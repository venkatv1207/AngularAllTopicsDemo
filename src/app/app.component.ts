import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationdbComponent } from './interpolationdb/interpolationdb.component';
import { ClassStyledbComponent } from './class-styledb/class-styledb.component';
import { EventdbComponent } from './eventdb/eventdb.component';
import { PropertydbComponent } from './propertydb/propertydb.component';
import { TwowaydbComponent } from './twowaydb/twowaydb.component';
import { FormsangularComponent } from './formsangular/formsangular.component';
import { TodoComponent } from './todo/todo.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FormsResponsiveComponent } from './forms-responsive/forms-responsive.component';
import { FormsResponsive2Component } from './forms-responsive2/forms-responsive2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputdecoratorComponent } from './inputdecorator/inputdecorator.component';
import { OutputdecoratorComponent } from './outputdecorator/outputdecorator.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceDemoComponent } from './httpservice-demo/httpservice-demo.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { FetchApiDemoComponent } from './fetch-api-demo/fetch-api-demo.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { DebounceingExampleComponent } from './debounceing-example/debounceing-example.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { SearchtermapiComponent } from './searchtermapi/searchtermapi.component';
import { CreateupdatedeleteComponent } from './createupdatedelete/createupdatedelete.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { NgcontentParentComponent } from './ngcontent-parent/ngcontent-parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { FormReactiveDemoComponent } from './form-reactive-demo/form-reactive-demo.component';
import { HostBindingListenComponent } from './host-binding-listen/host-binding-listen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    InterpolationdbComponent,
    ClassStyledbComponent,
    EventdbComponent,
    PropertydbComponent,
    TwowaydbComponent,
    FormsangularComponent,
    TodoComponent,
    StructuraldirectivesComponent,
    PipeDemoComponent,
    FormsResponsiveComponent,
    FormsResponsive2Component,
    InputdecoratorComponent,
    OutputdecoratorComponent,
    ServiceDemoComponent,
    HttpClientModule,
    HttpserviceDemoComponent,
    StopWatchComponent,
    FetchApiDemoComponent,
    LifecyclehooksComponent,
    DebounceingExampleComponent,
    SearchitemComponent,
    SearchtermapiComponent,
    CreateupdatedeleteComponent,
    FormValidationComponent,
    NgcontentParentComponent,
    ViewchildComponent,
    FormReactiveDemoComponent,
    HostBindingListenComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
  parentData: string = 'Hello from parent component';
  data = [1, 2, 4, 5, 6, 45, 2];

  cdata: any;
  updatemsg(d: any) {
    this.cdata = d;
  }
  msg: string = '';
  receivemsg(msg: string) {
    this.msg = msg;
  }
}
